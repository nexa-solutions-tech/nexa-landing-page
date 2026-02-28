export const AIEfficiencyOrb = () => {
  return (
    <div className="hidden md:block absolute left-1/2 top-[100px] -translate-x-1/2 w-[800px] h-[800px] z-[2] pointer-events-none">
      {/* Outer subtle gradient ring */}
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]" />

      {/* Rotating conic gradient border — radar sweep */}
      <div
        className="absolute inset-[-1px] rounded-full overflow-hidden opacity-[0.56]"
        style={{ animation: 'orb-spin 8s linear infinite' }}
      >
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(rgb(41,52,255)_0deg,transparent_16deg,transparent_323deg,rgb(41,52,255)_345deg)]" />
      </div>

      {/* Glass border frame */}
      <div className="absolute inset-[0.5%] rounded-full backdrop-blur-[11px] bg-[linear-gradient(rgba(5,5,5,0.76)_0%,rgba(13,13,13,0.79)_100%)] saturate-[1.17] shadow-[rgba(0,0,0,0.17)_0px_0.76px_0.69px_-0.5px,rgba(0,0,0,0.17)_0px_1.87px_1.68px_-1px,rgba(0,0,0,0.16)_0px_3.55px_3.19px_-1.5px,rgba(0,0,0,0.16)_0px_6.19px_5.57px_-2px,rgba(0,0,0,0.15)_0px_10.78px_9.7px_-2.5px,rgba(0,0,0,0.12)_0px_19.74px_17.76px_-3px,rgba(0,0,0,0.08)_0px_39px_35.1px_-3.5px]" />

      {/* Inner highlight ring */}
      <div className="absolute inset-[4%] rounded-full backdrop-blur-[11px] bg-[linear-gradient(rgb(0,0,0)_0%,rgba(255,255,255,0.13)_100%)]" />

      {/* Solid dark center */}
      <div className="absolute inset-[4.5%] rounded-full bg-[rgb(0,1,5)]" />

      {/* Crosshair lines */}
      <div className="absolute inset-[4.5%] rounded-full overflow-hidden">
        <div className="absolute left-1/2 inset-y-0 w-px -translate-x-1/2 bg-white opacity-[0.01]" />
        <div className="absolute top-1/2 inset-x-0 h-px -translate-y-1/2 bg-white opacity-[0.01]" />
      </div>

      {/* Concentric circle rings with staggered pulse */}
      {[85, 66, 46, 24].map((size, i) => {
        const inset = `${(100 - size) / 2 + 4.5}%`;
        return (
          <div
            key={size}
            className="absolute rounded-full border border-white"
            style={{
              inset,
              animation: `orb-ring-pulse 4s ease-in-out ${i * 0.8}s infinite`,
            }}
          />
        );
      })}

      {/* Rotating light beam — color dodge */}
      <div
        className="absolute inset-[4.5%] rounded-full overflow-hidden mix-blend-color-dodge"
        style={{ animation: 'orb-spin 8s linear infinite' }}
      >
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(rgb(59,59,59)_0deg,rgb(255,255,255)_360deg)]" />
      </div>

      {/* Floating icon accent */}
      <div
        className="absolute w-[48px] h-[48px] top-[40%] right-[12%] mix-blend-hard-light"
        style={{ animation: 'orb-icon-pulse 4s ease-in-out infinite' }}
      >
        <img
          src="https://c.animaapp.com/mkvwf206SqHHjG/assets/ubO6hprNRTUPSD1LOKrAqhScc.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
