This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Known issues

- [Hot reload sometimes hangs](https://github.com/vercel/next.js/issues/10061)

## Testing

Cypress is used for all testing, to keep the amount of test writing as low as possible.

### Best practices

Inspiration can be watched from [this youtube video](https://www.youtube.com/watch?v=5XQOK0v_YRE)

Short summary:

- Create test files based on (shared) components and pages
- Create a folder structure as follows:

```cli
articles\
    article_details.spec.ts
    article_new.spec.ts
    articles_list.spec.ts
author\
    author_details_spec.ts
shared\
    header_spec.ts
user\
    login.spec.ts
    register.spec.ts
    settings.spec.ts
```

- ![](cypress/readme/user-handling-cypress.png)

### Authentication in Cypress

Authentication command is inspired from [cypress-keycloak](https://github.com/babangsund/cypress-keycloak). It is pretty slow though

## Authentication

[Keycloak](https://github.com/react-keycloak/react-keycloak#readme) is used for authentication.

See the examples [here](https://github.com/react-keycloak/react-keycloak-examples/blob/master/examples/nextjs-app/pages/_app.tsx)
