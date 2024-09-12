# Module Federation Project
Este projeto utiliza Module Federation para criar uma arquitetura de microfrontends, com um host/shell em Angular e remotes em Angular, Angular 13, React e Vue.

## 📂 Estrutura do Projeto

- **mfe-host:** Aplicativo Angular que atua como o host/shell principal (http://localhost:4200/).
- **mfe1-angular:** Microfrontend em Angular em versão compatível com host (http://localhost:4201/).
- **mfe2-angular13:** Microfrontend em Angular 13 (http://localhost:4202/).
- **mfe3-react:** Microfrontend em React (http://localhost:4203/).
- **mfe4-vue:** Microfrontend em Vue (http://localhost:4204/).

## ⚙️ Configuração Inicial
Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1️⃣ Baixar Dependências
Para baixar as dependências de todos os projetos ao mesmo tempo, execute o seguinte comando:

```bash
npm run deps:all
```

Esse comando irá executar npm install em cada um dos microfrontends e no host, garantindo que todas as dependências sejam instaladas corretamente.

### 2️⃣ Iniciar Todos os Projetos
Para iniciar todos os microfrontends e o host ao mesmo tempo, execute:

```bash
npm run start:all
```
Esse comando irá iniciar o host e todos os remotes em paralelo, permitindo que você acesse e interaja com toda a aplicação.

## 📦 Instalar Dependências Individuais
Para instalar as dependências do host:

```bash
npm run deps:host
```

Para instalar as dependências de um remote específico:

```bash
npm run deps:mfe1-angular
npm run deps:mfe2-angular13
npm run deps:mfe3-react
npm run deps:mfe4-vue
```

## ▶️ Iniciar Projetos Individualmente
Para iniciar o host:

```bash
npm run start:host
```

Para iniciar um remote específico:

```bash
npm run start:mfe1-angular
npm run start:mfe2-angular13
npm run start:mfe3-react
npm run start:mfe4-vue
```

## 💻 Desenvolvimento
Este projeto é configurado para o desenvolvimento em paralelo de múltiplos microfrontends, utilizando o poder do Module Federation para integrar diferentes tecnologias em uma única aplicação.

