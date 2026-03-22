import { useState, useRef, useEffect } from "react";
import { RiMenuLine, RiCloseLine, RiSearchLine } from "@remixicon/react";

const leftNavItems = [
  { label: "Tours", id: "tours" },
  { label: "Prices", id: "prices" },
  { label: "Calendar", id: "calendar" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Gallery", id: "gallery" },
];

const rightNavItems = [
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const handleNav = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Top row */}
        <div className="flex items-center justify-between">
          {/* Brand + Left Nav */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <a href="/" className="flex items-center gap-1.5 text-gray-900">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L14 12H0L7 0Z" fill="currentColor" />
              </svg>
              <span className="font-semibold text-sm tracking-wide">GoSummit</span>
            </a>

            {/* Desktop Left Nav */}
            {!searchOpen && (
              <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700 tracking-widest uppercase">
                {leftNavItems.map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => handleNav(nav.id)}
                    className="hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {nav.label}
                  </button>
                ))}
              </nav>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Expanding search bar */}
            {searchOpen ? (
              <div className="hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2">
                <RiSearchLine size={15} className="text-gray-400 shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search tours, destinations…"
                  className="w-64 text-sm text-gray-900 placeholder:text-gray-400 bg-transparent focus:outline-none"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <RiCloseLine size={16} />
                </button>
              </div>
            ) : (
              <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700 tracking-widest uppercase">
                {rightNavItems.map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => handleNav(nav.id)}
                    className="hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {nav.label}
                  </button>
                ))}
              </nav>
            )}

            {/* Search icon */}
            {!searchOpen && (
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:inline-flex text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Open search"
              >
                <RiSearchLine size={17} />
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-1 text-gray-800"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 mb-3">
              <RiSearchLine size={14} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search tours, destinations…"
                className="w-full text-sm text-gray-900 placeholder:text-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            <nav className="flex flex-col gap-1 text-sm font-semibold text-gray-700 uppercase tracking-widest">
              {[...leftNavItems, ...rightNavItems].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => handleNav(nav.id)}
                  className="rounded-md px-3 py-2 text-left hover:bg-gray-100 transition cursor-pointer"
                >
                  {nav.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
