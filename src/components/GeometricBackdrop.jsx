import React from 'react';

const GeometricBackdrop = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Background Base & Radial Edge Vignette (Deep Navy to Black) */}
      <div className="absolute inset-0 bg-[#000000] dark:bg-[#000000] bg-slate-50 transition-colors duration-300">
        {/* Core Deep Navy Center Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[1400px] h-[800px] bg-[#030c2c] dark:bg-[#030c2c] bg-sky-100/60 rounded-full blur-[160px] opacity-80" />
        
        {/* Cobalt Blue & Cyan Ambient Glows */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-700/20 dark:bg-blue-600/20 bg-sky-400/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-indigo-900/30 dark:bg-indigo-950/40 bg-blue-400/15 rounded-full blur-[150px]" />

        {/* Edge Radial Fade (Fades into Black at Edges) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] dark:block hidden pointer-events-none" />
      </div>

      {/* Pure Vector SVG Canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Deep Blue to Black Plate Gradients (Dark Mode) */}
          <linearGradient id="plate-dark-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a2569" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#041238" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#010617" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="plate-dark-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#06184a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="cobalt-glow-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
          </linearGradient>

          {/* Light Mode Gradients */}
          <linearGradient id="plate-light-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="cobalt-light-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#2563eb" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>

          {/* Glowing Filter */}
          <filter id="cobalt-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* ==================== DARK MODE LAYER ==================== */}
        {/* ========================================================= */}
        <g className="hidden dark:block">
          {/* Cobalt Geometric Grid Line System (Background Overlay) */}
          <g opacity="0.25">
            <line x1="0" y1="180" x2="1440" y2="180" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="12 6" />
            <line x1="0" y1="450" x2="1440" y2="450" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="12 6" />
            <line x1="0" y1="720" x2="1440" y2="720" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="12 6" />
            <line x1="360" y1="0" x2="360" y2="900" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="12 6" />
            <line x1="1080" y1="0" x2="1080" y2="900" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="12 6" />
          </g>

          {/* LEFT COMPOSITION: Interlocking Chevrons & Segmented Diamond Plates */}
          {/* Plate 1: Large Outer Chevron Plate */}
          <path
            d="M -180,450 L 160,110 L 360,450 L 160,790 Z"
            fill="url(#plate-dark-1)"
            stroke="url(#cobalt-glow-stroke)"
            strokeWidth="2.5"
            filter="url(#cobalt-glow)"
            className="opacity-90"
          />

          {/* Plate 2: Segmented Interlocking Diamond Plate */}
          <path
            d="M -100,450 L 160,180 L 290,450 L 160,720 Z"
            fill="url(#plate-dark-2)"
            stroke="url(#cobalt-glow-stroke)"
            strokeWidth="1.5"
            strokeDasharray="10 4"
            className="opacity-80"
          />

          {/* Structural Cobalt Accent Grid Lines inside Left Plates */}
          <line x1="-100" y1="180" x2="290" y2="570" stroke="#3b82f6" strokeWidth="1" opacity="0.35" />
          <line x1="-100" y1="720" x2="290" y2="330" stroke="#3b82f6" strokeWidth="1" opacity="0.35" />

          {/* RIGHT COMPOSITION: Interlocking Layered Plates & Chevrons */}
          {/* Plate 1: Upper Segmented Diamond Plate */}
          <path
            d="M 1520,180 L 1290,-30 L 1120,180 L 1320,350 Z"
            fill="url(#plate-dark-1)"
            stroke="url(#cobalt-glow-stroke)"
            strokeWidth="2"
            filter="url(#cobalt-glow)"
            className="opacity-85"
          />

          {/* Plate 2: Dominant Segmented Chevron Block */}
          <path
            d="M 1560,360 L 1190,600 L 1560,840 L 1560,960 L 1070,600 L 1560,220 Z"
            fill="url(#plate-dark-2)"
            stroke="url(#cobalt-glow-stroke)"
            strokeWidth="3"
            filter="url(#cobalt-glow)"
            className="opacity-95"
          />

          {/* Interlocking Inner Accent Plate Line */}
          <path
            d="M 1520,420 L 1260,600 L 1520,780"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            opacity="0.6"
          />

          {/* LOWER AREAS: Faint Scattered Data-Point Cross-Grids */}
          {/* Lower Left Data Cross-Grid Pattern */}
          <g opacity="0.45">
            {[0, 1, 2, 3, 4, 5, 6].map((col) =>
              [0, 1, 2, 3, 4].map((row) => {
                const cx = 50 + col * 24;
                const cy = 620 + row * 24;
                return (
                  <g key={`dark-left-cross-${col}-${row}`}>
                    <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="#38bdf8" strokeWidth="0.75" />
                    <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3} stroke="#38bdf8" strokeWidth="0.75" />
                  </g>
                );
              })
            )}
          </g>

          {/* Lower Right Data Cross-Grid Pattern */}
          <g opacity="0.45">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((col) =>
              [0, 1, 2, 3, 4].map((row) => {
                const cx = 1180 + col * 22;
                const cy = 740 + row * 22;
                return (
                  <g key={`dark-right-cross-${col}-${row}`}>
                    <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="#2563eb" strokeWidth="0.75" />
                    <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3} stroke="#2563eb" strokeWidth="0.75" />
                  </g>
                );
              })
            )}
          </g>

          {/* Upper Right Faint Data-Point Cross-Grid */}
          <g opacity="0.4">
            {[0, 1, 2, 3, 4, 5].map((col) =>
              [0, 1, 2, 3].map((row) => {
                const cx = 1200 + col * 20;
                const cy = 100 + row * 20;
                return (
                  <g key={`dark-top-cross-${col}-${row}`}>
                    <line x1={cx - 2.5} y1={cy} x2={cx + 2.5} y2={cy} stroke="#38bdf8" strokeWidth="0.75" />
                    <line x1={cx} y1={cy - 2.5} x2={cx} y2={cy + 2.5} stroke="#38bdf8" strokeWidth="0.75" />
                  </g>
                );
              })
            )}
          </g>
        </g>

        {/* ========================================================= */}
        {/* ==================== LIGHT MODE LAYER =================== */}
        {/* ========================================================= */}
        <g className="block dark:hidden">
          {/* Cobalt Grid Line System (Light Mode) */}
          <g opacity="0.2">
            <line x1="0" y1="180" x2="1440" y2="180" stroke="#0284c7" strokeWidth="0.75" strokeDasharray="12 6" />
            <line x1="0" y1="450" x2="1440" y2="450" stroke="#0284c7" strokeWidth="0.75" strokeDasharray="12 6" />
            <line x1="0" y1="720" x2="1440" y2="720" stroke="#0284c7" strokeWidth="0.75" strokeDasharray="12 6" />
          </g>

          {/* LEFT COMPOSITION (Light Mode) */}
          <path
            d="M -180,450 L 160,110 L 360,450 L 160,790 Z"
            fill="url(#plate-light-1)"
            stroke="url(#cobalt-light-stroke)"
            strokeWidth="2.5"
            className="opacity-80"
          />

          <path
            d="M -100,450 L 160,180 L 290,450 L 160,720 Z"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="10 4"
            className="opacity-60"
          />

          {/* RIGHT COMPOSITION (Light Mode) */}
          <path
            d="M 1520,180 L 1290,-30 L 1120,180 L 1320,350 Z"
            fill="url(#plate-light-1)"
            stroke="url(#cobalt-light-stroke)"
            strokeWidth="2"
            className="opacity-80"
          />

          <path
            d="M 1560,360 L 1190,600 L 1560,840 L 1560,960 L 1070,600 L 1560,220 Z"
            fill="url(#plate-light-1)"
            stroke="url(#cobalt-light-stroke)"
            strokeWidth="3"
            className="opacity-85"
          />

          {/* Lower Areas Light Mode Data-Point Cross-Grids */}
          <g opacity="0.45">
            {[0, 1, 2, 3, 4, 5, 6].map((col) =>
              [0, 1, 2, 3, 4].map((row) => {
                const cx = 50 + col * 24;
                const cy = 620 + row * 24;
                return (
                  <g key={`light-left-cross-${col}-${row}`}>
                    <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="#0284c7" strokeWidth="0.75" />
                    <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3} stroke="#0284c7" strokeWidth="0.75" />
                  </g>
                );
              })
            )}
          </g>

          <g opacity="0.45">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((col) =>
              [0, 1, 2, 3, 4].map((row) => {
                const cx = 1180 + col * 22;
                const cy = 740 + row * 22;
                return (
                  <g key={`light-right-cross-${col}-${row}`}>
                    <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="#2563eb" strokeWidth="0.75" />
                    <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3} stroke="#2563eb" strokeWidth="0.75" />
                  </g>
                );
              })
            )}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GeometricBackdrop;
