import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, Textarea, SaveBar } from "../components/FormField";

export default function ContactEditor() {
  const { content, updateContent } = useContent();
  const [contactForm, setContactForm] = useState(content.contact);
  const [footerForm, setFooterForm] = useState(content.footer);
  const [saved, setSaved] = useState(false);

  const setContact = (key, val) => {
    setContactForm((p) => ({ ...p, [key]: val }));
    setSaved(false);
  };

  const setFooter = (key, val) => {
    setFooterForm((p) => ({ ...p, [key]: val }));
    setSaved(false);
  };

  const save = () => {
    updateContent("contact", contactForm);
    updateContent("footer", footerForm);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Contact & Footer</h2>
          <p className="text-sm text-gray-500 mt-1">
            Your email address, booking link, bio text shown in the footer, and footer taglines.
          </p>
        </div>

        {/* Contact info */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact Details</p>
          <Field
            label="Email Address"
            hint="Used on the booking panel and footer email button"
          >
            <Input
              value={contactForm.email}
              onChange={(v) => setContact("email", v)}
              placeholder="hello@coachlaurien.com"
            />
          </Field>
          <Field
            label="Calendly / Booking Link"
            hint="The URL that opens when someone clicks 'Book a Consultation' or 'Begin the Work'"
          >
            <Input
              value={contactForm.calendlyUrl}
              onChange={(v) => setContact("calendlyUrl", v)}
              placeholder="https://calendly.com/your-link"
            />
          </Field>
        </div>

        {/* Footer text */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Footer Bio & Taglines</p>
          <Field label="Bio Text" hint="Short description shown below your name in the footer">
            <Textarea
              value={footerForm.bio}
              onChange={(v) => setFooter("bio", v)}
              rows={2}
              placeholder="Youth development and emerging authors' coach.&#10;Founder of KELP Education."
            />
          </Field>
          <Field label="Footer Tagline (italic)" hint='The italic quote in the footer brand column, e.g. "Where serious work begins."'>
            <Input
              value={footerForm.tagline}
              onChange={(v) => setFooter("tagline", v)}
              placeholder="Where serious work begins."
            />
          </Field>
        </div>

        {/* Footer CTA */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Footer Top Banner</p>
          <Field label="Banner Heading — Regular Part" hint={`e.g. "Let's do the work"`}>
            <Input
              value={footerForm.ctaHeadingStart}
              onChange={(v) => setFooter("ctaHeadingStart", v)}
              placeholder="Let's do the work"
            />
          </Field>
          <Field label="Banner Heading — Highlighted Part (gold)" hint='e.g. "that holds."'>
            <Input
              value={footerForm.ctaHeadingHighlight}
              onChange={(v) => setFooter("ctaHeadingHighlight", v)}
              placeholder="that holds."
            />
          </Field>
        </div>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
