/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  Users, 
  Boxes, 
  ShieldCheck, 
  Truck, 
  LogOut, 
  Search,
  Bell,
  ChevronRight,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

// Mock data based on the Repomix context
const MOCK_STATS = [
  { label: "Kilos Cosechados", value: "125,430", change: "+12%", color: "text-emerald-500" },
  { label: "Bines Activos", value: "312", change: "+5", color: "text-blue-500" },
  { label: "Alertas Calidad", value: "2", change: "-80%", color: "text-rose-500" },
  { label: "Cuadrillas", value: "12", change: "Estable", color: "text-amber-500" },
];

const MOCK_LATEST_BINS = [
  { id: "BIN-2026-XA1", variety: "Santina", quality: "95%", status: "En Tránsito" },
  { id: "BIN-2026-XA2", variety: "Lapins", quality: "88%", status: "En Packing" },
  { id: "BIN-2026-XB1", variety: "Regina", quality: "92%", status: "En Cosecha" },
  { id: "BIN-2026-XB2", variety: "Santina", quality: "94%", status: "Cargado" },
];

export default function DashboardDemo() {
  return (
    <div className="flex h-screen bg-[#F5F5F7] dark:bg-zinc-950 font-sans" id="system-x">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900 hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <Logo className="h-8" />
        </div>
        
        <nav className="flex-1 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<Users size={20} />} label="Personal" />
          <NavItem icon={<Boxes size={20} />} label="Trazabilidad" />
          <NavItem icon={<ShieldCheck size={20} />} label="Control Calidad" />
          <NavItem icon={<Truck size={20} />} label="Logística" />
          <NavItem icon={<Bell size={20} />} label="Notificaciones" badge="2" />
        </nav>

        <div className="pt-6 border-t border-zinc-100 dark:border-white/5 space-y-4">
           <Link to="/" className="flex items-center gap-3 text-sm text-slate-500 hover:text-black dark:hover:text-white transition-colors font-medium">
             <LogOut size={18} />
             Salir del Demo
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
           <div className="flex items-center gap-4 flex-1">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Buscar bin, trabajador o guía..." 
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none text-sm font-medium"
                />
              </div>
           </div>

           <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                 <div className="text-sm font-bold">Admin Demo</div>
                 <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Exportadora Agricola</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold">AD</div>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
               <h1 className="text-3xl font-bold tracking-tight mb-1">Centro de Mando</h1>
               <p className="text-slate-500 font-medium font-medium italic">Vista consolidada de la temporada de cerezas en tiempo real.</p>
            </div>
            <button className="apple-button-primary scale-90 flex items-center gap-2">
               <UserPlus size={18} />
               Nuevo Trabajador
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {MOCK_STATS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-[2rem] border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-default group"
              >
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{stat.label}</div>
                <div className="flex items-end justify-between">
                   <div className="text-3xl font-black">{stat.value}</div>
                   <div className={`text-xs font-bold ${stat.color} flex items-center gap-1`}>
                      <TrendingUp size={14} />
                      {stat.change}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Map Widget */}
             <div className="lg:col-span-3 h-[300px] rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                   <div className="text-center">
                      <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Cargando Motor GIS (PostGIS)...</p>
                   </div>
                </div>
                <div className="absolute top-6 left-6 z-10 p-4 rounded-2xl glass text-[10px] font-black uppercase tracking-widest text-emerald-500 shadow-xl">
                   Mapa de Cosecha en Tiempo Real
                </div>
             </div>

             {/* Latest Activity */}
             <div className="lg:col-span-2 space-y-6">
                <div className="p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm">
                   <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
                      Últimos Bins Escaneados
                      <button className="text-sm text-blue-500 font-bold hover:underline">Ver Todos</button>
                   </h2>
                   <div className="space-y-4">
                      {MOCK_LATEST_BINS.map((bin, i) => (
                        <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-white/5">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-xs font-black border border-zinc-100 dark:border-white/5">QR</div>
                              <div>
                                 <div className="font-bold text-sm">{bin.id}</div>
                                 <div className="text-[10px] uppercase font-black text-slate-400 tracking-tight">{bin.variety}</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-6">
                              <div className="text-right">
                                 <div className="text-xs font-bold text-emerald-500">{bin.quality} QC</div>
                                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{bin.status}</div>
                              </div>
                              <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Alerts & Context */}
             <div className="space-y-6">
                <div className="p-6 rounded-[2.5rem] bg-zinc-900 dark:bg-white text-white dark:text-black shadow-xl">
                   <div className="w-10 h-10 rounded-2xl bg-white/10 dark:bg-black/10 flex items-center justify-center mb-4">
                      <Bell size={20} className="animate-bounce" />
                   </div>
                   <h3 className="text-lg font-bold mb-2 tracking-tight">Alertas de Calidad</h3>
                   <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-6 font-medium">Se detectó "Sobre Madurez" en el Cuartel C-04. Se recomienda revisión inmediata.</p>
                   <button className="w-full py-3 rounded-xl bg-white dark:bg-black text-black dark:text-white text-xs font-black uppercase tracking-widest hover:scale-95 transition-all">Revisar Alerta</button>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm">
                   <h3 className="text-sm font-black uppercase text-slate-400 tracking-widest mb-6">Estado de Sync</h3>
                   <div className="flex flex-col gap-4">
                      <SyncItem label="Base de Datos" status="Online" active />
                      <SyncItem label="Dispositivos" status="8 Activos" active />
                      <SyncItem label="Servidor Local" status="Sincronizado" active />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
  return (
    <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-all font-medium ${active ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-slate-500 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black">{badge}</span>
      )}
    </button>
  );
}

function SyncItem({ label, status, active }: { label: string, status: string, active: boolean }) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-sm font-bold text-slate-500">{label}</span>
       <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-500">{status}</span>
          <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-emerald-500' : 'bg-slate-300'} shadow-[0_0_8px_rgba(16,185,129,0.4)]`} />
       </div>
    </div>
  );
}
