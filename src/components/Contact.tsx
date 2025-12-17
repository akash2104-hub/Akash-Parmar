import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="px-6 md:px-12">
        <div className="max-w-5xl">
          <p className="text-background/60 text-sm tracking-widest uppercase mb-4">
            Let's Connect
          </p>
          
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-12">
            Have a project in mind?
            <br />
            <span className="italic">Let's create together.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <a
              href="mailto:akashparmar0104@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl md:text-3xl hover:text-accent transition-colors"
            >
              akashparmar0104@gmail.com
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-2xl md:text-3xl hover:text-accent transition-colors"
            >
              Instagram
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden border-t border-background/20 pt-8">
          <div className="marquee whitespace-nowrap">
            <span className="inline-block font-serif text-8xl md:text-[12rem] text-background/10 pr-8">
              Available for work • Available for work • Available for work • 
            </span>
            <span className="inline-block font-serif text-8xl md:text-[12rem] text-background/10 pr-8">
              Available for work • Available for work • Available for work • 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
