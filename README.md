# 🏋️ PrimeFit Gym

Landing page moderna e responsiva para academias, desenvolvida com **React + Vite**, focada em performance, organização de código e boas práticas de front‑end.

O projeto foi pensado como **portfólio profissional**, aplicando conceitos reais de mercado como design system, separação por seções, componentes reutilizáveis e animações suaves.

---

## ✨ Preview

> Projeto em desenvolvimento ativo 🚧

Landing page com:

- Hero com banner e CTA
- Features animadas
- Seção de oferta
- About institucional
- Formulário de contato
- Navbar responsiva com menu hamburguer

---

## 🧠 Arquitetura do Projeto

O projeto segue uma separação clara entre **componentes reutilizáveis**, **seções da página** e **telas (pages)**.

```bash
src/
├─ assets/            # Imagens e ícones
│
├─ components/        # Componentes reutilizáveis
│  ├─ Navbar/
│  ├─ FeatureBox/
│  └─ Button/ (futuro)
│
├─ sections/          # Seções da landing page
│  ├─ Hero/
│  ├─ Features/
│  ├─ Offer/
│  ├─ About/
│  └─ Contact/
│
├─ pages/             # Telas
│  └─ Home.jsx
│
├─ styles/            # Design system e estilos globais
│  └─ index.css
│
├─ App.jsx
└─ main.jsx
```

### 📌 Conceitos aplicados

- Separation of Concerns
- Componentização consciente (nem tudo vira componente)
- Design System com CSS Variables
- Mobile First
- Código legível e escalável

---

## 🎨 Design System

O projeto utiliza um **design system centralizado** em CSS Variables:

- Cores semânticas
- Espaçamentos padronizados
- Tipografia consistente
- Botões reutilizáveis
- Sombras e efeitos de hover

Exemplo:

```css
:root {
  --color-primary: #ff1414;
  --color-bg: #000000;
  --space-md: 2rem;
  --radius-sm: 6px;
}
```

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 CSS moderno (Design System)
- 🧭 React Scroll
- 📱 Responsividade (Mobile / Desktop)

---

## ▶️ Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/robsonmonteirolacerda/primefit-gym.git

# Entrar no projeto
cd primefit-gym

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

---

## 📈 Próximos Passos

- [ ] Criar componente Button reutilizável
- [ ] Melhorar acessibilidade (ARIA / contrastes)
- [ ] Animações com Intersection Observer
- [ ] Versão multi‑página
- [ ] Deploy

---

## 👨‍💻 Autor

Desenvolvido por **Robson Monteiro**

- GitHub: [https://github.com/robsonmonteirolacerda](https://github.com/robsonmonteirolacerda)

---

⭐ Se este projeto te ajudou ou te inspirou, considere deixar uma estrela!
