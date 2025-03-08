# next 15 with redoc


to initital project

follow there docs:

- https://redocly.com/docs/redoc/deployment/react
- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

add yaml.d.ts to ignore typescript

add config to next.config.ts

```typescript
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    })
    return config
  }
}
```

add `output` cause we will export to static sie when execute next build will got directory out we can directly upload out directory to static host

add `trailingSlash` cause end with slash when visit our static site url

add `webpack` to use import file type yaml in component need to install package `yaml-loader` in dev dependencies

to create new spec page

- create a new file page.tsx in page router directory which you want
- write a file yaml spec format openapi in directory src/specs
- import file spec to page router

to run this app, use node version in .nvmrc then install and run with following command

```bash
nvm use
npm install
npm run dev
```

to export to static file

```bash
npm run build
```

nextjs will generate directory out, we can use this directory to static host

> you can use vscode extention name Live Server to test your static site
> open folder out in your vscode and run this Live Server
