/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Mail, Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "../lib/constants";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "", acceptedTerms: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.acceptedTerms) return;
    setSubmitted(true);
    // Simulation
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "", acceptedTerms: false });
    }, 3000);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=Hola, me gustaría solicitar información sobre ZETAGONO.`, "_blank");
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-black" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="heading-lg mb-8 tracking-tighter">Hablemos de su próximo paso.</h2>
          <p className="text-xl text-slate-500 mb-12 font-medium">Estamos listos para transformar su gestión agrícola. Contáctenos hoy mismo.</p>
          
          <div className="space-y-6">
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-4 p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 w-full group hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all duration-300"
              id="whatsapp-btn"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-zinc-900 dark:text-white">WhatsApp Directo</div>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Respuesta en minutos</div>
              </div>
            </button>

            <div className="flex items-center gap-4 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 w-full">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-600">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-zinc-900 dark:text-white">Email Corporativo</div>
                <div className="text-sm text-zinc-500 font-medium tracking-tight">contacto@agrisync.cl</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-xl"
          id="contact-form"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-500 tracking-tight ml-1">Nombre Completo</label>
              <input 
                type="text" 
                required
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium" 
                placeholder="Juan Pérez"
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-500 tracking-tight ml-1">Correo Electrónico</label>
              <input 
                type="email" 
                required
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium" 
                placeholder="juan@agricola.cl"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-500 tracking-tight ml-1">Teléfono</label>
              <input 
                type="tel" 
                required
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium" 
                placeholder="+56 9 1234 5678"
                value={formState.phone}
                onChange={e => setFormState({...formState, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-500 tracking-tight ml-1">Mensaje</label>
              <textarea 
                required
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium resize-none" 
                placeholder="Cuéntenos sobre su campo..."
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <div className="flex items-start gap-3 ml-1">
              <input 
                type="checkbox" 
                id="acceptedTerms"
                required
                className="mt-1 w-5 h-5 rounded border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-black dark:focus:ring-white accent-black dark:accent-white cursor-pointer"
                checked={formState.acceptedTerms}
                onChange={e => setFormState({...formState, acceptedTerms: e.target.checked})}
              />
              <label htmlFor="acceptedTerms" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-snug cursor-pointer select-none">
                Acepto los términos y condiciones y doy mi consentimiento para recibir información comercial y ofertas personalizadas a través de WhatsApp.
              </label>
            </div>

            <button 
              type="submit"
              disabled={submitted || !formState.acceptedTerms}
              className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-500 ${submitted ? 'bg-emerald-500 text-white' : 'bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed'}`}
            >
              {submitted ? "¡Enviado con Éxito!" : "Enviar Mensaje"}
              {!submitted && <Send size={18} />}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
