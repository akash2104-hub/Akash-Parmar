import gallery2 from "@/assets/gallery-2.jpg";

const About = () => {
  const stats = [
    { number: "12", label: "Years" },
    { number: "200", label: "Projects" },
    { number: "15", label: "Awards" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Capturing life's 
              <br />
              <span className="italic">quiet poetry</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                I'm Akash Parmar, a photographer and visual storyteller from India. 
                My work explores the emotion and detail hidden in everyday moments, 
                from intimate portraits to vibrant celebrations.
              </p>
              <p>
                Blending documentary style with fine‑art sensibility, I focus on natural light, honest expressions, 
                and carefully composed frames to preserve memories that feel timeless and real.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i}>
                  <span className="font-serif text-4xl md:text-5xl block">
                    {stat.number}+
                  </span>
                  <span className="text-muted-foreground text-sm tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={gallery2}
                alt="Maya Chen - Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
