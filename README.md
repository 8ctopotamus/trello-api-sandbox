# Trello API Sandbox

## TODO

* [ ] Integrate with more than one board
* [ ] Assign Trello cards to a Deal
* [ ] Tracking cards as they move across the board
* [ ] Add Comments to the card
* [ ] Can we assign a Note Type (an enumeration we'll add to support the new Notes table) based upon which board the card came from?
import mongoose from 'mongoose'

## Notes

* https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/
* https://dev.to/raphaelchaula/adding-mongodb-mongoose-to-next-js-apis-3af

## Setup

Create a `.env.local` file in the root of the project.

```
ORIGIN=http://localhost:3000
TRELLO_API_KEY=
TRELLO_API_SECRET=
TRELLO_API_TOKEN=
```

Create a Trello Power-up to [get an API Key, Secret, and token](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/).

---

## NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
