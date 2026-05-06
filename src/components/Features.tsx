/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FEATURES } from "../lib/constants";
import * as Icons from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="heading-lg mb-6 tracking-tighter">Todo lo que necesita para su temporada.</h2>
            <p className="text-xl text-slate-500 font-medium font-medium">Diseñado para ser intuitivo bajo el sol y potente en la oficina.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-500 group"
                id={`feature-${index}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent 
                      size={24} 
                      className="text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" 
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
