# Site +Seven — Versão 2 completa

Implementação funcional em React, TypeScript e Vite, com cinco páginas responsivas e identidade visual consistente com os materiais aprovados da +Seven.

## Páginas

- `/` — Início
- `/solucoes` — Soluções
- `/sobre` — Sobre
- `/conteudos` — Conteúdos
- `/contato` — Contato

## Executar localmente

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local no terminal.

## Gerar versão de produção

```bash
npm run build
```

Os arquivos finais serão gerados em `dist/`.

## Abrir no Google Antigravity

1. Extraia o projeto.
2. Abra a pasta `plusseven-site-v2` como workspace.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Compare cada página com os arquivos da pasta `design-references/`.

## Conteúdo editável

- Textos principais: `src/content/site-content.json`
- Páginas: `src/pages/`
- Componentes reutilizáveis: `src/components/`
- Estilos e responsividade: `src/styles/global.css`
- Imagens: `public/assets/images/`
- Identidade oficial: `public/assets/brand/`

## Hospedagem na Hostinger

Após `npm run build`, envie o conteúdo de `dist/` para `public_html`.
O arquivo `.htaccess` incluído mantém as rotas internas funcionando ao atualizar o navegador.

## Pontos que exigem integração posterior

- O formulário de contato está implementado visualmente, mas precisa ser conectado a PHP, serviço de e-mail ou API.
- A newsletter precisa de endpoint ou plataforma de automação.
- Os links de artigos são demonstrativos e podem ser conectados a páginas, CMS ou arquivos reais.
- A fonte Garet não está incluída por questões de licenciamento. O projeto utiliza fallbacks compatíveis.

## Dados configurados

- WhatsApp: `(54) 98111-2788`
- E-mail: `contato@maisseven.com.br`
- Instagram: `@maisseven`
