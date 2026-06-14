# dash-ui

Reusable React UI components for school data visualization.

## Quick Start

```bash
# Install from GitHub
pnpm add github:edgar-treischl/dash-master/packages/ui

# Or from GitHub Packages (requires authentication)
pnpm add @edgar-treischl/dash-ui
```

```typescript
import { BarPlot } from 'dash-ui'

<BarPlot 
  data={[
    { type: 'GS', count: 150, percent: 45.2 },
    { type: 'MS', count: 120, percent: 38.7 },
  ]} 
  year="2024/25" 
/>
```

## Components

- **BarPlot** - Horizontal bar chart for school retention data visualization

## Installation & Usage

See [USAGE.md](./USAGE.md) for detailed installation instructions and component documentation.

## Features

- ✅ Built with React 19
- ✅ Full TypeScript support with types included
- ✅ ESM and CommonJS formats
- ✅ Lightweight with no external dependencies (except React)
- ✅ Tree-shakeable
- ✅ Optimized with memo() for performance

## Requirements

- React 19.0+
- React-DOM 19.0+

## License

ISC
