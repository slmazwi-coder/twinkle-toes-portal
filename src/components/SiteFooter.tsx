import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="font-display text-2xl font-bold">Twinkle Toes</div>
          <p className="mt-2 text-sm text-primary-foreground/75">Where every little step shines bright. A nurturing pre-primary school in Qonce (King William's Town).</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Visit Us</div>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />11 Nowers St, Qonce, 5601</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" />Mon–Fri · 08:00–17:00</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Contact</div>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" />Call the office</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" />twinkletoesmail@co.za</li>
            <li className="flex gap-2"><Facebook className="h-4 w-4 mt-0.5 shrink-0" />@twinkletoesmail.co</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Explore</div>
          <ul className="space-y-2 text-sm">
            {[["/about","About"],["/programs","Programs"],["/fees","Fees"],["/merchandise","Shop"],["/gallery","Gallery"],["/contact","Enrol"]].map(([to,label]) => (
              <li key={to}><Link to={to} className="text-primary-foreground/85 hover:text-accent">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Twinkle Toes Pre-Primary School. All rights reserved.
      </div>
    </footer>
  );
}