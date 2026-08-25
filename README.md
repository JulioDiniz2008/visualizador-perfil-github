# 🔍 Visualizador de Perfil do GitHub

Um aplicativo web interativo, simples e elegante construído com **HTML**, **CSS** e **JavaScript vanilla** (JS puro) para buscar e exibir informações públicas de perfis e repositórios do GitHub utilizando a API oficial.

Este projeto é excelente para praticar conceitos de **consumo de APIs**, **manipulação do DOM (Document Object Model)**, e **programação assíncrona** em JavaScript.

---

## 🚀 Funcionalidades

- 👤 **Busca de Perfil:** Encontre qualquer usuário do GitHub digitando o nome de usuário.
- 📦 **Exibição de Dados:** Veja foto de perfil, nome, bio, número de seguidores e seguindo.
- 📂 **Repositórios Recentes:** Mostra os repositórios mais recentes do usuário diretamente na tela.
- ⚠️ **Validação de Erros:** Alertas amigáveis se o usuário digitar um campo vazio ou se o perfil não existir.

---

## ⚙️ Informações Importantes & Regras de Negócio

Para entender a fundo como a aplicação foi estruturada e quais as principais regras que ela segue:

### 1. Organização do Código (Módulos JavaScript)
O projeto utiliza **Módulos ES6** (`import`/`export`), dividindo as responsabilidades de forma que cada arquivo execute apenas uma tarefa específica (Princípio da Responsabilidade Única):
* **`api.js` (Comunicação externa):** Contém funções exclusivas para fazer as requisições à API do GitHub usando o `fetch` e retornar os dados em formato JSON.
* **`validators.js` (Segurança e Validação):** Analisa as entradas de texto e respostas da API antes de renderizar qualquer informação na tela, evitando erros visuais ou requisições desnecessárias.
* **`ui.js` (Interface com o Usuário):** Gerencia todos os elementos visuais na tela (como carregar o loading, exibir erros através de alertas e injetar o HTML do card de perfil).
* **`index.js` (Controlador Principal):** É o ponto de entrada. Ele escuta as interações do usuário (como o clique no botão) e gerencia o fluxo de dados chamando os outros módulos na sequência correta.

### 2. Validações Implementadas
* **Validação de Input Vazio:** Caso o usuário tente clicar no botão de busca sem digitar nada no campo de texto (ou apenas digitando espaços vazios), a aplicação impede a chamada à API e exibe o alerta: *"Por favor, digite um nome de usuário do Github."*
* **Tratamento de Usuário Inexistente:** Se a API do GitHub retornar um perfil inexistente (erro 404), a aplicação identifica e alerta o usuário: *"Usuário não encontrado. Por favor verifique o nome do usuário e tente novamente."*
* **Tratamento de Erros de Rede/Servidor:** Se houver perda de conexão de internet ou se a API do GitHub estiver fora do ar, o bloco `try...catch` captura a falha e exibe uma mensagem de segurança genérica impedindo que a aplicação quebre ou trave.

### 3. Detalhes Técnicos sobre a Busca de Repositórios
Ao listar os repositórios do usuário pesquisado, o projeto faz um filtro na API do GitHub com dois parâmetros essenciais:
* `per_page=10`: Limita a resposta a no máximo **10 repositórios**, evitando poluição visual na tela.
* `sort=created`: Ordena os repositórios a partir da **data de criação**, mostrando os mais recentes no topo.
* **Exibição de Estatísticas:** Para cada repositório retornado, renderizamos um card contendo:
  - Quantidade de Estrelas (Stars ⭐)
  - Quantidade de bifurcações (Forks 🍴)
  - Quantidade de observadores (Watchers 👀)
  - Linguagem de programação principal utilizada (caso não informada, exibe-se "Não informado")

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização moderna, animações e responsividade (para celulares e computadores).
- **JavaScript (ES6+):** Lógica estruturada em módulos, funções assíncronas (`async`/`await`), arrays (`map` e `join`) e template strings.
- **GitHub API:** API REST oficial utilizada para a consulta de dados públicos.

---

## 📁 Estrutura de Pastas do Projeto

```text
visualizador-perfil-github/
│
├── index.html          # HTML estrutural da aplicação
├── README.md           # Este guia explicativo
│
└── src/                # Diretório do código-fonte
    ├── css/            # Estilos CSS segmentados (reset, estilos gerais, animações, responsividade)
    │
    └── js/             # Código JavaScript modularizado
        ├── api.js      # Comunicação com a API (fetch)
        ├── ui.js       # Manipulação visual e do DOM
        ├── validators.js # Filtros e validações de dados
        └── index.js    # Conexão de eventos e ponto de entrada
```

---

## 🔌 Endpoints da API Utilizados

1. **Dados do Perfil:**
   - **URL:** `https://api.github.com/users/{username}`
   - **Objetivo:** Retorna nome, foto de perfil (avatar), bio, seguidores e quantidade de pessoas seguidas.

2. **Repositórios do Usuário:**
   - **URL:** `https://api.github.com/users/{username}/repos?per_page=10&sort=created`
   - **Objetivo:** Retorna os repositórios públicos ordenados pelos mais novos.

---

## 💻 Como Rodar o Projeto na Sua Máquina

Como este projeto utiliza JavaScript com **módulos ES6** (as linhas que começam com `import` e `export`), abrir o arquivo `index.html` diretamente dando dois cliques no seu computador pode gerar um erro de segurança no navegador (erro de CORS). 

Para rodar o projeto corretamente, siga um dos passos simples abaixo:

### Opção 1: Usando o VS Code (Mais Recomendada)
1. Abra a pasta do projeto no seu **Visual Studio Code**.
2. Vá até a aba de **Extensões** (ícone de bloquinhos na lateral esquerda ou pressione `Ctrl + Shift + X`).
3. Pesquise por **Live Server** e clique em **Instalar** (desenvolvido por *Ritwick Dey*).
4. Depois de instalar, abra o arquivo `index.html`.
5. Clique no botão **"Go Live"** que aparece no canto inferior direito do VS Code.
6. O projeto abrirá automaticamente no seu navegador padrão!

### Opção 2: Usando o Terminal (Com Node.js)
Se você já tiver o Node.js instalado, você pode usar um servidor rápido executando o comando abaixo na pasta do projeto:

```bash
npx serve .
```
Depois, basta abrir o endereço que aparecer no terminal (geralmente `http://localhost:3000` ou similar).