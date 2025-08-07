import { useState } from 'react';
import './Menu.css';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // Opcional: fechar dropdowns quando o menu principal for fechado
    if (isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <a href="index.html">
            <img src="./src/assets/img/geral/aecs_logo.png" alt="AECS Gigantes Logo" />
          </a>
        </div>

        <ul className="nav-list desktop-menu">
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Sobre
            </a>
            <ul className="dropdown-menu">
              <li><a href="sobre.html">Sobre a Associação</a></li>
              <li><a href="organograma.html">Organograma</a></li>
              <li><a href="perguntasfrequentes.html">Perguntas Frequentes</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Transparência
            </a>
            <ul className="dropdown-menu">
              <li><a href="contabilidade.html">Relatórios Contábeis</a></li>
              <li><a href="prestacaodecontas.html">Prestação de Contas</a></li>
              <li><a href="atasestatuto.html">Atas e Estatuto</a></li>
              <li><a href="certificados.html">Certificados em Geral</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="equipe.html" className="nav-link">Equipe</a></li>
          <li className="nav-item"><a href="projetos.html" className="nav-link">Projetos</a></li>
          <li className="nav-item"><a href="titulos.html" className="nav-link">Títulos</a></li>
          <li className="nav-item"><a href="noticias.html" className="nav-link">Notícias</a></li>
          <li className="nav-item"><a href="contato.html" className="nav-link">Contato</a></li>
        </ul>

        <button 
          id="menu-toggle" 
          className="mobile-menu-icon" 
          aria-label="Abrir menu" 
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          ☰
        </button>
      </nav>

      <nav id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="index.html">Home</a></li>
          <li className="nav-item dropdown">
            <button 
              className="nav-link dropdown-toggle" 
              aria-expanded={openDropdown === 'sobre'}
              aria-haspopup="true" 
              onClick={() => handleDropdownToggle('sobre')}
            >
              Sobre
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'sobre' ? 'open' : ''}`}>
              <li><a href="sobre.html">Sobre a Associação</a></li>
              <li><a href="organograma.html">Organograma</a></li>
              <li><a href="perguntasfrequentes.html">Perguntas Frequentes</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <button 
              className="nav-link dropdown-toggle" 
              aria-expanded={openDropdown === 'transparencia'}
              aria-haspopup="true" 
              onClick={() => handleDropdownToggle('transparencia')}
            >
              Transparência
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'transparencia' ? 'open' : ''}`}>
              <li><a href="contabilidade.html">Relatórios Contábeis</a></li>
              <li><a href="prestacaodecontas.html">Prestação de Contas</a></li>
              <li><a href="atasestatuto.html">Atas e Estatuto</a></li>
              <li><a href="certificados.html">Certificados em Geral</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="equipe.html" className="nav-link">Equipe</a></li>
          <li className="nav-item"><a href="projetos.html" className="nav-link">Projetos</a></li>
          <li className="nav-item"><a href="titulos.html" className="nav-link">Títulos</a></li>
          <li className="nav-item"><a href="noticias.html" className="nav-link">Notícias</a></li>
          <li className="nav-item"><a href="contato.html" className="nav-link">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;