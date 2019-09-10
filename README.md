# Angular Online Sep. 2019 Demo

This repo was built to support a talk I gave on Utilizing the Power of GraphQL in an Angular App.

Listen to the talk [here](https://www.youtube.com/watch?v=5DyKKLiLsK0&app=desktop).

Check out the slides [here](https://docs.google.com/presentation/d/1r_7_c7E2Gzo-mlbb0OGZbHCNt74nu5o0ss5zVREf4jk/edit?usp=sharing)

The app itself is very simple - it is a monorepo built using the `Nx` framework;
there is a `NestJs` API that utilizes a `in-memory` lib to expose `User` data to the consuming client by
exposing a `GraphQL` API. The client is an `Angular` app that utilizes the `apollo-angular` lib to consume data from this API.

## Nx MonoRepo

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

### Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Running

Running just the API:

```bash
ng server api
```

Running just the app:

```bash
ng server angular-online-sep2019-demo
```

Running _both_ the API and the App in parallel:

```bash
ng run angular-online-sep2019-demo:serve-with-api
```

### GraphQL Playground

Once the API is running, visit `http://localhost:3001/graphql` to view the GraphQL Playground
which will give you access to the schema with data types, queries, and mutations.
