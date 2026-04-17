import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useContent } from "../context/ContentContext";
import laurienPhoto from "../assets/laurien.jpeg";

export default function AdminLogin({ onLogin }) {
  const { content } = useContent();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (password === content.settings.adminPassword) {
        sessionStorage.setItem("cl_admin_auth", "1");
        onLogin();
      } else {
        setError("Incorrect password. Please try again.");
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen
      flex items-center justify-center px-4 relative overflow-hidden">

      {/* Ambient background orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-champagne/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64  rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-sm relative z-10">

        {/* ── Brand block ── */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-5">
            <div className="w-20 h-20 rounded-full p-0.5 bg-linear-to-br from-champagne/60 to-champagne/10">
              <img
                src={laurienPhoto}
                alt="Coach Laurien"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-0.5 right-0.5 w-4 h-4  rounded-full border-2 border-navy shadow-sm" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-champagne leading-none tracking-wide mb-1.5">
            Coach Laurien
          </h1>
          <p className="text-[11px] text-offwhite/30 uppercase tracking-[0.3em] font-medium">
            Content Management
          </p>
        </div>

        {/* ── Card ── */}
        <div className="rounded-2xl border border-champagne/15 overflow-hidden">
          {/* Top accent line */}
          <div className="h-px bg-linear-to-r from-champagne/70 via-champagne/25 to-transparent" />

          <div className=" px-8 py-8">

            <div className="mb-7">
              <h2 className="text-lg font-semibold text-offwhite mb-1">Welcome back</h2>
              <p className="text-sm text-offwhite/40 leading-relaxed">
                Enter your password to manage site content.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Password field */}
              <div className="space-y-2">
                <label className="block text-[11px] font-semibold text-offwhite/45 uppercase tracking-[0.2em]">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Lock className="w-4 h-4 text-champagne/25" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    placeholder="Enter your password"
                    autoFocus
                    className="w-full pl-11 pr-11 py-3.5 rounded-xl bg-navy/50 border border-champagne/15 text-sm text-offwhite placeholder-offwhite/20 focus:outline-none focus:border-champagne/40 focus:ring-2 focus:ring-champagne/15 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-4 flex items-center text-offwhite/25 hover:text-champagne/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {error && (
                  <p className="flex items-center gap-2 text-xs text-red-400 pt-0.5">
                    <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
                    {error}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3.5 rounded-full bg-champagne text-navy text-sm font-bold tracking-wide hover:bg-champagne-light disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-navy/25 border-t-navy animate-spin" />
                    Signing in…
                  </span>
                ) : "Sign In"}
              </button>
            </form>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-xs text-offwhite/20 mt-6 leading-relaxed">
          Default password:{" "}
          <span className="font-mono text-champagne/40 bg-champagne/5 border border-champagne/10 px-1.5 py-0.5 rounded">
            laurien2024
          </span>
          <br />
          <span className="text-offwhite/15">Change it anytime in Settings.</span>
        </p>
      </div>
    </div>
  );
}
