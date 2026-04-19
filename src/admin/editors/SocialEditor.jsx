import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, SaveBar } from "../components/FormField";

const PLATFORMS = [
  { key: "linkedin", label: "LinkedIn", hint: "Your LinkedIn profile URL", placeholder: "https://linkedin.com/in/your-name" },
  { key: "instagram", label: "Instagram", hint: "Your Instagram profile URL", placeholder: "https://instagram.com/your-handle" },
  { key: "facebook", label: "Facebook", hint: "Your Facebook page or profile URL", placeholder: "https://facebook.com/your-page" },
  { key: "x", label: "X (Twitter)", hint: "Your X / Twitter profile URL", placeholder: "https://twitter.com/your-handle" },
  { key: "youtube", label: "YouTube", hint: "Your YouTube channel URL", placeholder: "https://youtube.com/@your-channel" },
];

export default function SocialEditor() {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(content.social);
  const [saved, setSaved] = useState(false);

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setSaved(false);
  };

  const save = () => {
    updateContent("social", form);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Social Media Links</h2>
          <p className="text-sm text-gray-500 mt-1">
            Update the links to your social media profiles. These appear as icon buttons in the footer.
            Leave a field blank if you don't use that platform.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-5">
          {PLATFORMS.map(({ key, label, hint, placeholder }) => (
            <Field key={key} label={label} hint={hint}>
              <Input
                value={form[key]}
                onChange={(v) => set(key, v)}
                placeholder={placeholder}
              />
            </Field>
          ))}
        </div>

        <div className="bg-navy/5 border border-navy/20 rounded-xl p-4">
          <p className="text-xs font-semibold text-navy mb-1">Tip</p>
          <p className="text-xs text-navy/70">
            Copy the full URL from your browser's address bar when you're on your profile page.
            Make sure it starts with <span className="font-mono">https://</span>
          </p>
        </div>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
