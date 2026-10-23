import React, { useState, useEffect, useRef, useMemo } from 'react';
import { School, SchoolStage, District, SchoolType } from '../types/school';
import { CATCHMENTS_DATA, CommunityCatchment } from '../data/catchments';
import { MiddleSchoolProfile } from '../data/middleSchools';
import { MiddleSchoolBadges } from './MiddleSchoolBadge';
import { OversubscribedFallbackCard } from './OversubscribedFallbackCard';
import { 
  loadAMapScript, 
  searchShanghaiResidentialPOIs, 
  searchNearbySchoolsFromAMap,
  searchSchoolsInViewportFromAMap,
  analyzeNearbySchools, 
  SearchedPOIItem,
  getDistanceMeters,
  getSavedAMapCredentials
} from '../services/amapService';
import { 
  MapPin, 
  Search, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Compass, 
  Navigation, 
  Building, 
  Baby, 
  GraduationCap, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Scale, 
  Calculator, 
  X, 
  Key, 
  ExternalLink,
  ChevronRight,
  Filter,
  Map as MapIcon,
  HelpCircle,
  Loader2,
  LocateFixed,
  ArrowUpRight,
  Coins,
  TrendingUp
} from 'lucide-react';

interface SchoolGISMapProps {
  schools: School[];
  selectedStage: SchoolStage | 'all';
  onStageChange: (stage: SchoolStage | 'all') => void;
  onSelectSchool: (school: School) => void;
  onToggleCompare: (school: School) => void;
  comparedSchools: School[];
  shortlistedSchools: School[];
  onToggleShortlist: (school: School) => void;
  onNavigateToSimulator: (school: School, community?: CommunityCatchment | string) => void;
  targetCommunity?: CommunityCatchment | null;
  onSelectMiddleSchool?: (school: MiddleSchoolProfile) => void;
  compactMode?: boolean;
  hoveredSchoolId?: string | null;
}


// Coordinate calculation helpers for Shanghai projection
const LNG_MIN = 121.05;
const LNG_MAX = 121.68;
const LAT_MIN = 31.05;
const LAT_MAX = 31.34;

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 700;

function lngToSvgX(lng: number): number {
  return ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * SVG_WIDTH;
}

function latToSvgY(lat: number): number {
  return ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * SVG_HEIGHT;
}

// Shanghai District centroids for label display
const DISTRICT_CENTROIDS: { name: District; lng: number; lat: number }[] = [
  { name: '徐汇区', lng: 121.436, lat: 31.188 },
  { name: '黄浦区', lng: 121.485, lat: 31.220 },
  { name: '静安区', lng: 121.448, lat: 31.235 },
  { name: '浦东新区', lng: 121.545, lat: 31.220 },
  { name: '普陀区', lng: 121.415, lat: 31.248 },
  { name: '闵行区', lng: 121.380, lat: 31.115 },
  { name: '长宁区', lng: 121.415, lat: 31.210 },
  { name: '杨浦区', lng: 121.525, lat: 31.265 },
  { name: '虹口区', lng: 121.485, lat: 31.265 },
  { name: '青浦区', lng: 121.120, lat: 31.150 },
  { name: '宝山区', lng: 121.480, lat: 31.360 },
  { name: '嘉定区', lng: 121.250, lat: 31.380 },
  { name: '松江区', lng: 121.230, lat: 31.030 },
];

// Presets for quick camera jumping
const VIEW_PRESETS = [
  { name: '上海全景', lng: 121.46, lat: 31.21, zoom: 1.0 },
  { name: '徐汇核心', lng: 121.442, lat: 31.195, zoom: 2.4 },
  { name: '浦东陆家嘴/碧云', lng: 121.540, lat: 31.230, zoom: 2.2 },
  { name: '普陀/苏河两湾', lng: 121.430, lat: 31.248, zoom: 2.5 },
  { name: '静安/黄浦老城', lng: 121.468, lat: 31.225, zoom: 2.4 },
  { name: '闵行七宝/春申', lng: 121.370, lat: 31.125, zoom: 2.2 },
  { name: '杨浦/虹口大学城', lng: 121.510, lat: 31.272, zoom: 2.3 },
];

// River Paths in coordinates
const HUANGPU_RIVER_POINTS = [
  { lng: 121.370, lat: 31.020 },
  { lng: 121.420, lat: 31.065 },
  { lng: 121.455, lat: 31.115 },
  { lng: 121.465, lat: 31.165 },
  { lng: 121.472, lat: 31.190 },
  { lng: 121.488, lat: 31.205 },
  { lng: 121.498, lat: 31.226 },
  { lng: 121.504, lat: 31.242 },
  { lng: 121.525, lat: 31.258 },
  { lng: 121.560, lat: 31.285 },
  { lng: 121.555, lat: 31.335 },
];

const SUZHOU_CREEK_POINTS = [
  { lng: 121.340, lat: 31.225 },
  { lng: 121.395, lat: 31.222 },
  { lng: 121.428, lat: 31.238 },
  { lng: 121.465, lat: 31.246 },
  { lng: 121.488, lat: 31.244 },
  { lng: 121.500, lat: 31.242 },
];

export const SchoolGISMap: React.FC<SchoolGISMapProps> = ({
  schools,
  selectedStage,
  onStageChange,
  onSelectSchool,
  onToggleCompare,
  comparedSchools,
  shortlistedSchools,
  onToggleShortlist,
  onNavigateToSimulator,
  targetCommunity,
  onSelectMiddleSchool,
  compactMode = false,
  hoveredSchoolId
}) => {
  // Map engine mode: default to official AMap实景 engine
  const [mapEngine, setMapEngine] = useState<'builtin' | 'amap'>('amap');
  const [amapLayerType, setAmapLayerType] = useState<'standard' | 'satellite'>('standard');
  const [showTraffic, setShowTraffic] = useState<boolean>(false);
  const satelliteLayerRef = useRef<any>(null);
  const trafficLayerRef = useRef<any>(null);

  // AMap browser credentials are deployment configuration, never user input.
  const [amapKey] = useState<string>(() => getSavedAMapCredentials().key);
  const [amapSecurityCode] = useState<string>(() => getSavedAMapCredentials().securityCode);
  const [isKeyModalOpen, setIsKeyModalOpen] = useState<boolean>(false);
  const [amapLoaded, setAmapLoaded] = useState<boolean>(false);
  const [amapLoadError, setAmapLoadError] = useState<string | null>(null);

  // SVG Sandbox Map Viewport
  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const amapContainerRef = useRef<HTMLDivElement>(null);
  const amapInstanceRef = useRef<any>(null);
  const amapMarkersRef = useRef<any[]>([]);
  const amapSearchedMarkerRef = useRef<any>(null);
  const amapSearchedPolylineRef = useRef<any>(null);
  const amapNearbySchoolMarkersRef = useRef<any[]>([]);

  // Filters
  const [selectedDistrict, setSelectedDistrict] = useState<District | 'all'>('all');
  const [selectedType, setSelectedType] = useState<SchoolType | 'all'>('all');
  const [filterWarningOnly, setFilterWarningOnly] = useState<boolean>(false);
  const [selectedBudgetFilter, setSelectedBudgetFilter] = useState<'all' | '300-500' | '500-800' | '800-1200' | '1200+'>('all');


  // Real-time AMap POI Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchedPOIItem[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Layer toggles
  const [showSchools, setShowSchools] = useState<boolean>(true);
  const [showCommunities, setShowCommunities] = useState<boolean>(true);
  const [showCatchmentLines, setShowCatchmentLines] = useState<boolean>(true);
  const [showGeography, setShowGeography] = useState<boolean>(true);

  // Selected entities
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityCatchment | null>(null);
  
  // Real AMap searched community (can be ANY compound in Shanghai!)
  const [selectedSearchedPOI, setSelectedSearchedPOI] = useState<SearchedPOIItem | null>(null);

  // Dynamic nearby schools fetched from AMap around the searched community
  const [nearbySchoolsFromAMap, setNearbySchoolsFromAMap] = useState<{
    primaries: School[];
    kindergartens: School[];
    closestPrimary: School | null;
    closestKindergarten: School | null;
  } | null>(null);
  const [isLoadingNearbySchools, setIsLoadingNearbySchools] = useState<boolean>(false);

  // Live dynamic viewport schools fetched from AMap PlaceSearch
  const [viewportSchools, setViewportSchools] = useState<School[]>([]);
  const [isFetchingViewport, setIsFetchingViewport] = useState<boolean>(false);
  const lastFetchedCenterRef = useRef<{ lng: number; lat: number } | null>(null);
  const mapMoveTimerRef = useRef<any>(null);

  // Base Filtered Schools from curated data
  const filteredCuratedSchools = useMemo(() => {
    return schools.filter(school => {
      if (!school.location) return false;
      if (selectedStage !== 'all' && school.stage !== selectedStage) return false;
      if (selectedDistrict !== 'all' && school.district !== selectedDistrict) return false;
      if (selectedType !== 'all' && school.type !== selectedType) return false;
      if (filterWarningOnly && !school.enrollment.hasFiveYearRule && !school.enrollment.oversubscribedHistory) return false;
      return true;
    });
  }, [schools, selectedStage, selectedDistrict, selectedType, filterWarningOnly]);

  // Combined list of schools to render on map (curated + viewport live AMap schools + dynamic nearby)
  const allDisplaySchools = useMemo(() => {
    const schoolMap = new Map<string, School>();

    // 1. Curated filtered schools
    filteredCuratedSchools.forEach(s => schoolMap.set(s.name, s));

    // 2. Viewport live schools from AMap
    viewportSchools.forEach(s => {
      if (selectedStage !== 'all' && s.stage !== selectedStage) return;
      if (selectedDistrict !== 'all' && s.district !== selectedDistrict) return;
      if (!schoolMap.has(s.name)) {
        schoolMap.set(s.name, s);
      }
    });

    // 3. Dynamic nearby schools around searched POI
    if (nearbySchoolsFromAMap?.primaries) {
      nearbySchoolsFromAMap.primaries.forEach(ns => {
        if (selectedStage !== 'all' && ns.stage !== selectedStage) return;
        if (!schoolMap.has(ns.name)) schoolMap.set(ns.name, ns);
      });
    }
    if (nearbySchoolsFromAMap?.kindergartens) {
      nearbySchoolsFromAMap.kindergartens.forEach(nk => {
        if (selectedStage !== 'all' && nk.stage !== selectedStage) return;
        if (!schoolMap.has(nk.name)) schoolMap.set(nk.name, nk);
      });
    }

    return Array.from(schoolMap.values());
  }, [filteredCuratedSchools, viewportSchools, nearbySchoolsFromAMap, selectedStage, selectedDistrict]);

  // Viewport search function
  const fetchSchoolsInCurrentViewport = async (centerOverride?: { lng: number; lat: number }, force: boolean = false) => {
    if (mapEngine !== 'amap' || !amapInstanceRef.current) return;
    const center = centerOverride || amapInstanceRef.current.getCenter();
    if (!center) return;
    const lng = typeof center.getLng === 'function' ? center.getLng() : center.lng;
    const lat = typeof center.getLat === 'function' ? center.getLat() : center.lat;
    if (!lng || !lat) return;

    // Check displacement from last fetched center to prevent redundant requests on micro-panning
    if (lastFetchedCenterRef.current && !centerOverride && !force) {
      const dist = getDistanceMeters(
        lastFetchedCenterRef.current.lat,
        lastFetchedCenterRef.current.lng,
        lat,
        lng
      );
      if (dist < 600) return;
    }

    const currentZoom = typeof amapInstanceRef.current.getZoom === 'function' ? amapInstanceRef.current.getZoom() : 12;
    if (currentZoom < 9) return;

    const radius = currentZoom >= 15 ? 2500 : (currentZoom >= 13 ? 4500 : 7000);

    setIsFetchingViewport(true);
    try {
      const liveSchools = await searchSchoolsInViewportFromAMap({
        center: { lng, lat },
        radiusMeters: radius,
        stage: selectedStage,
        pageSize: 45
      });

      if (liveSchools && liveSchools.length > 0) {
        setViewportSchools(prev => {
          const next = [...prev];
          liveSchools.forEach(ls => {
            if (!next.some(c => c.name === ls.name || c.id === ls.id)) {
              next.push(ls);
            }
          });
          return next;
        });
      }
      lastFetchedCenterRef.current = { lng, lat };
    } catch (err) {
      console.error('fetchSchoolsInCurrentViewport error:', err);
    } finally {
      setIsFetchingViewport(false);
    }
  };

  // Helper to filter communities by housing budget tier
  const matchesBudgetFilter = (c: CommunityCatchment, filter: 'all' | '300-500' | '500-800' | '800-1200' | '1200+'): boolean => {
    if (filter === 'all') return true;
    const totalStr = c.priceInfo?.totalPriceRange || '';
    const avg = c.priceInfo?.averagePrice || 0;
    const nums = totalStr.match(/\d+/g);
    let minP = 0;
    let maxP = 0;
    if (nums && nums.length >= 2) {
      minP = parseInt(nums[0], 10);
      maxP = parseInt(nums[1], 10);
    } else if (nums && nums.length === 1) {
      minP = parseInt(nums[0], 10);
      maxP = minP;
    } else if (avg > 0) {
      minP = Math.round((avg * 50) / 10000);
      maxP = Math.round((avg * 80) / 10000);
    }

    if (filter === '300-500') {
      return minP <= 500 && (maxP >= 250 || minP >= 200);
    }
    if (filter === '500-800') {
      return (minP <= 800 && maxP >= 480) || (minP >= 450 && minP <= 800);
    }
    if (filter === '800-1200') {
      return (minP <= 1200 && maxP >= 780) || (minP >= 750 && minP <= 1200);
    }
    if (filter === '1200+') {
      return maxP >= 1150 || totalStr.includes('1200') || totalStr.includes('1500') || totalStr.includes('2000') || avg >= 110000;
    }
    return true;
  };

  // Filtered Communities
  const filteredCommunities = useMemo(() => {
    return CATCHMENTS_DATA.filter(community => {
      if (selectedDistrict !== 'all' && community.district !== selectedDistrict) return false;
      if (filterWarningOnly && !community.fiveYearRule && community.riskLevel === 'low') return false;
      if (!matchesBudgetFilter(community, selectedBudgetFilter)) return false;
      return true;
    });
  }, [selectedDistrict, filterWarningOnly, selectedBudgetFilter]);


  // Pre-load AMap script if key is available so POI search is ready instantly
  useEffect(() => {
    if (amapKey) {
      loadAMapScript()
        .then(() => setAmapLoaded(true))
        .catch(() => {});
    }
  }, [amapKey, amapSecurityCode]);

  // Debounced AMap POI Search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      setIsDropdownOpen(false);
      return;
    }

    setIsSearching(true);
    setIsDropdownOpen(true);

    const timer = setTimeout(async () => {
      try {
        const results = await searchShanghaiResidentialPOIs(searchQuery);
        setSearchResults(results);
      } catch (err) {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // When a searched community is selected, query AMap for REAL schools around it!
  useEffect(() => {
    if (!selectedSearchedPOI || !selectedSearchedPOI.location) {
      setNearbySchoolsFromAMap(null);
      return;
    }

    setIsLoadingNearbySchools(true);
    searchNearbySchoolsFromAMap(selectedSearchedPOI.location, 2500)
      .then((res) => {
        setNearbySchoolsFromAMap(res);
        if (res.closestPrimary) {
          setSelectedSchool(res.closestPrimary);
          // Update selectedSearchedPOI with real closest primary and distance
          setSelectedSearchedPOI(prev => {
            if (!prev || !prev.location || !res.closestPrimary?.location) return prev;
            const dist = getDistanceMeters(
              prev.location.lat,
              prev.location.lng,
              res.closestPrimary.location.lat,
              res.closestPrimary.location.lng
            );
            return {
              ...prev,
              closestPrimary: res.closestPrimary,
              distanceToPrimary: dist,
              walkingMinutesToPrimary: Math.max(1, Math.round(dist / 75)),
              closestKindergarten: res.closestKindergarten || undefined,
              distanceToKindergarten: res.closestKindergarten?.location ? getDistanceMeters(
                prev.location.lat,
                prev.location.lng,
                res.closestKindergarten.location.lat,
                res.closestKindergarten.location.lng
              ) : undefined,
              nearbyPrimaries: res.primaries,
              nearbyKindergartens: res.kindergartens
            };
          });

          // Also update AMap markers if in amap mode
          if (mapEngine === 'amap' && amapInstanceRef.current) {
            updateAMapSearchedMarker(selectedSearchedPOI, res.closestPrimary, res.primaries);
          }
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoadingNearbySchools(false);
      });
  }, [selectedSearchedPOI?.id, mapEngine]);

  // Active highlighted links for Built-in Sandbox
  const activeCatchmentLinks = useMemo(() => {
    if (!showCatchmentLines) return [];

    const links: {
      communityName: string;
      communityLoc: { lng: number; lat: number };
      school: School;
      distanceMeters: number;
      walkingMinutes: number;
      isHighlighted: boolean;
    }[] = [];

    // 1. If an official community is selected
    if (selectedCommunity && selectedCommunity.location) {
      const matched = allDisplaySchools.find(s => s.id === selectedCommunity.matchedSchoolId || s.name === selectedCommunity.schoolName) || schools.find(s => s.id === selectedCommunity.matchedSchoolId || s.name === selectedCommunity.schoolName);
      if (matched && matched.location) {
        const dist = getDistanceMeters(
          selectedCommunity.location.lat,
          selectedCommunity.location.lng,
          matched.location.lat,
          matched.location.lng
        );
        links.push({
          communityName: selectedCommunity.communityName,
          communityLoc: selectedCommunity.location,
          school: matched,
          distanceMeters: dist,
          walkingMinutes: Math.max(1, Math.round(dist / 75)),
          isHighlighted: true
        });
      }
    }

    // 2. If an AMap searched POI is selected -> connect to REAL closest school from AMap!
    const targetPrimary = nearbySchoolsFromAMap?.closestPrimary || selectedSearchedPOI?.closestPrimary;
    if (selectedSearchedPOI && selectedSearchedPOI.location && targetPrimary?.location) {
      const dist = getDistanceMeters(
        selectedSearchedPOI.location.lat,
        selectedSearchedPOI.location.lng,
        targetPrimary.location.lat,
        targetPrimary.location.lng
      );
      links.push({
        communityName: selectedSearchedPOI.name,
        communityLoc: selectedSearchedPOI.location,
        school: targetPrimary,
        distanceMeters: dist,
        walkingMinutes: Math.max(1, Math.round(dist / 75)),
        isHighlighted: true
      });
    }

    // 3. If a school is selected, connect all its official counterpart communities
    if (selectedSchool && selectedSchool.location) {
      const schoolCommunities = CATCHMENTS_DATA.filter(c => c.matchedSchoolId === selectedSchool.id);
      schoolCommunities.forEach(c => {
        if (c.location && selectedSchool.location) {
          const dist = getDistanceMeters(
            c.location.lat,
            c.location.lng,
            selectedSchool.location.lat,
            selectedSchool.location.lng
          );
          links.push({
            communityName: c.communityName,
            communityLoc: c.location,
            school: selectedSchool,
            distanceMeters: dist,
            walkingMinutes: Math.max(1, Math.round(dist / 75)),
            isHighlighted: true
          });
        }
      });
    }

    return links;
  }, [selectedCommunity, selectedSearchedPOI, nearbySchoolsFromAMap, selectedSchool, schools, showCatchmentLines]);

  // Handle Pan & Zoom for Builtin Sandbox Map
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.88;
    setZoom(prev => Math.min(Math.max(prev * zoomFactor, 0.6), 5.0));
  };

  const handleToggleMapLayer = (type: 'standard' | 'satellite') => {
    setAmapLayerType(type);
    const AMap = (window as any).AMap;
    if (!AMap || !amapInstanceRef.current) return;
    try {
      if (type === 'satellite') {
        if (!satelliteLayerRef.current) {
          satelliteLayerRef.current = new AMap.TileLayer.Satellite();
        }
        amapInstanceRef.current.add(satelliteLayerRef.current);
      } else {
        if (satelliteLayerRef.current) {
          amapInstanceRef.current.remove(satelliteLayerRef.current);
        }
      }
    } catch (e) {
      console.error('Layer switch error:', e);
    }
  };

  const handleToggleTraffic = () => {
    const next = !showTraffic;
    setShowTraffic(next);
    const AMap = (window as any).AMap;
    if (!AMap || !amapInstanceRef.current) return;
    try {
      if (next) {
        if (!trafficLayerRef.current) {
          trafficLayerRef.current = new AMap.TileLayer.Traffic({ zIndex: 10 });
        }
        amapInstanceRef.current.add(trafficLayerRef.current);
      } else {
        if (trafficLayerRef.current) {
          amapInstanceRef.current.remove(trafficLayerRef.current);
        }
      }
    } catch (e) {
      console.error('Traffic switch error:', e);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.25, 5.0));
    if (mapEngine === 'amap' && amapInstanceRef.current) {
      try { amapInstanceRef.current.zoomIn(); } catch {}
    }
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev * 0.8, 0.6));
    if (mapEngine === 'amap' && amapInstanceRef.current) {
      try { amapInstanceRef.current.zoomOut(); } catch {}
    }
  };

  const handleResetView = () => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    setSelectedSchool(null);
    setSelectedCommunity(null);
    setSelectedSearchedPOI(null);
    setNearbySchoolsFromAMap(null);
    setSearchQuery('');
    if (mapEngine === 'amap' && amapInstanceRef.current) {
      try { amapInstanceRef.current.setZoomAndCenter(12, [121.4737, 31.2304]); } catch {}
    }
  };

  const handlePresetJump = (preset: typeof VIEW_PRESETS[0]) => {
    const targetX = lngToSvgX(preset.lng);
    const targetY = latToSvgY(preset.lat);
    const newPanX = (SVG_WIDTH / 2 - targetX) * preset.zoom;
    const newPanY = (SVG_HEIGHT / 2 - targetY) * preset.zoom;
    setZoom(preset.zoom);
    setPan({ x: newPanX, y: newPanY });

    if (mapEngine === 'amap' && amapInstanceRef.current) {
      amapInstanceRef.current.setCenter([preset.lng, preset.lat]);
      amapInstanceRef.current.setZoom(preset.zoom > 1.8 ? 14 : 11);
    }
  };

  // Click on a school
  const handleSchoolClick = (school: School, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSchool(school);
    setSelectedCommunity(null);

    if (school.location) {
      focusOnCoordinates(school.location.lng, school.location.lat, 2.4);
    }
  };

  // Click on a community
  const handleCommunityClick = (community: CommunityCatchment, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedCommunity(community);
    setSelectedSearchedPOI(null);
    setNearbySchoolsFromAMap(null);
    const matched = schools.find(s => s.id === community.matchedSchoolId);
    if (matched) {
      setSelectedSchool(matched);
    }

    if (community.location) {
      focusOnCoordinates(community.location.lng, community.location.lat, 2.6);
    }
  };

  // Handle Selection from Real AMap POI Search Dropdown
  const handleSelectSearchResult = (item: SearchedPOIItem) => {
    setIsDropdownOpen(false);

    if (item.source === 'school' && item.matchedSchool) {
      handleSchoolClick(item.matchedSchool);
      return;
    }

    if ((item.source === 'official_catchment' || item.source === 'catchment_reference') && item.officialCatchment) {
      handleCommunityClick(item.officialCatchment);
      return;
    }

    // It's a real AMap residential compound!
    setSelectedSearchedPOI(item);
    setSelectedCommunity(null);

    if (item.location) {
      focusOnCoordinates(item.location.lng, item.location.lat, 2.8);
      updateAMapSearchedMarker(item, item.closestPrimary);
    }
  };

  // Update dynamic marker on real AMap instance
  const updateAMapSearchedMarker = (
    item: SearchedPOIItem, 
    targetSchool?: School | null,
    extraNearbySchools?: School[]
  ) => {
    if (!amapInstanceRef.current || !(window as any).AMap || !item.location) return;
    const AMap = (window as any).AMap;

    // Clean previous searched marker & polyline
    if (amapSearchedMarkerRef.current) {
      amapInstanceRef.current.remove(amapSearchedMarkerRef.current);
      amapSearchedMarkerRef.current = null;
    }
    if (amapSearchedPolylineRef.current) {
      amapInstanceRef.current.remove(amapSearchedPolylineRef.current);
      amapSearchedPolylineRef.current = null;
    }
    if (amapNearbySchoolMarkersRef.current.length > 0) {
      amapInstanceRef.current.remove(amapNearbySchoolMarkersRef.current);
      amapNearbySchoolMarkersRef.current = [];
    }

    // Add glowing custom POI marker
    const markerEl = document.createElement('div');
    markerEl.innerHTML = `
      <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; box-shadow: 0 4px 14px rgba(16,185,129,0.5); border: 2px solid white; display: flex; align-items: center; gap: 6px; cursor: pointer; white-space: nowrap;">
        <span>📍</span>
        <span>${item.name}</span>
        <span style="background: rgba(255,255,255,0.25); padding: 1px 6px; border-radius: 6px; font-size: 10px;">检索小区</span>
      </div>
    `;

    const marker = new AMap.Marker({
      position: [item.location.lng, item.location.lat],
      content: markerEl,
      offset: new AMap.Pixel(-20, -20),
      title: item.name,
      zIndex: 200
    });
    amapInstanceRef.current.add(marker);
    amapSearchedMarkerRef.current = marker;

    // Draw line to closest primary school if present
    const schoolToConnect = targetSchool || item.closestPrimary;
    if (schoolToConnect?.location) {
      const polyline = new AMap.Polyline({
        path: [
          [item.location.lng, item.location.lat],
          [schoolToConnect.location.lng, schoolToConnect.location.lat]
        ],
        strokeColor: '#3b82f6',
        strokeWeight: 4,
        strokeOpacity: 0.9,
        strokeStyle: 'dashed',
        strokeDasharray: [10, 5],
        zIndex: 150
      });
      amapInstanceRef.current.add(polyline);
      amapSearchedPolylineRef.current = polyline;
    }

    // Add markers for nearby schools
    if (extraNearbySchools && extraNearbySchools.length > 0) {
      const newNearbyMarkers: any[] = [];
      extraNearbySchools.forEach(sch => {
        if (!sch.location) return;
        const schMarkerEl = document.createElement('div');
        schMarkerEl.innerHTML = `
          <div style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: bold; box-shadow: 0 2px 8px rgba(37,99,235,0.4); border: 2px solid white; display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
            <span>🏫</span>
            <span>${sch.shortName}</span>
          </div>
        `;
        const schMarker = new AMap.Marker({
          position: [sch.location.lng, sch.location.lat],
          content: schMarkerEl,
          offset: new AMap.Pixel(-15, -15),
          title: sch.name,
          zIndex: 180
        });
        schMarker.on('click', () => {
          setSelectedSchool(sch);
        });
        newNearbyMarkers.push(schMarker);
      });
      amapInstanceRef.current.add(newNearbyMarkers);
      amapNearbySchoolMarkersRef.current = newNearbyMarkers;
    }

    amapInstanceRef.current.setCenter([item.location.lng, item.location.lat]);
    amapInstanceRef.current.setZoom(15);
  };

  // Smooth centering on a specific point
  const focusOnCoordinates = (lng: number, lat: number, targetZoom = 2.4) => {
    const svgX = lngToSvgX(lng);
    const svgY = latToSvgY(lat);
    const newPanX = (SVG_WIDTH / 2 - svgX) * targetZoom;
    const newPanY = (SVG_HEIGHT / 2 - svgY) * targetZoom;
    setZoom(targetZoom);
    setPan({ x: newPanX, y: newPanY });

    if (mapEngine === 'amap' && amapInstanceRef.current) {
      amapInstanceRef.current.setCenter([lng, lat]);
      amapInstanceRef.current.setZoom(targetZoom > 2.0 ? 15 : 12);
    }
  };

  // Focus on targetCommunity if passed from external navigation (e.g. SmartAdvisor or CatchmentLookup)
  useEffect(() => {
    if (targetCommunity) {
      handleCommunityClick(targetCommunity);
    }
  }, [targetCommunity]);

  // Generate SVG Path for River
  const huangpuRiverPath = useMemo(() => {
    return HUANGPU_RIVER_POINTS.reduce((acc, pt, idx) => {
      const x = lngToSvgX(pt.lng);
      const y = latToSvgY(pt.lat);
      return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, []);

  const suzhouCreekPath = useMemo(() => {
    return SUZHOU_CREEK_POINTS.reduce((acc, pt, idx) => {
      const x = lngToSvgX(pt.lng);
      const y = latToSvgY(pt.lat);
      return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, []);

  // Initialize or reload AMap JS API when mode === 'amap' and key is present
  useEffect(() => {
    if (mapEngine !== 'amap') return;
    if (!amapKey) return;

    loadAMapScript()
      .then((AMap) => {
        setAmapLoaded(true);
        setAmapLoadError(null);
        initAMap();
      })
      .catch((err) => {
        setAmapLoadError(typeof err === 'string' ? err : '高德地图脚本加载失败，请检查网络或 Key 权限');
      });

    return () => {
      if (amapInstanceRef.current) {
        try {
          amapInstanceRef.current.destroy();
        } catch {}
      }
    };
  }, [mapEngine, amapKey, amapSecurityCode]);

  // Re-render AMap markers when filters change
  useEffect(() => {
    if (mapEngine === 'amap' && amapInstanceRef.current && (window as any).AMap) {
      renderAMapMarkers();
    }
  }, [allDisplaySchools, filteredCommunities, showSchools, showCommunities, mapEngine]);

  // Re-fetch viewport schools whenever selectedStage changes
  useEffect(() => {
    if (mapEngine === 'amap' && amapInstanceRef.current) {
      fetchSchoolsInCurrentViewport(undefined, true);
    }
  }, [selectedStage]);

  // Init AMap map
  const initAMap = () => {
    const AMap = (window as any).AMap;
    if (!AMap || !amapContainerRef.current) return;

    try {
      const map = new AMap.Map(amapContainerRef.current, {
        zoom: 12,
        center: [121.4737, 31.2304],
        viewMode: '2D',
      });
      amapInstanceRef.current = map;

      map.addControl(new AMap.Scale());
      map.addControl(new AMap.ToolBar({ position: 'RB' }));

      // Attach viewport change listeners to dynamically load live schools/kindergartens
      map.on('moveend', () => {
        clearTimeout(mapMoveTimerRef.current);
        mapMoveTimerRef.current = setTimeout(() => {
          fetchSchoolsInCurrentViewport();
        }, 350);
      });

      map.on('zoomend', () => {
        clearTimeout(mapMoveTimerRef.current);
        mapMoveTimerRef.current = setTimeout(() => {
          fetchSchoolsInCurrentViewport();
        }, 350);
      });

      renderAMapMarkers();

      // If already has searched POI, re-render it
      if (selectedSearchedPOI) {
        updateAMapSearchedMarker(
          selectedSearchedPOI, 
          nearbySchoolsFromAMap?.closestPrimary,
          nearbySchoolsFromAMap?.primaries
        );
      }

      // Initial viewport search for the starting view
      setTimeout(() => {
        fetchSchoolsInCurrentViewport();
      }, 500);

      setAmapLoaded(true);
    } catch (err: any) {
      setAmapLoadError(err.message || '地图渲染异常');
    }
  };

  const renderAMapMarkers = () => {
    const AMap = (window as any).AMap;
    if (!AMap || !amapInstanceRef.current) return;

    // Remove existing markers
    if (amapMarkersRef.current.length > 0) {
      amapInstanceRef.current.remove(amapMarkersRef.current);
      amapMarkersRef.current = [];
    }

    const newMarkers: any[] = [];

    // Add schools
    if (showSchools) {
      allDisplaySchools.forEach(school => {
        if (!school.location) return;
        const markerContent = document.createElement('div');
        const isKinder = school.stage === 'kindergarten';
        const isMiddle = school.stage === 'middle';
        const icon = isKinder ? '👶' : isMiddle ? '🎓' : '🏫';
        const color = isKinder ? '#9333ea' : isMiddle ? '#7c3aed' : (school.type === 'public' ? '#2563eb' : school.type === 'private' ? '#d97706' : '#0d9488');
        markerContent.innerHTML = `
          <div style="background: ${color}; color: white; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: bold; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3); border: 2px solid white; display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
            <span>${icon}</span>
            <span>${school.shortName}</span>
          </div>
        `;
        const marker = new AMap.Marker({
          position: [school.location.lng, school.location.lat],
          content: markerContent,
          offset: new AMap.Pixel(-15, -15),
          title: school.name
        });
        marker.on('click', () => {
          setSelectedSchool(school);
          setSelectedCommunity(null);
        });
        newMarkers.push(marker);
      });
    }

    // Add communities
    if (showCommunities) {
      filteredCommunities.forEach(c => {
        const commContent = document.createElement('div');
        commContent.innerHTML = `
          <div style="background: #059669; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); border: 2px solid white; cursor: pointer;">
            🏘️
          </div>
        `;
        const marker = new AMap.Marker({
          position: [c.location.lng, c.location.lat],
          content: commContent,
          offset: new AMap.Pixel(-11, -11),
          title: c.communityName
        });
        marker.on('click', () => {
          setSelectedCommunity(c);
          setSelectedSearchedPOI(null);
          const matched = allDisplaySchools.find(s => s.id === c.matchedSchoolId || s.name === c.schoolName) || schools.find(s => s.id === c.matchedSchoolId || s.name === c.schoolName);
          if (matched) setSelectedSchool(matched);
        });
        newMarkers.push(marker);
      });
    }

    amapInstanceRef.current.add(newMarkers);
    amapMarkersRef.current = newMarkers;
  };

  return (
    <div className={compactMode ? "w-full h-full relative flex flex-col min-h-[550px]" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"}>
      
      {/* Top Header & Mode Toggle Bar - Only in full-page mode */}
      {!compactMode && (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <MapIcon className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  上海幼小学区数字沙盘与地理GIS系统
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  高德地点与距离信息
                  </span>
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  高德用于 POI、坐标、距离和导航；附近学校不等于对口学校
                </p>
              </div>
            </div>
          </div>

          {/* Official AMap GIS Controls & Settings */}
          <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto">
            
            {/* Status indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Navigation className="w-3.5 h-3.5 text-emerald-600" />
              <span>高德实景真底图</span>
              {amapKey ? (
                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">已授权</span>
              ) : (
                <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">未配Key</span>
              )}
            </div>

            {/* AMap Layer Switches (Standard, Satellite, Traffic) */}
            {mapEngine === 'amap' && (
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
                <button
                  onClick={() => handleToggleMapLayer('standard')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    amapLayerType === 'standard'
                      ? 'bg-white text-blue-700 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  标准路网
                </button>
                <button
                  onClick={() => handleToggleMapLayer('satellite')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    amapLayerType === 'satellite'
                      ? 'bg-white text-emerald-700 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  卫星遥感
                </button>
                <button
                  onClick={handleToggleTraffic}
                  className={`px-2 py-1 rounded-lg font-medium transition-all ml-1 ${
                    showTraffic
                      ? 'bg-amber-500 text-white font-bold shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="实时路况热力"
                >
                  路况
                </button>
              </div>
            )}

            {/* Offline Schematic Fallback Button (Unobtrusive) */}
            <button
              onClick={() => setMapEngine(mapEngine === 'amap' ? 'builtin' : 'amap')}
              title={mapEngine === 'amap' ? '切换简易矢量模式 (离线备用)' : '切回高德实景地图'}
              className="px-2.5 py-1.5 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors text-xs flex items-center gap-1"
            >
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">{mapEngine === 'amap' ? '离线底图' : '高德实景'}</span>
            </button>

            <button
              onClick={() => setIsKeyModalOpen(true)}
              title="查看高德部署配置"
              className="p-2 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <Key className="w-4 h-4 text-amber-600" />
            </button>
          </div>

        </div>

        {/* Universal Search & Preset Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          
          {/* Real-time AMap POI Search Bar */}
          <div ref={searchContainerRef} className="relative flex-1 min-w-[280px] max-w-lg">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchResults.length > 0) setIsDropdownOpen(true);
              }}
              placeholder="输入上海任意真实小区（如中远两湾城、上海康城、古北香梅、大华清水湾）..."
              className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
            />
            
            {/* Loading or Clear Icon */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              {isSearching ? (
                <Loader2 className="w-3.5 h-3.5 text-blue-600 animate-spin" />
              ) : searchQuery ? (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults([]);
                    setIsDropdownOpen(false);
                  }}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : null}
            </div>

            {/* Live Autocomplete Dropdown */}
            {isDropdownOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 max-h-96 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2.5 bg-slate-50 border-b border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>找到 {searchResults.length} 个上海地点 (官方学区 + 高德全量小区)</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-medium">点击定位并匹配学校</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectSearchResult(item)}
                      className="p-3 hover:bg-blue-50/70 cursor-pointer transition-colors group flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs mt-0.5 flex-shrink-0 ${
                          item.source === 'official_catchment' || item.source === 'catchment_reference'
                            ? 'bg-emerald-100 text-emerald-700'
                            : item.source === 'school'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-indigo-100 text-indigo-700'
                        }`}>
                          {item.source === 'official_catchment' ? '🏛️' : item.source === 'catchment_reference' ? '📜' : item.source === 'school' ? '🏫' : '📍'}
                        </div>
                        <div className="truncate">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs text-slate-900 group-hover:text-blue-700 truncate">
                              {item.name}
                            </span>
                            {item.source === 'official_catchment' && (
                              <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 rounded flex-shrink-0">
                                官方核定对口
                              </span>
                            )}
                            {item.source === 'catchment_reference' && (
                              <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-1 rounded flex-shrink-0">
                                历史资料待核验
                              </span>
                            )}
                            {item.source === 'amap_poi' && (
                              <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-1 rounded flex-shrink-0">
                                高德实景小区
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {item.address}
                          </p>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                            {item.matchedSchool && item.relationshipStatus === 'verified' && (
                              <div className="text-[11px] font-bold text-blue-700">
                                对口: {item.matchedSchool.shortName}
                          </div>
                        )}
                        <span className="text-[10px] text-slate-400 font-medium">
                          {item.district}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
            <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">镜头直达:</span>
            {VIEW_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => handlePresetJump(preset)}
                className="text-[11px] font-medium px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 whitespace-nowrap transition-colors border border-slate-200/60"
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* District Select */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value as District | 'all')}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">全部行政区 ({allDisplaySchools.length}校)</option>
              <option value="徐汇区">徐汇区</option>
              <option value="黄浦区">黄浦区</option>
              <option value="静安区">静安区</option>
              <option value="浦东新区">浦东新区</option>
              <option value="普陀区">普陀区</option>
              <option value="闵行区">闵行区</option>
              <option value="长宁区">长宁区</option>
              <option value="杨浦区">杨浦区</option>
              <option value="虹口区">虹口区</option>
              <option value="青浦区">青浦区</option>
            </select>

            {/* Warning filter */}
            <button
              onClick={() => setFilterWarningOnly(!filterWarningOnly)}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                filterWarningOnly
                  ? 'bg-amber-50 border-amber-300 text-amber-800 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              五年一户/超额区
            </button>
          </div>

          {/* Housing Budget Filter Chips (P1-5) */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 border-t sm:border-t-0 sm:border-l border-slate-200 sm:pl-3">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 shrink-0">
              <Coins className="w-3.5 h-3.5 text-amber-500" />
              小区预算:
            </span>
            <button
              type="button"
              onClick={() => setSelectedBudgetFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedBudgetFilter === 'all'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              全部
            </button>
            <button
              type="button"
              onClick={() => setSelectedBudgetFilter('300-500')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedBudgetFilter === '300-500'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              300-500万
            </button>
            <button
              type="button"
              onClick={() => setSelectedBudgetFilter('500-800')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedBudgetFilter === '500-800'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              500-800万
            </button>
            <button
              type="button"
              onClick={() => setSelectedBudgetFilter('800-1200')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedBudgetFilter === '800-1200'
                  ? 'bg-indigo-700 text-white shadow-xs'
                  : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              800-1200万
            </button>
            <button
              type="button"
              onClick={() => setSelectedBudgetFilter('1200+')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedBudgetFilter === '1200+'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              1200万+
            </button>
          </div>

        </div>
      </div>
      )}

      {/* Main Map View Area */}
      <div className={compactMode ? "w-full h-full relative flex-1 flex flex-col" : "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"}>
        
        {/* Map Canvas / Container */}
        <div className={compactMode ? "w-full h-full flex-1 bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-800 relative select-none min-h-[550px]" : "lg:col-span-8 xl:col-span-9 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 relative select-none"}>
          
          {/* Map Top Floating Controls */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700/60 text-white text-xs">
            
            {/* Stage filter pills */}
            <button
              onClick={() => onStageChange('all')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                selectedStage === 'all' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              全部学段
            </button>
            <button
              onClick={() => onStageChange('kindergarten')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl transition-all ${
                selectedStage === 'kindergarten' ? 'bg-purple-600 text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Baby className="w-3 h-3" />
              幼儿园
            </button>
            <button
              onClick={() => onStageChange('primary')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl transition-all ${
                selectedStage === 'primary' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              小学
            </button>
            <button
              onClick={() => onStageChange('middle')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl transition-all ${
                selectedStage === 'middle' ? 'bg-purple-600 text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3 h-3 text-purple-200" />
              初中
            </button>

            <div className="w-[1px] h-4 bg-slate-700 mx-1" />

            {/* Layer Toggles */}
            <button
              onClick={() => setShowSchools(!showSchools)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                showSchools 
                  ? (selectedStage === 'kindergarten' ? 'text-purple-400 font-semibold' : selectedStage === 'middle' ? 'text-purple-300 font-semibold' : 'text-blue-400 font-semibold') 
                  : 'text-slate-500 line-through'
              }`}
              title="显示/隐藏学府地标"
            >
              {selectedStage === 'kindergarten' ? '👶 幼儿园' : selectedStage === 'middle' ? '🎓 初中' : selectedStage === 'primary' ? '🎒 小学' : '🏫 学府'} ({allDisplaySchools.length})
            </button>
            <button
              onClick={() => setShowCommunities(!showCommunities)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                showCommunities ? 'text-emerald-400 font-semibold' : 'text-slate-500 line-through'
              }`}
              title="显示/隐藏对口小区"
            >
              🏘️ 小区 ({filteredCommunities.length})
            </button>
            <button
              onClick={() => setShowCatchmentLines(!showCatchmentLines)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                showCatchmentLines ? 'text-amber-400 font-semibold' : 'text-slate-500 line-through'
              }`}
              title="显示/隐藏划片通勤连线"
            >
              ⚡ 划片对口线
            </button>

            {/* Dynamic Viewport Search Button */}
            {mapEngine === 'amap' && (
              <>
                <div className="w-[1px] h-4 bg-slate-700 mx-1" />
                <button
                  onClick={() => fetchSchoolsInCurrentViewport(undefined, true)}
                  disabled={isFetchingViewport}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-600/90 hover:bg-purple-600 text-white font-medium transition-all shadow-md active:scale-95 disabled:opacity-60"
                  title="重新搜索当前视野内的真实学校/幼儿园"
                >
                  {isFetchingViewport ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>检索视野中...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-3.5 h-3.5" />
                      <span>检索此区域{selectedStage === 'kindergarten' ? '幼儿园' : selectedStage === 'primary' ? '小学' : '学府'}</span>
                    </>
                  )}
                </button>
              </>
            )}
          </div>

          {/* Map Bottom-Right Zoom & View Controls */}
          <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700/60 text-white shadow-lg">
            <button
              onClick={handleZoomIn}
              className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 transition-colors"
              title="放大"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 transition-colors"
              title="缩小"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetView}
              className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 transition-colors"
              title="重置全景"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Map Bottom-Left Scale / Status Bar */}
          <div className="absolute bottom-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-slate-400 text-[11px] flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>底图: {mapEngine === 'builtin' ? '离线矢量' : (amapLayerType === 'satellite' ? '高德卫星航拍' : '高德实景路网')}</span>
            </div>
            <div className="text-slate-500">|</div>
            <div>缩放: {(zoom * 100).toFixed(0)}%</div>
            {isLoadingNearbySchools && (
              <>
                <div className="text-slate-500">|</div>
                <div className="text-blue-400 flex items-center gap-1">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  高德实时定位就近学校中...
                </div>
              </>
            )}
          </div>

          {/* 1. BUILTIN VECTOR SANDBOX ENGINE */}
          {mapEngine === 'builtin' && (
            <div
              ref={mapContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              className={`w-full ${compactMode ? 'h-full min-h-[550px]' : 'h-[580px] sm:h-[660px]'} relative overflow-hidden ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{
                backgroundColor: '#0b1120',
                backgroundImage: `
                  radial-gradient(#1e293b 1px, transparent 1px),
                  linear-gradient(to right, #0f172a 1px, transparent 1px),
                  linear-gradient(to bottom, #0f172a 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px, 64px 64px, 64px 64px'
              }}
            >
              <svg
                viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
                className="w-full h-full pointer-events-auto"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: '500px 350px',
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out'
                }}
              >
                <defs>
                  <filter id="river-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  <linearGradient id="huangpuGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>

                  <style>
                    {`
                      @keyframes dashMove {
                        to { stroke-dashoffset: -20; }
                      }
                      .animate-dash {
                        animation: dashMove 1s linear infinite;
                      }
                      @keyframes radarPing {
                        0% { transform: scale(1); opacity: 0.8; }
                        100% { transform: scale(3.5); opacity: 0; }
                      }
                      .radar-ring {
                        animation: radarPing 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                        transform-origin: center;
                      }
                    `}
                  </style>
                </defs>

                {/* 1. Ring roads approximation */}
                {showGeography && (
                  <g opacity="0.15" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 6" fill="none">
                    <ellipse cx={lngToSvgX(121.46)} cy={latToSvgY(31.21)} rx="130" ry="110" />
                    <ellipse cx={lngToSvgX(121.46)} cy={latToSvgY(31.20)} rx="240" ry="200" />
                  </g>
                )}

                {/* 2. Waterways: Huangpu River & Suzhou Creek */}
                {showGeography && (
                  <g>
                    <path
                      d={suzhouCreekPath}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.65"
                    />
                    <text
                      x={lngToSvgX(121.41)}
                      y={latToSvgY(31.232)}
                      fill="#38bdf8"
                      fontSize="10"
                      opacity="0.7"
                      fontStyle="italic"
                    >
                      苏州河
                    </text>

                    <path
                      d={huangpuRiverPath}
                      fill="none"
                      stroke="url(#huangpuGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.85"
                      filter="url(#river-glow)"
                    />
                    <text
                      x={lngToSvgX(121.505)}
                      y={latToSvgY(31.22)}
                      fill="#7dd3fc"
                      fontSize="12"
                      fontWeight="bold"
                      opacity="0.8"
                      transform={`rotate(45, ${lngToSvgX(121.505)}, ${latToSvgY(31.22)})`}
                    >
                      黄浦江
                    </text>
                  </g>
                )}

                {/* 3. District Centroids Labels */}
                {showGeography && DISTRICT_CENTROIDS.map((d) => {
                  const x = lngToSvgX(d.lng);
                  const y = latToSvgY(d.lat);
                  const isFiltered = selectedDistrict === d.name;
                  return (
                    <g 
                      key={d.name} 
                      className="cursor-pointer transition-opacity hover:opacity-100"
                      onClick={() => setSelectedDistrict(d.name)}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r={isFiltered ? 6 : 4}
                        fill={isFiltered ? '#38bdf8' : '#334155'}
                        stroke="#64748b"
                        strokeWidth="1"
                      />
                      <text
                        x={x}
                        y={y - 8}
                        textAnchor="middle"
                        fill={isFiltered ? '#38bdf8' : '#64748b'}
                        fontSize="11"
                        fontWeight={isFiltered ? 'bold' : 'normal'}
                      >
                        {d.name}
                      </text>
                    </g>
                  );
                })}

                {/* 4. Active Catchment Linkage Lines */}
                {showCatchmentLines && activeCatchmentLinks.map((link, idx) => {
                  if (!link.communityLoc || !link.school.location) return null;
                  const x1 = lngToSvgX(link.communityLoc.lng);
                  const y1 = latToSvgY(link.communityLoc.lat);
                  const x2 = lngToSvgX(link.school.location.lng);
                  const y2 = latToSvgY(link.school.location.lat);
                  const midX = (x1 + x2) / 2;
                  const midY = (y1 + y2) / 2;

                  return (
                    <g key={`link-${idx}`}>
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#38bdf8"
                        strokeWidth="5"
                        opacity="0.3"
                        strokeLinecap="round"
                      />
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#60a5fa"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        className="animate-dash"
                      />
                      <g transform={`translate(${midX}, ${midY})`}>
                        <rect
                          x="-45"
                          y="-11"
                          width="90"
                          height="20"
                          rx="10"
                          fill="#1e293b"
                          stroke="#60a5fa"
                          strokeWidth="1"
                          opacity="0.9"
                        />
                        <text
                          x="0"
                          y="3"
                          textAnchor="middle"
                          fill="#e2e8f0"
                          fontSize="9.5"
                          fontWeight="bold"
                        >
                          🚶 {link.distanceMeters}m · {link.walkingMinutes}分
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* 5. Communities Layer */}
                {showCommunities && filteredCommunities.map((c) => {
                  const cx = lngToSvgX(c.location.lng);
                  const cy = latToSvgY(c.location.lat);
                  const isSelected = selectedCommunity?.id === c.id;
                  const isMatchedToSelectedSchool = selectedSchool && c.matchedSchoolId === selectedSchool.id;
                  const isHighRisk = c.riskLevel === 'high' || c.fiveYearRule;

                  return (
                    <g
                      key={c.id}
                      onClick={(e) => handleCommunityClick(c, e)}
                      className="cursor-pointer group"
                    >
                      {(isSelected || isMatchedToSelectedSchool) && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="12"
                          fill="none"
                          stroke={isHighRisk ? '#f97316' : '#10b981'}
                          strokeWidth="2"
                          className="radar-ring"
                        />
                      )}

                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 8 : isMatchedToSelectedSchool ? 7 : 5.5}
                        fill={isHighRisk ? '#ea580c' : '#059669'}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        className="transition-all hover:scale-125"
                      />

                      <circle cx={cx} cy={cy} r="1.8" fill="#ffffff" />

                      {(isSelected || isMatchedToSelectedSchool || zoom >= 2.2) && (
                        <text
                          x={cx}
                          y={cy + 14}
                          textAnchor="middle"
                          fill="#f1f5f9"
                          fontSize={isSelected ? '11' : '9.5'}
                          fontWeight={isSelected ? 'bold' : '500'}
                          className="drop-shadow-md pointer-events-none"
                        >
                          {c.communityName.split(' ')[0]}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* 6. Schools Layer (curated + real nearby schools) */}
                {showSchools && allDisplaySchools.map((school) => {
                  if (!school.location) return null;
                  const sx = lngToSvgX(school.location.lng);
                  const sy = latToSvgY(school.location.lat);
                  const isSelected = selectedSchool?.id === school.id;
                  const isMatchedToSelectedCommunity = selectedCommunity?.matchedSchoolId === school.id;
                  const isClosestToSearchedPOI = selectedSearchedPOI?.closestPrimary?.id === school.id;
                  const isHovered = hoveredSchoolId === school.id;

                  let pinColor = '#2563eb';
                  if (school.stage === 'kindergarten') pinColor = '#9333ea';
                  else if (school.stage === 'middle') pinColor = '#7c3aed';
                  else if (school.type === 'private') pinColor = '#d97706';
                  else if (school.type === 'bilingual') pinColor = '#0d9488';

                  return (
                    <g
                      key={school.id}
                      onClick={(e) => handleSchoolClick(school, e)}
                      className="cursor-pointer group"
                    >
                      {(isSelected || isMatchedToSelectedCommunity || isClosestToSearchedPOI || isHovered) && (
                        <circle
                          cx={sx}
                          cy={sy}
                          r="16"
                          fill="none"
                          stroke={isHovered ? '#6366f1' : pinColor}
                          strokeWidth="2.5"
                          className="radar-ring"
                        />
                      )}

                      <circle
                        cx={sx}
                        cy={sy}
                        r={isSelected || isClosestToSearchedPOI || isHovered ? 14 : 10}
                        fill={isHovered ? '#6366f1' : pinColor}
                        stroke="#ffffff"
                        strokeWidth={isSelected || isClosestToSearchedPOI || isHovered ? '3' : '2'}
                        className="transition-all hover:scale-125 shadow-lg"
                      />

                      <text
                        x={sx}
                        y={sy + 3.5}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize={isSelected ? '10' : '8'}
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {school.stage === 'kindergarten' ? '幼' : school.stage === 'middle' ? '初' : '学'}
                      </text>

                      {(isSelected || isMatchedToSelectedCommunity || isClosestToSearchedPOI || isHovered || zoom >= 1.6) && (
                        <g transform={`translate(${sx}, ${sy - (isSelected ? 20 : 16)})`}>
                          <rect
                            x={-school.shortName.length * 5.5 - 6}
                            y="-11"
                            width={school.shortName.length * 11 + 12}
                            height="18"
                            rx="9"
                            fill="#0f172a"
                            stroke={pinColor}
                            strokeWidth="1"
                            opacity="0.95"
                          />
                          <text
                            x="0"
                            y="2"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="10"
                            fontWeight="bold"
                          >
                            {school.shortName}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* 7. Dynamically Searched Real AMap Community Marker */}
                {selectedSearchedPOI && selectedSearchedPOI.location && (
                  <g>
                    <circle
                      cx={lngToSvgX(selectedSearchedPOI.location.lng)}
                      cy={latToSvgY(selectedSearchedPOI.location.lat)}
                      r="16"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      className="radar-ring"
                    />
                    <circle
                      cx={lngToSvgX(selectedSearchedPOI.location.lng)}
                      cy={latToSvgY(selectedSearchedPOI.location.lat)}
                      r="11"
                      fill="#059669"
                      stroke="#ffffff"
                      strokeWidth="3"
                      className="shadow-xl"
                    />
                    <text
                      x={lngToSvgX(selectedSearchedPOI.location.lng)}
                      y={latToSvgY(selectedSearchedPOI.location.lat) + 3.5}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      📍
                    </text>
                    <g transform={`translate(${lngToSvgX(selectedSearchedPOI.location.lng)}, ${latToSvgY(selectedSearchedPOI.location.lat) - 18})`}>
                      <rect
                        x={-selectedSearchedPOI.name.length * 6 - 8}
                        y="-12"
                        width={selectedSearchedPOI.name.length * 12 + 16}
                        height="20"
                        rx="10"
                        fill="#064e3b"
                        stroke="#10b981"
                        strokeWidth="1.5"
                        opacity="0.95"
                      />
                      <text
                        x="0"
                        y="2"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="10.5"
                        fontWeight="bold"
                      >
                        📍 {selectedSearchedPOI.name}
                      </text>
                    </g>
                  </g>
                )}

              </svg>
            </div>
          )}

          {/* 2. OFFICIAL AMAP ENGINE */}
          {mapEngine === 'amap' && (
            <div className={`w-full ${compactMode ? 'h-full min-h-[550px]' : 'h-[580px] sm:h-[660px]'} relative bg-slate-900`}>
              {!amapKey ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4">
                    <Key className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">高德地图尚未由运维配置</h3>
                  <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
                    为避免密钥泄露，高德 Web 端 Key 和安全密钥只能通过部署环境变量注入，不在浏览器中录入或保存。
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setIsKeyModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-lg transition-all cursor-pointer"
                    >
                      查看部署配置
                    </button>
                    <button
                      onClick={() => setMapEngine('builtin')}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 text-xs font-semibold shadow transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-emerald-400" />
                      切换至内置高精矢量沙盘（无需Key直接体验）
                    </button>
                  </div>
                </div>
              ) : amapLoadError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-4">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-rose-300">高德地图加载异常</h3>
                  <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
                    {amapLoadError}。请检查部署环境中的 Web端(JS API) Key、安全密钥与域名白名单，或切换至内置矢量底图。
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setIsKeyModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg transition-all cursor-pointer"
                    >
                      查看部署配置
                    </button>
                    <button
                      onClick={() => setMapEngine('builtin')}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 text-xs font-semibold shadow transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-emerald-400" />
                      切换至内置高精矢量沙盘（无需Key）
                    </button>
                  </div>
                </div>
              ) : (
                <div ref={amapContainerRef} className="w-full h-full" />
              )}
            </div>
          )}

        </div>

        {/* Sidebar Detail & Interactive Card */}
        {(!compactMode || selectedSearchedPOI || selectedCommunity || selectedSchool) && (
          <div className={compactMode 
            ? "absolute top-4 right-4 z-30 max-w-sm w-[90%] sm:w-96 max-h-[calc(100%-2rem)] overflow-y-auto space-y-3 drop-shadow-2xl" 
            : "lg:col-span-4 xl:col-span-3 space-y-4"
          }>
          
          {/* 1. Real AMap Searched Community Assessment Card */}
          {selectedSearchedPOI && (
            <div className="bg-white rounded-2xl p-5 border-2 border-emerald-500 shadow-xl relative animate-in fade-in slide-in-from-bottom-2 duration-200">
              <button
                onClick={() => {
                  setSelectedSearchedPOI(null);
                  setNearbySchoolsFromAMap(null);
                }}
                className="absolute right-3 top-3 p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                  高德实时定位小区
                </span>
                <span className="text-[11px] text-slate-400 font-medium truncate">
                  {selectedSearchedPOI.district}
                </span>
              </div>

              <h2 className="text-base font-black text-slate-900 leading-snug flex items-center gap-1.5">
                <span>📍</span>
                <span>{selectedSearchedPOI.name}</span>
              </h2>

              <p className="text-xs text-slate-500 mt-1 flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>{selectedSearchedPOI.address}</span>
              </p>

              {/* Community Housing Price Benchmark */}
              {selectedSearchedPOI.priceInfo && (
                <div className="mt-3 p-3 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/70 rounded-xl border border-amber-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-amber-950 font-bold text-xs">
                      <Coins className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>二手房行情参考</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                      {selectedSearchedPOI.priceInfo.priceTrendDesc || '行情企稳'}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-amber-900 tracking-tight">
                          {(selectedSearchedPOI.priceInfo.averagePrice / 10000).toFixed(1)}
                        </span>
                        <span className="text-xs font-bold text-amber-800">万/㎡</span>
                        <span className="text-[11px] text-slate-500 font-normal ml-1">
                          ({selectedSearchedPOI.priceInfo.priceRange})
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        主力总价：<strong className="text-slate-800 font-bold">{selectedSearchedPOI.priceInfo.totalPriceRange}</strong>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-amber-200 shadow-2xs">
                        {selectedSearchedPOI.priceInfo.propertyType}
                      </span>
                      <div>
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                          {selectedSearchedPOI.priceInfo.premiumTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Spatial Match: Closest Primary School */}
              <div className="mt-4 p-3.5 bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-xl border border-blue-200/80">
                <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    附近小学（非对口认定）
                  </span>
                  {selectedSearchedPOI.distanceToPrimary && (
                    <span className="text-blue-700 font-semibold bg-white px-2 py-0.5 rounded-md border border-blue-200 text-[10px] shadow-xs">
                      距此约 {selectedSearchedPOI.distanceToPrimary} 米 (步行约 {selectedSearchedPOI.walkingMinutesToPrimary} 分钟)
                    </span>
                  )}
                </div>

                {isLoadingNearbySchools ? (
                  <div className="text-xs text-blue-600 flex items-center gap-2 py-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    正在根据坐标计算附近学校...
                  </div>
                ) : selectedSearchedPOI.closestPrimary ? (
                  <div>
                    <div className="text-sm font-black text-blue-950 flex items-center justify-between">
                      <span>{selectedSearchedPOI.closestPrimary.name}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded">
                        {selectedSearchedPOI.closestPrimary.tier}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {selectedSearchedPOI.closestPrimary.district}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500">正在计算附近学校距离...</div>
                )}
              </div>

              {/* Other Nearby Primary Schools in this neighborhood */}
              {selectedSearchedPOI.nearbyPrimaries && selectedSearchedPOI.nearbyPrimaries.length > 1 && (
                <div className="mt-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-600 mb-1.5 flex items-center justify-between">
                    <span>周边其他小学地点 (2.5km内):</span>
                    <span className="text-[9px] text-slate-400">点击切换连线</span>
                  </div>
                  <div className="space-y-1.5 max-h-28 overflow-y-auto">
                    {selectedSearchedPOI.nearbyPrimaries.slice(1, 4).map((sch) => {
                      const dist = sch.location && selectedSearchedPOI.location 
                        ? getDistanceMeters(selectedSearchedPOI.location.lat, selectedSearchedPOI.location.lng, sch.location.lat, sch.location.lng)
                        : null;
                      return (
                        <div
                          key={sch.id}
                          onClick={() => {
                            setSelectedSchool(sch);
                            setSelectedSearchedPOI(prev => prev ? {
                              ...prev,
                              closestPrimary: sch,
                              distanceToPrimary: dist || prev.distanceToPrimary,
                              walkingMinutesToPrimary: dist ? Math.max(1, Math.round(dist / 75)) : prev.walkingMinutesToPrimary
                            } : null);
                          }}
                          className="p-1.5 rounded-lg bg-white hover:bg-blue-50 border border-slate-200/60 cursor-pointer text-xs flex items-center justify-between transition-colors"
                        >
                          <span className="font-medium text-slate-800 truncate">{sch.shortName}</span>
                          {dist && (
                            <span className="text-[10px] text-blue-600 font-semibold">
                              约 {dist} 米
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Closest Kindergarten Proximity */}
              {selectedSearchedPOI.closestKindergarten && (
                <div className="mt-2.5 p-3 bg-purple-50/60 rounded-xl border border-purple-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-purple-700 font-bold flex items-center gap-1">
                      <Baby className="w-3 h-3 text-purple-600" />
                      附近幼儿园地点
                    </div>
                    <div className="text-xs font-bold text-purple-950 mt-0.5">
                      {selectedSearchedPOI.closestKindergarten.shortName}
                    </div>
                  </div>
                  {selectedSearchedPOI.distanceToKindergarten && (
                    <span className="text-[10px] text-purple-800 bg-white font-medium px-2 py-0.5 rounded border border-purple-200">
                      约 {selectedSearchedPOI.distanceToKindergarten} 米
                    </span>
                  )}
                </div>
              )}

              {/* Policy & Catchment Guidance */}
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="p-2.5 bg-amber-50 text-amber-900 rounded-xl text-[11px] leading-relaxed border border-amber-200/60 flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">数据边界：</strong>
                    高德 GIS 只完成地点和距离计算，不能验证划片对口。请使用当年区教育局招生地段原文核对居委和门牌。
                  </div>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="mt-4 pt-2 flex gap-2">
                {selectedSearchedPOI.canSimulateAdmission && selectedSearchedPOI.matchedSchool && (
                  <button
                    onClick={() => onNavigateToSimulator(selectedSearchedPOI.matchedSchool!, `${selectedSearchedPOI.name} (${selectedSearchedPOI.district})`)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    入学条件核对
                  </button>
                )}
                {selectedSearchedPOI.closestPrimary && (
                  <button
                    onClick={() => onSelectSchool(selectedSearchedPOI.closestPrimary!)}
                    className="px-3.5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-medium"
                  >
                    学校档案
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 2. Curated Community Info Card */}
          {selectedCommunity && !selectedSearchedPOI && (
            <div className="bg-white rounded-2xl p-5 border-2 border-emerald-500/40 shadow-lg relative animate-in fade-in slide-in-from-bottom-2 duration-200">
              <button
                onClick={() => setSelectedCommunity(null)}
                className="absolute right-3 top-3 p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {selectedCommunity.verificationStatus === 'verified' ? '官方原文已核验' : '历史资料待核验'}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {selectedCommunity.district} · {selectedCommunity.subdistrict}
                </span>
              </div>

              <h2 className="text-base font-black text-slate-900 leading-snug">
                {selectedCommunity.communityName}
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                居委会: <span className="text-slate-700 font-medium">{selectedCommunity.neighborhoodCommittee}</span>
              </p>

              {/* Community Housing Price Benchmark */}
              {selectedCommunity.priceInfo?.evidenceStatus === 'verified' && (
                <div className="mt-3 p-3 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/70 rounded-xl border border-amber-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-amber-950 font-bold text-xs">
                      <Coins className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>二手房行情参考</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                      {selectedCommunity.priceInfo.priceTrendDesc || '行情企稳'}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-amber-900 tracking-tight">
                          {(selectedCommunity.priceInfo.averagePrice / 10000).toFixed(1)}
                        </span>
                        <span className="text-xs font-bold text-amber-800">万/㎡</span>
                        <span className="text-[11px] text-slate-500 font-normal ml-1">
                          ({selectedCommunity.priceInfo.priceRange})
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        主力总价：<strong className="text-slate-800 font-bold">{selectedCommunity.priceInfo.totalPriceRange}</strong>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-amber-200 shadow-2xs">
                        {selectedCommunity.priceInfo.propertyType} {selectedCommunity.priceInfo.buildYear ? `(${selectedCommunity.priceInfo.buildYear})` : ''}
                      </span>
                      <div>
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                          {selectedCommunity.priceInfo.premiumTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Counterpart primary school */}
              <div className="mt-4 p-3 bg-blue-50/80 rounded-xl border border-blue-100">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {selectedCommunity.verificationStatus === 'verified' ? '官方对口小学' : '历史资料关联小学（未核验）'}
                </div>
                <div className="text-sm font-bold text-blue-950 flex items-center justify-between">
                  <span>{selectedCommunity.schoolName}</span>
                  {selectedSchool?.location && (
                    <span className="text-xs bg-white text-blue-700 font-semibold px-2 py-0.5 rounded-lg border border-blue-200 shadow-sm">
                      约 {getDistanceMeters(
                        selectedCommunity.location.lat,
                        selectedCommunity.location.lng,
                        selectedSchool.location.lat,
                        selectedSchool.location.lng
                      )} 米
                    </span>
                  )}
                </div>
              </div>

              {/* Counterpart middle school */}
              <div className="mt-2 p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 space-y-1.5">
                <div className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{selectedCommunity.verificationStatus === 'verified' ? '官方对口初中' : '历史资料关联初中（未核验）'}</span>
                </div>
                <div>
                  <MiddleSchoolBadges
                    middleSchoolText={selectedCommunity.matchedMiddleSchool}
                    onSelectMiddleSchool={(school) => onSelectMiddleSchool?.(school)}
                  />
                </div>
              </div>

              {/* 5-Year Rule & Policy Warning */}
              {selectedCommunity.verificationStatus === 'verified' ? <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">五年一户限制:</span>
                  <span className={`font-bold ${selectedCommunity.fiveYearRule ? 'text-amber-600' : 'text-slate-700'}`}>
                    {selectedCommunity.fiveYearRule ? '严格执行五年一户' : '暂未预警 / 常规'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">建议入户年限:</span>
                  <span className="font-bold text-slate-800">
                    人户一致满 {selectedCommunity.yearsRequiredAdvice} 年以上
                  </span>
                </div>
                <div className="p-2.5 bg-amber-50 text-amber-900 rounded-xl text-[11px] leading-relaxed border border-amber-200/60">
                  <span className="font-bold">录取排位风险: </span>
                  {selectedCommunity.riskNote}
                </div>

                {/* Compact Oversubscription Fallback School (P1-4) */}
                <OversubscribedFallbackCard
                  schoolId={selectedCommunity.matchedSchoolId}
                  schoolName={selectedCommunity.schoolName}
                  compact={true}
                />
              </div> : <div className="mt-3 p-3 rounded-xl border border-amber-200 bg-amber-50 text-xs leading-relaxed text-amber-900">
                该记录尚未绑定招生年度、官方原文与复核日期，不展示学额限制、入户年限或录取风险，也不能启动条件核对。
              </div>}


              {/* Fast actions */}
              <div className="mt-4 pt-2 flex gap-2">
                {selectedSchool && selectedSchool.canSimulateAdmission === true && selectedCommunity.verificationStatus === 'verified' && (
                  <button
                    onClick={() => onNavigateToSimulator(selectedSchool, selectedCommunity || undefined)}
                    className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    入学条件核对
                  </button>
                )}
                {selectedSchool && (
                  <button
                    onClick={() => onSelectSchool(selectedSchool)}
                    className="px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-medium"
                  >
                    档案
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 3. Selected School Info Card */}
          {selectedSchool && !selectedCommunity && !selectedSearchedPOI && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-lg relative animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  selectedSchool.stage === 'kindergarten'
                    ? 'bg-purple-100 text-purple-800 border border-purple-200'
                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  {selectedSchool.stage === 'kindergarten' ? '幼儿园' : selectedSchool.stage === 'middle' ? '初中' : '小学'} · {selectedSchool.verificationStatus === 'verified' ? selectedSchool.tier : '详细资料待核验'}
                </span>

                <button
                  onClick={() => setSelectedSchool(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h2 className="text-base font-black text-slate-900 leading-snug">
                {selectedSchool.name}
              </h2>

              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                <span className="truncate">{selectedSchool.address}</span>
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {selectedSchool.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* School Summary Details */}
              {selectedSchool.verificationStatus === 'verified' ? <div className="bg-slate-50 rounded-xl p-3 space-y-2 text-xs border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">办学性质:</span>
                  <span className="font-bold text-slate-800">
                    {selectedSchool.type === 'public' ? '公办名校' : selectedSchool.type === 'private' ? '民办优质' : '双语国际'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">学费参考:</span>
                  <span className="font-bold text-blue-600">
                    {selectedSchool.tuition.isFree ? '公办免学费 / 普惠' : `${selectedSchool.tuition.amount.toLocaleString()} ${selectedSchool.tuition.unit}`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">五年一户:</span>
                  <span className={`font-bold ${selectedSchool.enrollment.hasFiveYearRule ? 'text-amber-600' : 'text-slate-700'}`}>
                    {selectedSchool.enrollment.hasFiveYearRule ? '严格执行' : '否 / 常规'}
                  </span>
                </div>
              </div> : <div className="bg-slate-50 rounded-xl p-3 text-xs leading-relaxed text-slate-600 border border-slate-200">
                当前仅展示学校名称、行政区与地图位置；性质、收费、招生规则、梯队和升学去向待官方来源核验。
              </div>}

              {/* Counterpart communities list */}
              <div className="mt-3">
                <div className="text-[11px] font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>历史/官方关系记录 (共 {CATCHMENTS_DATA.filter(c => c.matchedSchoolId === selectedSchool.id).length} 个):</span>
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  {CATCHMENTS_DATA.filter(c => c.matchedSchoolId === selectedSchool.id).map(comm => (
                    <div
                      key={comm.id}
                      onClick={() => setSelectedCommunity(comm)}
                      className="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/60 cursor-pointer text-xs flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-medium text-slate-800 truncate">{comm.communityName}</span>
                        {comm.priceInfo?.evidenceStatus === 'verified' && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60 shrink-0">
                            {(comm.priceInfo.averagePrice / 10000).toFixed(1)}万/㎡
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => onSelectSchool(selectedSchool)}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  查看学校完整全景档案
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => onToggleCompare(selectedSchool)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-medium border flex items-center justify-center gap-1 transition-colors ${
                      comparedSchools.some(s => s.id === selectedSchool.id)
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Scale className="w-3 h-3" />
                    {comparedSchools.some(s => s.id === selectedSchool.id) ? '移出PK' : '加入PK'}
                  </button>
                  <button
                    onClick={() => onToggleShortlist(selectedSchool)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-medium border flex items-center justify-center gap-1 transition-colors ${
                      shortlistedSchools.some(s => s.id === selectedSchool.id)
                        ? 'bg-rose-50 border-rose-300 text-rose-700 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {shortlistedSchools.some(s => s.id === selectedSchool.id) ? '已收藏' : '加权目标'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 4. Default Instructions Guide Card */}
          {!compactMode && !selectedCommunity && !selectedSchool && !selectedSearchedPOI && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-600" />
                <h2 className="text-sm font-bold text-slate-900">地图探索操作指南</h2>
              </div>
              
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">1</span>
                  <span><strong>搜索任意上海小区</strong>：在上方搜索框输入任意真实小区名（如中远两湾城、上海康城、古北香梅等），系统自动调用高德全量数据库并进行周边真实学校就近划片空间研判。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">2</span>
                  <span><strong>点击对口小区 (绿色圆点)</strong>：自动绘制光速通勤连线直达对口公办小学，显示步行米数与通勤时间。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">3</span>
                  <span><strong>点击学校 (方形圆角标)</strong>：一键点亮该校覆盖的所有划片小区，查看完整对口初中闭环。</span>
                </li>
              </ul>

              {/* Legend */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-500 mb-2">地图图例 (Legend)</div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                    <span>公办小学</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-purple-600" />
                    <span>示范幼儿园</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-600" />
                    <span>优质民办校</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-600" />
                    <span>划片对口小区</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        )}

      </div>

      {/* AMap API Key Configuration Modal */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">高德地图部署配置</h3>
                  <p className="text-xs text-slate-500">密钥由运维注入，页面不接收、不保存用户密钥</p>
                </div>
              </div>
              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 mb-4 text-xs text-slate-600 space-y-2 border border-slate-200">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                运维配置方法：
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
                <li>在高德开放平台创建 <strong>Web端 (JS API)</strong> Key，并限定正式域名。</li>
                <li>设置 <strong>VITE_AMAP_WEB_KEY</strong> 和 <strong>VITE_AMAP_SECURITY_CODE</strong>。</li>
                <li>重新构建发布；高德招生关系不应由 POI 自动推导。</li>
              </ol>
            </div>

            <button
              type="button"
              onClick={() => setIsKeyModalOpen(false)}
              className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              知道了
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
