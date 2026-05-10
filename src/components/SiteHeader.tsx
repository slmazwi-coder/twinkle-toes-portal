import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/fees", label: "Fees" },
  { to: "/merchandise", label: "Shop" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/apply", label: "Apply" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Twinkle Toes Pre-Primary School logo" className="h-12 w-12 rounded-xl object-cover ring-2 ring-accent" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">Twinkle Toes</div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-secondary">Pre-Primary School</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-accent/60 hover:text-primary"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/apply" className="ml-2 rounded-full bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground shadow-md shadow-secondary/30 transition hover:brightness-110">
            Apply Now
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-full p-2 text-primary lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground/85 hover:bg-accent/60" activeProps={{ className: "bg-primary text-primary-foreground" }} activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}