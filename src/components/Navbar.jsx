import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { categories } from "../data/dishesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium tracking-wide transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 ${
      isActive
        ? "text-amber-500 after:w-full"
        : "text-stone-700 hover:text-amber-600 after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🍽️</span>
          <div className="leading-tight">
            <span className="block text-lg font-bold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors">
              Ankit Mehara
            </span>
            <span className="block text-[10px] text-stone-400 uppercase tracking-[0.2em] font-medium">
                             Commii 1 <><br /></>
                            Chef's Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav — all 4 categories auto-rendered */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          {categories.map((cat) => (
            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={navLinkClass}>
              {cat.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-stone-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[2px] bg-stone-800 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-stone-800 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-stone-800 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          {categories.map((cat) => (
            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={navLinkClass}>
              {cat.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
