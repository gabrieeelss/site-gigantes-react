import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import AtasEEstatutos from '../src/pages/AtasEEstatutos';
import Certificados from '../src/pages/Certificados';
import Contabilidade from '../src/pages/Contabilidade';
import Contato from '../src/pages/Contato';
import Equipe from '../src/pages/Equipe';
import Home from '../src/pages/Home';
import Layout from '../src/pages/Layout';
import NoPage from '../src/pages/NoPage';
import Organograma from '../src/pages/Organograma';
import PerguntasFrequentes from '../src/pages/PerguntasFrequentes';
import PrestacaoDeContas from '../src/pages/PrestacaoDeContas'
import Noticias from '../src/pages/Noticias';
import Projetos from '../src/pages/Projetos';
import Sobre from '../src/pages/Sobre';
import Titulos from '../src/pages/Titulos';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Organograma" element={<Organograma />} />
        <Route path="PerguntasFrequentes" element={<PerguntasFrequentes />} />
        <Route path="Contabilidade" element={<Contabilidade />} />
        <Route path="PrestacaoDeContas" element={<PrestacaoDeContas />} />
        <Route path="AtasEEstatutos" element={<AtasEEstatutos />} />
        <Route path="Certificados" element={<Certificados />} />
        <Route path="Equipe" element={<Equipe />} />
        <Route path="Projetos" element={<Projetos />} />
        <Route path="Titulos" element={<Titulos />} />
        <Route path="Noticias" element={<Noticias />} />
        <Route path="Contato" element={<Contato />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
