/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PRODUCT_NAME } from "../lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
            <Logo className="h-6" showText={false} />
            <span className="font-bold tracking-tight text-slate-400">{PRODUCT_NAME}</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500 font-medium font-medium">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacidad</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Soporte</a>
        </div>

        <div className="text-sm text-slate-400 font-medium">
          © {new Date().getFullYear()} AgriSync Chile by ZETA01®. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
