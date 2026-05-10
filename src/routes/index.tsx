import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, BookOpen, Sun, ArrowRight, Star } from "lucide-react";
import logo from "@/assets/logo.jpg";
import bunny from "@/assets/bunny-solo.jpg";
import team from "@/assets/team.jpg";
import books from "@/assets/books.jpg";
import bunnyGroup from "@/assets/bunny-group.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Twinkle Toes Pre-Primary School · Qonce" },
      { name: "description", content: "A nurturing pre-primary school in Qonce offering Nursery, Preschool & Grade R with play-based learning." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-40" aria-hidden />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Now Enrolling 2026
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-primary text-balance md:text-7xl">
              Where little steps <span className="text-secondary">shine bright.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              A warm, play-based pre-primary school in Qonce nurturing curious minds from Nursery through Grade R.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition hover:brightness-110">
                Book a Visit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">
                Our Programs
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="block font-display text-3xl font-bold text-primary">3</span>Age groups</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="block font-display text-3xl font-bold text-primary">7+</span>Caring teachers</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="block font-display text-3xl font-bold text-primary">9hrs</span>Full-day care</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent via-secondary/40 to-sky/30 blur-2xl" aria-hidden />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={bunny} alt="Easter bunny mascot with a happy learner" className="aspect-[3/4] rounded-3xl object-cover shadow-xl" />
              <div className="space-y-4">
                <img src={team} alt="Twinkle Toes teaching team" className="aspect-square rounded-3xl object-cover shadow-xl" />
                <div className="rounded-3xl bg-primary p-5 text-primary-foreground shadow-xl">
                  <Star className="h-6 w-6 text-accent" />
                  <p className="mt-2 text-sm font-semibold leading-snug">"A second home for our little stars."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">Why Twinkle Toes</div>
          <h2 className="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">Built on play. Powered by love.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Nurturing Care", body: "Small groups and warm-hearted teachers who know every child by name.", color: "bg-secondary/15 text-secondary" },
            { icon: BookOpen, title: "School Readiness", body: "Phonics, numeracy, and life skills that prepare your child for Grade 1 and beyond.", color: "bg-primary/10 text-primary" },
            { icon: Sun, title: "Joyful Days", body: "Music, art, outdoor play and themed celebrations that spark curiosity.", color: "bg-accent text-accent-foreground" },
          ].map((p) => (
            <div key={p.title} className="group rounded-3xl border-2 border-border bg-card p-7 transition hover:-translate-y-1 hover:border-secondary hover:shadow-xl">
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.color}`}>
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
          <img src={bunnyGroup} alt="Children with the Twinkle Toes mascot" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-accent">A safe place to grow</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">More than a school — a family.</h2>
            <p className="mt-4 text-primary-foreground/85">
              From your child's very first day, our team becomes part of your village. We celebrate milestones, soothe little worries, and cheer on every twinkle of progress.
            </p>
            <ul className="mt-6 space-y-3">
              {["Aftercare until 17:00 for working parents","Healthy meals and snacks included","CCTV-monitored, secure premises","Regular parent updates & open days"].map((b)=>(
                <li key={b} className="flex items-start gap-3"><Star className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{b}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition hover:brightness-110">Meet the team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-secondary to-accent p-10 text-center md:p-16">
          <img src={books} alt="" className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 rounded-3xl object-cover opacity-30 md:block" aria-hidden />
          <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">Ready to join our family?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary/85">Limited spaces available. Pop in for a tour or send us a quick message.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-lg transition hover:brightness-110">Enrol Today</Link>
            <Link to="/fees" className="rounded-full border-2 border-primary px-8 py-3.5 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">View Fees</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
