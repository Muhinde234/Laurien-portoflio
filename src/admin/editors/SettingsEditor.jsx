import { useState, useRef } from "react";
import { useContent } from "../../context/ContentContext";
import { Field, Input, SaveBar } from "../components/FormField";
import defaultPhoto from "../../assets/laurien.jpeg";

export default function SettingsEditor({ onLogout }) {
  const { content, updateContent, resetContent } = useContent();
  const [form, setForm] = useState(content.settings);
  const [photoPreview, setPhotoPreview] = useState(content.profilePhoto || null);
  const [photoSaved, setPhotoSaved] = useState(false);
  const photoInputRef = useRef(null);
  const [aboutPhotoPreview, setAboutPhotoPreview] = useState(content.aboutPhoto || null);
  const [aboutPhotoSaved, setAboutPhotoSaved] = useState(false);
  const aboutPhotoInputRef = useRef(null);
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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file (JPG, PNG, WebP, etc.)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const savePhoto = () => {
    updateContent("profilePhoto", photoPreview);
    setPhotoSaved(true);
    setTimeout(() => setPhotoSaved(false), 3000);
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    updateContent("profilePhoto", null);
    if (photoInputRef.current) photoInputRef.current.value = "";
  };

  const handleAboutPhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file (JPG, PNG, WebP, etc.)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setAboutPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const saveAboutPhoto = () => {
    updateContent("aboutPhoto", aboutPhotoPreview);
    setAboutPhotoSaved(true);
    setTimeout(() => setAboutPhotoSaved(false), 3000);
  };

  const removeAboutPhoto = () => {
    setAboutPhotoPreview(null);
    updateContent("aboutPhoto", null);
    if (aboutPhotoInputRef.current) aboutPhotoInputRef.current.value = "";
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

        {/* Profile Photo */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Profile Photo</p>
          <p className="text-sm text-gray-500">
            Small circular photo — appears in the header, chatbot, booking card, and footer.
          </p>
          <div className="flex items-center gap-5">
            <div className="relative shrink-0">
              <img
                src={photoPreview || defaultPhoto}
                alt="Profile preview"
                className="w-20 h-20 rounded-full object-cover object-top border-2 border-gray-200"
              />
              {photoPreview && photoPreview !== content.profilePhoto && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" title="Unsaved" />
              )}
            </div>
            <div className="space-y-2 flex-1">
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy text-champagne text-sm font-semibold hover:bg-navy-light transition cursor-pointer">
                Choose Photo
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-400">JPG, PNG, WebP · Recommended: square, at least 400×400px</p>
            </div>
          </div>
          {photoPreview && (
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={savePhoto}
                className="px-5 py-2 rounded-full bg-navy text-champagne text-sm font-semibold hover:bg-navy-light transition"
              >
                Save Photo
              </button>
              <button
                onClick={removePhoto}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-semibold hover:bg-gray-100 transition"
              >
                Remove Photo
              </button>
              {photoSaved && <p className="text-xs text-green-600 font-medium">✓ Photo saved to all pages</p>}
            </div>
          )}
        </div>

        {/* About Section Photo */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">About Section Photo</p>
          <p className="text-sm text-gray-500">
            Large portrait displayed in the About section. Best as a tall/portrait-oriented image.
          </p>
          <div className="flex items-center gap-5">
            <div className="relative shrink-0">
              <img
                src={aboutPhotoPreview || defaultPhoto}
                alt="About section preview"
                className="w-16 h-20 rounded-xl object-cover object-top border-2 border-gray-200"
              />
              {aboutPhotoPreview && aboutPhotoPreview !== content.aboutPhoto && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" title="Unsaved" />
              )}
            </div>
            <div className="space-y-2 flex-1">
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy text-champagne text-sm font-semibold hover:bg-navy-light transition cursor-pointer">
                Choose Photo
                <input
                  ref={aboutPhotoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAboutPhotoChange}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-400">JPG, PNG, WebP · Recommended: portrait, at least 600×800px</p>
            </div>
          </div>
          {aboutPhotoPreview && (
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={saveAboutPhoto}
                className="px-5 py-2 rounded-full bg-navy text-champagne text-sm font-semibold hover:bg-navy-light transition"
              >
                Save Photo
              </button>
              <button
                onClick={removeAboutPhoto}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-semibold hover:bg-gray-100 transition"
              >
                Remove Photo
              </button>
              {aboutPhotoSaved && <p className="text-xs text-green-600 font-medium">✓ About photo saved</p>}
            </div>
          )}
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
