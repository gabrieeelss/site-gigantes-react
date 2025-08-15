# Projeto AECS Gigantes – Site Institucional

Este é o repositório do site institucional da Associação de Esportes e Cultura Superação "Gigantes", desenvolvido em [React](https://react.dev/) com [Vite](https://vitejs.dev/).

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [Deploy (Vercel)](#deploy-vercel)
- [Contato](#contato)

---

## Visão Geral

O site apresenta informações institucionais, notícias, prestação de contas, projetos, títulos, equipe, perguntas frequentes e canais de contato da AECS Gigantes, promovendo transparência e divulgação do Rugby em Cadeira de Rodas.

## Funcionalidades

- **Página inicial** com carrossel de imagens, resumo institucional e últimas notícias.
- **Sobre**: história, missão, essência e estrutura da associação.
- **Organograma**: diretoria e conselho fiscal.
- **Perguntas Frequentes**: dúvidas comuns sobre o projeto.
- **Equipe**: carrossel de atletas e profissionais.
- **Projetos**: documentos de projetos apoiados (FIEC, CBCP, Lei Federal).
- **Prestação de Contas**: relatórios por categoria.
- **Contabilidade**: DRE e Balanço Patrimonial por ano.
- **Atas e Estatuto**: documentos institucionais.
- **Certificados**: certidões e comprovantes.
- **Títulos**: linha do tempo dos títulos conquistados.
- **Notícias**: listagem e modal de notícias.
- **Contato**: formulário, endereços e mapa.
- **Botão flutuante do WhatsApp**.

## Estrutura de Pastas

```
├── public/
│   ├── arquivos/           # PDFs e documentos institucionais
│   ├── img/                # Imagens do site
│   └── json/               # Dados em JSON (notícias, títulos, projetos, etc)
├── src/
│   ├── assets/             # (opcional) Imagens e recursos estáticos
│   ├── components/         # Componentes reutilizáveis (Menu, Rodape, Banner, etc)
│   ├── pages/              # Páginas principais do site
│   ├── App.jsx             # Definição das rotas
│   └── main.jsx            # Ponto de entrada da aplicação
├── index.html              # HTML principal
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
└── vercel.json             # Configuração de deploy na Vercel
```

## Como rodar o projeto

1. **Pré-requisitos**:  
   - Node.js 18+  
   - npm 9+ (ou yarn/pnpm)

2. **Instale as dependências**:
   ```sh
   npm install
   ```

3. **Execute em modo desenvolvimento**:
   ```sh
   npm run dev
   ```
   O site estará disponível em `http://localhost:5173`.

4. **Build para produção**:
   ```sh
   npm run build
   ```

5. **Preview do build**:
   ```sh
   npm run preview
   ```

## Scripts disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento.
- `npm run build` – Gera os arquivos otimizados para produção.
- `npm run preview` – Visualiza o build localmente.
- `npm run lint` – Executa o ESLint.

## Deploy (Vercel)

O projeto está pronto para deploy na [Vercel](https://vercel.com/).  
O arquivo [`vercel.json`](vercel.json) garante que todas as rotas sejam redirecionadas para o `index.html`, permitindo o uso do React Router no modo SPA.

## Contato

Dúvidas, sugestões ou problemas?  
Entre em contato pelo e-mail: [aecsgigantes@gmail.com](mailto:aecsgigantes@gmail.com) ou pelo WhatsApp: [(19) 99748-7329](https://wa.me/5519997487329).

---

**AECS Gigantes – Rugby em Cadeira de Rodas**
