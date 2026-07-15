import logo from "@/assets/logo.png";
import { WHATSAPP_LINK } from "@/lib/links";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Cricket", href: "/games/cricket" },
  { label: "Casino", href: "/games/teen-patti" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-gold/20">
      <div className="container flex items-center justify-between py-2.5 sm:py-3 gap-2 sm:gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Mahadev Book — Trusted online cricket betting ID provider"
            className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto"
            width={224}
            height={56}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV.map((n) => {
            const isInternal = n.href.startsWith("/") && !n.href.includes("#");
            const cls = "text-sm font-medium text-foreground/90 hover:text-gold transition-colors";
            return isInternal ? (
              <Link key={n.href} to={n.href} className={cls}>{n.label}</Link>
            ) : (
              <a key={n.href} href={n.href} className={cls}>{n.label}</a>
            );
          })}
        </nav>

        {/* Right cluster — auth buttons + menu icon */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 ml-auto">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 rounded-full text-xs sm:text-sm font-semibold border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-colors whitespace-nowrap"
          >
            Login
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 rounded-full text-xs sm:text-sm font-bold bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-gold-lg transition-all whitespace-nowrap"
          >
            Sign Up
          </a>

          <button
            className="lg:hidden text-gold p-1.5 sm:p-2 ml-0.5 sm:ml-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background/95 px-6 py-4 space-y-3">
          {NAV.map((n) => {
            const isInternal = n.href.startsWith("/") && !n.href.includes("#");
            const cls = "block py-2 text-foreground/90 hover:text-gold";
            return isInternal ? (
              <Link key={n.href} to={n.href} onClick={() => setOpen(false)} className={cls}>{n.label}</Link>
            ) : (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={cls}>{n.label}</a>
            );
          })}
          <div className="flex gap-2 pt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-2.5 rounded-full font-semibold border border-gold/50 text-gold">
              Login
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-2.5 rounded-full font-bold bg-gradient-gold text-primary-foreground">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
