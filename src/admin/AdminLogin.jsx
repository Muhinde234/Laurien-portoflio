import { useState } from "react";
import { useContent } from "../context/ContentContext";
import laurienPhoto from "../assets/laurien.jpeg";

export default function AdminLogin({ onLogin }) {
  const { content } = useContent();
  const [password, setPassword] = useState("");
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
           <img
                        src={laurienPhoto}
                        alt="Coach Laurien"
                        className="w-11 h-11 rounded-full object-cover object-top border-2 border-champagne/40 shadow-md shadow-champagne/10"
                      />
         
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-base font-semibold text-gray-800 mb-1">Sign in</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your admin password to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B2452]/20 focus:border-[#1B2452] transition"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-xs text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-xl bg-navy text-champagne text-sm font-semibold hover:bg-navy-light disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Default password is <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">laurien2024</span> — change it in Settings.
        </p>
      </div>
    </div>
  );
}
