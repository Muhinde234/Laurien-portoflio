import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, Textarea, ListEditor, SaveBar } from "../components/FormField";

export default function BookingEditor() {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(content.booking);
  const [saved, setSaved] = useState(false);

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setSaved(false);
  };

  const save = () => {
    updateContent("booking", form);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Work With Me Section</h2>
          <p className="text-sm text-gray-500 mt-1">
            The booking / consultation section — headline, qualifications list, and call-to-action.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Section Label & Heading</p>
          <Field label="Section Label" hint='Small text above the panel, e.g. "Work With Me"'>
            <Input value={form.label} onChange={(v) => set("label", v)} placeholder="Work With Me" />
          </Field>
          <Field label="Heading — Regular Part" hint='e.g. "This work begins"'>
            <Input value={form.headingStart} onChange={(v) => set("headingStart", v)} placeholder="This work begins" />
          </Field>
          <Field label="Heading — Highlighted Part (gold)" hint='e.g. "with a conversation."'>
            <Input value={form.headingHighlight} onChange={(v) => set("headingHighlight", v)} placeholder="with a conversation." />
          </Field>
          <Field label="Subtext" hint="The paragraph below the heading">
            <Textarea value={form.subtext} onChange={(v) => set("subtext", v)} rows={2} placeholder="If you have read this far…" />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Qualification Checklist</p>
          <Field label="Qualifications Heading" hint='e.g. "This engagement is right for you if:"'>
            <Input value={form.qualificationsHeading} onChange={(v) => set("qualificationsHeading", v)} placeholder="This engagement is right for you if:" />
          </Field>
          <Field label="Qualification Items" hint="Each row in the checklist — who this is for">
            <ListEditor
              items={form.qualifications}
              onChange={(v) => set("qualifications", v)}
              addLabel="Add a qualification"
              placeholder="e.g. You are writing a book and want structured, honest guidance…"
            />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Call to Action</p>
          <Field label="Button Text" hint='e.g. "Book a Consultation"'>
            <Input value={form.primaryCta} onChange={(v) => set("primaryCta", v)} placeholder="Book a Consultation" />
          </Field>
          <Field label="Microcopy" hint='Small text below the button, e.g. "15-minute call · No commitment required · Response within 48 hours"'>
            <Input value={form.microcopy} onChange={(v) => set("microcopy", v)} placeholder="15-minute call · No commitment required · Response within 48 hours" />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Identity Card</p>
          <Field label="Your Name" hint="Displayed on the identity card in the panel">
            <Input value={form.coachName} onChange={(v) => set("coachName", v)} placeholder="Coach Laurien" />
          </Field>
          <Field label="Your Role / Title" hint='e.g. "Founder, KELP Education"'>
            <Input value={form.coachRole} onChange={(v) => set("coachRole", v)} placeholder="Founder, KELP Education" />
          </Field>
          <Field label="Response Time Message" hint='e.g. "Responding within 48 hrs."'>
            <Input value={form.responseTime} onChange={(v) => set("responseTime", v)} placeholder="Responding within 48 hrs." />
          </Field>
        </div>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
