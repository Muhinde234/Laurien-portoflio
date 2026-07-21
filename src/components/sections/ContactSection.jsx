import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";

const EMPTY_FORM = { firstName: "", lastName: "", email: "", message: "" };

export default function ContactSection() {
  const [ref, visible] = useScrollReveal();
  const { content } = useContent();
  const c = content.contact;
  const email = c.email;

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const { ref: dbRef, push, serverTimestamp } = await import("firebase/database");
      const { db } = await import("../../lib/firebase");
      await push(dbRef(db, "messages"), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        message: form.message,
        read: false,
        createdAt: Date.now(),
      });
    } catch (err) {
      console.error("Failed to save message:", err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 sm:py-28 px-4 sm:px-6 relative bg-section-light border-b border-t border-navy/8 section-light scroll-reveal perf-section ${visible ? "visible" : ""}`}
      aria-labelledby="contact-heading"
    >

      <div className="max-w-6xl mx-auto relative z-10">


        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold mb-5">
            {c.label}
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight mb-4"
          >
            {c.headlineStart}{" "}
            <span className="text-gold italic font-light">{c.headlineHighlight}</span>
          </h2>
          <p className="text-base text-navy max-w-lg leading-relaxed">
            {c.subtext}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">


          <aside className="lg:col-span-2 flex flex-col gap-6">


            {[
              {
                icon: Mail,
                label: "Email",
                value: email,
                sub: c.emailSub,
              },
              {
                icon: Clock,
                label: "Response time",
                value: c.responseTime,
                sub: c.responseTimeSub,
              },
              {
                icon: MapPin,
                label: "Availability",
                value: c.availability,
                sub: c.availabilitySub,
              },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 sm:p-5 bg-white border border-navy/10 rounded-xl shadow-sm"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg bg-gold/8 border border-gold/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-navy/75 font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-base font-medium text-navy mb-0.5">{value}</p>
                  <p className="text-sm text-navy/85">{sub}</p>
                </div>
              </div>
            ))}


            <p className="font-display italic text-gold/70 text-base leading-relaxed pl-1 mt-2">
              "{c.tagline}"
            </p>
          </aside>

          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-navy/12 overflow-hidden bg-white shadow-sm">

              <div
                className="h-px bg-linear-to-r from-gold/50 via-gold/15 to-transparent"
                aria-hidden="true"
              />

              {submitted ? (
             
                <div className="p-10 sm:p-14 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-navy mb-2">
                      {c.successTitle}
                    </h3>
                    <p className="text-navy/90 text-base leading-relaxed max-w-xs mx-auto">
                      {c.successMessage}
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                    className="mt-2 text-sm text-gold/60 hover:text-gold transition-colors duration-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
               
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="p-5 sm:p-7 md:p-8 flex flex-col gap-5"
                  aria-label="Contact form"
                >
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={onChange}
                        placeholder="e.g. Laurien"
                        className={`form-input${errors.firstName ? " border-red-400/60" : ""}`}
                        aria-describedby={errors.firstName ? "firstName-err" : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-err" className="mt-1 text-sm text-red-400/80">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={onChange}
                        placeholder="e.g. Ikuzwe"
                        className={`form-input${errors.lastName ? " border-red-400/60" : ""}`}
                        aria-describedby={errors.lastName ? "lastName-err" : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-err" className="mt-1 text-sm text-red-400/80">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

              
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      className={`form-input${errors.email ? " border-red-400/60" : ""}`}
                      aria-describedby={errors.email ? "email-err" : undefined}
                    />
                    {errors.email && (
                      <p id="email-err" className="mt-1 text-sm text-red-400/80">{errors.email}</p>
                    )}
                  </div>

               
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell me about your goals, or how you'd like to work together…"
                      className={`form-input resize-none${errors.message ? " border-red-400/60" : ""}`}
                      aria-describedby={errors.message ? "message-err" : undefined}
                    />
                    {errors.message && (
                      <p id="message-err" className="mt-1 text-sm text-red-400/80">{errors.message}</p>
                    )}
                  </div>

                 
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-navy text-champagne font-semibold px-8 py-4 rounded-full hover:bg-navy-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 focus:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed text-base"
                      aria-label="Send message"
                    >
                      {loading ? (
                        <>
                          <span
                            className="w-4 h-4 border-2 border-champagne/30 border-t-champagne rounded-full animate-spin"
                            aria-hidden="true"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          {c.submitLabel}
                          <Send
                            className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-sm text-navy/70 tracking-wide">
                      {c.disclaimer}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
