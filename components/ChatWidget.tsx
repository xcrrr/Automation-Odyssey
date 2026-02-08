import React, { useEffect } from 'react';

export const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      // Load the ElevenLabs script dynamically
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    // Attempt to hide branding inside shadow DOM
    // We check periodically because the widget might re-render or load lazily
    const hideBranding = () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget && widget.shadowRoot) {
        const styleId = 'elevenlabs-branding-hide';
        if (!widget.shadowRoot.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          // Target common branding elements. 
          // Note: Specific class names might change, so we try generic attribute selectors where possible
          // or generic styling for the bottom area if distinct.
          // Based on the user image "Powered by ElevenLabs Agents", this is often a small text or link at the bottom.
          style.textContent = `
            a[href*="elevenlabs.io"],
            .powered-by,
            [class*="powered-by"],
            div[style*="font-size: 10px"],
            div:has(> a[href*="elevenlabs.io"]) {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              height: 0 !important;
              pointer-events: none !important;
            }
          `;
          widget.shadowRoot.appendChild(style);
        }
      }
    };

    const intervalId = setInterval(hideBranding, 1000);

    // Initial attempt
    setTimeout(hideBranding, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const ConvaiWidget = 'elevenlabs-convai' as any;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <ConvaiWidget agent-id="agent_3501kdv292srfvrvjy3qx9v34409"></ConvaiWidget>
    </div>
  );
};