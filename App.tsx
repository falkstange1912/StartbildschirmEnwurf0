import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trees,
  UserPlus,
  CalendarRange,
  Clock,
  Check,
  ChevronRight,
  Globe,
  Activity,
  Compass,
  ArrowRight,
  Info,
  Mail
} from "lucide-react";

// Zentrale Projekt-Konfiguration für blitzschnelle Anpassungen
const CONFIG = {
  topBarText: "🍃 INDIVIDUALISIERT & PROFESSIONELL: DER ENTWURF FÜR DEIN PROJEKT",
  brandName: "RÜMPELGRÜN",
  brandSubtitle: "GARTEN- & LANDSCHAFTSBAU BRUNSCHWEIG",
  badgeText: "EXKLUSIVER ENTWURF",
  headlinePart1: "Lebendige Außenanlagen. ",
  headlinePart2: "Perfekt organisiert.",
  subheadline: "Ein maßgeschneidertes, digitales System für Rümpelgrün. Entwickelt, um erstklassiges Handwerk online sichtbar zu machen, Fachkräfte im Landkreis Wolfenbüttel anzuziehen und lästigen Papierkram im Büro komplett zu automatisieren.",
  primaryCtaText: "Funktionen testen",
  secondaryCtaText: "Direkt-Kontakt",
  
  // Pfad zeigt jetzt direkt auf das Bild im neuen public-Ordner
  imageUrl: "/Bild.jpg" 
};

export default function App() {
  const [demoActive, setDemoActive] = useState<boolean>(false);
  const [applicantCount, setApplicantCount] = useState<number>(12);

  // Live-Zähler Simulation für das Bewerber-Tool im Mockup
  React.useEffect(() => {
    const interval = setInterval(() => {
      setApplicantCount((prev) => prev + (Math.random() > 0.85 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      
      {/* 1. TOP BAR BANNER */}
      <div className="bg-[#344E37] text-white py-2 text-[10px] uppercase font-mono tracking-widest text-center px-4">
        {CONFIG.topBarText}
      </div>

      {/* 2. HEADER & NAVIGATION */}
      <header className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo links */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Trees className="w-5 h-5 text-[#4E6E52]" />
              <span className="font-sans text-lg font-bold tracking-wider text-neutral-900">{CONFIG.brandName}</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-[#4E6E52] font-semibold mt-0.5">
              {CONFIG.brandSubtitle}
            </span>
          </div>

          {/* Menü Mitte */}
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-neutral-500 font-medium">
            <span className="text-[#4E6E52] font-semibold cursor-default">Prototyp</span>
            <span className="opacity-40 cursor-not-allowed">Über Uns</span>
            <span className="opacity-40 cursor-not-allowed">Referenzen</span>
          </nav>

          {/* Status rechts */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#4E6E52]/10 border border-[#4E6E52]/20 px-2.5 py-1 rounded text-[10px] font-mono text-[#4E6E52]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4E6E52] animate-pulse"></span>
              PROTOTYP v1.0
            </div>
            <button 
              onClick={() => setDemoActive(true)}
              className="bg-[#344E37] text-white uppercase text-[10px] tracking-widest font-semibold px-4 py-2.5 hover:bg-[#4E6E52] transition-colors duration-200 cursor-pointer"
            >
              Konzept öffnen
            </button>
          </div>

        </div>
      </header>

      {/* 3. MAIN CONTENT (HERO SECTION) */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Links: Textbereich */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-neutral-100 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4E6E52]" />
              <span>{CONFIG.badgeText}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              {CONFIG.headlinePart1} <br />
              <span className="text-[#4E6E52] italic font-serif font-normal">
                {CONFIG.headlinePart2}
              </span>
            </h1>
            
            <p className="text-neutral-500 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              {CONFIG.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                onClick={() => setDemoActive(true)}
                className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-bold px-8 py-4 text-center transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setDemoActive(true)}
                className="w-full sm:w-auto border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-xs uppercase tracking-widest font-bold px-8 py-4 text-center transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{CONFIG.secondaryCtaText}</span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Integrierte Module Kurz-Vorschau */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-neutral-100 max-w-xl">
              <div className="p-4 bg-neutral-50 border border-neutral-200/60 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  <UserPlus className="w-4 h-4 text-[#4E6E52]" />
                  <span>Bewerber-System</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Fachkräfte bewerben sich mobil in 60 Sekunden ohne Lebenslauf-Stress.</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200/60 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  <CalendarRange className="w-4 h-4 text-[#4E6E52]" />
                  <span>Anfrage-Planer</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Filtert unqualifizierte Anfragen vorab durch Maße- und Foto-Abfragen.</p>
              </div>
            </div>

          </div>

          {/* Rechts: Bildbereich / Mockup-Container */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-2xl space-y-4">
              
              {/* Top Bar des simulierten Fensters */}
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                </div>
                <div className="text-[9px] font-mono text-neutral-400 bg-neutral-50 px-2 py-0.5 border rounded">
                  ruempelgruen-vorschau.de
                </div>
                <ChevronRight className="w-3 h-3 text-neutral-300" />
              </div>

              {/* Bild-Bereich */}
              <div className="relative rounded-xl overflow-hidden shadow-xs border border-neutral-200 aspect-[4/3] bg-neutral-50 flex items-center justify-center">
                {CONFIG.imageUrl ? (
                  <img src={CONFIG.imageUrl} alt="Rümpelgrün Projekt" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#344E37]/10 to-neutral-50 flex flex-col items-center justify-center text-neutral-400 p-4">
                    <Trees className="w-8 h-8 text-[#4E6E52]/40 mb-1" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">[ Visueller Platzhalter ]</span>
                  </div>
                )}
              </div>

              {/* Live-Widget im Mockup */}
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Bewerbungseingänge</span>
                  <div className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                    <span>{applicantCount} Gesellen aktiv</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                </div>
                <div className="w-7 h-7 bg-[#4E6E52]/10 rounded-full flex items-center justify-center text-[#4E6E52]">
                  <UserPlus className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* 4. MODAL DETAILED CONCEPT */}
      <AnimatePresence>
        {demoActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-md w-full bg-white border border-neutral-200 p-6 rounded-2xl relative shadow-2xl"
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#4E6E52]/10 text-[#4E6E52] flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">Hinweis zum Prototyp</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Dieses System befindet sich im exklusiven Demo-Modus für Rümpelgrün. Nach Freischaltung werden Formulare, automatisierte Schnittstellen und das Bewerbertool voll funktionsfähig hinterlegt.
                </p>
                
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-left font-mono text-[10px] text-neutral-500 space-y-1">
                  <div>// Geplante Module:</div>
                  <div className="text-neutral-700">- Resend API Anbindung für Angebote</div>
                  <div className="text-neutral-700">- SMS-Benachrichtigung bei neuen Bewerbern</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoActive(false)}
                    className="w-full py-2.5 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer"
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
