import React from 'react';

const GeometricBackdrop = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Dynamic Background Base Color */}
      <div className="absolute inset-0 bg-[#020617] dark:bg-[#020617] bg-slate-50 transition-colors duration-300">
        {/* Soft Ambient Radial Blur Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[600px] bg-blue-900/15 dark:bg-blue-950/40 bg-blue-400/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 dark:bg-cyan-500/20 bg-sky-400/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/10 dark:bg-blue-700/20 bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Pure Vector SVG Recreating bd.png Geometry Perfectly */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Neon Blue / Cyan Gradients for Dark Mode */}
          <linearGradient id="bd-dark-cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="bd-dark-blue-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="bd-dark-left-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
          </linearGradient>

          {/* Gradients for Light Mode */}
          <linearGradient id="bd-light-cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="bd-light-blue-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.05" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="bd-glow-intense" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="bd-glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
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
          {/* Left Side Layered Polygon Planes */}
          <path
            d="M -150,450 L 170,130 L 350,450 L 170,770 Z"
            fill="rgba(3, 16, 48, 0.65)"
            stroke="url(#bd-dark-left-glow)"
            strokeWidth="2.5"
            filter="url(#bd-glow-intense)"
            className="opacity-90"
          />

          <path
            d="M -90,450 L 170,190 L 290,450 L 170,710 Z"
            fill="rgba(4, 22, 66, 0.45)"
            stroke="url(#bd-dark-cyan-blue)"
            strokeWidth="1.5"
            strokeDasharray="10 5"
            filter="url(#bd-glow-subtle)"
            className="opacity-75"
          />

          {/* Left Side Outer Shadow Chevron Plane */}
          <polygon
            points="-220,100 -30,450 -220,800 -350,450"
            fill="rgba(2, 10, 32, 0.7)"
            stroke="#0284c7"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Left Side Dot Grid Matrix (Bottom Left) */}
          <g opacity="0.65">
            {[0, 1, 2, 3, 4, 5].map((col) =>
              [0, 1, 2, 3, 4, 5, 6].map((row) => (
                <circle
                  key={`dark-left-dot-${col}-${row}`}
                  cx={40 + col * 18}
                  cy={600 + row * 18}
                  r="1.75"
                  fill="#38bdf8"
                  opacity={(col + row) % 2 === 0 ? "0.9" : "0.35"}
                />
              ))
            )}
          </g>

          {/* Right Side Upper Nested Diamond Plane */}
          <path
            d="M 1500,180 L 1280,0 L 1140,180 L 1320,340 Z"
            fill="rgba(4, 20, 60, 0.55)"
            stroke="url(#bd-dark-cyan-blue)"
            strokeWidth="2.5"
            filter="url(#bd-glow-intense)"
            className="opacity-85"
          />

          <path
            d="M 1500,180 L 1330,40 L 1210,180 L 1350,300 Z"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Right Side Dominant Lower Thick Blue Chevron Block */}
          <path
            d="M 1520,380 L 1180,600 L 1520,820 L 1520,950 L 1080,600 L 1520,250 Z"
            fill="url(#bd-dark-blue-fill)"
            stroke="url(#bd-dark-cyan-blue)"
            strokeWidth="3"
            filter="url(#bd-glow-intense)"
            className="opacity-95"
          />

          {/* Right Side Upper Dot Matrix Grid */}
          <g opacity="0.7">
            {[0, 1, 2, 3, 4, 5].map((col) =>
              [0, 1, 2, 3].map((row) => (
                <circle
                  key={`dark-right-top-dot-${col}-${row}`}
                  cx={1200 + col * 16}
                  cy={120 + row * 16}
                  r="1.5"
                  fill="#00e5ff"
                  opacity={(col * row) % 3 === 0 ? "0.9" : "0.3"}
                />
              ))
            )}
          </g>

          {/* Right Side Lower Dot Matrix Grid */}
          <g opacity="0.7">
            {[0, 1, 2, 3, 4, 5, 6].map((col) =>
              [0, 1, 2, 3, 4].map((row) => (
                <circle
                  key={`dark-right-bot-dot-${col}-${row}`}
                  cx={1220 + col * 16}
                  cy={760 + row * 16}
                  r="1.5"
                  fill="#38bdf8"
                  opacity={(col + row) % 2 === 0 ? "0.85" : "0.35"}
                />
              ))
            )}
          </g>
        </g>

        {/* ========================================================= */}
        {/* ==================== LIGHT MODE LAYER =================== */}
        {/* ========================================================= */}
        <g className="block dark:hidden">
          {/* Left Side Light Mode Geometry */}
          <path
            d="M -150,450 L 170,130 L 350,450 L 170,770 Z"
            fill="rgba(224, 242, 254, 0.55)"
            stroke="url(#bd-light-cyan-blue)"
            strokeWidth="2.5"
            filter="url(#bd-glow-subtle)"
            className="opacity-80"
          />

          <path
            d="M -90,450 L 170,190 L 290,450 L 170,710 Z"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="10 5"
            className="opacity-60"
          />

          {/* Left Side Dot Grid Matrix (Bottom Left) */}
          <g opacity="0.65">
            {[0, 1, 2, 3, 4, 5].map((col) =>
              [0, 1, 2, 3, 4, 5, 6].map((row) => (
                <circle
                  key={`light-left-dot-${col}-${row}`}
                  cx={40 + col * 18}
                  cy={600 + row * 18}
                  r="1.75"
                  fill="#0284c7"
                  opacity={(col + row) % 2 === 0 ? "0.85" : "0.35"}
                />
              ))
            )}
          </g>

          {/* Right Side Upper Nested Diamond Plane */}
          <path
            d="M 1500,180 L 1280,0 L 1140,180 L 1320,340 Z"
            fill="rgba(219, 234, 254, 0.6)"
            stroke="url(#bd-light-cyan-blue)"
            strokeWidth="2.5"
            filter="url(#bd-glow-subtle)"
            className="opacity-80"
          />

          {/* Right Side Dominant Lower Thick Blue Chevron Block */}
          <path
            d="M 1520,380 L 1180,600 L 1520,820 L 1520,950 L 1080,600 L 1520,250 Z"
            fill="url(#bd-light-blue-fill)"
            stroke="url(#bd-light-cyan-blue)"
            strokeWidth="3"
            filter="url(#bd-glow-subtle)"
            className="opacity-85"
          />

          {/* Right Side Upper Dot Matrix Grid */}
          <g opacity="0.65">
            {[0, 1, 2, 3, 4, 5].map((col) =>
              [0, 1, 2, 3].map((row) => (
                <circle
                  key={`light-right-top-dot-${col}-${row}`}
                  cx={1200 + col * 16}
                  cy={120 + row * 16}
                  r="1.5"
                  fill="#0284c7"
                  opacity={(col * row) % 3 === 0 ? "0.85" : "0.35"}
                />
              ))
            )}
          </g>

          {/* Right Side Lower Dot Matrix Grid */}
          <g opacity="0.65">
            {[0, 1, 2, 3, 4, 5, 6].map((col) =>
              [0, 1, 2, 3, 4].map((row) => (
                <circle
                  key={`light-right-bot-dot-${col}-${row}`}
                  cx={1220 + col * 16}
                  cy={760 + row * 16}
                  r="1.5"
                  fill="#2563eb"
                  opacity={(col + row) % 2 === 0 ? "0.85" : "0.35"}
                />
              ))
            )}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GeometricBackdrop;
