# 🕒 Ignite Timer

O **Ignite Timer** é uma aplicação de cronômetro de produtividade desenvolvida com **React**, focada na técnica de Pomodoro. O projeto foi construído durante o curso da Rocketseat no Ignite, utilizando tecnologias modernas como **TypeScript**, **Styled Components**, **React Hook Form** e **Context API**.

---

## 📸 Preview

> *Adicione aqui um GIF ou imagem da aplicação rodando, como um print da tela inicial ou da contagem regressiva.*

---

## 🚀 Tecnologias utilizadas

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [React Hook Form](https://react-hook-form.com/)
* [Styled Components](https://styled-components.com/)
* [React Router DOM](https://reactrouter.com/)
* [Phosphor Icons](https://phosphoricons.com/)
* [Zod](https://github.com/colinhacks/zod) para validação de formulário
* [date-fns](https://date-fns.org/) para manipulação de datas

---

## ⚙️ Funcionalidades

* Criar ciclos de tarefas com duração personalizável
* Contagem regressiva com feedback visual
* Interromper um ciclo ativo
* Histórico de ciclos com status:

  * 🟢 Concluído
  * 🔴 Interrompido
  * 🟡 Em andamento
* Persistência do estado no `localStorage` (mesmo após recarregar a página)
* Indicação de tempo decorrido desde o início de cada tarefa

---

## 🧱 Arquitetura

A aplicação é dividida em páginas (`Home` e `History`), com um layout principal (`DefaultLayout`). O gerenciamento do estado dos ciclos é feito com `useReducer` e `Context API`.

* `Home`: onde o usuário inicia ou interrompe um ciclo
* `History`: exibe o histórico completo de ciclos e seus status
* `CycleContext`: provê os dados do estado global
* `reducer`: gerencia as ações como criação, interrupção e finalização de ciclos

---

## 📂 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ignite-timer.git

# Acesse a pasta do projeto
cd ignite-timer

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

> Certifique-se de ter o Node.js e o Vite instalados.

---

## 🧠 Conceitos aprendidos

* Criação e tipagem de contextos em React
* Validação de formulários com Zod + React Hook Form
* Persistência de estado com `localStorage`
* Estilização com Styled Components
* Navegação com React Router v6
* Criação de componentes reutilizáveis com composição de estilos
