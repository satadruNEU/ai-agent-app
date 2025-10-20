'use client';

import { ChevronUp, Sun, Monitor, Moon, Twitter, Youtube, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-100 dark:border-neutral-800 py-12 md:py-16 mx-4 my-4 lg:mx-8 xl:mx-12 2xl:mx-16 rounded-2xl relative">

      <div className="container pl-6 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-12 space-x-4">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <Image
                src="/star.svg"
                alt="Star Logo"
                width={64}
                height={64}
                className="h-16 w-16 transition-all p-1 hover:bg-neutral-900 hover:dark:bg-neutral-900 rounded-xl"
              />
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-sm">
              Generate beautiful designs in seconds and export to HTML. Powerful prompt builder with hundreds of templates for responsive web design.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 text-sm">
            <div className="flex flex-col items-start">
              <h3 className="font-thin mb-3 text-[10px] text-neutral-500">PRODUCT</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Create<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Pricing<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">FAQ<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Download<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-thin mb-3 text-[10px] text-neutral-500">MADE BY US</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors relative group" target="_blank">Courses<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></a></li>
                <li><a href="#" className="hover:text-foreground transition-colors relative group" target="_blank">UI Kit<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></a></li>
                <li><a href="#" className="hover:text-foreground transition-colors relative group" target="_blank">Video Editor<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></a></li>
                <li><a href="#" className="hover:text-foreground transition-colors relative group" target="_blank">Mockups<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-thin mb-3 text-[10px] text-neutral-500">CONNECT</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Privacy<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Terms<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Support<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
                <li><span className="hover:text-foreground transition-colors relative group cursor-pointer">Report issue<span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span></span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 order-2 md:order-1">
            <p className="text-xs text-neutral-500">
              © 2025 Acme. All rights reserved.
            </p>
            <div className="relative flex h-6 w-auto bg-neutral-50 dark:bg-neutral-900 px-0.5 py-1 rounded-full border border-neutral-200/50 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 mt-2 md:mt-0">
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
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-2">
            <span className="text-muted-foreground hover:text-foreground transition-colors bg-neutral-100 dark:bg-neutral-900 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4" />
            </span>
            <span className="text-muted-foreground hover:text-foreground transition-colors bg-neutral-100 dark:bg-neutral-900 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-4 w-4" />
            </span>
            <span className="text-muted-foreground hover:text-foreground transition-colors bg-neutral-100 dark:bg-neutral-900 rounded-xl p-2 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
