'use client';

import { WandSparkles, Sparkles, ChevronDown, Paperclip, Figma, ArrowUp, Search, ArrowRight, Shuffle, Eye, RotateCcw, X, FileText, Code } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const [isPromptBuilderOpen, setIsPromptBuilderOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const figmaModalRef = useRef<HTMLDivElement>(null);
  const promptBuilderRef = useRef<HTMLDivElement>(null);

  // Refs for scroll-triggered animations
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // State for selected options in Prompt Builder
  const [selectedLayoutType, setSelectedLayoutType] = useState<string>('');
  const [selectedLayoutConfig, setSelectedLayoutConfig] = useState<string>('');
  const [selectedFraming, setSelectedFraming] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [selectedAccentColor, setSelectedAccentColor] = useState<string>('');
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<string>('');
  const [selectedBorderColor, setSelectedBorderColor] = useState<string>('');
  const [selectedShadow, setSelectedShadow] = useState<string>('');
  const [selectedTypefaceFamily, setSelectedTypefaceFamily] = useState<string>('');
  const [selectedHeadingFont, setSelectedHeadingFont] = useState<string>('');
  const [selectedBodyFont, setSelectedBodyFont] = useState<string>('');
  const [selectedHeadingSize, setSelectedHeadingSize] = useState<string>('');
  const [selectedSubheadingSize, setSelectedSubheadingSize] = useState<string>('');
  const [selectedBodyTextSize, setSelectedBodyTextSize] = useState<string>('');
  const [selectedHeadingWeight, setSelectedHeadingWeight] = useState<string>('');
  const [selectedHeadingSpacing, setSelectedHeadingSpacing] = useState<string>('');
  const [selectedAnimationType, setSelectedAnimationType] = useState<string>('');
  const [selectedScene, setSelectedScene] = useState<string>('');
  const [selectedTiming, setSelectedTiming] = useState<string>('');
  const [selectedIterations, setSelectedIterations] = useState<string>('');
  const [selectedDirection, setSelectedDirection] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Reset function to clear all selected states
  const resetAllSelections = () => {
    setSelectedLayoutType('');
    setSelectedLayoutConfig('');
    setSelectedFraming('');
    setSelectedStyle('');
    setSelectedTheme('');
    setSelectedAccentColor('');
    setSelectedBackgroundColor('');
    setSelectedBorderColor('');
    setSelectedShadow('');
    setSelectedTypefaceFamily('');
    setSelectedHeadingFont('');
    setSelectedBodyFont('');
    setSelectedHeadingSize('');
    setSelectedSubheadingSize('');
    setSelectedBodyTextSize('');
    setSelectedHeadingWeight('');
    setSelectedHeadingSpacing('');
    setSelectedAnimationType('');
    setSelectedScene('');
    setSelectedTiming('');
    setSelectedIterations('');
    setSelectedDirection('');
  };

  // Helper function to get button styling based on selection
  const getButtonStyling = (section: string, option: string) => {
    const isSelected = (() => {
      switch (section) {
        case 'layoutType': return selectedLayoutType === option;
        case 'layoutConfig': return selectedLayoutConfig === option;
        case 'framing': return selectedFraming === option;
        case 'style': return selectedStyle === option;
        case 'theme': return selectedTheme === option;
        case 'accentColor': return selectedAccentColor === option;
        case 'backgroundColor': return selectedBackgroundColor === option;
        case 'borderColor': return selectedBorderColor === option;
        case 'shadow': return selectedShadow === option;
        case 'typefaceFamily': return selectedTypefaceFamily === option;
        case 'headingFont': return selectedHeadingFont === option;
        case 'bodyFont': return selectedBodyFont === option;
        case 'headingSize': return selectedHeadingSize === option;
        case 'subheadingSize': return selectedSubheadingSize === option;
        case 'bodyTextSize': return selectedBodyTextSize === option;
        case 'headingWeight': return selectedHeadingWeight === option;
        case 'headingSpacing': return selectedHeadingSpacing === option;
        case 'animationType': return selectedAnimationType === option;
        case 'scene': return selectedScene === option;
        case 'timing': return selectedTiming === option;
        case 'iterations': return selectedIterations === option;
        case 'direction': return selectedDirection === option;
        default: return false;
      }
    })();

    if (isSelected) {
      return {
        buttonClass: "relative group flex flex-col items-center w-20 h-[75px] rounded-lg bg-blue-500 bg-opacity-10 border border-blue-500 transition-colors",
        textClass: "text-[10px] truncate w-[75px] text-center text-blue-500",
        previewStyle: { backgroundColor: 'rgb(59, 130, 246)', opacity: 1 }
      };
    } else {
      return {
        buttonClass: "relative group flex flex-col items-center w-20 h-[75px] rounded-lg bg-neutral-400 bg-opacity-5 hover:bg-opacity-10 border border-neutral-400 border-opacity-10 transition-colors",
        textClass: "text-[10px] truncate w-[75px] text-center text-neutral-700 dark:text-neutral-300",
        previewStyle: {}
      };
    }
  };

  useEffect(() => {
    // Trigger page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (figmaModalRef.current && !figmaModalRef.current.contains(event.target as Node)) {
        setIsFigmaModalOpen(false);
      }
      if (promptBuilderRef.current && !promptBuilderRef.current.contains(event.target as Node)) {
        setIsPromptBuilderOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="flex-grow container max-w-6xl mx-auto px-4 py-12 pt-48">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className={`flex justify-center my-8 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block p-2">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div className="text-center space-y-2">
                <h1 className="font-[500] tracking-tighter text-4xl sm:text-5xl md:text-6xl text-white">
                  <span className="block">
                    <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '100ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>Create</span>
                    <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '180ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>beautiful</span>
                    <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '260ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>designs</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className={`flex flex-col items-center max-w-2xl mx-auto transition-all duration-1000 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center my-0">
            <div className="relative inline-block p-2">
              <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
              <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
              <div className="relative pointer-events-auto">
                <p className="text-lg max-w-4xl mx-auto text-center text-neutral-700 dark:text-neutral-300 font-thin">
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '300ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>Generate</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '380ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>site</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '460ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>designs</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '540ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>in</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '620ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>seconds.</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '700ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>Refine</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '780ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>with</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '860ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>powerful</span>
                  <span className="inline-block opacity-0 blur-sm transform translate-y-4 transition-all duration-700 mr-[0.3em]" style={{ transitionDelay: '940ms', transitionProperty: 'opacity, filter, transform', opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}>edits.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Input Form */}
          <div className={`flex w-full my-8 transition-all duration-1000 ease-out delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-full p-4 bg-neutral-50 dark:bg-neutral-900">
              <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
              <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
              <div className="absolute w-0 border-l border-black/5 dark:border-white/5 top-0 bottom-0 left-0 pointer-events-none" style={{ height: '4000px', marginTop: '-2000px' }}></div>
              <div className="absolute w-0 border-r border-black/5 dark:border-white/5 top-0 bottom-0 right-0 pointer-events-none" style={{ height: '4000px', marginTop: '-2000px' }}></div>
              <div className="relative pointer-events-auto">
                <div className="opacity-0 transform translate-y-4 transition-all duration-700" style={{ transitionDelay: '500ms', transitionProperty: 'opacity, transform', opacity: 1, transform: 'translateY(0px)' }}>
                  <form className="space-y-6">
                    <div className="relative">
                      <textarea
                        placeholder="Create something beautiful..."
                        className="min-h-[120px] w-full min-w-[300px] max-w-[720px] max-h-[400px] overflow-y-auto textarea-custom pb-[40px] cursor-text focus:outline-none"
                        style={{
                          height: '120px',
                          borderRadius: '12px',
                          backgroundColor: '#121212',
                          borderColor: '#252525',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          padding: '16px',
                          paddingTop: '16px',
                          paddingBottom: '40px',
                          color: 'white'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#252525';
                        }}
                      ></textarea>

                      <div className="absolute bottom-[14px] left-[9px] z-10 flex gap-2">
                        <button
                          type="button"
                          className="flex p-2 py-1 gap-2 items-center text-[10px] rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-border/50 hover:border-border/70 hover:bg-blue-500/5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                          title="Open Prompt Builder"
                          onClick={() => setIsPromptBuilderOpen(true)}
                        >
                          <WandSparkles className="h-3 w-3" />
                          <span className="hidden sm:block">Prompt Builder</span>
                        </button>

                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            className="flex items-center rounded-lg bg-white dark:bg-neutral-900 border border-transparent dark:border-border/50 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 py-1 gap-2 text-[10px] hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-border/70 hover:bg-blue-500/5"
                            title="Select AI Model"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <Sparkles className="h-3 w-3" />
                            Gemini 2.5 Pro
                            <ChevronDown className={`h-3 w-3 ml-0.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 z-50 overflow-hidden border border-black/20 dark:border-white/10 bg-white dark:bg-neutral-900 p-1 text-neutral-900 dark:text-neutral-100 shadow-md rounded-xl min-w-[225px]">
                              <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                <div className="flex items-center justify-between w-full text-xs py-1">
                                  <div className="flex items-center gap-2">
                                    <Sparkles className="h-3 w-3" />
                                    GPT-5
                                  </div>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">Best for UI</span>
                                </div>
                              </div>
                              <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                <div className="flex items-center justify-between w-full text-xs py-1">
                                  <div className="flex items-center gap-2">
                                    <Sparkles className="h-3 w-3" />
                                    Claude 4.5
                                  </div>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">Best for Coding</span>
                                </div>
                              </div>
                              <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                <div className="flex items-center gap-2 text-xs py-1 font-medium">
                                  <Sparkles className="h-3 w-3" />
                                  Gemini 2.5 Pro
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <button type="button" className="flex p-2 py-1 gap-2 items-center text-[10px] rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-border/50 hover:border-border/70 hover:bg-blue-500/5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" title="Attach Files (Max 2)">
                          <Paperclip className="h-3 w-3" />
                          <span className="hidden sm:block">Attach</span>
                        </button>

                        <button
                          type="button"
                          className="flex p-2 py-1 items-center text-[10px] rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-border/50 hover:border-border/70 hover:bg-blue-500/5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                          title="Import from Figma"
                          onClick={() => setIsFigmaModalOpen(true)}
                        >
                          <Figma className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="absolute bottom-[14px] right-[9px]">
                        <button
                          type="button"
                          onClick={() => router.push('/chat-interaction')}
                          className="flex p-[5px] pb-[6px] items-center text-sm rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-border/50 hover:border-border/70 hover:bg-blue-500/5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                        >
                          <ArrowUp className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Chats Section */}
        <div
          ref={(el) => { sectionRefs.current['recent-chats'] = el; }}
          data-section-id="recent-chats"
          className={`flex w-full my-8 transition-all duration-1000 ease-out ${visibleSections.has('recent-chats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative w-full p-4 bg-neutral-50/30 dark:bg-neutral-900/30">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute w-0 border-l border-black/5 dark:border-white/5 top-0 bottom-0 left-0 pointer-events-none" style={{ height: '4000px', marginTop: '-2000px' }}></div>
            <div className="absolute w-0 border-r border-black/5 dark:border-white/5 top-0 bottom-0 right-0 pointer-events-none" style={{ height: '4000px', marginTop: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div className="opacity-0 transform translate-y-4 transition-all duration-700" style={{ transitionDelay: '900ms', transitionProperty: 'opacity, transform', opacity: 1, transform: 'translateY(0px)' }}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center gap-2">
                    <button className="text-lg font-medium tracking-tight text-foreground">Recent Chats</button>
                    <button className="text-lg font-medium tracking-tight ml-2 md:ml-4 hidden sm:block text-neutral-500 hover:text-foreground">Iterations</button>
                  </div>
                  <div className="relative ml-auto max-w-xs sm:max-w-sm md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400 z-10" />
                    <input
                      type="text"
                      placeholder="Search 4 chats..."
                      className="w-full pl-10 pr-4 py-1.5 bg-white/70 dark:bg-black/20 border border-neutral-200/80 dark:border-neutral-800/80 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-neutral-500 dark:placeholder-neutral-400 max-w-xs"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {/* Chat Cards */}
                  <button className={`p-3 border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-start gap-3 text-left group ${visibleSections.has('recent-chats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-700 ease-out`} style={{ transitionDelay: visibleSections.has('recent-chats') ? '100ms' : '0ms' }}>
                    <div className="flex-shrink-0 w-[100px] h-[75px] rounded-lg overflow-hidden bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300/50 dark:border-neutral-700/50">
                      <Image
                        src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/chat-thumbnails/09b963a1-bb0c-46ce-9543-8755c01bd278/9faef839-8d99-4f09-9e05-3b184069dedb_320w.jpg"
                        alt="Tic-Tac-Toe Game Template"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={100}
                        height={75}
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-xs text-left font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" title="Tic-Tac-Toe Game Template">Tic-Tac-Toe Game Template</p>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-1">Jul 16, 2:18 PM</p>
                    </div>
                  </button>

                  <button className={`p-3 border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-start gap-3 text-left group ${visibleSections.has('recent-chats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-700 ease-out`} style={{ transitionDelay: visibleSections.has('recent-chats') ? '200ms' : '0ms' }}>
                    <div className="flex-shrink-0 w-[100px] h-[75px] rounded-lg overflow-hidden bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300/50 dark:border-neutral-700/50">
                      <Image
                        src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/chat-thumbnails/09b963a1-bb0c-46ce-9543-8755c01bd278/22e6c63e-b3a7-42aa-a76f-6400b1ccd0c5_320w.jpg"
                        alt="Auric Realtime Backend Landing Page Template"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={100}
                        height={75}
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-xs text-left font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" title="Auric Realtime Backend Landing Page Template">Auric Realtime Backend Landing Page Template</p>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-1">Jul 16, 1:50 PM</p>
                    </div>
                  </button>

                  <button className={`p-3 border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-start gap-3 text-left group ${visibleSections.has('recent-chats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-700 ease-out`} style={{ transitionDelay: visibleSections.has('recent-chats') ? '300ms' : '0ms' }}>
                    <div className="flex-shrink-0 w-[100px] h-[75px] rounded-lg overflow-hidden bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300/50 dark:border-neutral-700/50">
                      <Image
                        src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/chat-thumbnails/09b963a1-bb0c-46ce-9543-8755c01bd278/1da9bbb8-a059-4b64-bce9-2ff92f9299f4_320w.jpg"
                        alt="NEXA UX Research Landing Page Template"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={100}
                        height={75}
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-xs text-left font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" title="NEXA UX Research Landing Page Template">NEXA UX Research Landing Page Template</p>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-1">Jul 14, 1:31 PM</p>
                    </div>
                  </button>

                  <button className={`p-3 border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-start gap-3 text-left group ${visibleSections.has('recent-chats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} duration-700 ease-out`} style={{ transitionDelay: visibleSections.has('recent-chats') ? '400ms' : '0ms' }}>
                    <div className="flex-shrink-0 w-[100px] h-[75px] rounded-lg overflow-hidden bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300/50 dark:border-neutral-700/50">
                      <Image
                        src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/chat-thumbnails/09b963a1-bb0c-46ce-9543-8755c01bd278/186ceccf-c632-4fc2-b070-7ceebe2c84c9_320w.jpg"
                        alt="QuickBite Food Delivery Landing Page Template"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={100}
                        height={75}
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-xs text-left font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" title="QuickBite Food Delivery Landing Page Template">QuickBite Food Delivery Landing Page Template</p>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-1">Jul 2, 10:48 PM</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div
          ref={(el) => { sectionRefs.current['trending'] = el; }}
          data-section-id="trending"
          className={`flex w-full my-8 transition-all duration-1000 ease-out ${visibleSections.has('trending') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative w-full p-4 bg-neutral-50/30 dark:bg-neutral-900/30">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium tracking-tight text-left text-white">Trending</h2>
                  <button className="button-secondary flex items-center gap-1">
                    <span>Browse Trending</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Trending Cards */}
                  <div className={`w-full transition-all duration-700 ease-out ${visibleSections.has('trending') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: visibleSections.has('trending') ? '100ms' : '0ms' }}>
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/loopi-music.png?t=1760333259733"
                          alt="Preview for Loopi Music Streaming Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Loopi Music Streaming Landing Page Template</p>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Loopi Music Streaming Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>258</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Trending Card */}
                  <div className={`w-full transition-all duration-700 ease-out ${visibleSections.has('trending') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: visibleSections.has('trending') ? '200ms' : '0ms' }}>
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/aura-ai.png?t=1760632187924"
                          alt="Preview for Aura AI Site Builder Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Aura AI Site Builder Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Aura AI Site Builder Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>63</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Trending Card */}
                  <div className={`w-full transition-all duration-700 ease-out ${visibleSections.has('trending') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: visibleSections.has('trending') ? '300ms' : '0ms' }}>
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/sense-charity.png?t=1758518124329"
                          alt="Preview for Sense Charity & Impact Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Sense Charity & Impact Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Sense Charity & Impact Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>1.3k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Featured Section */}
        <div
          ref={(el) => { sectionRefs.current['recently-featured'] = el; }}
          data-section-id="recently-featured"
          className={`flex w-full my-8 transition-all duration-1000 ease-out ${visibleSections.has('recently-featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative w-full p-4 bg-neutral-50/30 dark:bg-neutral-900/30">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium tracking-tight text-left text-white">Recently Featured</h2>
                  <button className="button-secondary flex items-center gap-1">
                    <span>Browse Featured</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Featured Cards */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/aura-ai.png?t=1760632187924"
                          alt="Preview for Aura AI Site Builder Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Aura AI Site Builder Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Aura AI Site Builder Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>63</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Featured Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/sense-charity.png?t=1758518124329"
                          alt="Preview for Sense Charity & Impact Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Sense Charity & Impact Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Sense Charity & Impact Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>1.3k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Featured Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/travel-planning-app.png?t=1759040140393"
                          alt="Preview for Travel Planning App Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Travel Planning App Template</p>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Travel Planning App Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>646</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Web Section */}
        <div
          ref={(el) => { sectionRefs.current['popular-web'] = el; }}
          data-section-id="popular-web"
          className={`flex w-full my-8 transition-all duration-1000 ease-out ${visibleSections.has('popular-web') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative w-full p-4 bg-neutral-50/30 dark:bg-neutral-900/30">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium tracking-tight text-left text-white">Popular Web</h2>
                  <button className="button-secondary flex items-center gap-1">
                    <span>Browse Web</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Web Cards */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/sense-charity.png?t=1758518124329"
                          alt="Preview for Sense Charity & Impact Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Sense Charity & Impact Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Sense Charity & Impact Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>1.3k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Web Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/aura-ai.png?t=1760632187924"
                          alt="Preview for Aura AI Site Builder Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Aura AI Site Builder Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Aura AI Site Builder Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>63</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Web Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/loopi-music.png?t=1760333259733"
                          alt="Preview for Loopi Music Streaming Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Loopi Music Streaming Landing Page Template</p>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Loopi Music Streaming Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>258</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Mobile Section */}
        <div
          ref={(el) => { sectionRefs.current['popular-mobile'] = el; }}
          data-section-id="popular-mobile"
          className={`flex w-full my-8 transition-all duration-1000 ease-out ${visibleSections.has('popular-mobile') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative w-full p-4 bg-neutral-50/30 dark:bg-neutral-900/30">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium tracking-tight text-left text-white">Popular Mobile</h2>
                  <button className="button-secondary flex items-center gap-1">
                    <span>Browse Mobile</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Mobile Cards */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/travel-planning-app.png?t=1759040140393"
                          alt="Preview for Travel Planning App Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Travel Planning App Template</p>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Travel Planning App Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>646</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Mobile Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/aura-ai.png?t=1760632187924"
                          alt="Preview for Aura AI Site Builder Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Aura AI Site Builder Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Aura AI Site Builder Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>63</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Mobile Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/sense-charity.png?t=1758518124329"
                          alt="Preview for Sense Charity & Impact Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Sense Charity & Impact Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Sense Charity & Impact Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>1.3k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Animation Section */}
        <div
          ref={(el) => { sectionRefs.current['popular-animation'] = el; }}
          data-section-id="popular-animation"
          className={`flex w-full my-8 transition-all duration-1000 ease-out ${visibleSections.has('popular-animation') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative w-full p-4 bg-neutral-50/30 dark:bg-neutral-900/30">
            <div className="absolute h-0 border-t border-black/5 dark:border-white/5 top-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="absolute h-0 border-b border-black/5 dark:border-white/5 bottom-0 left-0 right-0 pointer-events-none" style={{ width: '4000px', marginLeft: '-2000px' }}></div>
            <div className="relative pointer-events-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium tracking-tight text-left text-white">Popular Animation</h2>
                  <button className="button-secondary flex items-center gap-1">
                    <span>Browse Animation</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Animation Cards */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/beam-photo.png?t=1759315402428"
                          alt="Preview for Photo Sharing Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Photo Sharing Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Photo Sharing Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>734</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Animation Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/aura-ai.png?t=1760632187924"
                          alt="Preview for Aura AI Site Builder Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Aura AI Site Builder Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Aura AI Site Builder Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>63</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Animation Card */}
                  <div className="w-full">
                    <div className="w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 bg-white/20 dark:bg-black/20 group flex flex-col transition-all">
                      <div className="relative overflow-hidden cursor-pointer rounded-xl aspect-[4/3]">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/preview-images/sense-charity.png?t=1758518124329"
                          alt="Preview for Sense Charity & Impact Landing Page Template"
                          className="w-full h-full object-cover object-top transition-transform duration-300 rounded-xl"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-black dark:text-white truncate font-medium flex-1">Sense Charity & Impact Landing Page Template</p>
                          <span className="text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded-md font-normal cursor-help">PRO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4 mr-1.5 bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-1 hover:ring-black/10 dark:hover:ring-white/10 transition-all">
                            </span>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-[60px] sm:max-w-[86px] 2xl:max-w-none hidden sm:block">Satadru Debnath</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="flex items-center text-[10px] text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" title="Remix &quot;Sense Charity & Impact Landing Page Template&quot;" type="button">
                              <Shuffle className="h-3 w-3 mr-1" />
                              Remix
                            </button>
                            <span className="hidden sm:block text-[8px] text-neutral-300 dark:text-neutral-700 mx-0.5">•</span>
                            <div className="flex items-center text-[10px] text-neutral-500">
                              <Eye className="h-3 w-3 text-neutral-500 mr-1 opacity-30" />
                              <span>1.3k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Figma Modal */}
      {isFigmaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            ref={figmaModalRef}
            className="z-50 border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-md rounded-2xl w-[400px] p-0"
          >
            <div className="flex flex-col">
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                <h3 className="font-medium text-xs text-neutral-500 dark:text-neutral-400 uppercase">Import Figma Design</h3>
              </div>

              <div className="p-4 max-h-[400px] overflow-y-auto space-y-4">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  <p>In Figma, select any Frame and right-click / Copy/Paste as / <strong>Copy link to selection</strong>. Do NOT use Command + L since that will copy the entire Figma file.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-500 dark:text-neutral-400 font-medium" htmlFor="figma-url">Figma URL</label>
                  <input
                    className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500/50"
                    id="figma-url"
                    placeholder="https://www.figma.com/design/KEY/NAME"
                  />
                </div>

                {/* <div className="space-y-2">
                  <div className="border-t border-neutral-200 dark:border-neutral-700 my-2"></div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-neutral-500 dark:text-neutral-400 font-medium" htmlFor="api-token">Figma API Token</label>
                    <div className="flex items-center gap-2">
                      <label className="font-medium text-xs text-neutral-500 dark:text-neutral-400" htmlFor="use-default">Default token</label>
                      <button
                        type="button"
                        className="inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        <span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform translate-x-5"></span>
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Your personal token may be needed for private files.</p>
                </div> */}
              </div>

              <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-end gap-2">
                <button
                  className="text-xs button-secondary"
                  onClick={() => setIsFigmaModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  disabled
                  className="button-primary opacity-50 cursor-not-allowed"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prompt Builder Modal */}
      {isPromptBuilderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            ref={promptBuilderRef}
            className="z-50 border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-md rounded-2xl w-[90vw] max-w-[1200px] h-[80vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 py-2 px-4 bg-neutral-100 dark:bg-neutral-900 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <h2 className="text-xs uppercase font-medium text-neutral-700 dark:text-neutral-300">Prompt Builder</h2>
                <button
                  className="text-[10px] text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-md px-2 py-0.5 flex items-center"
                  onClick={resetAllSelections}
                >
                  <RotateCcw className="mr-1 opacity-50" size={8} />
                  Reset
                </button>
              </div>
              <button
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-full p-1"
                onClick={() => setIsPromptBuilderOpen(false)}
              >
                <X size={12} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left Side (50%) */}
              <div className="w-1/2 border-r border-neutral-200 dark:border-neutral-800 overflow-y-auto">
                {/* Adapt Options */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  <div className="flex gap-2 mb-2 mt-4">
                    <div className="flex-1 ml-4 p-2 border rounded-lg font-mono cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.02)] dark:shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FileText className="hidden lg:block mr-2 text-neutral-500 dark:text-neutral-400" size={16} />
                          <span className="text-[10px] sm:text-[11px] lg:text-xs">Adapt from Template</span>
                        </div>
                        <ChevronDown className="text-neutral-500 dark:text-neutral-400 transform transition-transform duration-200" size={16} />
                      </div>
                    </div>
                    <div className="flex-1 p-2 mr-4 border rounded-lg font-mono cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.02)] dark:shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Code className="hidden lg:block mr-2 text-neutral-500 dark:text-neutral-400" size={16} />
                          <span className="text-[10px] sm:text-[11px] lg:text-xs">Adapt from HTML</span>
                        </div>
                        <ChevronDown className="text-neutral-500 dark:text-neutral-400 transform transition-transform duration-200" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layout Type Section */}
                <div className="pt-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-2.5">
                      <div className="flex items-center">
                        <div className="flex items-center cursor-pointer">
                          <ChevronDown className="text-neutral-500 dark:text-neutral-400 transform transition-transform duration-200 mr-2 rotate-0" size={16} />
                          <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">Layout Type</span>
                        </div>
                        <div className="ml-auto mr-4">
                          <div className="flex items-center text-[10px] font-medium bg-neutral-100 dark:bg-neutral-900 px-[2px] py-[2px] rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700">
                            <button className="px-2 py-0.5 text-[10px] rounded-md button-primary text-white">Web</button>
                            <button className="px-2 py-0.5 text-[10px] rounded-md text-neutral-700 dark:text-neutral-300">Mobile</button>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-auto pb-2 hide-scrollbar">
                        <div className="flex gap-3 px-4 py-1 min-w-max">
                          {/* Layout Type Buttons */}
                          {['Hero', 'Features', 'Onboarding', 'Docs', 'Updates', 'Portfolio', 'Pricing', 'Gallery', 'Dashboard', 'Login', 'Email', 'Testimonials', 'Payment', 'Footer', 'FAQ', 'Explore', 'Settings', 'About', 'Blog', 'Video', 'Landing Page'].map((type) => {
                            const styling = getButtonStyling('layoutType', type);
                            return (
                              <button
                                key={type}
                                className={styling.buttonClass}
                                onClick={() => setSelectedLayoutType(selectedLayoutType === type ? '' : type)}
                              >
                                <div className="relative w-[68px] h-10 mt-2 mb-1">
                                  <div className="w-full h-full p-1 flex items-center justify-center">
                                    <div className="w-full h-full flex flex-col gap-0.5 opacity-100 dark:opacity-30">
                                      <div className="rounded-sm h-1/4 flex-1" style={{ backgroundColor: 'rgb(209, 213, 219)', opacity: 0.4, ...styling.previewStyle }}></div>
                                      <div className="rounded-sm h-2/4 flex-1" style={{ backgroundColor: 'rgb(209, 213, 219)', opacity: 0.7, ...styling.previewStyle }}></div>
                                      <div className="rounded-sm h-1/4 flex-1" style={{ backgroundColor: 'rgb(209, 213, 219)', opacity: 0.5, ...styling.previewStyle }}></div>
                                    </div>
                                  </div>
                                </div>
                                <span className={styling.textClass}>{type}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Layout Configuration */}
                    <div className="flex flex-col space-y-2.5">
                      <div className="flex items-center">
                        <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Layout Configuration</span>
                      </div>
                      <div className="overflow-x-auto pb-2 hide-scrollbar">
                        <div className="flex gap-3 px-4 py-1 min-w-max">
                          {/* Layout Config Buttons */}
                          {['Card', 'List', '2-2 Square', 'Table', 'Sidebar Left', 'Sidebar Right', '1-1 Split', '1-1 Vertical', '1/3 2/3 Bento', '2/3 1/3 Bento', '1×4 Bento', 'Feature Bento', 'Featured Right', 'Featured Top', '1/4 2/4 1/4 Bento', '2/4 1/4 1/4 Bento', '2-1 Split', '1-2 Split', '1-1-1 Equal', 'Header Focus', '3-3 Grid', 'Carousel', 'Modal', 'Alert'].map((config) => {
                            const styling = getButtonStyling('layoutConfig', config);
                            return (
                              <button
                                key={config}
                                className={styling.buttonClass}
                                onClick={() => setSelectedLayoutConfig(selectedLayoutConfig === config ? '' : config)}
                              >
                                <div className="relative w-[42px] h-[42px] mt-2 mb-1">
                                  <div className="w-full h-full p-0.5 flex items-center justify-center">
                                    <div className="w-full h-full flex flex-col gap-0.5 opacity-100 dark:opacity-30">
                                      <div className="w-full h-full flex items-center justify-center p-1">
                                        <div className="rounded-sm h-4/5 w-4/5 !rounded" style={{ backgroundColor: 'rgb(209, 213, 219)', opacity: 0.7, ...styling.previewStyle }}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span className={styling.textClass}>{config}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Framing */}
                    <div className="flex flex-col space-y-2.5">
                      <div className="flex items-center">
                        <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Framing</span>
                      </div>
                      <div className="overflow-x-auto pb-2 hide-scrollbar">
                        <div className="flex gap-3 px-4 py-1 min-w-max">
                          {/* Framing Buttons */}
                          {['Full Screen', 'Card', 'Browser', 'Mac App', 'Clay Web'].map((framing) => {
                            const styling = getButtonStyling('framing', framing);
                            return (
                              <button
                                key={framing}
                                className={styling.buttonClass}
                                onClick={() => setSelectedFraming(selectedFraming === framing ? '' : framing)}
                              >
                                <div className="relative w-[68px] h-10 mt-2 mb-1">
                                  <div className="w-full h-full p-1 flex items-center justify-center">
                                    <div className="w-full h-full flex flex-col gap-0.5 opacity-100 dark:opacity-30">
                                      <div className="rounded-sm flex-1 flex-1" style={{ backgroundColor: 'rgb(209, 213, 219)', opacity: 0.7, ...styling.previewStyle }}></div>
                                    </div>
                                  </div>
                                </div>
                                <span className={styling.textClass}>{framing}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Style Section */}
                    <div className="pt-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                      <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <div className="flex items-center cursor-pointer">
                              <ChevronDown className="text-neutral-500 dark:text-neutral-400 transform transition-transform duration-200 mr-2 rotate-0" size={16} />
                              <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">Style</span>
                            </div>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Style Buttons */}
                              {[
                                { name: 'Flat', style: { backgroundColor: 'rgb(209, 213, 219)', opacity: 0.7 } },
                                { name: 'Outline', style: { border: '1px solid rgb(209, 213, 219)', opacity: 0.7 } },
                                { name: 'Minimalist', style: { backgroundColor: 'rgb(209, 213, 219)', opacity: 0.2 } },
                                { name: 'Glass', style: { border: '1px solid rgb(209, 213, 219)', opacity: 0.7 } },
                                { name: 'iOS', style: { backgroundColor: 'rgb(209, 213, 219)', opacity: 0.7 } },
                                { name: 'Material', style: { backgroundColor: 'rgb(209, 213, 219)', opacity: 0.7 } }
                              ].map((style) => {
                                const styling = getButtonStyling('style', style.name);
                                return (
                                  <button
                                    key={style.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedStyle(selectedStyle === style.name ? '' : style.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex flex-col gap-0.5 opacity-100 dark:opacity-30">
                                        <div className="rounded-sm h-4" style={{ ...style.style, ...styling.previewStyle }}></div>
                                        <div className="rounded-sm h-2" style={{ ...style.style, opacity: 0.5, ...styling.previewStyle }}></div>
                                        <div className="rounded-sm h-2" style={{ ...style.style, opacity: 0.5, ...styling.previewStyle }}></div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{style.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Theme */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Theme</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Theme Buttons */}
                              {[
                                { name: 'Light Mode', bgColor: 'bg-white', lineColor: 'bg-black/15', iconColor: 'text-yellow-400', icon: 'sun' },
                                { name: 'Dark Mode', bgColor: 'bg-neutral-800', lineColor: 'bg-white/30', iconColor: 'text-white', icon: 'moon' }
                              ].map((theme) => {
                                const styling = getButtonStyling('theme', theme.name);
                                return (
                                  <button
                                    key={theme.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedTheme(selectedTheme === theme.name ? '' : theme.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="relative w-full h-full flex items-center justify-center">
                                        <div className={`w-full h-full rounded-sm flex items-center justify-center ${theme.bgColor}`} style={styling.previewStyle}>
                                          <div className={`absolute w-full top-1/2 h-px ${theme.lineColor}`}></div>
                                          <div className={theme.iconColor}>
                                            {theme.icon === 'sun' && (
                                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                                              </svg>
                                            )}
                                            {theme.icon === 'moon' && (
                                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                              </svg>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{theme.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Accent Color */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Accent Color</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Accent Color Buttons */}
                              {[
                                { name: 'Primary', color: 'rgb(0, 0, 0)' },
                                { name: 'Blue', color: 'rgb(59, 130, 246)' },
                                { name: 'Indigo', color: 'rgb(99, 102, 241)' },
                                { name: 'Violet', color: 'rgb(139, 92, 246)' },
                                { name: 'Purple', color: 'rgb(168, 85, 247)' },
                                { name: 'Fuchsia', color: 'rgb(217, 70, 239)' },
                                { name: 'Pink', color: 'rgb(236, 72, 153)' },
                                { name: 'Rose', color: 'rgb(244, 63, 94)' },
                                { name: 'Red', color: 'rgb(239, 68, 68)' },
                                { name: 'Orange', color: 'rgb(249, 115, 22)' },
                                { name: 'Amber', color: 'rgb(245, 158, 11)' },
                                { name: 'Yellow', color: 'rgb(234, 179, 8)' },
                                { name: 'Lime', color: 'rgb(132, 204, 22)' },
                                { name: 'Green', color: 'rgb(34, 197, 94)' },
                                { name: 'Emerald', color: 'rgb(16, 185, 129)' },
                                { name: 'Teal', color: 'rgb(20, 184, 166)' },
                                { name: 'Cyan', color: 'rgb(6, 182, 212)' },
                                { name: 'Sky', color: 'rgb(14, 165, 233)' }
                              ].map((accent) => {
                                const styling = getButtonStyling('accentColor', accent.name);
                                return (
                                  <button
                                    key={accent.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedAccentColor(selectedAccentColor === accent.name ? '' : accent.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: accent.color, ...styling.previewStyle }}></div>
                                    </div>
                                    <span className={styling.textClass}>{accent.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Background Color */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Background Color</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Background Color Buttons */}
                              {[
                                { name: 'Transparent', isSpecial: true },
                                { name: 'Neutral', color: 'rgb(245, 245, 245)' },
                                { name: 'Gray', color: 'rgb(243, 244, 246)' },
                                { name: 'Slate', color: 'rgb(241, 245, 249)' },
                                { name: 'Zinc', color: 'rgb(244, 244, 245)' },
                                { name: 'Stone', color: 'rgb(245, 245, 244)' },
                                { name: 'Blue', color: 'rgb(219, 234, 254)' },
                                { name: 'Indigo', color: 'rgb(224, 231, 255)' },
                                { name: 'Violet', color: 'rgb(237, 233, 254)' },
                                { name: 'Purple', color: 'rgb(243, 232, 255)' },
                                { name: 'Fuchsia', color: 'rgb(250, 232, 255)' },
                                { name: 'Pink', color: 'rgb(252, 231, 243)' },
                                { name: 'Rose', color: 'rgb(255, 228, 230)' },
                                { name: 'Red', color: 'rgb(254, 226, 226)' },
                                { name: 'Orange', color: 'rgb(255, 237, 213)' },
                                { name: 'Amber', color: 'rgb(254, 243, 199)' },
                                { name: 'Yellow', color: 'rgb(254, 249, 195)' },
                                { name: 'Lime', color: 'rgb(236, 252, 203)' },
                                { name: 'Green', color: 'rgb(220, 252, 231)' },
                                { name: 'Emerald', color: 'rgb(209, 250, 229)' },
                                { name: 'Teal', color: 'rgb(204, 251, 241)' },
                                { name: 'Cyan', color: 'rgb(207, 250, 254)' },
                                { name: 'Sky', color: 'rgb(224, 242, 254)' }
                              ].map((bg) => {
                                const styling = getButtonStyling('backgroundColor', bg.name);
                                return (
                                  <button
                                    key={bg.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedBackgroundColor(selectedBackgroundColor === bg.name ? '' : bg.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex items-center justify-center">
                                        {bg.isSpecial ? (
                                          <div className="rounded-md w-12 h-7 border border-neutral-200 dark:border-neutral-700" style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(45deg, rgb(221, 221, 221) 25%, transparent 25%, transparent 75%, rgb(221, 221, 221) 75%, rgb(221, 221, 221)), linear-gradient(45deg, rgb(221, 221, 221) 25%, transparent 25%, transparent 75%, rgb(221, 221, 221) 75%, rgb(221, 221, 221))', backgroundSize: '6px 6px', backgroundPosition: '0px 0px, 3px 3px', ...styling.previewStyle }}></div>
                                        ) : (
                                          <div className="rounded-md w-12 h-7 border border-neutral-200 dark:border-neutral-700" style={{ backgroundColor: bg.color, ...styling.previewStyle }}></div>
                                        )}
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{bg.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Border Color */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Border Color</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Border Color Buttons */}
                              {[
                                { name: 'Transparent', isSpecial: true },
                                { name: 'Neutral', color: 'rgb(229, 229, 229)' },
                                { name: 'Gray', color: 'rgb(229, 231, 235)' },
                                { name: 'Slate', color: 'rgb(226, 232, 240)' },
                                { name: 'Zinc', color: 'rgb(228, 228, 231)' },
                                { name: 'Stone', color: 'rgb(231, 229, 228)' },
                                { name: 'Blue', color: 'rgb(191, 219, 254)' },
                                { name: 'Indigo', color: 'rgb(199, 210, 254)' },
                                { name: 'Violet', color: 'rgb(221, 214, 254)' },
                                { name: 'Purple', color: 'rgb(233, 213, 255)' },
                                { name: 'Fuchsia', color: 'rgb(245, 208, 254)' },
                                { name: 'Pink', color: 'rgb(251, 207, 232)' },
                                { name: 'Rose', color: 'rgb(254, 205, 211)' },
                                { name: 'Red', color: 'rgb(254, 202, 202)' },
                                { name: 'Orange', color: 'rgb(254, 215, 170)' },
                                { name: 'Amber', color: 'rgb(253, 230, 138)' },
                                { name: 'Yellow', color: 'rgb(254, 240, 138)' },
                                { name: 'Lime', color: 'rgb(217, 249, 157)' },
                                { name: 'Green', color: 'rgb(187, 247, 208)' },
                                { name: 'Emerald', color: 'rgb(167, 243, 208)' },
                                { name: 'Teal', color: 'rgb(153, 246, 228)' },
                                { name: 'Cyan', color: 'rgb(165, 243, 252)' },
                                { name: 'Sky', color: 'rgb(186, 230, 253)' }
                              ].map((border) => {
                                const styling = getButtonStyling('borderColor', border.name);
                                return (
                                  <button
                                    key={border.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedBorderColor(selectedBorderColor === border.name ? '' : border.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex items-center justify-center">
                                        {border.isSpecial ? (
                                          <div className="rounded-md w-12 h-7 bg-white dark:bg-neutral-800" style={{ border: '1px dashed rgb(204, 204, 204)', backgroundImage: 'linear-gradient(45deg, rgba(200, 200, 200, 0.2) 25%, transparent 25%, transparent 75%, rgba(200, 200, 200, 0.2) 75%), linear-gradient(45deg, rgba(200, 200, 200, 0.2) 25%, transparent 25%, transparent 75%, rgba(200, 200, 200, 0.2) 75%)', backgroundSize: '6px 6px', backgroundPosition: '0px 0px, 3px 3px', ...styling.previewStyle }}></div>
                                        ) : (
                                          <div className="rounded-md w-12 h-7 bg-white dark:bg-neutral-800" style={{ border: `2px solid ${border.color}`, ...styling.previewStyle }}></div>
                                        )}
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{border.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Shadow */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Shadow</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Shadow Buttons */}
                              {[
                                { name: 'None', shadow: '' },
                                { name: 'Small', shadow: 'shadow-sm' },
                                { name: 'Medium', shadow: 'shadow' },
                                { name: 'Large', shadow: 'shadow-md' },
                                { name: 'Extra Large', shadow: 'shadow-lg' },
                                { name: 'XXL', shadow: 'shadow-xl' },
                                { name: 'Beautiful sm', shadow: 'shadow' },
                                { name: 'Beautiful md', shadow: 'shadow' },
                                { name: 'Beautiful lg', shadow: 'shadow' },
                                { name: 'Light Blue sm', shadow: 'shadow' },
                                { name: 'Light Blue md', shadow: 'shadow' },
                                { name: 'Light Blue lg', shadow: 'shadow' },
                                { name: 'Bevel', shadow: 'shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset]' },
                                { name: '3D', shadow: 'shadow-[rgba(0,_0,_0,_0.17)_0px_-23px_25px_0px_inset,_rgba(0,_0,_0,_0.15)_0px_-36px_30px_0px_inset,_rgba(0,_0,_0,_0.1)_0px_-79px_40px_0px_inset,_rgba(0,_0,_0,_0.06)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]' },
                                { name: 'Inner Shadow', shadow: 'shadow-[rgba(50,_50,_93,_0.25)_0px_30px_60px_-12px_inset,_rgba(0,_0,_0,_0.3)_0px_18px_36px_-18px_inset]' }
                              ].map((shadow) => {
                                const styling = getButtonStyling('shadow', shadow.name);
                                return (
                                  <button
                                    key={shadow.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedShadow(selectedShadow === shadow.name ? '' : shadow.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                                        <div className={`rounded-md w-11 h-6 bg-white ${shadow.shadow}`} style={styling.previewStyle}></div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{shadow.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Typography Section */}
                    <div className="pt-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                      <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <div className="flex items-center cursor-pointer">
                              <ChevronDown className="text-neutral-500 dark:text-neutral-400 transform transition-transform duration-200 mr-2 rotate-0" size={16} />
                              <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">Typeface Family</span>
                            </div>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Typeface Family Buttons */}
                              {[
                                { name: 'Sans', class: 'font-sans' },
                                { name: 'Serif', class: 'font-serif' },
                                { name: 'Monospace', class: 'font-mono' },
                                { name: 'Condensed', class: 'tracking-tighter' },
                                { name: 'Expanded', class: 'tracking-wider' },
                                { name: 'Rounded', class: 'font-medium' },
                                { name: 'Handwritten', style: { fontFamily: 'Satisfy, cursive', fontSize: '18px' } }
                              ].map((typeface) => {
                                const styling = getButtonStyling('typefaceFamily', typeface.name);
                                return (
                                  <button
                                    key={typeface.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedTypefaceFamily(selectedTypefaceFamily === typeface.name ? '' : typeface.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className={`text-neutral-500 dark:text-neutral-400 ${typeface.class}`} style={{ ...typeface.style, ...styling.previewStyle }}>Type</span>
                                    </div>
                                    <span className={styling.textClass}>{typeface.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Heading Font */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Heading Font</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Heading Font Buttons */}
                              {[
                                { name: 'Inter', style: { fontFamily: 'Inter, system-ui, sans-serif' } },
                                { name: 'Geist', style: { fontFamily: 'Geist, system-ui, sans-serif' } },
                                { name: 'Manrope', style: { fontFamily: 'Manrope, system-ui, sans-serif' } },
                                { name: 'Playfair Display', style: { fontFamily: '"Playfair Display", "Times New Roman", Times, serif' } },
                                { name: 'Instrument Serif', style: { fontFamily: '"Instrument Serif", "Times New Roman", Times, serif' } },
                                { name: 'Plex Serif', style: { fontFamily: '"Plex Serif", Times, serif' } },
                                { name: 'Nunito', style: { fontFamily: 'Nunito, system-ui, sans-serif' } },
                                { name: 'Varela Round', style: { fontFamily: '"Varela Round", system-ui, sans-serif' } },
                                { name: 'Geist Mono', style: { fontFamily: '"Geist Mono", system-ui, sans-serif' } },
                                { name: 'Space Mono', style: { fontFamily: '"Space Mono", system-ui, sans-serif' } },
                                { name: 'Source Code Pro', style: { fontFamily: '"Source Code Pro", system-ui, sans-serif' } }
                              ].map((font) => {
                                const styling = getButtonStyling('headingFont', font.name);
                                return (
                                  <button
                                    key={font.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedHeadingFont(selectedHeadingFont === font.name ? '' : font.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className="text-base font-sans text-neutral-500 dark:text-neutral-400" style={{ ...font.style, ...styling.previewStyle }}>Title</span>
                                    </div>
                                    <span className={styling.textClass}>{font.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Body & UI Font */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Body & UI Font</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Body & UI Font Buttons */}
                              {[
                                { name: 'Inter', style: { fontFamily: 'Inter, system-ui, sans-serif' } },
                                { name: 'Geist', style: { fontFamily: 'Geist, system-ui, sans-serif' } },
                                { name: 'Manrope', style: { fontFamily: 'Manrope, system-ui, sans-serif' } },
                                { name: 'Playfair Display', style: { fontFamily: '"Playfair Display", "Times New Roman", Times, serif' } },
                                { name: 'Instrument Serif', style: { fontFamily: '"Instrument Serif", "Times New Roman", Times, serif' } },
                                { name: 'Plex Serif', style: { fontFamily: '"Plex Serif", Times, serif' } },
                                { name: 'Nunito', style: { fontFamily: 'Nunito, system-ui, sans-serif' } },
                                { name: 'Varela Round', style: { fontFamily: '"Varela Round", system-ui, sans-serif' } },
                                { name: 'Geist Mono', style: { fontFamily: '"Geist Mono", system-ui, sans-serif' } },
                                { name: 'Space Mono', style: { fontFamily: '"Space Mono", system-ui, sans-serif' } },
                                { name: 'Source Code Pro', style: { fontFamily: '"Source Code Pro", system-ui, sans-serif' } }
                              ].map((font) => {
                                const styling = getButtonStyling('bodyFont', font.name);
                                return (
                                  <button
                                    key={font.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedBodyFont(selectedBodyFont === font.name ? '' : font.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className="text-sm font-sans text-neutral-500 dark:text-neutral-400" style={{ ...font.style, ...styling.previewStyle }}>Body</span>
                                    </div>
                                    <span className={styling.textClass}>{font.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Heading Size */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Heading Size</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Heading Size Buttons */}
                              {[
                                { name: '20-32px', class: 'text-xs' },
                                { name: '32-40px', class: 'text-sm' },
                                { name: '48-64px', class: 'text-base' },
                                { name: '64-80px', class: 'text-lg' }
                              ].map((size) => {
                                const styling = getButtonStyling('headingSize', size.name);
                                return (
                                  <button
                                    key={size.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedHeadingSize(selectedHeadingSize === size.name ? '' : size.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className={`font-bold text-neutral-500 dark:text-neutral-400 ${size.class}`} style={styling.previewStyle}>Title</span>
                                    </div>
                                    <span className={styling.textClass}>{size.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Subheading Size */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Subheading Size</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Subheading Size Buttons */}
                              {[
                                { name: '16-20px', class: 'text-xs' },
                                { name: '20-24px', class: 'text-sm' },
                                { name: '24-28px', class: 'text-base' },
                                { name: '28-32px', class: 'text-lg' }
                              ].map((size) => {
                                const styling = getButtonStyling('subheadingSize', size.name);
                                return (
                                  <button
                                    key={size.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedSubheadingSize(selectedSubheadingSize === size.name ? '' : size.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className={`font-bold text-neutral-500 dark:text-neutral-400 ${size.class}`} style={styling.previewStyle}>Subtitle</span>
                                    </div>
                                    <span className={styling.textClass}>{size.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Body Text Size */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Body Text Size</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Body Text Size Buttons */}
                              {[
                                { name: '12-14px', class: 'text-xs' },
                                { name: '14-16px', class: 'text-sm' },
                                { name: '16-18px', class: 'text-base' },
                                { name: '18-20px', class: 'text-lg' }
                              ].map((size) => {
                                const styling = getButtonStyling('bodyTextSize', size.name);
                                return (
                                  <button
                                    key={size.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedBodyTextSize(selectedBodyTextSize === size.name ? '' : size.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className={`font-bold text-neutral-500 dark:text-neutral-400 ${size.class}`} style={styling.previewStyle}>Body</span>
                                    </div>
                                    <span className={styling.textClass}>{size.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Heading Font Weight */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Heading Font Weight</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Heading Font Weight Buttons */}
                              {[
                                { name: 'Ultralight', class: 'font-thin' },
                                { name: 'Light', class: 'font-light' },
                                { name: 'Regular', class: 'font-normal' },
                                { name: 'Medium', class: 'font-medium' },
                                { name: 'Semibold', class: 'font-semibold' },
                                { name: 'Bold', class: 'font-bold' },
                                { name: 'Black', class: 'font-black' }
                              ].map((weight) => {
                                const styling = getButtonStyling('headingWeight', weight.name);
                                return (
                                  <button
                                    key={weight.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedHeadingWeight(selectedHeadingWeight === weight.name ? '' : weight.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <span className={`text-lg text-neutral-500 dark:text-neutral-400 ${weight.class}`} style={styling.previewStyle}>Title</span>
                                    </div>
                                    <span className={styling.textClass}>{weight.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Heading Letter Spacing */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Heading Letter Spacing</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Heading Letter Spacing Buttons */}
                              {[
                                { name: 'Tighter', class: 'tracking-tighter' },
                                { name: 'Tight', class: 'tracking-tight' },
                                { name: 'Normal', class: 'tracking-normal' },
                                { name: 'Wide', class: 'tracking-wide' },
                                { name: 'Wider', class: 'tracking-wider' },
                                { name: 'Widest', class: 'tracking-widest' }
                              ].map((spacing) => {
                                const styling = getButtonStyling('headingSpacing', spacing.name);
                                return (
                                  <button
                                    key={spacing.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedHeadingSpacing(selectedHeadingSpacing === spacing.name ? '' : spacing.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex flex-col items-center justify-center gap-1">
                                      <span className={`text-lg text-neutral-500 dark:text-neutral-400 ${spacing.class}`} style={styling.previewStyle}>Title</span>
                                      <div className="flex space-x-1">
                                        <div className="w-1.5 h-1.5 rounded-sm bg-neutral-500 bg-opacity-20 dark:bg-neutral-400 dark:bg-opacity-20"></div>
                                        <div className="w-1.5 h-1.5 rounded-sm bg-neutral-500 bg-opacity-20 dark:bg-neutral-400 dark:bg-opacity-20"></div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{spacing.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animation Section */}
                    <div className="pt-4 pb-16">
                      <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <div className="flex items-center cursor-pointer">
                              <ChevronDown className="text-neutral-500 dark:text-neutral-400 transform transition-transform duration-200 mr-2 rotate-0" size={16} />
                              <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">Animation Type</span>
                            </div>
                            <div className="ml-auto mr-4">
                              <button className="text-[10px] font-medium bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700">Select Multiple</button>
                            </div>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Animation Type Buttons */}
                              {[
                                { name: 'Fade', animation: 'fadePreview' },
                                { name: 'Slide', animation: 'slidePreview' },
                                { name: 'Scale', animation: 'scalePreview' },
                                { name: 'Rotate', animation: 'rotatePreview' },
                                { name: 'Blur', animation: 'blurPreview' },
                                { name: '3D', animation: 'threeDPreview' },
                                { name: 'Pulse', animation: 'pulsePreview' },
                                { name: 'Shake', animation: 'shakePreview' },
                                { name: 'Bounce', animation: 'bouncePreview' },
                                { name: 'Morph', animation: '' },
                                { name: 'Skew', animation: '' },
                                { name: 'Color', animation: '' },
                                { name: 'Hue', animation: '' },
                                { name: 'Perspective', animation: '' },
                                { name: 'Clip', animation: '' }
                              ].map((anim) => {
                                const styling = getButtonStyling('animationType', anim.name);
                                return (
                                  <button
                                    key={anim.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedAnimationType(selectedAnimationType === anim.name ? '' : anim.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-sm" style={{ backgroundColor: 'rgb(107, 114, 128)', opacity: 0.7, animation: anim.animation ? `1.5s ease 0s infinite alternate none running ${anim.animation}` : '', ...styling.previewStyle }}></div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{anim.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Scene */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Scene</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Scene Buttons */}
                              {[
                                { name: 'All at once', icon: 'grid3x3' },
                                { name: 'Sequence', icon: 'panels-top-left' },
                                { name: 'Word by word', icon: 'type' },
                                { name: 'Letter by letter', icon: 'type' }
                              ].map((scene) => {
                                const styling = getButtonStyling('scene', scene.name);
                                return (
                                  <button
                                    key={scene.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedScene(selectedScene === scene.name ? '' : scene.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <div className="text-neutral-500" style={styling.previewStyle}>
                                        {scene.icon === 'grid3x3' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid3x3 w-5 h-5">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="M3 9h18"></path>
                                            <path d="M3 15h18"></path>
                                            <path d="M9 3v18"></path>
                                            <path d="M15 3v18"></path>
                                          </svg>
                                        )}
                                        {scene.icon === 'panels-top-left' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left w-5 h-5">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="M3 9h18"></path>
                                            <path d="M9 21V9"></path>
                                          </svg>
                                        )}
                                        {scene.icon === 'type' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-type w-5 h-5">
                                            <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                            <line x1="9" x2="15" y1="20" y2="20"></line>
                                            <line x1="12" x2="12" y1="4" y2="20"></line>
                                          </svg>
                                        )}
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{scene.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="mx-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">Duration</span>
                            <span className="text-[11px] text-neutral-500 dark:text-neutral-400">0.8s</span>
                          </div>
                          <input type="range" min="0" max="5" step="0.2" className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700" defaultValue="0.8" />
                        </div>

                        {/* Delay */}
                        <div className="mx-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">Delay</span>
                            <span className="text-[11px] text-neutral-500 dark:text-neutral-400">0.0s</span>
                          </div>
                          <input type="range" min="0" max="2" step="0.1" className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700" defaultValue="0" />
                        </div>

                        {/* Timing */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Timing</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Timing Buttons */}
                              {[
                                { name: 'Linear', animation: 'moveRightLinear' },
                                { name: 'Ease', animation: 'moveRightEase' },
                                { name: 'Ease In', animation: 'moveRightEaseIn' },
                                { name: 'Ease Out', animation: 'moveRightEaseOut' },
                                { name: 'Ease In Out', animation: 'moveRightEaseInOut' },
                                { name: 'Spring', animation: 'moveRightSpring' },
                                { name: 'Bounce', animation: 'moveRightBounce' }
                              ].map((timing) => {
                                const styling = getButtonStyling('timing', timing.name);
                                return (
                                  <button
                                    key={timing.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedTiming(selectedTiming === timing.name ? '' : timing.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex items-center justify-center relative">
                                        <div className="w-full h-0.5 bg-gray-300 absolute"></div>
                                        <div className="w-2 h-2 rounded-full absolute" style={{ backgroundColor: 'rgb(107, 114, 128)', opacity: 0.7, animation: `2s ease 0s infinite alternate none running ${timing.animation}`, ...styling.previewStyle }}></div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{timing.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Iterations */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Iterations</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Iterations Buttons */}
                              {[
                                { name: 'Once', symbol: '1×' },
                                { name: 'Twice', symbol: '2×' },
                                { name: 'Thrice', symbol: '3×' },
                                { name: 'Infinite', symbol: '∞' }
                              ].map((iteration) => {
                                const styling = getButtonStyling('iterations', iteration.name);
                                return (
                                  <button
                                    key={iteration.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedIterations(selectedIterations === iteration.name ? '' : iteration.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1 flex items-center justify-center">
                                      <div className="text-neutral-500" style={styling.previewStyle}>
                                        <span className="text-xl">{iteration.symbol}</span>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{iteration.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Direction */}
                        <div className="flex flex-col space-y-2.5">
                          <div className="flex items-center">
                            <span className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 pl-4">Direction</span>
                          </div>
                          <div className="overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex gap-3 px-4 py-1 min-w-max">
                              {/* Direction Buttons */}
                              {[
                                { name: 'Normal', animation: 'moveRightNormal' },
                                { name: 'Reverse', animation: 'moveLeftReverse' },
                                { name: 'Alternate', animation: 'moveAlternate' },
                                { name: 'Alternate Reverse', animation: 'moveAlternateReverse' }
                              ].map((direction) => {
                                const styling = getButtonStyling('direction', direction.name);
                                return (
                                  <button
                                    key={direction.name}
                                    className={styling.buttonClass}
                                    onClick={() => setSelectedDirection(selectedDirection === direction.name ? '' : direction.name)}
                                  >
                                    <div className="relative w-[68px] h-10 mt-2 mb-1">
                                      <div className="w-full h-full flex items-center justify-center relative">
                                        <div className="absolute" style={{ color: 'rgb(107, 114, 128)', opacity: 0.7, animation: `2s ease 0s infinite normal none running ${direction.animation}`, ...styling.previewStyle }}>→</div>
                                      </div>
                                    </div>
                                    <span className={styling.textClass}>{direction.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side (50%) */}
              <div className="w-1/2 flex flex-col">
                {/* Preview Section - 50% height */}
                <div className="bg-white dark:bg-neutral-950/30 p-4 h-1/2 overflow-auto">
                  <div className="relative layout-preview sample-section preview-section layout-section mb-4">
                    <div className="label bg-black/80 text-white text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-xl border border-white/15 shadow-lg">Layout Type</div>
                    <div className="h-44 flex items-center justify-center text-gray-400 text-sm">Select a layout type to preview</div>
                  </div>
                  <div className="section-divider">
                    <span className="section-title bg-white dark:bg-neutral-950 rounded">Layout Config</span>
                  </div>
                  <div className="relative layout-preview sample-section preview-section config-section mb-4">
                    <div className="label bg-black/80 text-white text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-xl border border-white/15 shadow-lg">Configuration: None Selected</div>
                    <div className="h-44 flex items-center justify-center text-gray-400 text-sm">Select a layout configuration to preview</div>
                  </div>
                  <div className="section-divider">
                    <span className="section-title bg-white dark:bg-neutral-950 rounded">Framing</span>
                  </div>
                  <div className="relative layout-preview sample-section preview-section framing-section mb-4">
                    <div className="label bg-black/80 text-white text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-xl border border-white/15 shadow-lg">Framing: None Selected</div>
                    <div className="h-44 flex items-center justify-center text-gray-400 text-sm">Select a framing option to preview</div>
                  </div>
                  <div className="section-divider">
                    <span className="section-title bg-white dark:bg-neutral-950 rounded">Style</span>
                  </div>
                  <div className="relative layout-preview sample-section preview-section style-section mb-4">
                    <div className="label bg-black/80 text-white text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-xl border border-white/15 shadow-lg">Style: None Selected</div>
                    <div className="h-44 flex items-center justify-center text-gray-400 text-sm">Select a style option to preview</div>
                  </div>
                  <div className="section-divider">
                    <span className="section-title bg-white dark:bg-neutral-950 rounded">Typography</span>
                  </div>
                  <div className="flex flex-col space-y-4 preview-section typography-section">
                    <div className="card-container p-4 rounded-xl" style={{ backgroundColor: 'rgb(32, 34, 43)' }}>
                      <div className="relative sample-section group">
                        <div className="label bg-black/75 text-white text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-lg border border-white/15 shadow">Tag</div>
                        <span className="tag inline-block bg-[#2A2C37] px-2.5 py-1 text-xs rounded-lg font-medium border border-custom" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>New Feature</span>
                      </div>
                      <div className="relative sample-section group mt-3">
                        <div className="label bg-black/75 text-white text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-lg border border-white/15 shadow">Heading</div>
                        <h1 className="heading font-heading break-words" data-font="" style={{ fontSize: '28px', lineHeight: '1.1', fontWeight: '400', letterSpacing: 'normal', fontFamily: 'Inter, system-ui, sans-serif' }}>Create Beautiful Designs</h1>
                      </div>
                      <div className="relative sample-section group mt-2">
                        <div className="label bg-black/75 text-white text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-lg border border-white/15 shadow">Subheading</div>
                        <h2 className="subheading font-body font-medium" style={{ fontSize: '18px', lineHeight: '1.3', fontFamily: 'Inter, system-ui, sans-serif', color: 'rgb(229, 231, 235)' }}>Font Preview & Styling</h2>
                      </div>
                      <div className="relative sample-section group mt-2">
                        <div className="label bg-black/75 text-white text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-lg border border-white/15 shadow">Body Text</div>
                        <p className="body-text font-body font-normal" style={{ fontSize: '14px', lineHeight: '1.5', fontFamily: 'Inter, system-ui, sans-serif', color: 'rgb(229, 231, 235)' }}>This text shows how your selected font looks in a paragraph format with the chosen weight and spacing applied.</p>
                      </div>
                      <div className="relative sample-section group mt-3">
                        <div className="label bg-black/75 text-white text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-xl border border-white/15 shadow">Button</div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-body font-medium py-2 px-4 rounded-xl transition-colors" style={{ fontSize: '14px', fontFamily: 'Inter, system-ui, sans-serif' }}>Action Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-divider">
                    <span className="section-title bg-white dark:bg-neutral-950 rounded">Animation</span>
                  </div>
                  <div className="relative layout-preview sample-section preview-section animation-section mb-4">
                    <div className="label bg-black/80 text-white text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-xl border border-white/15 shadow-lg">Animation: None Selected</div>
                    <div className="h-44 flex items-center justify-center text-gray-400 text-sm">Select animation types to preview</div>
                  </div>
                </div>

                {/* Generated Prompts Section - 50% height */}
                <div className="h-1/2 overflow-y-auto p-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[11px] uppercase font-regular text-neutral-500">Generated Prompts</p>
                    <button disabled className="button-primary flex items-center gap-1 opacity-70 cursor-not-allowed">Add to Prompt</button>
                  </div>
                  <div className="mb-2">
                    <div className="p-2 border rounded-lg font-mono cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.02)] dark:shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 mr-2 rounded-full border flex items-center justify-center border-neutral-200 bg-neutral-100"></div>
                          <span className="text-xs">Add custom prompt</span>
                        </div>
                        <input type="checkbox" id="custom-prompt-checkbox" className="hidden" />
                        <button className="text-blue-500 hover:text-blue-700 text-xs font-medium">Add</button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {/* Generated Prompt Items */}
                    {[
                      'Add details',
                      'Change texts, names, brands',
                      'Use Lucide icons',
                      'Make responsive',
                      'Adapt to dark mode',
                      'Add hover states',
                      'Animate fade in, slide in, blur in, element by element. Use \'both\' instead of \'forwards\'. Don\'t use opacity 0.',
                      'Animate when in view observed, fade in, slide in, blur in, element by element',
                      'Add parallax scrolling to the background',
                      'Apply alpha masking using mask-image: linear-gradient for left and right sides',
                      'Apply marquee animation looping infinitely using duplicated items',
                      'Create 3 iPhone frames, centered vertically and horizontally with gap of 40px. Adapt each section of the landing page for mobile screens. The frames are against a light background and beautiful shadows. I only want the 3 iphone frames (393x852), nothing else. Adapt the Hero and put that in the middle iphone frame.Shadow: Beautiful lg (shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)])'
                    ].map((prompt, index) => (
                      <div key={index} className="p-2 border rounded-lg font-mono cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.02)] dark:shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 mr-2 rounded-full border flex items-center justify-center border-neutral-200 bg-neutral-100"></div>
                            <span className="text-xs overflow-hidden text-ellipsis max-w-[220px] md:max-w-[240px] lg:max-w-[400px]">{prompt}</span>
                          </div>
                          <button className="text-blue-500 hover:text-blue-700 text-xs font-medium flex items-center gap-1">Add</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
