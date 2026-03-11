# Your Turn!

A responsive React application built with Vite, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Runtime / Package Manager** — [Bun](https://bun.sh)
- **Build Tool** — [Vite](https://vite.dev)
- **UI Framework** — [React](https://react.dev)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com)
- **Component Library** — [shadcn/ui](https://ui.shadcn.com)
- **Icons** — [Lucide](https://lucide.dev)

## Prerequisites

- [Bun](https://bun.sh) v1.0 or later

## Setup

```bash
git clone <repo-url>
cd yourturn
bun install
```

## Development

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
bun run build
bun run preview
```

## Adding shadcn Components

```bash
bunx shadcn@latest add <component-name>
```

## Project Structure

```
src/
├── components/     # shadcn/ui and custom components
├── data/
│   └── mock.js     # Mock data (no backend)
├── lib/
│   └── utils.js    # Utility functions (cn, etc.)
├── App.jsx
├── main.jsx
└── index.css       # Tailwind + theme configuration
```
