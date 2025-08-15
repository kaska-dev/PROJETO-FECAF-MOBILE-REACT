📱 PROJETO FECAF MOBILE (React Native + Expo)
📋 Descrição

Este projeto é um aplicativo móvel desenvolvido em React Native utilizando o Expo e Expo Router para navegação.
Ele foi criado como parte do projeto FECAF, integrando funcionalidades como autenticação e listagem de produtos.
A aplicação segue uma arquitetura modular, separando rotas públicas (login) e rotas autenticadas.

🚀 Tecnologias Utilizadas

React Native 0.79.5

Expo ~53.0.20

Expo Router ~5.1.4

React Navigation (bottom-tabs, native, elements)

Axios para chamadas HTTP

Async Storage para armazenamento local

React Native WebView

Express (possivelmente para backend embutido ou integração local)

React Icons & Vector Icons

Expo Haptics, Blur, Fonts, StatusBar, Web Browser e outras libs de UI

📂 Estrutura de Pastas
app/
 ├── _layout.tsx              # Layout global
 ├── (auth)/                  # Rotas públicas
 │    ├── _layout.tsx
 │    └── login.tsx
 ├── (app)/                   # Rotas privadas
 │    ├── products/
 │    │     ├── _layout.tsx
 │    │     ├── home.tsx
 │    │     └── configuracoes.tsx
assets/
 └── images/                  # Ícones e imagens

⚙️ Scripts Disponíveis
Comando	Descrição
npm start	Inicia o projeto no modo Expo
npm run android	Inicia no emulador/dispositivo Android
npm run ios	Inicia no simulador iOS
npm run web	Executa no navegador
npm run lint	Executa verificação de código
npm run reset-project	Reseta o projeto para estado inicial
🔧 Como Rodar o Projeto

Clonar o repositório

git clone <url-do-repositorio>
cd PROJETO-FECAF-MOBILE-REACT


Instalar dependências

npm install


Executar no Expo

npm start


Executar no Android/iOS/Web

npm run android
npm run ios
npm run web

📌 Funcionalidades Principais

Login de usuário

Navegação com abas

Listagem de produtos

Integração com API via Axios

Armazenamento local com AsyncStorage

Suporte multiplataforma (Android, iOS e Web)

🛠 Requisitos

Node.js >= 18

Expo CLI
Instalar globalmente:

npm install -g expo-cli
