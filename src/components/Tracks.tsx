const Tracks = () => {
  const tracks = [
    {
      title: "HealthTech",
      description: "Innovate solutions for healthcare challenges, medical devices, telemedicine, and digital health platforms.",
      icon: "fas fa-heartbeat",
      color: "bg-magenta",
      borderColor: "border-cyan"
    },
    {
      title: "EduTech",
      description: "Transform education with learning management systems, e-learning platforms, and educational tools.",
      icon: "fas fa-graduation-cap",
      color: "bg-yellow",
      borderColor: "border-purple"
    },
    {
      title: "FinTech",
      description: "Build financial solutions, payment systems, blockchain applications, and digital banking platforms.",
      icon: "fas fa-dollar-sign",
      color: "bg-cyan",
      borderColor: "border-magenta"
    },
    {
      title: "Open Innovation",
      description: "Think outside the box! Create solutions for any problem you're passionate about solving.",
      icon: "fas fa-lightbulb",
      color: "bg-lime",
      borderColor: "border-yellow"
    }
  ];

  return (
    <section id="tracks" className="bg-white py-20 md:py-32 border-y-8 border-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyan border-4 border-black rotate-12 animate-float opacity-20" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-magenta rounded-full border-4 border-black animate-float opacity-20" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-yellow border-4 border-black -rotate-12 animate-float opacity-20" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-20 w-36 h-36 bg-lime border-4 border-black rotate-45 animate-float opacity-20" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
            HACKATHON TRACKS
          </h2>
          <p className="text-xl md:text-2xl font-bold text-black max-w-3xl mx-auto">
            Choose your track and build something amazing! Each track offers unique challenges and opportunities to showcase your skills.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`${track.color} border-4 ${track.borderColor} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group cursor-pointer`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={`${track.icon} text-black`}></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
                  {track.title}
                </h3>
              </div>
              
              <p className="text-lg md:text-xl font-bold text-black text-center leading-relaxed">
                {track.description}
              </p>

              {/* Decorative bottom border */}
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-2 bg-black"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;