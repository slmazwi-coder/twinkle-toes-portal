import { createFileRoute } from "@tanstack/react-router";
import bunny from "@/assets/bunny-solo.jpg";
import bunnyGroup from "@/assets/bunny-group.jpg";
import bunnyBoys from "@/assets/bunny-boys.jpg";
import team from "@/assets/team.jpg";
import uniform from "@/assets/uniform.jpg";
import books from "@/assets/books.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Moments from life at Twinkle Toes — celebrations, learning and play." },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: bunny, alt: "Easter bunny mascot with a learner", span: "row-span-2" },
  { src: team, alt: "Twinkle Toes teaching team", span: "" },
  { src: bunnyGroup, alt: "Children with mascot and teacher", span: "" },
  { src: bunnyBoys, alt: "Easter celebration with boys", span: "row-span-2" },
  { src: uniform, alt: "Twinkle Toes school uniform", span: "" },
  { src: books, alt: "Branded subject books", span: "" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="text-sm font-bold uppercase tracking-widest text-secondary">Gallery</div>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">Little moments. Big smiles.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">A peek inside our days — the laughter, the learning, the love.</p>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
        {photos.map((p) => (
          <figure key={p.alt} className={`group overflow-hidden rounded-3xl ${p.span}`}>
            <img src={p.src} alt={p.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}