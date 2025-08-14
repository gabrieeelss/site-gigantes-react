import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    // Evita múltiplos carregamentos
    if (!window.VLibras && !document.getElementById("vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = () => {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      };
      document.body.appendChild(script);
    } else if (window.VLibras) {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    }
  }, []);

  return (
    <div data-vw="true" className="enabled">
      <div data-vw-access-button="true"></div>
      <div data-vw-plugin-wrapper>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
