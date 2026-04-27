import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, Textarea, SaveBar } from "../components/FormField";

export default function HeroEditor() {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(content.hero);
  const [saved, setSaved] = useState(false);

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setSaved(false);
  };

  const save = () => {
    updateContent("hero", form);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Hero Section</h2>
          <p className="text-sm text-gray-500 mt-1">
            The very first thing visitors see — the big headline, description, and call-to-action buttons.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Top Label</p>
          <Field label="Small Label Text" hint="Appears above the main headline in small caps">
            <Input
              value={form.label}
              onChange={(v) => set("label", v)}
              placeholder="Youth Development & Author Coach · Founder, KELP Education"
            />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Main Headline</p>
          <Field label="Headline — Regular Part" hint='The part shown in white, e.g. "Hi, I am"'>
            <Input
              value={form.headlineStart}
              onChange={(v) => set("headlineStart", v)}
              placeholder="Hi, I am"
            />
          </Field>
          <Field label="Headline — Highlighted Part" hint='The part shown in gold/italic, e.g. "Coach Laurien."'>
            <Input
              value={form.headlineHighlight}
              onChange={(v) => set("headlineHighlight", v)}
              placeholder="Coach Laurien."
            />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Description</p>
          <Field label="Subheadline / Description" hint="The paragraph below the main headline">
            <Textarea
              value={form.subheadline}
              onChange={(v) => set("subheadline", v)}
              rows={3}
              placeholder="I help emerging authors, schools…"
            />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Buttons</p>
          <Field label="Primary Button Text" hint='The gold button, e.g. "Begin the Work"'>
            <Input
              value={form.primaryCta}
              onChange={(v) => set("primaryCta", v)}
              placeholder="Begin the Work"
            />
          </Field>
          <Field label="Secondary Button Text" hint='The outline button, e.g. "Explore Services"'>
            <Input
              value={form.secondaryCta}
              onChange={(v) => set("secondaryCta", v)}
              placeholder="Explore Services"
            />
          </Field>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tagline</p>
          <Field label="Bottom Tagline" hint="The small text shown between two lines at the bottom of the hero">
            <Input
              value={form.tagline}
              onChange={(v) => set("tagline", v)}
              placeholder="Where serious work begins"
            />
          </Field>
        </div>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
