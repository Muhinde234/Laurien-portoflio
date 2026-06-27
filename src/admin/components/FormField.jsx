/** Reusable form field components for the admin panel */

export function Field({ label, hint, children }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
        {label}
      </label>
      {hint && <p className="text-sm text-gray-400 -mt-0.5">{hint}</p>}
      {children}
    </div>
  );
}

export function Input({ value, onChange, placeholder, className = "" }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition ${className}`}
    />
  );
}

export function Textarea({ value, onChange, placeholder, rows = 3, className = "" }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition resize-none ${className}`}
    />
  );
}

/** Editable list of strings — add / edit / remove / reorder */
export function ListEditor({ items, onChange, addLabel = "Add item", placeholder = "Type here…" }) {
  const update = (idx, val) => {
    const next = [...items];
    next[idx] = val;
    onChange(next);
  };

  const remove = (idx) => onChange(items.filter((_, i) => i !== idx));

  const move = (idx, dir) => {
    const next = [...items];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  };

  const add = () => onChange([...items, ""]);

  return (
    <div className="space-y-1.5">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-2">
          {/* Reorder */}
          <div className="flex flex-col gap-0.5 pt-1 shrink-0">
            <button
              type="button"
              onClick={() => move(idx, -1)}
              disabled={idx === 0}
              className="text-gray-300 hover:text-gray-600 disabled:opacity-0 text-sm leading-none transition"
              title="Move up"
            >▲</button>
            <button
              type="button"
              onClick={() => move(idx, 1)}
              disabled={idx === items.length - 1}
              className="text-gray-300 hover:text-gray-600 disabled:opacity-0 text-sm leading-none transition"
              title="Move down"
            >▼</button>
          </div>

          {/* Input */}
          <textarea
            value={item}
            onChange={(e) => update(idx, e.target.value)}
            placeholder={placeholder}
            rows={item.length > 80 ? 2 : 1}
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition resize-none"
          />

          {/* Remove */}
          <button
            type="button"
            onClick={() => remove(idx)}
            className="shrink-0 mt-1 text-gray-300 hover:text-red-500 transition text-lg leading-none"
            title="Remove"
          >×</button>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="flex items-center gap-1.5 text-base text-navy hover:text-navy-light font-medium transition"
      >
        <span className="text-base leading-none">+</span> {addLabel}
      </button>
    </div>
  );
}

/** Editable list of "Also Available" offering objects — title, description, optional badge & type */
export function OfferingsEditor({ items, onChange, addLabel = "Add offering" }) {
  const update = (idx, key, val) => {
    const next = [...items];
    next[idx] = { ...next[idx], [key]: val };
    onChange(next);
  };

  const remove = (idx) => onChange(items.filter((_, i) => i !== idx));

  const move = (idx, dir) => {
    const next = [...items];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  };

  const add = () => onChange([...items, { title: "", description: "", badge: "", type: "" }]);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-lg border border-gray-200 p-3 space-y-2 bg-gray-50">
          <div className="flex items-start gap-2">
            <div className="flex flex-col gap-0.5 pt-1 shrink-0">
              <button
                type="button"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                className="text-gray-300 hover:text-gray-600 disabled:opacity-0 text-sm leading-none transition"
                title="Move up"
              >▲</button>
              <button
                type="button"
                onClick={() => move(idx, 1)}
                disabled={idx === items.length - 1}
                className="text-gray-300 hover:text-gray-600 disabled:opacity-0 text-sm leading-none transition"
                title="Move down"
              >▼</button>
            </div>

            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={item.title}
                onChange={(e) => update(idx, "title", e.target.value)}
                placeholder="Offering title"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition"
              />
              <textarea
                value={item.description}
                onChange={(e) => update(idx, "description", e.target.value)}
                placeholder="Offering description"
                rows={2}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition resize-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={item.badge || ""}
                  onChange={(e) => update(idx, "badge", e.target.value)}
                  placeholder="Badge (optional, e.g. A1 → C1+)"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition"
                />
                <input
                  type="text"
                  value={item.type || ""}
                  onChange={(e) => update(idx, "type", e.target.value)}
                  placeholder="Type (optional, e.g. Private & Group)"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => remove(idx)}
              className="shrink-0 mt-1 text-gray-300 hover:text-red-500 transition text-lg leading-none"
              title="Remove"
            >×</button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="flex items-center gap-1.5 text-base text-navy hover:text-navy-light font-medium transition"
      >
        <span className="text-base leading-none">+</span> {addLabel}
      </button>
    </div>
  );
}

export function SaveBar({ onSave, saved }) {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
      {saved ? (
        <p className="text-base text-green-600 font-medium">✓ Changes saved</p>
      ) : (
        <p className="text-base text-gray-400">Unsaved changes</p>
      )}
      <button
        type="button"
        onClick={onSave}
        className="px-5 py-2 rounded-full bg-navy text-champagne text-base font-semibold hover:bg-navy-light transition"
      >
        Save Changes
      </button>
    </div>
  );
}
