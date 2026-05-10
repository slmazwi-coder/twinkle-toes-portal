import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Send, CheckCircle, FileText, User, Baby, Heart, Shield, ClipboardList } from "lucide-react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply Online · Twinkle Toes Pre-Primary School" },
      { name: "description", content: "Apply online for Nursery, Preschool or Grade R at Twinkle Toes Pre-Primary School in Qonce." },
    ],
  }),
  component: Apply,
});

const programOptions = [
  { value: "", label: "Select a program" },
  { value: "nursery", label: "Nursery (Ages 0–2)" },
  { value: "preschool", label: "Preschool (Ages 3–5)" },
  { value: "grade-r", label: "Grade R (Age 6)" },
];

const attendanceOptions = [
  { value: "", label: "Select attendance" },
  { value: "half-day", label: "Half Day (08:00 – 12:00)" },
  { value: "full-day", label: "Full Day (08:00 – 17:00)" },
];

const howHeardOptions = [
  { value: "", label: "Select an option" },
  { value: "facebook", label: "Facebook" },
  { value: "word-of-mouth", label: "Word of Mouth" },
  { value: "drove-past", label: "Drove Past" },
  { value: "google", label: "Google Search" },
  { value: "other", label: "Other" },
];

const steps = [
  { icon: ClipboardList, label: "Fill in form" },
  { icon: FileText, label: "We review" },
  { icon: Heart, label: "Meet & greet" },
  { icon: CheckCircle, label: "Welcome!" },
];

function Apply() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="font-display text-4xl font-bold text-primary">Application received!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thank you for applying to Twinkle Toes Pre-Primary School. We'll review your application and get back to you within 2–3 school days.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Check your email for a confirmation. If you don't hear from us, feel free to <Link to="/contact" className="font-semibold text-secondary hover:underline">contact us</Link>.
          </p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground hover:brightness-110">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">Online Application</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-primary md:text-6xl">
            Enrol your little star today.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Complete the form below to apply for a place at Twinkle Toes. We'll be in touch within 2–3 school days to arrange a meet-and-greet.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-2 rounded-2xl border-2 border-border bg-card p-5 text-center">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
              <div className="font-display text-lg font-bold text-primary">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <form
          className="rounded-3xl border-2 border-border bg-card p-7 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* Section: Child Information */}
          <FormSection icon={Baby} title="Child's Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Child's full name" name="child_name" required />
              <Field label="Date of birth" name="child_dob" type="date" required />
              <SelectField label="Program applying for" name="program" options={programOptions} required />
              <SelectField label="Preferred attendance" name="attendance" options={attendanceOptions} required />
              <Field label="Preferred start date" name="start_date" type="date" />
              <Field label="Home language" name="home_language" placeholder="e.g. English, Xhosa, Afrikaans" />
            </div>
          </FormSection>

          {/* Section: Parent/Guardian Information */}
          <FormSection icon={User} title="Parent / Guardian Details">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Parent / Guardian full name" name="parent_name" required />
              <Field label="Relationship to child" name="relationship" placeholder="e.g. Mother, Father, Guardian" required />
              <Field label="ID / Passport number" name="parent_id" />
              <Field label="Occupation" name="occupation" />
              <Field label="Phone number" name="phone" type="tel" required />
              <Field label="Email address" name="email" type="email" required />
              <Field label="Residential address" name="address" className="sm:col-span-2" required />
            </div>
          </FormSection>

          {/* Section: Emergency Contact */}
          <FormSection icon={Shield} title="Emergency Contact">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Emergency contact name" name="emergency_name" required />
              <Field label="Emergency contact phone" name="emergency_phone" type="tel" required />
              <Field label="Relationship to child" name="emergency_relationship" placeholder="e.g. Grandmother, Uncle" required />
            </div>
          </FormSection>

          {/* Section: Medical Information */}
          <FormSection icon={Heart} title="Medical Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Allergies" name="allergies" placeholder="List any known allergies or type 'None'" />
              <Field label="Chronic conditions" name="chronic" placeholder="e.g. Asthma, epilepsy or 'None'" />
              <Field label="Doctor's name" name="doctor_name" />
              <Field label="Doctor's phone" name="doctor_phone" type="tel" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-bold text-primary">Special needs or additional notes</label>
              <textarea
                name="medical_notes"
                rows={3}
                className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:outline-none"
                placeholder="Anything else we should know about your child's health or development…"
              />
            </div>
          </FormSection>

          {/* Section: Additional */}
          <FormSection icon={FileText} title="Additional Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <SelectField label="How did you hear about us?" name="how_heard" options={howHeardOptions} />
              <Field label="Sibling(s) at Twinkle Toes?" name="siblings" placeholder="Name(s) or 'None'" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-bold text-primary">Any questions or comments?</label>
              <textarea
                name="comments"
                rows={3}
                className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:outline-none"
                placeholder="Feel free to ask us anything…"
              />
            </div>
          </FormSection>

          {/* Consent */}
          <div className="mt-8 rounded-2xl border-2 border-border bg-accent/20 p-5">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-border accent-secondary" />
              <span className="text-primary/85">
                I confirm that the information provided is accurate and I consent to Twinkle Toes Pre-Primary School contacting me regarding this application. I understand that submitting this form does not guarantee enrolment and that places are subject to availability.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition hover:brightness-110"
            >
              <Send className="h-4 w-4" /> Submit Application
            </button>
            <p className="text-sm text-muted-foreground">
              Need help? <Link to="/contact" className="font-semibold text-secondary hover:underline">Contact us</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

function FormSection({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="mt-8 first:mt-0">
      <legend className="flex items-center gap-3 text-xl font-bold text-primary">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/15 text-secondary">
          <Icon className="h-5 w-5" />
        </div>
        {title}
      </legend>
      <div className="mt-5">{children}</div>
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-primary">
        {label}
        {required && <span className="text-secondary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  className = "",
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-primary">
        {label}
        {required && <span className="text-secondary"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
