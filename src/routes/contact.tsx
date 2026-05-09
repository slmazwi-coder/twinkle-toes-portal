import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enrol · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Visit, call or message Twinkle Toes Pre-Primary School in Qonce. Enrol your little star today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">Contact & Enrol</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">Let's chat about your little star.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Pop in for a tour, give us a call, or send a quick message — we usually reply within one school day.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-5 md:px-8">
        <div className="space-y-4 md:col-span-2">
          {[
            { icon: MapPin, title: "Visit", body: "11 Nowers St, Qonce (King William's Town), 5601" },
            { icon: Clock, title: "Hours", body: "Monday to Friday · 08:00 – 17:00" },
            { icon: Phone, title: "Call", body: "Office line — see Facebook for the latest" },
            { icon: Mail, title: "Email", body: "twinkletoesmail@co.za" },
            { icon: Facebook, title: "Facebook", body: "@twinkletoesmail.co" },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 rounded-2xl border-2 border-border bg-card p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground"><c.icon className="h-5 w-5" /></div>
              <div>
                <div className="font-display text-lg font-bold text-primary">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.body}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="rounded-3xl border-2 border-border bg-card p-7 md:col-span-3"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h2 className="font-display text-3xl font-bold text-primary">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us a little about your child and we'll be in touch.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Parent's name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" className="sm:col-span-2" required />
            <Field label="Child's age" name="age" />
            <Field label="Program of interest" name="program" placeholder="Nursery / Preschool / Grade R" />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-bold text-primary">Message</label>
              <textarea name="message" rows={4} required className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:outline-none" placeholder="Tell us a bit about your little one..." />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition hover:brightness-110">
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && <p className="mt-4 rounded-xl bg-grass/20 px-4 py-2 text-sm font-semibold text-primary">Thank you! We'll be in touch shortly. 🌟</p>}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, className = "", placeholder }: { label: string; name: string; type?: string; required?: boolean; className?: string; placeholder?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-primary">{label}{required && <span className="text-secondary"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:outline-none" />
    </div>
  );
}