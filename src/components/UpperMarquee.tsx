const UpperMarquee = () => {
  return (
    <div className="bg-yellow border-y-4 border-black overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="inline-block mx-7 text-2xl md:text-3xl font-black text-black">
            <a
              href="https://unstop.com/o/C5Iy0bg?lb=fR9xLBdf&utm_medium=Share&utm_source=WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-magenta transition-colors"
            >
              JOIN THE HACKATHON
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://unstop.com/o/C5Iy0bg?lb=fR9xLBdf&utm_medium=Share&utm_source=WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-magenta transition-colors"
            >
              REGISTER
            </a>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperMarquee;