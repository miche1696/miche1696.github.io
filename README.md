# Readme / Dev notes

`npm run dev` starts dev server

About Next.js

- `pages/*` are all the pages
- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
- `_app.js`
- `_document.js`
- `public` folder

About MDX

- general stuff
- LaTex, math
- Codeblock

Note: things are a little messy for mdx, for experimentation purposes

- stuff under pages, such as `pages/test.mdx`, are build through `@next/mdx` plugins specified in `next.config.mjs` (it has to be .mjs in order to import some remark modules that are only available as ESM); styling is done through `<MDXProvider components={MDXComponents}>` in `_app.js`
- stuff under `pages/blog` are using [staic generation with data] (https://nextjs.org/docs/basic-features/pages#static-generation-recommended), which relies on `next-mdx-remote` to do the mdx to html to math converstion and our self defined `MDXComponents` for styling
- in principle if we don't realy on remote data, I can directly write pages under `pages/blog` instead of doing static generation
- right now (12/5/2021), `remark-math` v3 works fine, but v4 and above has breaking changes that would only work with the v2.rc of mdx-js stuff which works with `@next/mdx` but not `next-mdx-remote` (which still depends on v1.6 of mdx-js)

ref https://nextjs.org/blog/markdown

About styling

- `extendTheme` in `_app.js`
- `styles/global.css`
- `styles/Footer.module.css`

ref https://nextjs.org/docs/basic-features/built-in-css-support
ref https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106

Other file organization stuff

- `lib`
- `components`
- `data`

About deployment on Vercel

Resources

- repo to learn from https://github.com/leerob/leerob.io
- course https://masteringnextjs.com/
