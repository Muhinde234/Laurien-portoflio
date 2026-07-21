import { useEffect, useState } from "react";
import { ref, onValue, update, remove } from "firebase/database";
import { db } from "../lib/firebase";
import { Mail, MailOpen, Trash2, Inbox } from "lucide-react";

export default function MessagesViewer() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const msgRef = ref(db, "messages");
    const unsub = onValue(msgRef, (snap) => {
      const data = snap.val();
      if (data) {
        const list = Object.entries(data)
          .map(([id, val]) => ({ id, ...val }))
          .sort((a, b) => b.createdAt - a.createdAt);
        setMessages(list);
      } else {
        setMessages([]);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const markRead = (msg) => {
    if (!msg.read) update(ref(db, `messages/${msg.id}`), { read: true });
    setSelected(msg.id === selected ? null : msg.id);
  };

  const deleteMsg = (id) => {
    remove(ref(db, `messages/${id}`));
    if (selected === id) setSelected(null);
  };

  const unread = messages.filter((m) => !m.read).length;
  const selectedMsg = messages.find((m) => m.id === selected);

  if (loading) return <div className="p-8 text-gray-400 text-sm">Loading messages…</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Inbox className="w-5 h-5 text-navy" />
        <h2 className="text-lg font-bold text-gray-900">Messages</h2>
        {unread > 0 && (
          <span className="ml-1 px-2 py-0.5 rounded-full bg-champagne text-navy text-xs font-bold">
            {unread} new
          </span>
        )}
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Inbox className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No messages yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {messages.map((msg) => (
            <div key={msg.id} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => markRead(msg)}
                className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-gray-50 transition"
              >
                <div className="mt-0.5 shrink-0">
                  {msg.read
                    ? <MailOpen className="w-4 h-4 text-gray-300" />
                    : <Mail className="w-4 h-4 text-champagne" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-sm truncate ${msg.read ? "text-gray-500 font-medium" : "text-gray-900 font-semibold"}`}>
                      {msg.firstName} {msg.lastName}
                    </p>
                    <span className="text-xs text-gray-400 shrink-0">
                      {new Date(msg.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{msg.email}</p>
                  <p className="text-sm text-gray-500 truncate mt-1">{msg.message}</p>
                </div>
              </button>

              {selected === msg.id && selectedMsg && (
                <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                  <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed mb-4">{selectedMsg.message}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${selectedMsg.email}?subject=Re: Your message to Coach Laurien`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy text-champagne text-sm font-semibold hover:bg-navy/90 transition"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Reply via Email
                    </a>
                    <button
                      onClick={() => deleteMsg(msg.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 text-red-400 text-sm font-medium hover:bg-red-50 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
