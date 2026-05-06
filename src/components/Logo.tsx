/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TrendingUp, Trees } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} id="agrisync-logo-comp">
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-8 h-8 md:w-9 md:h-9 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-md shadow-black/5">
          <Trees className="text-white dark:text-black" size={20} />
          <div className="absolute -top-1 -right-1">
             <TrendingUp className="text-emerald-500 bg-white dark:bg-zinc-900 rounded-md p-0.5 shadow-sm" size={14} strokeWidth={3} />
          </div>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="text-base md:text-lg font-black tracking-tighter text-black dark:text-white uppercase">
            AGRISYNC
          </span>
          <span className="text-[5.5px] md:text-[6.5px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.14em] uppercase mt-0.5 leading-tight opacity-80">
            Conectando la<br />agricultura moderna
          </span>
        </div>
      )}
    </div>
  );
}
