# Copilot Instructions for Dash Repository

## Purpose

This monorepo serves two purposes:
1. **Library Development**: Build reusable React UI components in `packages/ui` for consumption by external apps and repositories
2. **Testing & Validation**: Use `apps/playground` to test, develop, and demonstrate library components before publishing

## Workspace Structure

This is a **pnpm monorepo** with the following structure:

- **`packages/ui`** - Reusable React UI component library
  - **Primary purpose**: Exportable component library for external consumption
  - Built with **tsup** for both ESM and CommonJS formats (+ TypeScript definitions)
  - Example components: `BarPlot` for data visualization
  - Main entry point: `src/index.ts` exports all public components
  - Compiled to `dist/` directory for distribution
  - External dependencies (React, React-DOM) are not bundled
  
- **`apps/playground`** - Internal testing & demonstration app
  - **Primary purpose**: Development environment for testing UI components before release
  - Uses React 19 with TypeScript 6
  - Imports components from the local `ui` package via monorepo linking
  - Validates component behavior, styling, and API design

The monorepo is configured via:
- `pnpm-workspace.yaml` - Defines `packages/*` and `apps/*` as workspaces
- Root `package.json` uses pnpm `^11.6.0` (enforced via `devEngines`)

## Build, Test, and Lint Commands

### Development Workflow

```bash
# Start playground app for testing components (with HMR)
cd apps/playground
pnpm dev
# → Navigate to http://localhost:5173 to see components in action
```

### Library Publishing (Testing Before Release)

```bash
# Build UI library → dist/ (ESM + CJS + TypeScript types)
cd packages/ui
pnpm build
# → Output: dist/index.js (ESM), dist/index.cjs (CJS), dist/index.d.ts (types)

# Verify types and no errors
cd apps/playground
pnpm build  # Runs: tsc -b && vite build (type-checks all packages)
```

### Code Quality

```bash
# Lint the playground app (validates all components used in testing)
cd apps/playground
pnpm lint
# → Checks TypeScript, React Hooks, React Refresh rules
```

### Testing Components

Currently, no automated tests are configured. When adding tests:
- Add test files alongside components (e.g., `BarPlot.test.tsx`)
- Use Vitest (TypeScript-native, works with React + Vite)
- Test library components in `packages/ui` before playground usage
- Run from playground after each UI package change to catch regressions

## Architecture & Key Conventions

### Component Structure

1. **UI Components** (in `packages/ui`)
   - Functional components with TypeScript type definitions
   - Use `memo()` for optimization to prevent unnecessary re-renders
   - Props types are defined inline (above the component function)
   - Example: `BarPlot` component with `BarPlotProps` type definition

2. **Configuration & Constants**
   - Shared constants (colors, dimensions, formatters) are centralized in a single file (e.g., `retention.tsx`)
   - Example: `SCHOOL_TYPE_COLORS`, `CHART_WIDTH`, `CHART_HEIGHT`, `CHART_PADDING`
   - Allows consistent styling and easy theme updates

3. **Exports**
   - All public exports go through `src/index.ts`
   - Keep index.ts minimal - only export what should be public

### TypeScript & Type Safety

- **Strict TypeScript** is configured (see `tsconfig.app.json`)
- All React components must have TypeScript types
- Use explicit type annotations for props and return types
- Define types near their usage (inside components or in dedicated type files)

### React & JSX

- React 19 features should be leveraged when appropriate
- Components in the UI library should not depend on specific styling frameworks
- CSS modules or inline styles are acceptable
- Component-level styles should be co-located (e.g., `App.tsx` with `App.css`)

### ESLint Configuration

Linting is applied via flat config in `eslint.config.js` (playground):
- `@eslint/js` recommended rules
- TypeScript ESLint rules (`typescript-eslint`)
- React Hooks rules (`eslint-plugin-react-hooks`)
- React Refresh rules (`eslint-plugin-react-refresh`)
- Ignores: `dist/` directory

Run linting from the playground: `cd apps/playground && pnpm lint`

### Package Management

- **Use pnpm** exclusively (enforced via `devEngines`)
- Install dependencies with `pnpm install`
- Add dependencies: `pnpm add` or `pnpm add -D` (dev)
- The `pnpm-lock.yaml` must be committed; never delete it

## Development Workflow

### Adding New Components to the Library

1. **Create component** → Add to `packages/ui/src/` (e.g., `NewComponent.tsx`)
2. **Define types** → Include TypeScript props types with the component
3. **Export public API** → Add export to `packages/ui/src/index.ts`
4. **Test in playground** → Import in `apps/playground` and verify rendering
5. **Run checks** → Type-check (`pnpm build`) and lint (`pnpm lint`)
6. **Build library** → `cd packages/ui && pnpm build` → Ready for external consumption

### Publishing the Library

1. Ensure `packages/ui/dist/` is clean and contains:
   - `index.js` (ESM)
   - `index.cjs` (CommonJS)
   - `index.d.ts` (TypeScript definitions)
2. Update version in `packages/ui/package.json`
3. Package is ready to publish to npm or consume via git

### Consuming the Library in External Projects

**For external repos:** See [USAGE.md](packages/ui/USAGE.md) for complete installation and import instructions.

**Quick start - Option 1: Direct from GitHub**
```bash
pnpm add github:edgar-treischl/dash-master/packages/ui
```

**Quick start - Option 2: GitHub Packages**
```bash
pnpm add @edgar-treischl/dash-ui
```
(Requires GitHub authentication setup - see USAGE.md)

**Import components in external projects:**
```typescript
// If using GitHub repo URL
import { BarPlot } from 'dash-ui'

// If using GitHub Packages scope
import { BarPlot } from '@edgar-treischl/dash-ui'

<BarPlot data={schoolData} year="2024/25" />
```

**Requirements:**
- React 19+ must be installed in the consuming project (peer dependency)
- Components are typed with TypeScript

## Dependency Management

- **React & React-DOM**: Marked as external in tsup config (not bundled in UI library)
- **Peers**: The UI library expects React 19 to be available in consuming projects
- **DevDependencies**: TypeScript, build tools (Vite, tsup, ESLint) are dev-only
