'use client';

import { ArrowLeft, ChevronDown, Folder, PanelLeft, Eye, Palette, Code, Pause, Type, Image, Save, Undo2, Redo2, X, Monitor, Tablet, Smartphone, ArrowUpRight, Globe, ArrowDown, WandSparkles, Sparkles, Paperclip, Figma, ArrowUp, RotateCcw, FileText, Upload, Camera, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatInteractionPage() {
    const router = useRouter();
    const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
    const [isPromptBuilderOpen, setIsPromptBuilderOpen] = useState(false);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
    const [isDefaultMode, setIsDefaultMode] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const figmaModalRef = useRef<HTMLDivElement>(null);
    const promptBuilderRef = useRef<HTMLDivElement>(null);
    const publishModalRef = useRef<HTMLDivElement>(null);
    const publishButtonRef = useRef<HTMLButtonElement>(null);

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

    // Helper function to reset all selections
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
    };

    // Click outside handlers
    useEffect(() => {
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
            if (publishModalRef.current && !publishModalRef.current.contains(event.target as Node) &&
                publishButtonRef.current && !publishButtonRef.current.contains(event.target as Node)) {
                setIsPublishModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen flex" style={{ backgroundColor: '#141414' }}>
            {/* Left Sidebar - 30% */}
            <div className="w-[30%] flex flex-col border-r" style={{ borderColor: '#333333' }}>
                {/* Top Bar Left */}
                <div className="p-2 py-[9px] border-b flex justify-between items-center sticky top-[env(safe-area-inset-top)] backdrop-blur-sm z-10" style={{ backgroundColor: '#141414', borderColor: '#333333' }}>
                    <button
                        onClick={() => router.push('/')}
                        className="flex gap-1 p-[3px] px-[7px] items-center text-[10px] button-secondary"
                    >
                        <ArrowLeft className="h-2.5 w-2.5 opacity-50" />
                        Back
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="relative inline-block">
                            <button className="flex items-center gap-1 p-[3px] px-[7px] text-[10px] button-secondary">
                                Chats
                                <ChevronDown className="h-3 w-3 ml-1 opacity-70 transition-transform" />
                            </button>
                        </div>
                        <div className="relative inline-flex">
                            <button className="flex items-center gap-1 p-[3px] px-[7px] text-[10px] button-secondary">
                                <Folder className="h-4 w-3 opacity-70" />
                                <span className="hidden lg:inline">Pages - home</span>
                                <ChevronDown className="h-3 w-3 ml-1 opacity-70 transition-transform" />
                            </button>
                        </div>
                        <button className="gap-1 p-[3px] px-[7px] items-center text-[10px] button-secondary h-6" title="Hide sidebar">
                            <PanelLeft className="h-3 w-3 opacity-50" />
                        </button>
                    </div>
                </div>

                {/* Chat Content Area */}
                <div className="flex-1 overflow-y-auto p-4 pb-[calc(120px+env(safe-area-inset-bottom))] space-y-4" style={{ backgroundColor: '#0a0a0a' }}>
                    {/* User Message */}
                    <div className="flex flex-col mb-3 items-end">
                        <div className="p-2 px-3 text-sm rounded-xl backdrop-blur-sm inline-block bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-600 dark:border-blue-400 text-white max-w-[80%] shadow-blue-500/20 shadow-xl">
                            <div className="relative">
                                <div className="overflow-hidden max-h-[100px]">
                                    <div className="my-1">
                                        <p className="markdown-content">create an tic tac toe app</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] text-neutral-400 dark:text-neutral-600 mt-2 px-1 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-neutral-400 text-[11px] dark:text-neutral-600">Jul 16 at 2:18 PM</span>
                            <div className="flex items-center gap-1 ml-2">
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Copy message text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-3 w-3">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                </button>
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Regenerate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw h-3 w-3">
                                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                        <path d="M3 3v5h5"></path>
                                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                                        <path d="M16 16h5v5"></path>
                                    </svg>
                                </button>
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Delete message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3 w-3">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex flex-col mb-3 items-start">
                        <div className="p-2 px-3 text-sm rounded-xl backdrop-blur-sm inline-block bg-muted/80 border border-border/50 w-full">
                            <div className="">
                                <div className="">
                                    <div className="my-1">
                                        <p className="markdown-content text-white">Here is a component for a tic-tac-toe game.</p>
                                    </div>
                                    <div className="my-2 rounded-md overflow-hidden border border-black/5 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
                                        <div className="flex items-center justify-between p-1 px-1 bg-neutral-50 dark:bg-neutral-800/80 border-b border-border/50 text-xs">
                                            <div className="flex items-center space-x-1.5 pl-1.5">
                                                <span className="block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-red-400 rounded-full transition-colors relative group cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white">
                                                        <path d="M18 6 6 18"></path>
                                                        <path d="m6 6 12 12"></path>
                                                    </svg>
                                                </span>
                                                <span className="block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-yellow-400 rounded-full transition-colors relative group cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white">
                                                        <path d="M5 12h14"></path>
                                                    </svg>
                                                </span>
                                                <span className="block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-green-400 rounded-full transition-colors relative group cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white">
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <polyline points="9 21 3 21 3 15"></polyline>
                                                        <line x1="21" x2="14" y1="3" y2="10"></line>
                                                        <line x1="3" x2="10" y1="21" y2="14"></line>
                                                    </svg>
                                                </span>
                                                <div className="flex items-center space-x-1">
                                                    <button title="Show in main preview" className="flex gap-1 items-center ml-1 p-0 px-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-[10px] font-medium text-neutral-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-up-right h-2.5 w-2.5 text-muted-foreground opacity-50">
                                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                                            <path d="M8 8h8v8"></path>
                                                            <path d="m8 16 8-8"></path>
                                                        </svg>
                                                        View
                                                    </button>
                                                    <button title="Enable animations & effects" className="flex gap-1 items-center p-0 px-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-[10px] font-medium transition-colors h-[18px] text-neutral-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-2.5 w-2.5 opacity-50">
                                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <button className="flex gap-1 items-center ml-1 p-0 px-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-[10px] font-medium text-neutral-500" title="Copy code to clipboard">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-2.5 w-2.5 text-muted-foreground opacity-50">
                                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                    </svg>
                                                    Copy
                                                </button>
                                                <div className="flex items-center bg-neutral-200/70 dark:bg-neutral-700/70 rounded-md p-[0.5px] border border-border/60">
                                                    <button className="px-2 py-0 text-[9px] font-medium rounded-[4px] transition-all bg-white dark:bg-neutral-600 text-primary shadow-sm">Preview</button>
                                                    <button className="px-2 py-0 text-[9px] font-medium rounded-[4px] transition-all text-muted-foreground hover:text-foreground">Code</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto" style={{ height: '240px' }}>
                                            <div className="w-full h-full overflow-hidden bg-white">
                                                <iframe
                                                    srcDoc="<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Tic-Tac-Toe App</title>
    <script src='https://cdn.tailwindcss.com'></script>
    <link rel='preconnect' href='https://fonts.googleapis.com'>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' rel='stylesheet'>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class='bg-slate-50 antialiased'>
    <div class='flex flex-col items-center justify-center min-h-screen p-4'>
        <div class='w-full max-w-sm mx-auto'>
            <div class='bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8'>
                <div class='flex justify-between items-center mb-6'>
                    <h1 class='text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight'>Tic-Tac-Toe</h1>
                    <button class='flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-rotate-cw'><path d='M21 2v6h-6'/><path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'/></svg>
                        Reset
                    </button>
                </div>
                <div class='relative'>
                    <div class='grid grid-cols-3 gap-3'>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                             <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        </div>
                    </div>
                </div>
                <div class='text-center mt-6 pt-6 border-t border-slate-100'>
                    <div class='flex items-center justify-center gap-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-7 h-7 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        <p class='text-lg font-medium text-slate-800'>Player O Wins!</p>
                    </div>
                </div>
            </div>
            <div class='mt-6 text-center'>
                 <a href='#' class='inline-block w-full px-6 py-3 bg-slate-800 text-white text-base font-medium rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all'>
                    Play Again
                </a>
            </div>
        </div>
    </div>
</body>
</html>"
                                                    title="Embedded HTML Preview"
                                                    sandbox="allow-scripts allow-forms allow-popups allow-modals"
                                                    style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'left top', border: 'none', backgroundColor: 'white' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] text-neutral-400 dark:text-neutral-600 mt-2 px-1 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-neutral-400 text-[11px] dark:text-neutral-600">Jul 16 at 2:19 PM</span>
                            <span className="text-neutral-300 text-[10px] dark:text-neutral-700">•</span>
                            <span className="text-neutral-400 text-[11px] dark:text-neutral-600">gemini-2.5-pro</span>
                            <div className="flex items-center gap-1 ml-2">
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Copy message text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-3 w-3">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                </button>
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Delete message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3 w-3">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* User Message: add functionality */}
                    {/* <div className="flex flex-col mb-3 items-end">
                        <div className="p-2 px-3 text-sm rounded-xl backdrop-blur-sm inline-block bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-600 dark:border-blue-400 text-white max-w-[80%] shadow-blue-500/20 shadow-xl">
                            <div className="relative">
                                <div className="overflow-hidden max-h-[100px]">
                                    <div className="my-1">
                                        <p className="markdown-content">add functionality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] text-neutral-400 dark:text-neutral-600 mt-2 px-1 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-neutral-400 text-[11px] dark:text-neutral-600">Oct 16 at 2:20 AM</span>
                            <div className="flex items-center gap-1 ml-2">
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Copy message text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-3 w-3">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                </button>
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Regenerate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw h-3 w-3">
                                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                        <path d="M3 3v5h5"></path>
                                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                                        <path d="M16 16h5v5"></path>
                                    </svg>
                                </button>
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Delete message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3 w-3">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* AI Response */}
                    {/* <div className="flex flex-col mb-3 items-start">
                        <div className="p-2 px-3 text-sm rounded-xl backdrop-blur-sm inline-block bg-muted/80 border border-border/50 w-full">
                            <div className="">
                                <div className="">
                                    <div className="my-1">
                                        <p className="markdown-content text-white">I'll add full game functionality to make it playable!</p>
                                    </div>
                                    <div className="my-2 rounded-md overflow-hidden border border-black/5 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
                                        <div className="flex items-center justify-between p-1 px-1 bg-neutral-50 dark:bg-neutral-800/80 border-b border-border/50 text-xs">
                                            <div className="flex items-center space-x-1.5 pl-1.5">
                                                <span className="block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-red-400 rounded-full transition-colors relative group cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white">
                                                        <path d="M18 6 6 18"></path>
                                                        <path d="m6 6 12 12"></path>
                                                    </svg>
                                                </span>
                                                <span className="block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-yellow-400 rounded-full transition-colors relative group cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white">
                                                        <path d="M5 12h14"></path>
                                                    </svg>
                                                </span>
                                                <span className="block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-green-400 rounded-full transition-colors relative group cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white">
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <polyline points="9 21 3 21 3 15"></polyline>
                                                        <line x1="21" x2="14" y1="3" y2="10"></line>
                                                        <line x1="3" x2="10" y1="21" y2="14"></line>
                                                    </svg>
                                                </span>
                                                <div className="flex items-center space-x-1">
                                                    <button title="Show in main preview" className="flex gap-1 items-center ml-1 p-0 px-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-[10px] font-medium text-neutral-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-up-right h-2.5 w-2.5 text-muted-foreground opacity-50">
                                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                                            <path d="M8 8h8v8"></path>
                                                            <path d="m8 16 8-8"></path>
                                                        </svg>
                                                        View
                                                    </button>
                                                    <button title="Enable animations & effects" className="flex gap-1 items-center p-0 px-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-[10px] font-medium transition-colors h-[18px] text-neutral-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-2.5 w-2.5 opacity-50">
                                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <button className="flex gap-1 items-center ml-1 p-0 px-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-[10px] font-medium text-neutral-500" title="Copy code to clipboard">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-2.5 w-2.5 text-muted-foreground opacity-50">
                                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                    </svg>
                                                    Copy
                                                </button>
                                                <div className="flex items-center bg-neutral-200/70 dark:bg-neutral-700/70 rounded-md p-[0.5px] border border-border/60">
                                                    <button className="px-2 py-0 text-[9px] font-medium rounded-[4px] transition-all bg-white dark:bg-neutral-600 text-primary shadow-sm">Preview</button>
                                                    <button className="px-2 py-0 text-[9px] font-medium rounded-[4px] transition-all text-muted-foreground hover:text-foreground">Code</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto" style={{ height: '240px' }}>
                                            <div className="w-full h-full overflow-hidden bg-white">
                                                <iframe
                                                    srcDoc="<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Tic-Tac-Toe App</title>
    <script src='https://cdn.tailwindcss.com'></script>
    <link rel='preconnect' href='https://fonts.googleapis.com'>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' rel='stylesheet'>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class='bg-slate-50 antialiased'>
    <div class='flex flex-col items-center justify-center min-h-screen p-4'>
        <div class='w-full max-w-sm mx-auto'>
            <div class='bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8'>
                <div class='flex justify-between items-center mb-6'>
                    <h1 class='text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight'>Tic-Tac-Toe</h1>
                    <button class='flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-rotate-cw'><path d='M21 2v6h-6'/><path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'/></svg>
                        Reset
                    </button>
                </div>
                <div class='relative'>
                    <div class='grid grid-cols-3 gap-3'>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                             <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        </div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div class='aspect-square bg-slate-100 rounded-lg flex items-center justify-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        </div>
                    </div>
                </div>
                <div class='text-center mt-6 pt-6 border-t border-slate-100'>
                    <div class='flex items-center justify-center gap-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-7 h-7 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>
                        <p class='text-lg font-medium text-slate-800'>Player O Wins!</p>
                    </div>
                </div>
            </div>
            <div class='mt-6 text-center'>
                 <a href='#' class='inline-block w-full px-6 py-3 bg-slate-800 text-white text-base font-medium rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all'>
                    Play Again
                </a>
            </div>
        </div>
    </div>
</body>
</html>"
                                                    title="Embedded HTML Preview"
                                                    sandbox="allow-scripts allow-forms allow-popups allow-modals"
                                                    style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'left top', border: 'none', backgroundColor: 'white' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] text-neutral-400 dark:text-neutral-600 mt-2 px-1 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-neutral-400 text-[11px] dark:text-neutral-600">Oct 16 at 2:19 AM</span>
                            <span className="text-neutral-300 text-[10px] dark:text-neutral-700">•</span>
                            <span className="text-neutral-400 text-[11px] dark:text-neutral-600">gemini-2.5-pro</span>
                            <div className="flex items-center gap-1 ml-2">
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Copy message text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-3 w-3">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                </button>
                                <button className="h-4 w-4 text-muted-foreground hover:text-foreground" title="Delete message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3 w-3">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* Additional messages would continue here... */}
                </div>

                {/* Bottom Sticky Input */}
                <div className="p-4 border-t sticky bottom-[env(safe-area-inset-bottom)] backdrop-blur-sm z-20" style={{ backgroundColor: '#141414', borderColor: '#333333' }}>
                    <div className="relative">
                        <div className="relative">
                            <div className="absolute -top-3 right-[9px] z-30">
                                <div className="inline-flex rounded-lg border border-neutral-200 dark:border-neutral-700/50 overflow-hidden text-[10px] bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
                                    <button
                                        type="button"
                                        className={`px-2 py-1 ${isDefaultMode ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-transparent text-neutral-600 dark:text-neutral-400'}`}
                                        onClick={() => setIsDefaultMode(true)}
                                    >
                                        Default
                                    </button>
                                    <button
                                        type="button"
                                        className={`px-2 py-1 border-l border-neutral-200 dark:border-neutral-700/50 ${!isDefaultMode ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-transparent text-neutral-600 dark:text-neutral-400'}`}
                                        onClick={() => setIsDefaultMode(false)}
                                    >
                                        Edits
                                    </button>
                                </div>
                            </div>
                            {/* <button className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 w-7 h-7 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white" title="Scroll to bottom">
                                <ArrowDown className="h-3.5 w-3.5" />
                            </button> */}
                            <textarea
                                placeholder="Ask for revisions..."
                                className="w-full min-h-[80px] max-h-[400px] overflow-y-auto textarea-custom rounded-2xl pb-[40px]"
                                style={{
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
                            />
                        </div>
                        <input type="file" multiple className="hidden" accept=".txt,.html,.htm,.css,.js,.jsx,.ts,.tsx,.json,.xml,.yaml,.yml,.md,.markdown,.py,.java,.c,.cpp,.cs,.go,.rb,.php,.swift,.kt,.scala,.sh,.bat,.pl,.sql,.png,.jpg,.jpeg,.gif,.webp" />
                        <div className="absolute bottom-[14px] left-[9px] z-10 flex gap-1 lg:gap-2">
                            <button
                                type="button"
                                className="flex p-2 py-1 gap-2 items-center text-[10px] rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-border/50 hover:border-border/70 hover:bg-blue-500/5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                                title="Open Prompt Builder"
                                onClick={() => setIsPromptBuilderOpen(true)}
                            >
                                <WandSparkles className="h-3 w-3" />
                                Prompt Builder
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
                                    <div className="absolute bottom-full right-0 mb-1 z-500 overflow-hidden border border-black/20 dark:border-white/10 bg-white dark:bg-neutral-900 p-1 text-neutral-900 dark:text-neutral-100 shadow-md rounded-xl min-w-[225px]">
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
                                        <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors opacity-50 text-neutral-400 dark:text-neutral-500">
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
                                <span className="hidden xl:block">Attach</span>
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
                        <div className="absolute bottom-[14px] right-[9px] z-10">
                            <button className="flex p-1.5 py-[5px] pb-[6px] gap-2 items-center text-[10px] rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-border/50 hover:border-border/70 hover:bg-blue-500/5 text-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                                <ArrowUp className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - 70% */}
            <div className="w-[70%] flex flex-col">
                {/* Top Bar Right */}
                <div className="text-xs p-2 border-b flex justify-between items-center sticky top-[env(safe-area-inset-top)] backdrop-blur-sm z-20" style={{ backgroundColor: '#141414', borderColor: '#333333' }}>
                    <div className="flex items-center gap-[1px] lg:gap-1">
                        <div className="flex items-center bg-neutral-100/70 dark:bg-neutral-800/70 rounded-lg p-0.5 border border-border/50">
                            <button className="flex items-center gap-1 px-1.5 lg:px-[10px] py-0.5 text-[10px] font-medium rounded-md transition-all bg-white dark:bg-neutral-700 text-primary shadow-beautiful-md">
                                <Eye className="h-3.5 w-3 md:hidden" />
                                <span className="hidden md:inline">Preview</span>
                            </button>
                            <button className="flex items-center gap-1 px-1.5 lg:px-[10px] py-0.5 text-[10px] font-medium rounded-md transition-all text-muted-foreground hover:text-foreground">
                                <Palette className="h-3.5 w-3 md:hidden" />
                                <span className="hidden md:inline">Design</span>
                            </button>
                            <button className="flex items-center gap-1 px-1.5 lg:px-[10px] py-0.5 text-[10px] font-medium rounded-md transition-all text-muted-foreground hover:text-foreground">
                                <Code className="h-3.5 w-3 md:hidden" />
                                <span className="hidden md:inline">Code</span>
                            </button>
                        </div>
                        <button
                            title="Disable animations & effects"
                            className={`hidden sm:flex gap-1 items-center p-[6px] px-[7px] ml-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent dark:border-neutral-800 hover:border-black/5 dark:hover:border-white/5 text-[10px] font-medium transition-colors h-[24px] ${isAnimationsEnabled ? 'text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' : 'text-neutral-600 dark:text-neutral-400'}`}
                            onClick={() => setIsAnimationsEnabled(!isAnimationsEnabled)}
                        >
                            <Pause className="h-2.5 w-2.5 opacity-50" />
                        </button>
                        <div className="hidden md:flex items-center bg-neutral-100/70 dark:bg-neutral-800/70 rounded-lg p-[2px] gap-[3px] border border-border/50 ml-2">
                            <button className="flex gap-1 p-[3px] px-[5px] items-center text-[10px] button-secondary h-[20px] rounded-md dark:!border-white/10" title="Selection Fonts" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r11:" data-state="closed">
                                <Type className="h-2.5 w-2.5 opacity-50" />
                                <span className="hidden xl:inline">Fonts</span>
                            </button>
                            <button className="flex gap-1 p-[3px] px-[5px] items-center text-[10px] button-secondary h-[20px] rounded-md dark:!border-white/10" title="Selection Colors" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r12:" data-state="closed">
                                <Palette className="h-2.5 w-2.5 opacity-50" />
                                <span className="hidden xl:inline">Colors</span>
                            </button>
                            <button className="flex gap-1 p-[3px] px-[5px] items-center text-[10px] button-secondary h-[20px] rounded-md dark:!border-white/10" title="Selection Assets" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r13:" data-state="closed">
                                <Image className="h-2.5 w-2.5 opacity-50" />
                                <span className="hidden xl:inline">Assets</span>
                            </button>
                        </div>
                        <div className="flex items-center bg-neutral-100/70 dark:bg-neutral-800/70 rounded-lg p-[2px] gap-[2px] border border-border/50 ml-2">
                            <button disabled className="flex gap-1 p-[3px] px-[5px] items-center text-[10px] h-[20px] rounded-md disabled:opacity-40 disabled:cursor-not-allowed button-secondary dark:!border-white/10">
                                <Save className="h-2.5 w-2.5 opacity-70" />
                                <span className="hidden xl:block">Save</span>
                            </button>
                            <button disabled className="hidden md:flex gap-1 p-[3px] px-[5px] items-center text-[10px] button-secondary h-[20px] rounded-md disabled:opacity-40 disabled:cursor-not-allowed ml-[1px] dark:!border-white/10" title="Undo">
                                <Undo2 className="h-2.5 w-2.5" />
                            </button>
                            <button disabled className="hidden md:flex gap-1 p-[3px] px-[5px] items-center text-[10px] button-secondary h-[20px] rounded-md disabled:opacity-40 disabled:cursor-not-allowed ml-[1px] dark:!border-white/10" title="Redo">
                                <Redo2 className="h-2.5 w-2.5" />
                            </button>
                            <button disabled className="hidden md:flex gap-1 p-[3px] px-[5px] items-center text-[10px] button-secondary h-[20px] rounded-md disabled:opacity-40 disabled:cursor-not-allowed ml-[1px] dark:!border-white/10">
                                <X className="h-2.5 w-2.5" />
                            </button>
                        </div>
                        <div className="hidden lg:flex items-center bg-neutral-100/70 dark:bg-neutral-800/70 rounded-lg p-0.5 border border-border/50 ml-2">
                            <button className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-md transition-all bg-white dark:bg-neutral-700 text-primary shadow-beautiful-md">
                                <Monitor className="h-4 w-2.5 opacity-60" />
                            </button>
                            <button className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-md transition-all text-muted-foreground hover:text-foreground">
                                <Tablet className="h-4 w-2.5 opacity-60" />
                            </button>
                            <button className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-md transition-all text-muted-foreground hover:text-foreground">
                                <Smartphone className="h-4 w-2.5 opacity-60" />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-1 lg:gap-2 items-center">
                        <div className="hidden lg:block">
                            <button className="gap-1 p-[3px] px-[7px] items-center text-[10px] button-secondary h-[26px] hidden md:flex" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r14:" data-state="closed">
                                <ArrowUpRight className="h-2.5 w-2.5 opacity-50" />
                                <span className="hidden xl:block">Export</span>
                            </button>
                        </div>
                        <div className="relative">
                            <button
                                ref={publishButtonRef}
                                className="flex gap-1 p-[3px] px-[7px] items-center text-[10px] button-primary h-[26px]"
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:r15:"
                                data-state="closed"
                                onClick={() => setIsPublishModalOpen(!isPublishModalOpen)}
                            >
                                <Globe className="h-2.5 w-2.5 opacity-70" />
                                <span className="hidden xl:block">Publish</span>
                            </button>

                            {/* Publish Dropdown */}
                            {isPublishModalOpen && (
                                <div className="absolute top-full right-0 mt-1 z-50" style={{ minWidth: 'max-content', willChange: 'transform' }}>
                                    <div
                                        ref={publishModalRef}
                                        className="z-50 border text-popover-foreground outline-none w-80 p-4 rounded-xl border-transparent dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                                        tabIndex={-1}
                                    >
                                        <div className="space-y-4">
                                            <h3 className="font-medium text-sm">Share your design</h3>
                                            <p className="text-xs text-muted-foreground">This will publish your code preview and make it shareable via a public URL.</p>

                                            <div className="space-y-1">
                                                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs" htmlFor="slug">URL</label>
                                                <div className="flex items-center gap-1">
                                                    <div className="relative flex-1">
                                                        <input
                                                            className="flex w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-8 !text-xs textarea-small border-transparent pr-12"
                                                            id="slug"
                                                            placeholder="site-498ug"
                                                            defaultValue=""
                                                        />
                                                        <div className="absolute right-1 top-1 flex items-center gap-1">
                                                            <button className="h-6 px-2 text-[10px] rounded-md border bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed" title="Check availability" disabled>Check</button>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-muted-foreground whitespace-nowrap">.app.build</span>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs" htmlFor="title">Title</label>
                                                <input
                                                    className="flex w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-8 !text-xs textarea-small border-transparent"
                                                    id="title"
                                                    placeholder="Enter a title for your design"
                                                    defaultValue="Tic-Tac-Toe Game Template"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs">Preview Image (Required)</label>
                                                <p className="text-[10px] text-muted-foreground">Max 300 KB, 800x600 pixels</p>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <input type="file" accept="image/*" className="hidden" />
                                                    <button className="flex flex-col items-center justify-center gap-1 text-xs h-16 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-black/10 dark:border-white/10">
                                                        <Upload className="h-4 w-4" />
                                                        <span className="text-[10px]">Upload</span>
                                                    </button>
                                                    <button className="flex flex-col items-center justify-center gap-1 text-xs h-16 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-black/10 dark:border-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
                                                        <Camera className="h-4 w-4" />
                                                        <span className="text-[10px]">Capture</span>
                                                    </button>
                                                    <button className="flex flex-col items-center justify-center gap-1 text-xs h-16 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-black/10 dark:border-white/10">
                                                        <Monitor className="h-4 w-4" />
                                                        <span className="text-[10px]">Screenshot</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="space-y-2 rounded-md p-3 bg-muted/50 border border-neutral-200/50 dark:border-neutral-800 relative">
                                                <div className="absolute top-2 right-2">
                                                    <span className="text-[10px] font-medium bg-blue-500/20 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded">PRO</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" data-disabled="" disabled value="on" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" id="private"></button>
                                                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-muted-foreground" htmlFor="private">Make this private</label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button type="button" role="checkbox" aria-checked="true" data-state="checked" data-disabled="" disabled value="on" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" id="watermark">
                                                        <span data-state="checked" data-disabled="" className="flex items-center justify-center text-current" style={{ pointerEvents: 'none' }}>
                                                            <Check className="h-4 w-4" />
                                                        </span>
                                                    </button>
                                                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-muted-foreground" htmlFor="watermark">Include watermark</label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button type="button" role="checkbox" aria-checked="true" data-state="checked" data-disabled="" disabled value="on" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" id="source-code">
                                                        <span data-state="checked" data-disabled="" className="flex items-center justify-center text-current" style={{ pointerEvents: 'none' }}>
                                                            <Check className="h-4 w-4" />
                                                        </span>
                                                    </button>
                                                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-muted-foreground" htmlFor="source-code">Share source code</label>
                                                </div>
                                            </div>

                                            <button disabled className="flex items-center justify-center w-full text-xs h-8 button-primary disabled:opacity-50 disabled:cursor-not-allowed">
                                                <Globe className="h-3 w-3 mr-1" />
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="flex-1 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#141414' }}>
                    <div className="flex flex-col items-center gap-2 w-full">
                        <div className="flex items-center gap-2 text-[10px] h-7 px-1 rounded-md border border-border/50 bg-neutral-50/90 dark:bg-neutral-800/70 shadow-sm">
                            <input type="text" inputMode="numeric" pattern="[0-9]*" className="w-10 h-5 px-1 rounded border border-border/60 bg-white dark:bg-neutral-900 outline-none text-black dark:text-white" defaultValue="768" />
                            <span className="text-black dark:text-white">×</span>
                            <input type="text" inputMode="numeric" pattern="[0-9]*" className="w-10 h-5 px-1 rounded border border-border/60 bg-white dark:bg-neutral-900 outline-none text-black dark:text-white" defaultValue="716" />
                            <span className="text-neutral-500 dark:text-neutral-400">px</span>
                            <div className="mx-1 h-4 w-px bg-neutral-200 dark:bg-neutral-700"></div>
                            <select className="h-5 px-1 rounded border border-border/60 bg-white dark:bg-neutral-900 outline-none text-black dark:text-white" defaultValue="768x1024">
                                <option value="1440x1024">Desktop - 1440×1024</option>
                                <option value="1280x832">Desktop - 1280×832</option>
                                <option value="1024x768">Tablet - 1024x768 (Landscape)</option>
                                <option value="768x1024">Tablet - 768×1024 (Portrait)</option>
                                <option value="402x874">Phone - 402×874 (17 Pro)</option>
                                <option value="393x852">Phone - 393×852 (iPhone)</option>
                            </select>
                        </div>
                        <div className="max-w-full max-h-full border border-border/30 rounded-xl shadow-lg bg-white dark:bg-neutral-800 overflow-hidden relative" style={{ position: 'relative', userSelect: 'auto', width: '768px', height: '716px', maxWidth: '2400px', minWidth: '600px', boxSizing: 'border-box', flexShrink: 0 }}>
                            <iframe
                                title="HTML Preview"
                                className="border-0 w-full h-full rounded-xl"
                                sandbox="allow-scripts allow-same-origin"
                                srcDoc={`<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Tic-Tac-Toe App</title>
    <script src='https://cdn.tailwindcss.com'></script>
    <link rel='preconnect' href='https://fonts.googleapis.com'>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' rel='stylesheet'>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .winning-line {
            position: absolute;
            background: #818cf8;
            height: 4px;
            border-radius: 2px;
            transform-origin: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .winning-line.active {
            opacity: 0.9;
        }
    </style>
</head>
<body class='bg-slate-50 antialiased'>
    <div class='flex flex-col items-center justify-center min-h-screen p-4'>
        <div class='w-full max-w-sm mx-auto'>
            <div class='bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8'>
                <div class='flex justify-between items-center mb-6'>
                    <h1 class='text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight'>Tic-Tac-Toe</h1>
                    <button id='resetBtn' class='flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-rotate-cw'><path d='M21 2v6h-6'/><path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'/></svg>
                        Reset
                    </button>
                </div>
                <div id='gameBoard' class='relative'>
                    <div id='winningLine' class='winning-line' style='display: none;'></div>
                    <div class='grid grid-cols-3 gap-3'>
                        <div data-cell='0' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='1' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='2' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='3' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='4' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='5' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='6' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='7' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                        <div data-cell='8' class='cell aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-200/70'></div>
                    </div>
                </div>
                <div class='text-center mt-6 pt-6 border-t border-slate-100'>
                    <div id='status' class='flex items-center justify-center gap-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-7 h-7 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>
                        <p class='text-lg font-medium text-slate-800'>Player X's Turn</p>
                    </div>
                </div>
            </div>
            <div class='mt-6 text-center'>
                <button id='playAgainBtn' class='inline-block w-full px-6 py-3 bg-slate-800 text-white text-base font-medium rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all opacity-0 pointer-events-none' style='transition: opacity 0.3s ease;'>
                    Play Again
                </button>
            </div>
        </div>
    </div>
    <script>
        let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameActive = true;
        const cells = document.querySelectorAll('.cell');
        const status = document.getElementById('status');
        const resetBtn = document.getElementById('resetBtn');
        const playAgainBtn = document.getElementById('playAgainBtn');
        const winningLine = document.getElementById('winningLine');
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        const xIcon = \`<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>\`;
        const oIcon = \`<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-1/2 h-1/2 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>\`;
        function init() {
            cells.forEach(cell => {
                cell.addEventListener('click', handleCellClick);
            });
            resetBtn.addEventListener('click', resetGame);
            playAgainBtn.addEventListener('click', resetGame);
        }
        function handleCellClick(e) {
            const cell = e.currentTarget;
            const index = parseInt(cell.getAttribute('data-cell'));
            if (board[index] !== '' || !gameActive) return;
            board[index] = currentPlayer;
            cell.innerHTML = currentPlayer === 'X' ? xIcon : oIcon;
            cell.classList.remove('cursor-pointer', 'hover:bg-slate-200/70');
            if (checkWinner()) {
                gameActive = false;
                updateStatus(\`Player \${currentPlayer} Wins!\`, currentPlayer);
                showPlayAgainButton();
                return;
            }
            if (board.every(cell => cell !== '')) {
                gameActive = false;
                updateStatus('Draw!', null);
                showPlayAgainButton();
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateStatus(\`Player \${currentPlayer}'s Turn\`, currentPlayer);
        }
        function checkWinner() {
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    drawWinningLine(pattern);
                    return true;
                }
            }
            return false;
        }
        function drawWinningLine(pattern) {
            const [a, b, c] = pattern;
            const cellSize = cells[0].offsetWidth;
            const gap = 12;
            let transform = '';
            let width = 0;
            let top = 0;
            let left = 0;

            // Rows
            if (pattern[0] === 0 && pattern[2] === 2) {
                width = cellSize * 3 + gap * 2;
                top = cellSize / 2;
                left = 0;
            } else if (pattern[0] === 3 && pattern[2] === 5) {
                width = cellSize * 3 + gap * 2;
                top = cellSize * 1.5 + gap;
                left = 0;
            } else if (pattern[0] === 6 && pattern[2] === 8) {
                width = cellSize * 3 + gap * 2;
                top = cellSize * 2.5 + gap * 2;
                left = 0;
            }
            // Columns
            else if (pattern[0] === 0 && pattern[2] === 6) {
                width = cellSize * 3 + gap * 2;
                top = cellSize * 1.5 + gap;
                left = cellSize / 2 - (cellSize * 3 + gap * 2) / 2;
                transform = 'rotate(90deg)';
            } else if (pattern[0] === 1 && pattern[2] === 7) {
                width = cellSize * 3 + gap * 2;
                top = cellSize * 1.5 + gap;
                left = cellSize * 1.5 + gap - (cellSize * 3 + gap * 2) / 2;
                transform = 'rotate(90deg)';
            } else if (pattern[0] === 2 && pattern[2] === 8) {
                width = cellSize * 3 + gap * 2;
                top = cellSize * 1.5 + gap;
                left = cellSize * 2.5 + gap * 2 - (cellSize * 3 + gap * 2) / 2;
                transform = 'rotate(90deg)';
            }
            // Diagonals
            else if (pattern[0] === 0 && pattern[2] === 8) {
                width = Math.sqrt(2) * (cellSize * 3 + gap * 2);
                top = cellSize * 1.5 + gap;
                left = cellSize * 1.5 + gap - width / 2;
                transform = 'rotate(45deg)';
            } else if (pattern[0] === 2 && pattern[2] === 6) {
                width = Math.sqrt(2) * (cellSize * 3 + gap * 2);
                top = cellSize * 1.5 + gap;
                left = cellSize * 1.5 + gap - width / 2;
                transform = 'rotate(-45deg)';
            }

            winningLine.style.display = 'block';
            winningLine.style.width = width + 'px';
            winningLine.style.top = top + 'px';
            winningLine.style.left = left + 'px';
            winningLine.style.transform = transform;
            
            setTimeout(() => {
                winningLine.classList.add('active');
            }, 10);
        }
        function updateStatus(message, player) {
            const icon = player === 'X'
                ? \`<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-7 h-7 text-slate-700'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>\`
                : player === 'O'
                ? \`<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='w-7 h-7 text-indigo-500'><circle cx='12' cy='12' r='10'></circle></svg>\`
                : '';
            status.innerHTML = \`\${icon}<p class='text-lg font-medium text-slate-800'>\${message}</p>\`;
        }
        function showPlayAgainButton() {
            playAgainBtn.style.opacity = '1';
            playAgainBtn.style.pointerEvents = 'auto';
        }
        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            cells.forEach(cell => {
                cell.innerHTML = '';
                cell.classList.add('cursor-pointer', 'hover:bg-slate-200/70');
            });
            winningLine.classList.remove('active');
            setTimeout(() => {
                winningLine.style.display = 'none';
            }, 300);
            playAgainBtn.style.opacity = '0';
            playAgainBtn.style.pointerEvents = 'none';
            updateStatus("Player X's Turn", 'X');
        }
        init();
    </script>
</body>
</html>`}
                                style={{ backgroundColor: 'transparent', transition: 'background-color 0.2s' }}
                            />
                            <div>
                                <div className="cursor-ew-resize" style={{ position: 'absolute', userSelect: 'none', width: '16px', height: '100%', top: '0px', cursor: 'col-resize', right: '-8px' }}></div>
                                <div className="cursor-ew-resize" style={{ position: 'absolute', userSelect: 'none', width: '16px', height: '100%', top: '0px', left: '-8px', cursor: 'col-resize' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prompt Builder Modal */}
            {isPromptBuilderOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div
                        ref={promptBuilderRef}
                        className="z-50 border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-md rounded-2xl w-[90vw] max-w-[1200px] h-[80vh] flex flex-col"
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b py-2 px-4 bg-neutral-100 dark:bg-neutral-900 rounded-t-2xl" style={{ borderColor: '#333333' }}>
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
                            <div className="w-1/2 border-r overflow-y-auto" style={{ borderColor: '#333333' }}>
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
                                                    <span className="text-[10px] sm:text-[11px] lg:text-xs font-medium text-neutral-700 dark:text-neutral-300">Layout Type</span>
                                                </div>
                                            </div>
                                            <div className="ml-6 space-y-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        className={`p-2 text-[10px] sm:text-[11px] lg:text-xs rounded-lg border transition-all ${selectedLayoutType === 'landing' ? 'bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400' : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
                                                        onClick={() => setSelectedLayoutType('landing')}
                                                    >
                                                        Landing Page
                                                    </button>
                                                    <button
                                                        className={`p-2 text-[10px] sm:text-[11px] lg:text-xs rounded-lg border transition-all ${selectedLayoutType === 'dashboard' ? 'bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400' : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
                                                        onClick={() => setSelectedLayoutType('dashboard')}
                                                    >
                                                        Dashboard
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (50%) */}
                            <div className="w-1/2 overflow-y-auto">
                                <div className="p-4">
                                    <h3 className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-4">Selected Options</h3>
                                    <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                                        {selectedLayoutType && <div>Layout: {selectedLayoutType}</div>}
                                        {!selectedLayoutType && <div className="text-neutral-500">No options selected yet</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {/* Figma Modal */}
            {
                isFigmaModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <div
                            ref={figmaModalRef}
                            className="z-50 border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-md rounded-2xl w-[400px] p-0"
                        >
                            <div className="flex flex-col">
                                <div className="p-4 border-b" style={{ borderColor: '#333333' }}>
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
                                </div>

                                <div className="p-4 border-t flex justify-end gap-2" style={{ borderColor: '#333333' }}>
                                    <button
                                        className="text-xs button-secondary"
                                        onClick={() => setIsFigmaModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-xs button-primary"
                                        onClick={() => setIsFigmaModalOpen(false)}
                                    >
                                        Import
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}
