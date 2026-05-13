/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, Trees, Droplets, Target } from "lucide-react";

export default function DroneMonitoring() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-black overflow-hidden" id="drone-monitoring">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              Tecnología de Vanguardia
            </span>
            <h2 className="heading-lg mb-8 tracking-tighter">
              Diagnóstico de Precisión con Mavic 3M.
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Transformamos las imágenes multiespectrales de sus vuelos en mapas de acción directa. Sin complicaciones, directo a su panel de ZETAGONO.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center shrink-0">
                  <Trees className="text-emerald-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Análisis de Vigor (NDVI)</h4>
                  <p className="text-slate-500 font-medium text-sm">Identifique zonas de bajo rendimiento antes de que sea tarde. Monitoreo histórico del desarrollo foliar.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center shrink-0">
                  <Zap className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Detección de Estrés (NDRE)</h4>
                  <p className="text-slate-500 font-medium text-sm">Mida la clorofila y detecte carencias nutricionales o estrés hídrico de forma temprana.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center shrink-0">
                  <Target className="text-rose-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Prescripción Variable</h4>
                  <p className="text-slate-500 font-medium text-sm">Ahorre en insumos aplicando solo donde es necesario. Generación de archivos listos para maquinaria.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-2xl border border-white/10 group">
               {/* Simplified visual representation of the analysis process */}
               <div className="absolute inset-0 flex flex-col items-center justify-start p-8 pt-12 md:pt-16 text-center">
                  <div className="w-full max-w-[280px] h-40 md:h-64 bg-emerald-500/20 rounded-2xl relative mb-6 overflow-hidden">
                     <div className="absolute top-0 left-0 w-1/3 h-full bg-emerald-600/40" />
                     <div className="absolute top-0 left-1/3 w-1/3 h-full bg-amber-500/40" />
                     <div className="absolute top-0 left-2/3 w-1/3 h-full bg-rose-500/40" />
                     <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-50 animate-scan" />
                  </div>
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter mb-3">Procesado de Índices</h3>
                  <div className="flex gap-2 justify-center">
                     <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-black border border-emerald-500/20">NDVI</span>
                     <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[9px] font-black border border-blue-500/20">NDRE</span>
                     <span className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-500 text-[9px] font-black border border-slate-500/20">RGB</span>
                  </div>
               </div>
               
               {/* Floating Data Badge removed */}
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
