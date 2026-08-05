import React from 'react';

const GeometricBackdrop = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* ================= DARK MODE BACKDROP (bd.png Original) ================= */}
      <div className="hidden dark:block absolute inset-0 bg-[#020617]">
        <img
          src="/bd.png"
          alt="Dark Backdrop Design"
          className="w-full h-full object-cover object-center opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#020617]/50" />
      </div>

      {/* ================= LIGHT MODE BACKDROP (bd.png Recolored for Light Mode) ================= */}
      <div className="block dark:hidden absolute inset-0 bg-slate-50">
        <img
          src="/bd.png"
          alt="Light Backdrop Design"
          className="w-full h-full object-cover object-center opacity-95 transition-opacity duration-300"
          style={{
            filter: 'invert(0.95) hue-rotate(185deg) brightness(1.03) contrast(1.08)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-slate-100/50" />
      </div>
    </div>
  );
};

export default GeometricBackdrop;
