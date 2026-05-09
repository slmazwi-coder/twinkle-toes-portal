import { createFileRoute, Link } from "@tanstack/react-router";
import { Baby, Palette, GraduationCap, Check } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Nursery, Preschool and Grade R programs at Twinkle Toes — play-based early childhood education in Qonce." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    icon: Baby,
    age: "Ages 0–2",
    title: "Nursery",
    color: "from-sky/40 to-accent/40",
    body: "Gentle routines, sensory play and lots of cuddles for our youngest twinkles.",
    items: ["Sensory & motor development", "Music & rhyme time", "Outdoor exploration", "Loving one-on-one care"],
  },
  {
    icon: Palette,
    age: "Ages 3–5",
    title: "Preschool",
    color: "from-secondary/40 to-accent/50",
    body: "Creative, social, and language-rich days that grow confident communicators.",
    items: ["Pre-literacy & storytelling", "Art, music & dramatic play", "Social-emotional skills", "Healthy meals & rest time"],
  },
  {
    icon: GraduationCap,
    age: "Age 6",
    title: "Grade R",
    color: "from-accent to-secondary/30",
    body: "Structured school readiness so your child walks into Grade 1 ready to soar.",
    items: ["Phonics & emergent reading", "Pre-numeracy & maths", "Fine motor & handwriting", "Confidence & independence"],
  },
];

function Programs() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="text-sm font-bold uppercase tracking-widest text-secondary">Our Programs</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">A program for every little stage.</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">From first steps to first words to first lessons — we grow with your child.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className={`rounded-[2rem] border-2 border-border bg-gradient-to-br ${p.color} p-8 transition hover:-translate-y-1 hover:shadow-2xl`}>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-primary">
                <p.icon className="h-7 w-7" />
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-widest text-primary/70">{p.age}</div>
              <h2 className="mt-1 font-display text-3xl font-bold text-primary">{p.title}</h2>
              <p className="mt-2 text-primary/80">{p.body}</p>
              <ul className="mt-5 space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm font-medium text-primary"><Check className="mt-0.5 h-4 w-4 shrink-0" />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
          <h3 className="font-display text-3xl font-bold md:text-4xl">A typical day at Twinkle Toes</h3>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-4">
            {[
              ["08:00", "Welcome & free play"],
              ["09:30", "Theme lesson & circle time"],
              ["11:30", "Lunch & rest"],
              ["14:00", "Art, music & outdoor fun"],
            ].map(([t, l]) => (
              <div key={t} className="rounded-2xl bg-primary-foreground/10 p-5">
                <div className="font-display text-2xl font-bold text-accent">{t}</div>
                <div className="text-sm text-primary-foreground/85">{l}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground hover:brightness-110">Book a school tour</Link>
        </div>
      </section>
    </div>
  );
}