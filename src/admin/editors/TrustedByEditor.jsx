import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, ListEditor, SaveBar } from "../components/FormField";

export default function TrustedByEditor() {
  const { content, updateContent } = useContent();
  const [items, setItems] = useState(content.trustedBy);
  const [saved, setSaved] = useState(false);

  const save = () => {
    updateContent("trustedBy", items);
    setSaved(true);
  };

  return (
    <div>
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Trusted By Strip</h2>
          <p className="text-sm text-gray-500 mt-1">
            The strip of pill-tags shown below the hero section — who you work with or have worked with.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Pills / Tags</p>
          <Field label="Featured Clients / Partners" hint="Each item shows up as a pill tag in the strip">
            <ListEditor
              items={items}
              onChange={(v) => { setItems(v); setSaved(false); }}
              addLabel="Add a tag"
              placeholder="e.g. Independent Authors"
            />
          </Field>

          {/* Live preview */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Preview</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 bg-white"
                >
                  {item || <span className="text-gray-300">empty</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SaveBar onSave={save} saved={saved} />
    </div>
  );
}
