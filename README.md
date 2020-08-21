# Simple NextJs/Semantic UI web application based on BetaSeries API.

This is just a simple project that allowed me to discover and learn new tools. I use this stack:
* React
* Next.js
* SWR
* Semantic UI
* Typescript
* Atomic Design

## Clone

Get the project:
```bash
git clone https://github.com/YassirWu/betaseries-nextjs
```

Copy all the informations from **.env.local.example** to a new file **.env.local** on the root of the application. You need to get a key from [BetaSeries API](https://www.betaseries.com/api/) and set the **.env.local** file
```
NEXT_PUBLIC_BETASERIES_KEY={KeyApi}
```

And run the development server with NPM:
```bash
npm run dev
```
Or with yarn:

```bash
yarn run dev
```

## About this repository

I will continue to update this project and to add new features. You can fork this project if you want to use it as a template, analyze the code or give me some advices (don't hesitate :D)

All the application's data comes from the [API Betaseries](https://www.betaseries.com/api/). 
