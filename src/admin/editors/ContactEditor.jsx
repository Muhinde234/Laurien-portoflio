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
          <Field label="Email Address" hint="Used on the contact page and footer">
            <Input
              value={contactForm.email}
              onChange={(v) => setContact("email", v)}
              placeholder="hello@coachlaurien.com"
            />
          </Field>
          <Field label="Calendly / Booking Link" hint="Opens when someone clicks 'Book a Consultation'">
            <Input
              value={contactForm.calendlyUrl}
              onChange={(v) => setContact("calendlyUrl", v)}
              placeholder="https://calendly.com/your-link"
            />
          </Field>
        </div>

        {/* Contact section heading */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact Section — Heading</p>
          <Field label="Eyebrow Label" hint='Small uppercase text above the heading, e.g. "Ready to Begin?"'>
            <Input
              value={contactForm.label}
              onChange={(v) => setContact("label", v)}
              placeholder="Ready to Begin?"
            />
          </Field>
          <Field label="Headline — Regular Part" hint='e.g. "Lets start a"'>
            <Input
              value={contactForm.headlineStart}
              onChange={(v) => setContact("headlineStart", v)}
              placeholder="Let's start a"
            />
          </Field>
          <Field label="Headline — Gold Italic Part" hint='e.g. "conversation."'>
            <Input
              value={contactForm.headlineHighlight}
              onChange={(v) => setContact("headlineHighlight", v)}
              placeholder="conversation."
            />
          </Field>
          <Field label="Subtext" hint="Short paragraph below the heading">
            <Textarea
              value={contactForm.subtext}
              onChange={(v) => setContact("subtext", v)}
              rows={2}
              placeholder="Fill in the form and I'll get back to you within 48 hours…"
            />
          </Field>
        </div>

        {/* Info cards */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact Info Cards</p>
          <Field label="Email Card — Sub-line" hint='Below your email address, e.g. "Direct line — always read personally"'>
            <Input
              value={contactForm.emailSub}
              onChange={(v) => setContact("emailSub", v)}
              placeholder="Direct line — always read personally"
            />
          </Field>
          <Field label="Response Time" hint='e.g. "Within 48 hours"'>
            <Input
              value={contactForm.responseTime}
              onChange={(v) => setContact("responseTime", v)}
              placeholder="Within 48 hours"
            />
          </Field>
          <Field label="Response Time — Sub-line" hint='e.g. "For all serious enquiries"'>
            <Input
              value={contactForm.responseTimeSub}
              onChange={(v) => setContact("responseTimeSub", v)}
              placeholder="For all serious enquiries"
            />
          </Field>
          <Field label="Availability" hint='e.g. "Remote & In-person"'>
            <Input
              value={contactForm.availability}
              onChange={(v) => setContact("availability", v)}
              placeholder="Remote & In-person"
            />
          </Field>
          <Field label="Availability — Sub-line" hint='e.g. "Author coaching & school programs"'>
            <Input
              value={contactForm.availabilitySub}
              onChange={(v) => setContact("availabilitySub", v)}
              placeholder="Author coaching & school programs"
            />
          </Field>
          <Field label="Side Tagline" hint="Italic quote shown below the info cards">
            <Input
              value={contactForm.tagline}
              onChange={(v) => setContact("tagline", v)}
              placeholder="From book development to youth programs — I am your right helper."
            />
          </Field>
        </div>

        {/* Form text */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Form Text</p>
          <Field label="Submit Button Label" hint='Text on the send button, e.g. "Send Message"'>
            <Input
              value={contactForm.submitLabel}
              onChange={(v) => setContact("submitLabel", v)}
              placeholder="Send Message"
            />
          </Field>
          <Field label="Disclaimer" hint="Small text below the submit button">
            <Input
              value={contactForm.disclaimer}
              onChange={(v) => setContact("disclaimer", v)}
              placeholder="No spam, ever. I respond personally within 48 hours."
            />
          </Field>
          <Field label="Success Title" hint='Shown after the form is submitted, e.g. "Message Received."'>
            <Input
              value={contactForm.successTitle}
              onChange={(v) => setContact("successTitle", v)}
              placeholder="Message Received."
            />
          </Field>
          <Field label="Success Message" hint="Paragraph shown after the form is submitted">
            <Textarea
              value={contactForm.successMessage}
              onChange={(v) => setContact("successMessage", v)}
              rows={2}
              placeholder="Thank you for reaching out…"
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
