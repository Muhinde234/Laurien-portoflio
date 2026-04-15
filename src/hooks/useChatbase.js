import { useEffect } from "react";

export function useChatbase({ chatbotId, domain = "www.chatbase.co" }) {
  useEffect(() => {
    if (!chatbotId) return;

    window.embeddedChatbotConfig = {
      chatbotId,
      domain,
    };

    let idleId = null;
    let timeoutId = null;
    let script = null;

    const loadScript = () => {
      const existingScript = document.getElementById(chatbotId);
      if (existingScript) return;

      script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = chatbotId;
      script.defer = true;

      document.body.appendChild(script);
    };

    if (window.requestIdleCallback) {
      idleId = window.requestIdleCallback(loadScript, { timeout: 3000 });
    } else {
      timeoutId = window.setTimeout(loadScript, 1500);
    }

    return () => {
      if (idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (script?.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [chatbotId, domain]);
}
