/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CheckCircle2, User, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function RequestDemo() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", company: "", farm_size: "" });

  const nextStep = () => setStep(step + 1);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-zinc-950 flex flex-col items-center justify-center p-6 font-sans">
      <Link to="/" className="fixed top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-black dark:hover:text-white transition-colors font-medium">
        <ArrowLeft size={20} />
        Volver
      </Link>

      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] shadow-xl border border-zinc-200 dark:border-white/5"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-2">Comencemos.</h2>
              <p className="text-slate-500 mb-8 font-medium">Cuéntenos sobre usted para personalizar su experiencia.</p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-500 ml-1">Nombre Completo</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium" 
                      placeholder="Juan Pérez"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-500 ml-1">Organización / Empresa</label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium" 
                      placeholder="Agrícola Valle del Sol"
                      value={form.company}
                      onChange={e => setForm({...form, company: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  disabled={!form.name || !form.company}
                  className="w-full py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] shadow-xl border border-zinc-200 dark:border-white/5"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-2">Detalles del campo.</h2>
              <p className="text-slate-500 mb-8 font-medium">Esto nos ayuda a preparar los datos de prueba.</p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-500 ml-1">Ubicación (Región)</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select 
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium appearance-none"
                    >
                      <option>Región del Maule</option>
                      <option>Región de O'Higgins</option>
                      <option>Región Metropolitana</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-500 ml-1">Hectáreas aproximadas</label>
                  <input 
                    type="number" 
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium" 
                    placeholder="Ej: 50"
                  />
                </div>

                <div className="flex gap-4">
                   <button 
                    onClick={() => setStep(1)}
                    className="flex-1 py-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 font-bold transition-all"
                  >
                    Atrás
                  </button>
                  <button 
                    onClick={nextStep}
                    className="flex-[2] py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] transition-all"
                  >
                    Solicitar Acceso
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-zinc-900 p-12 rounded-[3.5rem] shadow-xl border border-zinc-200 dark:border-white/5 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">¡Solicitud Recibida!</h2>
              <p className="text-slate-500 mb-10 font-medium leading-relaxed">
                Su usuario demo ha sido creado. Un asesor de AgriSync se contactará con usted en las próximas 24 horas para una capacitación guiada.
              </p>
              
              <div className="space-y-4">
                <Link to="/system" className="block w-full py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] transition-all">
                   Ir al Sistema Demo
                </Link>
                <Link to="/" className="block w-full py-5 rounded-2xl text-slate-500 font-bold hover:text-black dark:hover:text-white transition-all">
                   Volver al Inicio
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
