import React, { useEffect } from 'react';

const VLibras = () => {
  useEffect(() => {
    // Função para carregar um script dinamicamente
    const loadScript = (src, id, onLoadCallback = null) => {
      // Verifica se o script já foi carregado para evitar duplicação
      if (document.getElementById(id)) {
        if (onLoadCallback) onLoadCallback(); // Chama o callback se já estiver carregado
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.async = true; // Carrega de forma assíncrona
      script.onload = () => {
        if (onLoadCallback) onLoadCallback();
      };
      script.onerror = () => {
        console.error(`Falha ao carregar o script: ${src}`);
      };
      document.body.appendChild(script);

      // Retorna uma função de limpeza para remover o script quando o componente for desmontado
      return () => {
        const existingScript = document.getElementById(id);
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    };

    // 1. Carregar jQuery (se realmente necessário)
    // ATENÇÃO: É ALTAMENTE RECOMENDADO EVITAR O USO DE JQUERY EM PROJETOS REACT.
    // A lógica que depende de jQuery deve ser reescrita usando a própria API do React
    // (estado, refs, manipulação de DOM nativa do JavaScript).
    // Incluímos aqui APENAS para demonstrar como seria, caso seu `script.js` realmente dependa.
    const cleanupJquery = loadScript('https://code.jquery.com/jquery-3.6.0.min.js', 'jquery-script');

    // 2. Carregar o plugin VLibras
    const cleanupVlibras = loadScript('https://vlibras.gov.br/app/vlibras-plugin.js', 'vlibras-script', () => {
      // 3. Inicializar o widget VLibras APÓS o script ser carregado
      if (window.VLibras && !window.vlibrasWidget) { // Garante que não inicializa múltiplas vezes
        window.vlibrasWidget = new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    });

    // 4. Carregar seu script.js local
    // Se script.js tem lógica DOM, considere migrá-la para o React.
    // Para fins de demonstração, carregamos ele após o jQuery e VLibras.
    // NOTE: Se 'script.js' depende de jQuery, ele precisa ser carregado DEPOIS.
    // Idealmente, seu `script.js` seria importado diretamente ou sua lógica reescrita em React.
    const cleanupLocalScript = loadScript('/js/script.js', 'local-script');

    // Função de limpeza para remover os scripts quando o componente for desmontado
    // (Opcional, pois esses scripts geralmente são globais para o site inteiro)
    return () => {
      if (cleanupJquery) cleanupJquery();
      if (cleanupVlibras) cleanupVlibras();
      if (cleanupLocalScript) cleanupLocalScript();
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez (na montagem)

  return (
    <>
      {/* Estrutura HTML do plugin VLibras */}
      <div vw className="enabled">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      
      {/* Overlay do menu (se estiver relacionado ao seu script.js) */}
      <div id="menu-overlay" className="menu-overlay"></div>
    </>
  );
};

export default VLibras;
