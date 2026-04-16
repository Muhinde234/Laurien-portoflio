import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, Textarea, ListEditor, SaveBar } from "../components/FormField";

function ServiceCard({ service, index, onChange }) {
  const set = (key, val) => onChange({ ...service, [key]: val });
  const label = index === 0 ? "Service 1 — Author's Coaching" : "Service 2 — Youth Coaching";
  const color = index === 0 ? "blue" : "purple";

  return (
    <div className={`rounded-xl border-2 ${color === "blue" ? "border-blue-100" : "border-purple-100"} overflow-hidden`}>
      <div className={`px-5 py-3 ${color === "blue" ? "bg-blue-50" : "bg-purple-50"}`}>
        <p className={`text-xs font-bold uppercase tracking-wide ${color === "blue" ? "text-blue-600" : "text-purple-600"}`}>
          {label}
        </p>
      </div>

      <div className="p-5 space-y-5 bg-white">
        {/* Title */}
        <Field label="Service Title" hint="The large heading on the card">
          <Input value={service.title} onChange={(v) => set("title", v)} placeholder="Service title" />
        </Field>

        {/* Intro or Subtitle */}
        <Field
          label={index === 0 ? "Intro Line (italic, for Author Coaching)" : "Subtitle (for Youth Coaching)"}
          hint={index === 0 ? 'Small italic opener, e.g. "For authors who want their work to stand,"' : 'e.g. "Speaking & Learning programs for Schools..."'}
        >
          <Input
            value={index === 0 ? service.intro : service.subtitle}
            onChange={(v) => set(index === 0 ? "intro" : "subtitle", v)}
            placeholder={index === 0 ? "For authors who want their work to stand," : "Speaking & Learning programs for Schools..."}
          />
        </Field>

        {/* Description */}
        <Field label="Description" hint="The main paragraph describing this service">
          <Textarea value={service.description} onChange={(v) => set("description", v)} rows={3} />
        </Field>

        {/* Partner with (Youth only) */}
        {index === 1 && (
          <>
            <Field label="Partner Section Heading" hint='e.g. "I partner with schools and educational institutions to:"'>
              <Input value={service.partnerLabel} onChange={(v) => set("partnerLabel", v)} placeholder="I partner with schools and educational institutions to:" />
            </Field>
            <Field label="Partner Items" hint="Each item in the partner-with box">
              <ListEditor
                items={service.partnerWith}
                onChange={(v) => set("partnerWith", v)}
                addLabel="Add partner item"
                placeholder="Strengthen English proficiency…"
              />
            </Field>
          </>
        )}

        {/* Features */}
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

        {/* Focus Areas (Youth only) */}
        {index === 1 && (
          <Field label="Students Leave With (pills)" hint="Small pill tags shown below the features">
            <ListEditor
              items={service.focusAreas}
              onChange={(v) => set("focusAreas", v)}
              addLabel="Add a focus area"
              placeholder="e.g. Literacy & academic writing mastery"
            />
          </Field>
        )}

        {/* Suited For (Youth only) */}
        {index === 1 && (
          <Field label="Especially Suited For" hint='Short tags after "Especially suited for institutions that value:"'>
            <ListEditor
              items={service.suitedFor}
              onChange={(v) => set("suitedFor", v)}
              addLabel="Add"
              placeholder="e.g. Structure"
            />
          </Field>
        )}

        {/* Note (Author Coaching only) */}
        {index === 0 && (
          <Field label="Note (italic disclaimer at bottom)" hint="Optional small italic note at the bottom of the card">
            <Textarea value={service.note} onChange={(v) => set("note", v)} rows={2} placeholder="This service is best suited for…" />
          </Field>
        )}

        {/* CTA */}
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
    const next = services.map((s, i) => (i === index ? data : s));
    setServices(next);
    setSaved(false);
  };

  const save = () => {
    updateContent("services", services);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Services Section</h2>
          <p className="text-sm text-gray-500 mt-1">
            Edit the two service cards — Author's Coaching and Youth Coaching. You can update titles, descriptions, features, and button text.
          </p>
        </div>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            onChange={(data) => updateService(index, data)}
          />
        ))}
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
