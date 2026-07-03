import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, Textarea, ListEditor, OfferingsEditor, SaveBar } from "../components/FormField";
import { SERVICE_ICON_NAMES, DEFAULT_SERVICE_ICON } from "../../data/serviceIcons";

const emptyService = () => ({
  icon: DEFAULT_SERVICE_ICON,
  title: "",
  intro: "",
  subtitle: "",
  description: "",
  partnerLabel: "",
  partnerWith: [],
  featuresLabel: "Services include:",
  features: [],
  offerings: [],
  focusAreas: [],
  suitedFor: [],
  note: "",
  cta: "Book Me",
});

function ServiceCard({ service, index, total, onChange, onRemove, onMove }) {
  const set = (key, val) => onChange({ ...service, [key]: val });

  return (
    <div className="rounded-xl border-2 border-gray-200 overflow-hidden">
      <div className="px-5 py-3 bg-gray-50 flex items-center justify-between gap-3">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
          Service {index + 1}{service.title ? ` — ${service.title}` : ""}
        </p>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => onMove(-1)}
            disabled={index === 0}
            className="text-gray-300 hover:text-gray-600 disabled:opacity-0 text-sm leading-none transition px-1"
            title="Move up"
          >▲</button>
          <button
            type="button"
            onClick={() => onMove(1)}
            disabled={index === total - 1}
            className="text-gray-300 hover:text-gray-600 disabled:opacity-0 text-sm leading-none transition px-1"
            title="Move down"
          >▼</button>
          <button
            type="button"
            onClick={onRemove}
            className="text-gray-300 hover:text-red-500 transition text-lg leading-none px-1"
            title="Remove this service"
          >×</button>
        </div>
      </div>

      <div className="p-5 space-y-5 bg-white">
        <Field label="Icon" hint="Shown in the top corner of the card">
          <select
            value={service.icon || DEFAULT_SERVICE_ICON}
            onChange={(e) => set("icon", e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition"
          >
            {SERVICE_ICON_NAMES.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </Field>

        <Field label="Service Title" hint="The large heading on the card">
          <Input value={service.title} onChange={(v) => set("title", v)} placeholder="Service title" />
        </Field>

        <Field label="Intro Line (italic)" hint='Small italic opener shown above the description, e.g. "For authors who want their work to stand,"'>
          <Input value={service.intro} onChange={(v) => set("intro", v)} placeholder="For authors who want their work to stand," />
        </Field>

        <Field label="Subtitle" hint='e.g. "Speaking & Learning programs for Schools..."'>
          <Input value={service.subtitle} onChange={(v) => set("subtitle", v)} placeholder="Speaking & Learning programs for Schools..." />
        </Field>

        <Field label="Description" hint="The main paragraph describing this service">
          <Textarea value={service.description} onChange={(v) => set("description", v)} rows={3} />
        </Field>

        <Field label="Partner Section Heading" hint='Optional — e.g. "I partner with schools and educational institutions to:"'>
          <Input value={service.partnerLabel} onChange={(v) => set("partnerLabel", v)} placeholder="I partner with schools and educational institutions to:" />
        </Field>
        <Field label="Partner Items" hint="Optional — each item in the partner-with box">
          <ListEditor
            items={service.partnerWith}
            onChange={(v) => set("partnerWith", v)}
            addLabel="Add partner item"
            placeholder="Strengthen English proficiency…"
          />
        </Field>

        <Field label="Features Section Heading" hint='e.g. "Services include:" or "Services Include:"'>
          <Input value={service.featuresLabel} onChange={(v) => set("featuresLabel", v)} placeholder="Services include:" />
        </Field>
        <Field label="Features List" hint="Each bullet point in the features list">
          <ListEditor
            items={service.features}
            onChange={(v) => set("features", v)}
            addLabel="Add a feature"
            placeholder="e.g. Manuscript development…"
          />
        </Field>

        <Field label="Students / Clients Leave With (pills)" hint="Optional — small pill tags shown below the features">
          <ListEditor
            items={service.focusAreas}
            onChange={(v) => set("focusAreas", v)}
            addLabel="Add a focus area"
            placeholder="e.g. Literacy & academic writing mastery"
          />
        </Field>

        <Field label="Especially Suited For" hint='Optional — short tags after "Especially suited for..."'>
          <ListEditor
            items={service.suitedFor}
            onChange={(v) => set("suitedFor", v)}
            addLabel="Add"
            placeholder="e.g. Structure"
          />
        </Field>

        <Field label="Also Available" hint="Optional — extra offerings shown below the features">
          <OfferingsEditor
            items={service.offerings}
            onChange={(v) => set("offerings", v)}
            addLabel="Add an offering"
          />
        </Field>

        <Field label="Note (italic disclaimer at bottom)" hint="Optional small italic note at the bottom of the card">
          <Textarea value={service.note} onChange={(v) => set("note", v)} rows={2} placeholder="This service is best suited for…" />
        </Field>

        <Field label="Button Text" hint="The call-to-action button on this card">
          <Input value={service.cta} onChange={(v) => set("cta", v)} placeholder="Book Me" />
        </Field>
      </div>
    </div>
  );
}

export default function ServicesEditor() {
  const { content, updateContent } = useContent();
  const [services, setServices] = useState(content.services);
  const [saved, setSaved] = useState(false);

  const updateService = (index, data) => {
    setServices((prev) => prev.map((s, i) => (i === index ? data : s)));
    setSaved(false);
  };

  const removeService = (index) => {
    setServices((prev) => prev.filter((_, i) => i !== index));
    setSaved(false);
  };

  const moveService = (index, dir) => {
    setServices((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
    setSaved(false);
  };

  const addService = () => {
    setServices((prev) => [...prev, emptyService()]);
    setSaved(false);
  };

  const save = () => {
    updateContent("services", services);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Services Section</h2>
          <p className="text-sm text-gray-500 mt-1">
            Add, remove, or reorder as many service cards as you like — update titles, descriptions, features, and button text for each.
          </p>
        </div>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            total={services.length}
            onChange={(data) => updateService(index, data)}
            onRemove={() => removeService(index)}
            onMove={(dir) => moveService(index, dir)}
          />
        ))}

        <button
          type="button"
          onClick={addService}
          className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl border-2 border-dashed border-gray-300 text-base text-navy hover:text-navy-light hover:border-navy/30 font-medium transition"
        >
          <span className="text-base leading-none">+</span> Add another service
        </button>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
