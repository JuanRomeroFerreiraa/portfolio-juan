# Portfólio — Juan Romero Ferreira

Portfólio em Next.js (App Router), React e Framer Motion, com layout responsivo e conteúdo baseado no currículo de outubro de 2026. Direção visual inspirada na referência Linearity: https://www.a1.gallery/website/linearity.

## Executar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Produção

```bash
npm run build
npm start
```

## Estrutura

- `app/page.jsx`: conteúdo do portfólio e composição da página.
- `app/layout.jsx`: idioma, metadados e estrutura global.
- `app/globals.css`: visual e regras responsivas.
- `components/motion.jsx`: entrada das seções e movimento da arte, respeitando a preferência por movimento reduzido.
- `components/copy-email.jsx`: botão React com feedback acessível e animação.
- `public/curriculo-juan.pdf`: currículo para download.

O conteúdo é renderizado no servidor. As animações e o botão de copiar e-mail usam componentes de cliente.
