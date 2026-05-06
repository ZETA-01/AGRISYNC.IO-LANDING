/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TAGLINE, DESCRIPTION } from "../lib/constants";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-semibold tracking-wider uppercase text-slate-500">
          Nueva Versión 2.0
        </span>
        <h1 className="heading-xl mb-8 max-w-4xl mx-auto">
          {TAGLINE}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          {DESCRIPTION}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/request-demo" className="apple-button-primary scale-110 flex items-center gap-2 group">
            Solicitar Demo Gratuita
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/system" className="apple-button-secondary scale-110">
            Explorar Sistema Demo
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 w-full max-w-6xl mx-auto relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-zinc-900 shadow-2xl border border-white/10"
        id="hero-image-container"
      >
        {/* Mocking a system preview */}
        <div className="absolute inset-0 p-4 md:p-8 bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-black">
          <div className="w-full h-full rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 p-6 flex flex-col gap-6 shadow-inner">
             <div className="flex items-center justify-between">
                <div className="flex gap-4">
                   <div className="w-3 h-3 rounded-full bg-rose-500" />
                   <div className="w-3 h-3 rounded-full bg-amber-500" />
                   <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="w-32 h-2 rounded-full bg-zinc-100 dark:bg-white/5" />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                  <div key={i} className="h-32 rounded-xl bg-zinc-50 dark:bg-white/5 animate-pulse" />
                ))}
             </div>
             <div className="flex-1 rounded-xl bg-zinc-50 dark:bg-white/5 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
