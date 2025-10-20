'use client';

import { Menu, Sun, Monitor, Moon, X, Info, SquareUserRound, Settings, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const avatarDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (avatarDropdownRef.current && !avatarDropdownRef.current.contains(event.target as Node)) {
        setIsAvatarDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-1 sm:py-2 lg:py-4 px-0 sm:px-2 lg:px-12 transition-all duration-300 ease-in-out backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="md:block hidden">
              <Image
                src="/star.svg"
                alt="Star Logo"
                width={40}
                height={40}
                className="h-10 w-10 transition-all p-1 hover:bg-neutral-900 hover:dark:bg-neutral-900 rounded-xl"
              />
            </div>
            <button className="items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 md:hidden flex p-1 w-12">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 px-4 py-2 rounded-md">CREATE</span>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 px-4 py-2 rounded-md">TEMPLATES</span>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 px-4 py-2 rounded-md">COMPONENTS</span>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 px-4 py-2 rounded-md">ASSETS</span>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 px-4 py-2 rounded-md">LEARN</span>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors items-center gap-1 px-4 py-2 rounded-md hidden lg:inline-flex">PRICING</span>
          <span className="text-xs text-muted-foreground hover:text-foreground transition-colors items-center gap-1 px-4 py-2 rounded-md hidden lg:inline-flex">CHANGELOG</span>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative flex h-6 w-auto bg-neutral-50 dark:bg-neutral-900 px-0.5 py-1 rounded-full border border-neutral-200/50 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700">
            <div className="absolute h-[20px] w-6 top-[1px] bg-white dark:bg-neutral-700 rounded-full transition-all duration-200 ease-in-out shadow-beautiful-md translate-x-[25px]"></div>
            <button className="relative -top-[1px] -left-[1px] z-10 flex items-center justify-center h-4 w-6 rounded-full transition-colors text-neutral-500 hover:text-neutral-900 dark:hover:text-white" aria-label="Light mode" type="button">
              <Sun className="h-3 w-3" />
            </button>
            <button className="relative -top-[1px] left-[1px] z-10 flex items-center justify-center h-4 w-6 rounded-full transition-colors text-neutral-900 dark:text-white" aria-label="System theme" type="button">
              <Monitor className="h-3 w-3" />
            </button>
            <button className="relative -top-[1px] left-[1px] z-10 flex items-center justify-center h-4 w-6 rounded-full transition-colors text-neutral-500 hover:text-neutral-900 dark:hover:text-white" aria-label="Dark mode" type="button">
              <Moon className="h-3 w-3" />
            </button>
          </div>

          <div className="relative" ref={avatarDropdownRef}>
            <span
              className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6 text-xs font-thin text-white cursor-pointer bg-gradient-to-br from-blue-500 to-purple-600"
              onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
            >
              <div className="flex items-center justify-center h-full w-full">
                <span className="text-[10px] font-medium">SD</span>
              </div>
            </span>

            {/* Avatar Dropdown Modal */}
            {isAvatarDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 pointer-events-auto z-50">
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl w-80 animate-in slide-in-from-top-2 duration-200 overflow-hidden" style={{ maxHeight: 'calc(-4rem + 100vh)', backdropFilter: 'blur(12px)' }}>
                  {/* Header */}
                  <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 py-2 px-4 bg-neutral-100 dark:bg-neutral-900 md:rounded-t-2xl">
                    <h2 className="text-xs uppercase font-medium text-neutral-700 dark:text-neutral-300">Welcome back</h2>
                    <button
                      className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-full p-1"
                      onClick={() => setIsAvatarDropdownOpen(false)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* User Info */}
                    <div className="flex items-center justify-start gap-2 mb-4">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">
                        <div className="flex items-center justify-center h-full w-full">
                          <span className="text-sm font-medium text-white">SD</span>
                        </div>
                      </span>
                      <div className="flex flex-col space-y-0.5">
                        <a className="hover:underline" href="/user-09b963a1">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-medium text-neutral-900 dark:text-white">Satadru Debnath</p>
                          </div>
                        </a>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">No bio yet</p>
                      </div>
                    </div>

                    {/* Subscription */}
                    <div className="px-1 py-1.5 mb-3">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-neutral-900 dark:text-white">Subscription</p>
                        <span className="text-xs px-1.5 py-0.5 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">Free</span>
                      </div>
                    </div>

                    {/* Usage Stats */}
                    <div className="px-1 pb-2 space-y-2">
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground flex items-center gap-1">
                            Daily prompts
                            <div className="relative">
                              <Info className="h-3 w-3 text-neutral-600 dark:text-neutral-300 cursor-help" />
                            </div>
                          </span>
                          <span className="font-medium text-neutral-900 dark:text-white">0/5</span>
                        </div>
                        <div className="h-1 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-neutral-300 dark:bg-neutral-600" style={{ width: '0%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground flex items-center gap-1">
                            Monthly prompts
                            <div className="relative">
                              <Info className="h-3 w-3 text-neutral-600 dark:text-neutral-300 cursor-help" />
                            </div>
                          </span>
                          <span className="font-medium text-neutral-900 dark:text-white">6/20</span>
                        </div>
                        <div className="h-1 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-neutral-300 dark:bg-neutral-600" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Usage Reset */}
                    <div className="px-1 py-1.5 mb-3 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                      <p className="text-xs font-medium mb-2 text-neutral-900 dark:text-white">Usage Reset</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600 dark:text-neutral-400">Next Monthly Reset:</span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-500">10/31/2025</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-neutral-100 dark:bg-neutral-800 mt-2"></div>

                    {/* Menu Items */}
                    <div className="mt-4 space-y-1">
                      <a className="flex items-center w-full px-2 py-2 text-xs border dark:border-white/0 border-black/0 dark:hover:border-white/5 hover:border-black/5 rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors" href="/user-09b963a1">
                        <SquareUserRound className="h-4 w-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        <span className="text-neutral-900 dark:text-white">Profile</span>
                      </a>
                      <button className="flex items-center w-full px-2 py-2 text-xs border dark:border-white/0 border-black/0 dark:hover:border-white/5 hover:border-black/5 rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors">
                        <Settings className="h-4 w-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        <span className="text-neutral-900 dark:text-white">Settings</span>
                      </button>
                      <button className="flex items-center w-full px-2 py-2 text-xs border dark:border-white/0 border-black/0 dark:hover:border-white/5 hover:border-black/5 rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors">
                        <LogOut className="h-4 w-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        <span className="text-neutral-900 dark:text-white">Log out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
