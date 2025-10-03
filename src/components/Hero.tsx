import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import SmileyButton from "@/components/SmileyButton";
import MarqueeBanner from "@/components/MarqueeBanner"; 
import UpperMarquee from "@/components/UpperMarquee";
import Logo from "@/assets/azinhack.jpeg";

function useComponentSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = useCallback(() => {
    if (ref.current) {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    updateSize();
    const observer = new window.ResizeObserver(() => updateSize());
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [updateSize]);

  return [ref, size] as const;
}

function circlesOverlap(x1, y1, r1, x2, y2, r2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < (r1 + r2) * 1.0; // Adjusted threshold to prevent any overlap
}

const Hero = () => {
  const [boxRef, size] = useComponentSize<HTMLDivElement>(); // Now using size
  
  // Responsive grid: adaptive rows/cols based on width
  const getGridConfig = (width: number) => {
    if (width < 768) return { ROWS: 2, COLS: 2 }; // Mobile
    if (width < 1024) return { ROWS: 3, COLS: 4 }; // Tablet/Small Desktop
    return { ROWS: 3, COLS: 5 }; // Large Desktop
  };
  const { ROWS, COLS } = getGridConfig(size.width);
  
  const smileyGrid = useMemo(() => {
    const placed = [];
    const spacingX = size.width / COLS; // Dynamic spacing based on box width
    const spacingY = size.height / ROWS; // Dynamic spacing based on box height
    return Array.from({ length: ROWS }).map((_, row) =>
      Array.from({ length: COLS }).map((_, col) => {
        let size, marginTop, marginLeft, marginBottom, marginRight;
        let attempts = 0;
        let overlaps;
        let centerX, centerY;

        do {
          size = Math.random() * 80 + 100; // Random size between 100px and 180px
          marginTop = '0px'; // Simplified to 0px for even filling
          marginBottom = '0px';
          marginLeft = '0px';
          marginRight = '0px';

          centerY = row * spacingY + size / 2; // Even spacing across height
          centerX = col * spacingX + size / 2; // Even spacing across width

          overlaps = placed.some(s =>
            circlesOverlap(centerX, centerY, size / 2, s.centerX, s.centerY, s.size / 2)
          );
          attempts++;
        } while (overlaps && attempts < 10);

        placed.push({ centerX, centerY, size });

        return {
          size,
          key: `${row}-${col}`, // Fixed: Use backticks for template literal
          marginTop,
          marginLeft,
          marginBottom,
          marginRight,
          centerX,
          centerY,
        };
      })
    );
  }, [size, ROWS, COLS]); // Now depends on size, ROWS, COLS for responsiveness

  return (
    <section className="relative min-h-screen bg-cyan overflow-hidden flex flex-col">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <a 
          href="https://iosc-edc.club" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-4xl md:text-5xl font-black text-black border-4 border-black px-4 py-2 bg-cyan hover:bg-magenta hover:text-white transition-colors"
        >
          IoSC EDC
        </a>
        <div className="flex gap-4 md:gap-6 items-center">
          <a href="#about" className="hidden md:block text-lg font-black text-black hover:text-magenta transition-colors">
            ABOUT
          </a>
          <a href="#faq" className="hidden md:block text-lg font-black text-black hover:text-magenta transition-colors">
            FAQ
          </a>
          <a href="#sponsors" className="hidden md:block text-lg font-black text-black hover:text-magenta transition-colors">
            SPONSOR
          </a>
         <Button 
            className="bg-magenta text-black font-black text-lg border-4 border-black shadow-bold hover:bg-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            onClick={() => window.open('https://unstop.com/o/C5Iy0bg?lb=fR9xLBdf&utm_medium=Share&utm_source=WhatsApp', '_blank')}
          >
            APPLY NOW
          </Button>
        </div>
      </nav>

      {/* Marquee Banner */}
      <UpperMarquee />

      {/* Date box overlapping the central rectangle */}
      <div className="absolute left-8 bottom-10 bg-black text-white px-8 py-4 text-xl md:text-2xl font-black border-4 border-black rounded shadow z-30">
        OCT. 15 - OCT. 16, 2025
      </div>

      {/* Centered event box */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div
          ref={boxRef}
          className="border-4 border-black w-[90vw] h-[75vh] rounded-xl shadow-bold overflow-hidden relative flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #ff3399, #ff9bcd)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Flexbox grid for smileys */}
          <div className="absolute inset-0 w-full h-full">
            {size.width > 0 && smileyGrid.flat().map(cfg => (
              <div
                key={cfg.key}
                style={{
                  position: "absolute",
                  top: `${cfg.centerY - cfg.size / 2}px`, // Fixed: Use backticks
                  left: `${cfg.centerX - cfg.size / 2}px`, // Fixed: Use backticks
                  width: `${cfg.size}px`, // Fixed: Use backticks
                  height: `${cfg.size}px`, // Fixed: Use backticks
                  marginTop: cfg.marginTop,
                  marginLeft: cfg.marginLeft,
                  marginBottom: cfg.marginBottom,
                  marginRight: cfg.marginRight,
                  pointerEvents: "none",
                }}
              >
                <SmileyButton
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </div>
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
            <h1
              className="text-7xl md:text-8xl font-black text-white text-center"
              style={{
                textShadow: `
                  -6px -6px 0 #000,
                  6px -6px 0 #000,
                  -6px 6px 0 #000,
                  6px 6px 0 #000,
                  0px 6px 0 #000,
                  6px 0px 0 #000,
                  -6px 0px 0 #000,
                  0px -6px 0 #000,
                  0px 0px 12px #000
                `,
              }}
            >
              AZINHACK <span className="block">2025</span>
            </h1>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;