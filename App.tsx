import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trees,
  UserPlus,
  CalendarRange,
  Clock,
  Check,
  ChevronRight,
  Globe,
  Compass,
  ArrowRight,
  Mail,
  Sparkles
} from "lucide-react";

const CONFIG = {
  topBarText: "🍃 INDIVIDUALISIERT & PROFESSIONELL: DER ENTWURF FÜR DEIN PROJEKT",
  brandName: "RÜMPELGRÜN",
  brandSubtitle: "GARTEN- & LANDSCHAFTSBAU BRUNSCHWEIG",
  badgeText: "EXKLUSIVER DESIGN-ENTWURF",
  headlinePart1: "Lebendige Außenanlagen. ",
  headlinePart2: "Perfekt organisiert.",
  subheadline: "Ein maßgeschneidertes, digitales System für Rümpelgrün. Entwickelt, um erstklassiges Handwerk online sichtbar zu machen, Fachkräfte im Landkreis Wolfenbüttel anzuziehen und lästigen Papierkram im Büro komplett zu automatisieren.",
  primaryCtaText: "Funktionen testen",
  secondaryCtaText: "Direkt-Kontakt",
  imageUrl: "/Bild.jpg" 
};

export default function App() {
  const [demoActive, setDemoActive] = useState<boolean>(false);
  const [applicantCount, setApplicantCount] = useState<number>(12);
  
  // 3D Tilt Effekt States für das Mockup
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const element = cardRef.current;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Intensität des Tilts steuern
    setRotateX(-y / 12);
    setRotateY(x / 12);
  };

  const handleMouseLeaveCard = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setApplicantCount((prev) => prev + (Math.random() > 0.85 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans antialiased selection:bg-[#4E6E52]/10 selection:text-[#344E37]">
      
      {/* 1. TOP BAR BANNER */}
      <div className="bg-[#344E37] text-white py-2.5 text-[10px] font-mono tracking-[0.2em] text-center px-4 relative z-50 shadow-xs">
        {CONFIG.topBarText}
      </div>

      {/* 2. HEADER & NAVIGATION */}
      <header className="border-b border-neutral-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Trees className="w-5 h-5 text-[#4E6E52]" />
              <span className="font-sans text-lg font-bold tracking-wider text-neutral-900">{CONFIG.brandName}</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#4E6E52] font-medium mt-0.5">
              {CONFIG.brandSubtitle}
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-neutral-400 font-medium">
            <span className="text-[#4E6E52] font-semibold cursor-default flex items-center gap-1">
              <Sparkles className="w-3 h-3 animate-pulse" /> Live Prototyp
            </span>
            <span className="opacity-40 cursor-not-allowed">Über Uns</span>
            <span className="opacity-40 cursor-not-allowed">Referenzen</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#4E6E52]/5 border border-[#4E6E52]/10 px-3 py-1 rounded-full text-[10px] font-mono text-[#4E6E52]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              AKTIV
            </div>
            <button 
              onClick={() => setDemoActive(true)}
              className="bg-[#344E37] text-white uppercase text-[10px] tracking-widest font-semibold px-5 py-3 hover:bg-[#4E6E52] active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
            >
              Konzept öffnen
            </button>
          </div>

        </div>
      </header>

      {/* 3. MAIN HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Links: Text & Animationen */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-neutral-100/80 border border-neutral-200/50 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4E6E52]" />
              <span>{CONFIG.badgeText}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
              {CONFIG.headlinePart1} <br />
              <span className="bg-gradient-to-r from-[#4E6E52] to-[#344E37] bg-clip-text text-transparent italic font-serif font-normal">
                {CONFIG.headlinePart2}
              </span>
            </h1>
            
            <p className="text-neutral-500 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              {CONFIG.subheadline}
            </p>

            {/* Buttons mit Hover-Animation */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button 
                onClick={() => setDemoActive(true)}
                className="group w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-bold px-8 py-4.5 text-center transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>{CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setDemoActive(true)}
                className="w-full sm:w-auto bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 text-xs uppercase tracking-widest font-bold px-8 py-4.5 text-center transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs active:scale-98 cursor-pointer"
              >
                <span>{CONFIG.secondaryCtaText}</span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Feature-Karten mit Staggered Fade-In */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-neutral-200/60 max-w-xl">
              {[
                {
                  icon: <UserPlus className="w-4 h-4 text-[#4E6E52]" />,
                  title: "Bewerber-System",
                  desc: "Fachkräfte bewerben sich mobil in 60 Sekunden ohne Lebenslauf-Stress."
                },
                {
                  icon: <CalendarRange className="w-4 h-4 text-[#4E6E52]" />,
                  title: "Anfrage-Planer",
                  desc: "Filtert unqualifizierte Anfragen vorab durch Maße- und Foto-Abfragen."
                }
              ].map((feat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, borderColor: "rgba(78, 110, 82, 0.3)" }}
                  className="p-5 bg-white border border-neutral-200/70 rounded-2xl shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    {feat.icon}
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Rechts: Interaktives 3D-Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 w-full flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={handleMouseLeaveCard}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md bg-white border border-neutral-200 rounded-3xl p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] space-y-4 backface-visible transform-gpu"
            >
              
              {/* Browser Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                </div>
                <div className="text-[9px] font-mono text-neutral-400 bg-neutral-50 px-3 py-0.5 border border-neutral-200/60 rounded-md">
                  ruempelgruen-vorschau.de
                </div>
                <ChevronRight className="w-3 h-3 text-neutral-300" />
              </div>

              {/* Bild mit elegantem Zoom-In Effekt bei Hover */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-neutral-200/80 aspect-[4/3] bg-neutral-50 group">
                <img 
                  src={CONFIG.imageUrl} 
                  alt="Rümpelgrün Projekt" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[8px] font-mono text-neutral-200 uppercase tracking-widest block">Vercel Live-Vorschau</span>
                  <span className="text-xs font-semibold tracking-wide">Echtes Kundenbeispiel</span>
                </div>
              </div>

              {/* Interaktiver Live-Zähler */}
              <div className="p-4 bg-neutral-50/80 border border-neutral-200/70 rounded-2xl flex items-center justify-between shadow-xs">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Echtzeit-Metrik</span>
                  <div className="text-xs font-bold text-neutral-800 flex items-center gap-2">
                    <span>{applicantCount} Bewerber eingegangen</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#4E6E52]/10 rounded-full flex items-center justify-center text-[#4E6E52]">
                  <UserPlus className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </main>

      {/* 4. MODAL DETAILED CONCEPT */}
      <AnimatePresence>
        {demoActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDemoActive(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="max-w-md w-full bg-white border border-neutral-200 p-6 rounded-3xl relative z-10 shadow-2xl"
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#4E6E52]/10 text-[#4E6E52] flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6 animate-spin-slow" />
                </div>
                <h3 className="text-lg font-bold">Hinweis zum Prototyp</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Dieses System befindet sich im exklusiven Demo-Modus für Rümpelgrün. Nach Freischaltung werden alle Formulare, APIs und das Bewerbertool voll funktionsfähig hinterlegt.
                </p>
                
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-left font-mono text-[10px] text-neutral-500 space-y-1">
                  <div className="text-neutral-400">// Geplante Integrationen:</div>
                  <div className="text-neutral-800 font-semibold">- Resend Mail-Infrastruktur</div>
                  <div className="text-neutral-800 font-semibold">- Live SMS-Routing bei Bewerbungen</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoActive(false)}
                    className="w-full py-3 rounded-xl text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 active:scale-98 text-white transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
