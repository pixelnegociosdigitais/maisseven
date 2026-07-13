# Site +Seven — Versão 1

Primeira implementação funcional da página inicial, criada em React, TypeScript e Vite, com CSS personalizado para maior fidelidade ao layout aprovado.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:4173`.

## Gerar versão de produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`.

## Abrir no Antigravity

1. Extraia o projeto.
2. Abra a pasta como workspace.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Use `design-references/home-aprovada.png` para comparação visual.

## Conteúdo editável

Os textos principais estão em:

`src/content/site-content.json`

As imagens estão em:

`public/assets/images/`

Os arquivos oficiais de marca estão em:

`public/assets/brand/`

## Observações

- A fonte Garet não está incluída. Insira o arquivo licenciado e configure `@font-face` em `src/styles/global.css`.
- Os números não comprovados do mockup visual foram removidos.
- O e-mail configurado é `contato@maisseven.com.br` e o WhatsApp é `(54) 98111-2788`.
- Esta versão implementa a página inicial. As páginas internas serão adicionadas após a validação visual desta etapa.
