/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DroneMonitoring from "../components/DroneMonitoring";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900" id="landing-page">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <DroneMonitoring />
        
        {/* Call to Action Section */}
        <section className="py-32 px-6 md:px-12 bg-black text-white text-center" id="demo">
           <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8 tracking-tighter">¿Listo para modernizar su operación?</h2>
              <p className="text-xl text-zinc-400 mb-12 font-medium">Unete a las exportadoras líderes que ya confían en AgriSync para asegurar su calidad.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a 
                  href="/request-demo" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors"
                >
                  Agendar Demo
                </motion.a>
              </div>
           </div>
        </section>

        <ContactForm />
      </motion.main>
      <Footer />
    </div>
  );
}
