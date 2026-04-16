import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, Textarea, ListEditor, SaveBar } from "../components/FormField";

export default function AboutEditor() {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(content.about);
  const [saved, setSaved] = useState(false);

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setSaved(false);
  };

  const save = () => {
    updateContent("about", form);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">About Section</h2>
          <p className="text-sm text-gray-500 mt-1">
            The "About Coach Laurien" section — who you are, your values, and your call-to-action.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Section Label</p>
          <Field label="Section Label" hint='Small text above the headline, e.g. "About Coach Laurien"'>
            <Input value={form.label} onChange={(v) => set("label", v)} placeholder="About Coach Laurien" />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Headline</p>
          <Field label="Headline — Regular Part" hint='Shown in white, e.g. "This is not"'>
            <Input value={form.headlineStart} onChange={(v) => set("headlineStart", v)} placeholder="This is not" />
          </Field>
          <Field label="Headline — Highlighted Part" hint='Shown in gold/italic, e.g. "motivational coaching."'>
            <Input value={form.headlineHighlight} onChange={(v) => set("headlineHighlight", v)} placeholder="motivational coaching." />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Quote</p>
          <Field label="Pull Quote" hint="The italic quote shown in the left border block">
            <Textarea value={form.quote} onChange={(v) => set("quote", v)} rows={2} placeholder="It is structured, precise, hands-on work…" />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Body Text</p>
          <Field label="First Paragraph">
            <Textarea value={form.body1} onChange={(v) => set("body1", v)} rows={4} placeholder="I am a youth development and emerging authors' coach…" />
          </Field>
          <Field label="Second Paragraph">
            <Textarea value={form.body2} onChange={(v) => set("body2", v)} rows={3} placeholder="I am not a motivational coach…" />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Values List</p>
          <Field label="Values Section Heading" hint='e.g. "Clients come to me when they have decided to prioritize:"'>
            <Textarea value={form.valuesHeading} onChange={(v) => set("valuesHeading", v)} rows={2} placeholder="Clients come to me when they have decided to prioritize:" />
          </Field>
          <Field label="Values" hint="Each value appears as a numbered item — add, edit, or remove">
            <ListEditor
              items={form.values}
              onChange={(v) => set("values", v)}
              addLabel="Add a value"
              placeholder="e.g. Depth over hesitation"
            />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Closing & CTA</p>
          <Field label="Closing Statement" hint="The italic paragraph near the bottom of the section">
            <Textarea value={form.closing} onChange={(v) => set("closing", v)} rows={4} placeholder="From book development to youth programs…" />
          </Field>
          <Field label="Button Text" hint='The gold button at the bottom, e.g. "Book Me"'>
            <Input value={form.cta} onChange={(v) => set("cta", v)} placeholder="Book Me" />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Status Pill</p>
          <Field label="Availability Pill" hint='The small green-dot pill below your photo, e.g. "Accepting new clients · Author Coaching & School Programs"'>
            <Input value={form.statusPill} onChange={(v) => set("statusPill", v)} placeholder="Accepting new clients · Author Coaching & School Programs" />
          </Field>
        </div>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
