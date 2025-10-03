import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-purple py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow border-4 border-black transform rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan border-4 border-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-purple border-8 border-black shadow-bold p-8 md:p-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            BUILD.
          </h2>

          <div className="space-y-6 text-white text-lg md:text-xl font-semibold">
            <p>
              Azinhack is a premier 24-hour student-run hackathon organized by
              IoSC EDC. Participate in workshops to upskill yourself, interact
              with mentors who are here to guide you at every step, and engage
              with our sponsor companies to learn more about them!
            </p>

            <p>
              Whether you're a seasoned developer or a first-time hacker, we're
              here to support you. Bring your ideas to life, collaborate with
              talented individuals, and compete for amazing prizes!
            </p>

            <p className="text-2xl md:text-3xl font-black">
              Whatever your goal is, we are here to support you.
            </p>
          </div>

          {/* Updated Button with smooth animations + external redirect */}
          <Button
            className="mt-8 bg-magenta text-black font-black text-xl px-8 py-6 border-4 border-black shadow-bold 
                       transition-transform duration-300 ease-in-out 
                       hover:bg-yellow hover:translate-x-2 hover:translate-y-2 hover:shadow-none hover:scale-105 active:scale-95"
            onClick={() => window.open("https://unstop.com/o/C5Iy0bg?lb=fR9xLBdf&utm_medium=Share&utm_source=WhatsApp", "_blank")}
          >
            APPLY NOW
          </Button>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta border-4 border-black rounded-full -mb-32 -ml-32"></div>
    </section>
  );
};

export default AboutSection;
