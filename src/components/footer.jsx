import { RiInstagramLine, RiFacebookCircleLine, RiYoutubeLine } from "@remixicon/react";

const navLinks = [
  { label: "Tours", href: "#tours" },
  { label: "Prices", href: "#prices" },
  { label: "Calendar", href: "#calendar" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: RiInstagramLine, label: "Instagram", href: "#" },
  { icon: RiFacebookCircleLine, label: "Facebook", href: "#" },
  { icon: RiYoutubeLine, label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-1.5 text-white mb-4">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L14 12H0L7 0Z" fill="currentColor" />
              </svg>
              <span className="font-semibold text-sm tracking-wide">GoSummit</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Small groups. Big mountains. Real guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Follow Us
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-colors text-gray-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 mt-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 GoSummit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
