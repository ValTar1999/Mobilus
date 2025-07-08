import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-zinc-800">
      <div className="p-4 flex justify-between lg:grid lg:grid-cols-3 items-center container mx-auto max-w-screen-2xl">
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-base text-zinc-50 hover:text-zinc-300 transition-colors duration-300 font-medium font-montserrat">{t('nav', 'home')}</Link>
          <Link to="/about" className="text-base text-zinc-50 hover:text-zinc-300 transition-colors duration-300 font-medium font-montserrat">{t('nav', 'about')}</Link>
          <Link to="/projects" className="text-base text-zinc-50 hover:text-zinc-300 transition-colors duration-300 font-medium font-montserrat">{t('nav', 'projects')}</Link>
        </div>
        {/* Logo always visible */}
        <div className="inline-flex md:mx-auto justify-start md:justify-center col-span-1">
          <Link to="/" className="text-lg text-white font-montserrat font-medium">Mobilus</Link>
        </div>
        {/* Language switcher */}
        <div className="flex items-center lg:justify-end gap-2">
          <button
            className={`text-zinc-50 hover:text-zinc-300 active:text-zinc-500 text-base font-montserrat font-medium transition-colors duration-300 ${language === "ro" ? "underline" : ""}`}
            onClick={() => setLanguage("ro")}
          >
            RO
          </button>
          <hr className="w-px h-5 bg-zinc-50" />
          <button
            className={`text-zinc-50 hover:text-zinc-300 active:text-zinc-500 text-base font-montserrat font-medium transition-colors duration-300 ${language === "ru" ? "underline" : ""}`}
            onClick={() => setLanguage("ru")}
          >
            RU
          </button>
          <a href="#footer" onClick={handleContactClick} className="hidden md:inline-flex rounded-full bg-white hover:bg-zinc-200 text-zinc-900 transition-colors duration-500 px-4 py-1 ml-2 text-sm leading-snug">{t('nav', 'contact')}</a>
        </div>
        {/* Mobile burger */}
        <button 
          className="ml-2 md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center md:hidden transition-all duration-500 ease-in-out
          ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <button
          className="absolute top-6 right-6 p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-8 stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col space-y-8">
          <Link to="/" className="text-2xl text-white font-montserrat font-medium" onClick={() => setMenuOpen(false)}>{t('nav', 'home')}</Link>
          <Link to="/about" className="text-2xl text-white font-montserrat font-medium" onClick={() => setMenuOpen(false)}>{t('nav', 'about')}</Link>
          <Link to="/projects" className="text-2xl text-white font-montserrat font-medium" onClick={() => setMenuOpen(false)}>{t('nav', 'projects')}</Link>
          <a href="#footer" onClick={handleContactClick} className="text-2xl text-white font-montserrat font-medium">{t('nav', 'contact')}</a>
          <div className="flex items-center gap-2 pt-2">
            <button
              className={`text-zinc-50 hover:text-zinc-300 active:text-zinc-500 text-base font-montserrat font-medium transition-colors duration-300 ${language === "ro" ? "underline" : ""}`}
              onClick={() => setLanguage("ro")}
            >
              RO
            </button>
            <hr className="w-px h-5 bg-zinc-50" />
            <button
              className={`text-zinc-50 hover:text-zinc-300 active:text-zinc-500 text-base font-montserrat font-medium transition-colors duration-300 ${language === "ru" ? "underline" : ""}`}
              onClick={() => setLanguage("ru")}
            >
              RU
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
