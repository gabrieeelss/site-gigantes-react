import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    const initVLibras = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };

    // Evita recarregar o script se já estiver no DOM
    if (!document.querySelector('script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]')) {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = initVLibras;
      document.body.appendChild(script);
    } else {
      initVLibras();
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
