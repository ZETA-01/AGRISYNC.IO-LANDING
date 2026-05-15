/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PRODUCT_NAME } from "../lib/constants";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass py-2 flex items-center px-6 md:px-12 justify-between min-h-[4rem]"
      id="main-nav"
    >
      <Link to="/" className="flex items-center gap-2 shrink-0" id="nav-logo">
        <Logo className="h-8 md:h-10" />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
        <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Características</a>
        <a href="#demo" className="hover:text-black dark:hover:text-white transition-colors">Demo</a>
        <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contacto</a>
      </div>
      
      <div className="flex items-center gap-3 md:gap-6">
       <a 
          href="https://app.zetagono.com" 
          className="text-[10px] md:text-sm font-medium hover:text-black dark:hover:text-white transition-colors text-right leading-tight"
          id="nav-login-link"
        >
          Iniciar<br />Sesión
        </a>
        <Link 
          to="/request-demo" 
          className="apple-button-primary text-[10px] md:text-sm py-1 px-3 md:py-2 md:px-4 text-center leading-tight shrink-0"
          id="nav-demo-btn"
        >
          Solicitar<br />Demo
        </Link>
      </div>
    </motion.nav>
  );
}
