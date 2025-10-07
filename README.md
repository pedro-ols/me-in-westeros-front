# 🗺️👑Me in Westeros👑🗺️

**apos iniciar o repositorio back-end e alimentar o banco

clonar repositorio

apertar npm run dev no terminal# 🏰 Me in Westeros - Frontend

**Me in Westeros** é uma aplicação web interativa que permite aos fãs de Game of Thrones/As Crônicas de Gelo e Fogo explorarem o rico universo de Westeros através de uma interface moderna e imersiva.

## ✨ Funcionalidades

### 🏛️ **Casas Nobres**
- Explore as grandes casas de Westeros
- Informações detalhadas sobre brasões, lemas e história
- Relacionamento com personagens e territórios

### ⚔️ **Personagens**
- Base de dados completa dos personagens principais
- Informações sobre títulos, casas e status
- Cards interativos com biografias detalhadas

### 🏰 **Castelos**
- Fortalezas e palácios icônicos dos Sete Reinos
- Detalhes arquitetônicos e estratégicos
- História e importância de cada fortificação

### 📚 **Livros**
- Coleção completa da saga "As Crônicas de Gelo e Fogo"
- Sinopses, avaliações e informações editoriais
- Sistema de ordenação por volume

### 🗺️ **Funcionalidades Adicionais**
- Timeline interativa dos eventos históricos
- Mapa de Westeros com localização dos castelos
- Sistema de navegação intuitivo
- Páginas de erro 404 temáticas

---

## 🛠️ Tecnologias

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Estilização modular e escopo local
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições

### **Estilização**
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Custom Properties** - Variáveis para temas
- **Animações CSS** - Transições e keyframes
- **Design Responsivo** - Mobile-first approach

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.0 ou superior)
- **npm** ou **yarn**
- **Git**
- **Backend** do projeto rodando ([me-in-westeros-backend](link-do-backend))

---

## ⚙️ Instalação

### 1. **Clone o Repositório**
```bash
git clone https://github.com/pedro-ols/me-in-westeros-front.git
cd me-in-westeros-front
```

### 2. **Instale as Dependências**
```bash
npm install
```

### 3. **Configure o Backend**
⚠️ **IMPORTANTE**: Certifique-se de que o backend esteja rodando em `http://localhost:4000`
*Para iniciar e configurar o back-end, siga as instruções no readme em `https://github.com/pedro-ols/me-in-westeros-back.git`

---

## 🚀 Como Usar

### **Desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:3000**

---

## 🌐 Rotas da Aplicação

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com timeline e mapa |
| `/pages/houses` | Lista de casas nobres |
| `/pages/characters` | Lista de personagens |
| `/pages/castles` | Lista de castelos |
| `/pages/books` | Lista de livros |

---

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o linter
npm run lint:fix     # Corrige problemas do linter automaticamente
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 📋 **Diretrizes de Contribuição**
- Siga os padrões de código existentes
- Adicione testes quando necessário
- Atualize a documentação
- Descreva claramente suas mudanças

---

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](link-para-issues) com:
- Descrição clara do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Ambiente (SO, navegador, versão do Node.js)

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

## 🙏 Agradecimentos

- **George R.R. Martin** - Criador do universo de As Crônicas de Gelo e Fogo
- **HBO** - Pela adaptação Game of Thrones
- **Comunidade Next.js** - Pela excelente documentação
- **Todos os contribuidores** - Que ajudaram a tornar este projeto melhor

---

abrir a rota indicada (localhost:3000) no navegador