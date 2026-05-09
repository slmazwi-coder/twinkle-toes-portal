import { createFileRoute, Link } from "@tanstack/react-router";
import uniform from "@/assets/uniform.jpg";
import books from "@/assets/books.jpg";
import logo from "@/assets/logo.jpg";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/merchandise")({
  head: () => ({
    meta: [
      { title: "Shop · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Official Twinkle Toes uniforms, hats, books and branded merchandise." },
    ],
  }),
  component: Shop,
});

const items = [
  { img: uniform, name: "Full Uniform Set", desc: "Branded golf shirt + navy shorts/skirt", price: "R450" },
  { img: uniform, name: "Branded Golf Shirt", desc: "Embroidered with child's name", price: "R220" },
  { img: uniform, name: "Navy Shorts / Skirt", desc: "Embroidered logo", price: "R180" },
  { img: uniform, name: "Sun Hat", desc: "Wide-brim navy with logo", price: "R120" },
  { img: uniform, name: "Winter Jacket", desc: "Waterproof navy", price: "R380" },
  { img: books, name: "Subject Books (set of 4)", desc: "English, Maths, Life Skills & Homework", price: "R150" },
];

function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary">
        <ShoppingBag className="h-4 w-4" /> Twinkle Toes Shop
      </div>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">Suit up. Look sharp. Shine bright.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Official school uniforms and branded merchandise — proudly worn by every Twinkle Toes learner.</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article key={it.name} className="group overflow-hidden rounded-3xl border-2 border-border bg-card transition hover:-translate-y-1 hover:border-secondary hover:shadow-xl">
            <div className="aspect-square overflow-hidden bg-accent/20">
              <img src={it.img} alt={it.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-primary">{it.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-secondary">{it.price}</span>
                <button className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-110">Enquire</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-secondary to-accent p-10 text-center md:p-14">
        <img src={logo} alt="" className="h-20 w-20 rounded-2xl shadow-lg" />
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Order at the school office</h2>
        <p className="max-w-xl text-primary/80">Drop by during office hours or message us to place an order. Payment options: EFT, cash, or SnapScan.</p>
        <Link to="/contact" className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground hover:brightness-110">Contact the office</Link>
      </div>
    </div>
  );
}