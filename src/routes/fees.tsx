import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "School Fees · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Transparent monthly school fees for Nursery, Preschool and Grade R at Twinkle Toes in Qonce." },
    ],
  }),
  component: Fees,
});

const tiers = [
  { name: "Nursery", half: "R1 000", full: "R1 400", tone: "bg-card", accent: "text-secondary" },
  { name: "Preschool", half: "R1 000", full: "R1 400", tone: "bg-accent/40", accent: "text-primary" },
  { name: "Grade R", half: "R1 500", full: "R1 900", tone: "bg-primary text-primary-foreground", accent: "text-accent" },
];

const includes = [
  "Qualified ECD teachers",
  "Daily nutritious meals & snacks",
  "All learning materials & books",
  "Themed activities & outings",
  "Secure, CCTV-monitored premises",
  "Regular parent feedback",
];

function Fees() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="text-sm font-bold uppercase tracking-widest text-secondary">School Fees 2026</div>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">Affordable. Transparent. No surprises.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Monthly fees include all learning materials, meals and aftercare options.</p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => {
          const dark = t.tone.includes("primary");
          return (
            <div key={t.name} className={`relative overflow-hidden rounded-3xl border-2 border-border p-8 shadow-lg ${t.tone}`}>
              <h3 className={`font-display text-3xl font-bold ${dark ? "text-primary-foreground" : "text-primary"}`}>{t.name}</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${t.accent}`}>Half day · 08:00–12:00</div>
                  <div className={`font-display text-4xl font-bold ${dark ? "text-primary-foreground" : "text-primary"}`}>{t.half}<span className="text-base font-semibold opacity-70"> /month</span></div>
                </div>
                <div className={`h-px ${dark ? "bg-primary-foreground/20" : "bg-border"}`} />
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${t.accent}`}>Full day · 08:00–17:00</div>
                  <div className={`font-display text-4xl font-bold ${dark ? "text-primary-foreground" : "text-primary"}`}>{t.full}<span className="text-base font-semibold opacity-70"> /month</span></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14 grid gap-8 rounded-3xl bg-accent/40 p-8 md:grid-cols-2 md:p-12">
        <div>
          <h2 className="font-display text-3xl font-bold text-primary">What's included</h2>
          <p className="mt-2 text-primary/80">Every fee includes everything your child needs for a happy, productive day.</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {includes.map((i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-semibold text-primary"><Check className="mt-0.5 h-5 w-5 text-secondary" />{i}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
        <h3 className="font-display text-2xl font-bold">Registration & extras</h3>
        <ul className="mt-3 space-y-2 text-primary-foreground/85">
          <li>· Once-off registration fee payable on enrolment</li>
          <li>· Uniform & branded merchandise sold separately (see Shop)</li>
          <li>· Sibling discount available — chat to us</li>
        </ul>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground hover:brightness-110">Request a fee schedule</Link>
      </div>
    </div>
  );
}