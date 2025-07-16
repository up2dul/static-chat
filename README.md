![App screenshot](/public/screenshot.png)

> ℹ️ A simple static chat UI application

> 🌐 Shipped on [Netlify](https://netlify.com). Live Preview: [https://ssachat.netlify.app](https://ssachat.netlify.app)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Clone the Repository](#2-clone-the-repository)
  - [3. Installation](#3-installation)
- [Usage](#usage)
  - [Start the development server](#start-the-development-server)

## Technologies

Some of the technologies used in this project:
- 🟩 [Vue 3](https://vuejs.org) - The Progressive JavaScript Framework 
- ⚡ [Vite](https://vitejs.dev) — The frontend tooling
- 📦 [Vue Router](https://router.vuejs.org) — Expressive, configurable and convenient routing for Vue.js
- 💨 [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS framework
- 🔷 [TypeScript](https://typescriptlang.org) — A typed superset of JavaScript
- 🍍 [Pinia](https://pinia.vuejs.org/) — The intuitive store for Vue.js

Some additional development tools:
- 📝 [Biome](https://biomejs.dev) — Code formatter and linter
- 🔤 [Commitlint](https://commitlint.js.org) — Make sure the commit messages are well formatted
- 🐶 [Husky](https://typicode.github.io/husky) — A git hooks
- 📋 [Lint Staged](https://github.com/lint-staged/lint-staged) — Running some scripts before committing

## Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org) `>=18.x`
- [Bun](https://bun.com) `>=1.x` (recommended as the package manager)

### 2. Clone the Repository

```bash
git clone https://github.com/up2dul/static-chat.git

# or if using ssh
git clone git@github.com:up2dul/static-chat.git
```

### 3. Installation

Go to the project directory and install dependencies
```bash
# Go to the project directory
cd login-prototype

# Install dependencies
bun install
```

## Usage

### Start the development server

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
