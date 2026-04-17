import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, SaveBar } from "../components/FormField";

export default function SettingsEditor({ onLogout }) {
  const { content, updateContent, resetContent } = useContent();
  const [form, setForm] = useState(content.settings);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const savePassword = () => {
    setPasswordError("");
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    updateContent("settings", { ...content.settings, adminPassword: newPassword });
    setNewPassword("");
    setConfirmPassword("");
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  const handleExport = () => {
    const data = JSON.stringify(content, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "coach-laurien-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        localStorage.setItem("coach_laurien_content", JSON.stringify(data));
        window.location.reload();
      } catch {
        alert("Invalid file. Please use a valid backup JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    resetContent();
    setShowReset(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
          <p className="text-sm text-gray-500 mt-1">
            Change your admin password, export a backup, or reset all content to defaults.
          </p>
        </div>

        {/* Change password */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Change Password</p>
          <Field label="New Password" hint="At least 6 characters">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition"
            />
          </Field>
          <Field label="Confirm New Password">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat new password"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy transition"
            />
          </Field>
          {passwordError && <p className="text-xs text-red-600">{passwordError}</p>}
          {passwordSaved && <p className="text-xs text-green-600 font-medium">✓ Password updated successfully</p>}
          <button
            onClick={savePassword}
            className="px-5 py-2 rounded-full bg-navy text-champagne text-sm font-semibold hover:bg-navy-light transition"
          >
            Update Password
          </button>
        </div>

        {/* Backup & Restore */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Backup & Restore</p>
          <p className="text-sm text-gray-500">
            Export your current content as a backup file. You can use this file to restore your content later or move it to another device.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={handleExport}
              className="px-5 py-2 rounded-full bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
            >
              ↓ Export Backup
            </button>
            <label className="px-5 py-2 rounded-full bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition cursor-pointer">
              ↑ Import Backup
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
          </div>
        </div>

        {/* Reset */}
        <div className="bg-red-50 rounded-xl p-4 border border-red-200 space-y-3">
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">Danger Zone</p>
          <p className="text-sm text-gray-600">
            Reset all content back to the original defaults. This will erase all your changes permanently.
          </p>
          {!showReset ? (
            <button
              onClick={() => setShowReset(true)}
              className="px-5 py-2 rounded-full border border-red-300 text-red-600 text-sm font-semibold hover:bg-red-100 transition"
            >
              Reset to Defaults
            </button>
          ) : (
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-sm font-medium text-red-700">Are you sure? This cannot be undone.</p>
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="px-5 py-2 rounded-full bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Sign out */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Session</p>
          <button
            onClick={onLogout}
            className="px-5 py-2 rounded-full bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
