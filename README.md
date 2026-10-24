# Knowledge Hub — Next.js Frontend

Web app for **Knowledge Hub**, a personal bookmark and learning-resource manager. Users organise resources (articles, videos, PDFs, websites) into collections and label them with tags.

It is designed to work with any of the three backends that implement the same API:

| Backend | Default URL |
|---|---|
| [ASP.NET Core](https://github.com/lahiru1115/knowledge-hub-dotnet-backend) | `http://localhost:5113/api` |
| [FastAPI](https://github.com/lahiru1115/knowledge-hub-fastapi-backend) | `http://localhost:8000/api` |
| [Spring Boot](https://github.com/lahiru1115/knowledge-hub-spring-boot-backend) | `http://localhost:8080/api` |

> **Status:** only the FastAPI backend works with the frontend today. The .NET and Spring backends are being aligned to the same contract (cookie auth, snake_case JSON, CORS).

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- TanStack Query for server state, Zustand for client state, axios
- React Hook Form + Zod
- Tailwind CSS 4 and shadcn/ui (Base UI)

## Features

- Register and log in; protected routes through `proxy.ts`
- Collections: list and create
- Collection detail: list, create, edit and delete resources, with tag selection
- Tags: list and create

## Getting started

**Prerequisites:** Node.js 20+ and one backend running.

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to the backend you want (see the table above).
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000.

## Project structure

```
app/          Routes: auth pages and the (app) group (dashboard, collections, resources, tags)
components/   Feature components and shadcn/ui primitives
hooks/        TanStack Query hooks
services/     API calls (axios)
lib/          axios instance, query client, Zod validators
store/        Zustand stores
types/        Shared TypeScript types
```
