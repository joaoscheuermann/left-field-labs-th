# Left Field Labs TH

This repository contains the source code for the Left Field Labs Take Home assignment. It is a monorepo workspace managed by [Nx](https://nx.dev).

## Project Structure

- **apps/web/app**: The main React application (`@org/app`).
- **packages/design-system**: The shared design system library.

## Prerequisites

- Node.js (v20 or later recommended)
- npm

## Setup

1. Clone the repository.
2. Install dependencies:

```sh
npm install
```

## Running the Application

To start the development server for the web application:

```sh
npx nx serve @org/app
```

The application will be available at `http://localhost:4200` (or the port specified in the console).

## Building

To build the application for production:

```sh
npx nx build @org/app
```

The build artifacts will be stored in the `dist/` directory.

## Linting

To lint the workspace:

```sh
npx nx run-many -t lint
```

## Useful Nx Commands

- `npx nx graph`: Visualizes the dependency graph of the projects.
- `npx nx run-many -t build`: Builds all projects.

## Architecture Decision

I chose a Monorepo architecture (using Nx) for this project to demonstrate how to build scalable, professional-grade systems.

### Why this structure?

- **Separation of Concerns**: I've split the codebase into `apps/web/app` (Application Logic) and `packages/design-system` (UI Library). This decoupling ensures that business logic doesn't leak into presentation components.
- **Scalability**: This structure allows for easily adding new applications (e.g., an admin portal) that can instantly consume the shared design system, ensuring consistency across products.
- **Developer Experience**: Nx provides modern tooling like computation caching and a unified configuration for linting and building, which streamlines the development workflow.

While there is some initial boilerplate complexity, this approach simulates a real-world production environment and enforces strict module boundaries, preventing "spaghetti code" as the project grows.

## Design System Decisions

I adopted **Atomic Design** principles and a **Composition-based** approach for the component library (`packages/design-system`).

### Atomic Design

The design system is structured into a mental model that mimics chemistry:

- **Atoms**: Basic building blocks (e.g., Buttons, Inputs, Icons).
- **Molecules**: Simple groups of UI elements (e.g., Search Bar).
- **Organisms**: Complex UI sections (e.g., Transaction List).
- **Layouts**: macro-level page structures.

**Rationale**: This hierarchy ensures a clean separation of complexity and allows for assembling complex features from robust, tested primitives.

### Composition over Inheritance

I prioritized **Composition** for building components. Instead of creating rigid components with dozens of configuration props, components are designed to be flexible containers.

**Rationale**:

- **Inversion of Control**: The parent component decides the content, not the child.
- **Flexibility**: It prevents "Prop Drilling" and makes components easier to extend without modifying their internal logic.
- **Maintainability**: Components remain focused on a single responsibility.
