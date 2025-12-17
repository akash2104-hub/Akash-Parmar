const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 border-t border-background/10">
      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-xl">Akash Parmar</span>
          
          <div className="flex items-center gap-8 text-sm text-background/60">
            <span>© {new Date().getFullYear()}</span>
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
