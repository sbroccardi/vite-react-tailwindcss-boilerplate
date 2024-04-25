# ReactTS 18 with Tailwind CSS, ESLint, Prettier and Vite

This is a [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com) boilerplate to be built with [Vite](https://vitejs.dev). It also includes [ESLint 8](https://eslint.org), [Vitest](https://vitest.dev), [Husky](https://typicode.github.io/husk) and a pre-commit hook that runs `prettier --write` and `eslint --fix`.

## What's inside?

- [Vite](https://vitejs.dev)
- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [ESLint 8](https://eslint.org)
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
  - [typescript-eslint](https://typescript-eslint.io)
  - [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [Tailwind CSS](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/)

## Husky

Workaround for [Node Version Managers and GUIs](https://typicode.github.io/husky/how-to.html#node-version-managers-and-guis)

```sh
# ~/.config/husky/init.sh

export NVM_DIR=~/.nvm

#source $(brew --prefix nvm)/nvm.sh # This loads nvm with brew.sh
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # or this loads nvm

#exit 1 # test hook without committing
```

## ESLint version 9+

- [Tracking: Flat Config support](https://github.com/eslint/eslint/issues/18093)

### Open issues

- [eslint-plugin-react-hooks & "Flat Config" (ESLint 9) #28313](https://github.com/facebook/react/issues/28313)
- [-BUG- Support eslint's new config file (flat) for recommended rules #280](https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280)
