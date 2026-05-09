import { createFileRoute } from "@tanstack/react-router";
import team from "@/assets/team.jpg";
import bunnyGroup from "@/assets/bunny-group.jpg";
import { Heart, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Learn about Twinkle Toes Pre-Primary School in Qonce — our story, philosophy and dedicated teaching team." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">About Us</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">Little stars, big futures.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Twinkle Toes Pre-Primary School is a place where childhood is celebrated, curiosity is sparked, and every learner feels seen, safe and special.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
        <img src={team} alt="The Twinkle Toes teachers" className="rounded-3xl shadow-xl" />
        <div>
          <h2 className="font-display text-4xl font-bold text-primary">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded by educators with a passion for early childhood development, Twinkle Toes was born from a simple idea: children learn best when they feel loved and inspired. Today we proudly serve families in Qonce (King William's Town) and surrounds.
          </p>
          <p className="mt-3 text-muted-foreground">
            Our doors are open Monday to Friday, with full-day care that gives working parents complete peace of mind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Our Mission", body: "To create a safe, nurturing space where every child develops a lifelong love of learning." },
            { icon: Compass, title: "Our Vision", body: "To be Qonce's most trusted pre-primary, raising kind, curious and confident little humans." },
            { icon: Sparkles, title: "Our Values", body: "Kindness, curiosity, respect, play and family — woven through every day with us." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border-2 border-border bg-card p-7">
              <c.icon className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 font-display text-2xl font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-4xl font-bold">Meet the Team</h2>
            <p className="mt-4 text-primary-foreground/85">Our qualified, ECD-trained teachers bring warmth, patience and creativity to every classroom. With small group sizes, every child receives the attention they deserve.</p>
          </div>
          <img src={bunnyGroup} alt="Children with the school mascot" className="rounded-3xl shadow-2xl" />
        </div>
      </section>
    </div>
  );
}