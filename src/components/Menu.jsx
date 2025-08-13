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
          <a href="/">
            <img src="./src/assets/img/geral/aecs_logo.png" alt="AECS Gigantes Logo" />
          </a>
        </div>

        <ul className="nav-list desktop-menu">
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Sobre
            </a>
            <ul className="dropdown-menu">
              <li><a href="/Sobre">Sobre a Associação</a></li>
              <li><a href="/Organograma">Organograma</a></li>
              <li><a href="/PerguntasFrequentes">Perguntas Frequentes</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Transparência
            </a>
            <ul className="dropdown-menu">
              <li><a href="/Contabilidade">Relatórios Contábeis</a></li>
              <li><a href="/PrestacaoDeContas">Prestação de Contas</a></li>
              <li><a href="/AtasEEstatutos">Atas e Estatuto</a></li>
              <li><a href="/Certificados">Certificados em Geral</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="/Equipe" className="nav-link">Equipe</a></li>
          <li className="nav-item"><a href="/Projetos" className="nav-link">Projetos</a></li>
          <li className="nav-item"><a href="/Titulos" className="nav-link">Títulos</a></li>
          <li className="nav-item"><a href="/Noticias" className="nav-link">Notícias</a></li>
          <li className="nav-item"><a href="/Contato" className="nav-link">Contato</a></li>
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
          <li className="nav-item"><a href="/">Home</a></li>
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
              <li><a href="/Sobre">Sobre a Associação</a></li>
              <li><a href="/Organograma">Organograma</a></li>
              <li><a href="/PerguntasFrequentes">Perguntas Frequentes</a></li>
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
              <li><a href="/Contabilidade">Relatórios Contábeis</a></li>
              <li><a href="/PrestacaoDeContas">Prestação de Contas</a></li>
              <li><a href="/AtasEEstatutos">Atas e Estatuto</a></li>
              <li><a href="/Certificados">Certificados em Geral</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="/Equipe" className="nav-link">Equipe</a></li>
          <li className="nav-item"><a href="/Projetos" className="nav-link">Projetos</a></li>
          <li className="nav-item"><a href="/Titulos" className="nav-link">Títulos</a></li>
          <li className="nav-item"><a href="/Noticias" className="nav-link">Notícias</a></li>
          <li className="nav-item"><a href="/Contato" className="nav-link">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;