# @edgar-treischl/dash-ui

Reusable UI components for Dash, published to GitHub Packages.

## ✨ Features

- **React 19** - Latest React features and performance improvements
- **TypeScript** - Full type support with included definitions
- **Dual Format** - ESM and CommonJS for maximum compatibility
- **Lightweight** - No external dependencies (React is peer dependency)
- **Tree-Shakeable** - Only import what you need
- **Performance Optimized** - Components use memo() to prevent unnecessary re-renders
- **CI/CD Ready** - Automatic publishing to GitHub Packages



## 🚀 Quick Start


### Usage

```typescript
import { BarPlot } from '@edgar-treischl/dash-ui'

export function MyComponent() {
  const data = [
    { type: 'GS' as const, count: 150, percent: 45.2 },
    { type: 'MS' as const, count: 120, percent: 38.7 },
    { type: 'RS' as const, count: 89, percent: 28.5 },
  ]

  return <BarPlot data={data} year="2024/25" />
}
```



## 📦 Installation Options

### Option 1: Direct from GitHub Repository

Install directly from the dash-ui repository:

```bash
# Using pnpm
pnpm add github:edgar-treischl/dash-ui

# Using npm
npm install github:edgar-treischl/dash-ui

# Using yarn
yarn add github:edgar-treischl/dash-ui
```

**Using specific version or branch:**
```bash
# Install from specific branch
pnpm add github:edgar-treischl/dash-ui#main

# Install from specific tag/release
pnpm add github:edgar-treischl/dash-ui#v1.0.0
```

**Update to latest:**
```bash
pnpm update @edgar-treischl/dash-ui
```

---

### Option 2: GitHub Packages Registry

For automated deployments and production installations, use GitHub Packages.

#### Setup (One-time)

1. **Create a Personal Access Token (PAT)** in GitHub:
   - Go to Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Create new token with `read:packages` scope
   - Copy the token

2. **Create `.npmrc` file** in your project root:
   ```
   @edgar-treischl:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   ```

   Or set globally:
   ```bash
   npm config set @edgar-treischl:registry https://npm.pkg.github.com
   npm config set //npm.pkg.github.com/:_authToken YOUR_PERSONAL_ACCESS_TOKEN
   ```


### CI/CD with GitHub Packages

The library automatically publishes to GitHub Packages when you push to `main` **with a commit message containing "release"**.

**To publish a new version:**

1. **Update the version in `package.json`:**
   ```bash
   # Edit package.json and change the version
   # e.g., "version": "1.0.1"
   ```

2. **Commit with "release" keyword:**
   ```bash
   git add package.json
   git commit -m "chore: release v1.0.1"
   git push
   # → Automatically published to GitHub Packages!
   ```

**Any commit message containing "release" will trigger publishing:**
```bash
# All of these will publish:
git commit -m "release: v1.0.1"
git commit -m "feat: update component (release)"
git commit -m "chore: release v1.0.1"
```

---

## 📚 Available Components

### BarPlot

Visualize school retention data with a horizontal bar chart.

**Props:**
```typescript
interface BarPlotProps {
  data: BarData[]      // Array of data points
  year: string         // School year (e.g., "2024/25")
  maxPercent?: number  // Optional: max percentage for scaling
}

interface BarData {
  type: SchoolType     // 'GS' | 'MS' | 'RS' | 'GY' | 'IGS'
  count: number        // Number of students
  percent: number      // Retention percentage
}
```

**Example:**
```typescript
import { BarPlot } from '@edgar-treischl/dash-ui'

function MyComponent() {
  const data = [
    { type: 'GS' as const, count: 150, percent: 45.2 },
    { type: 'MS' as const, count: 120, percent: 38.7 },
    { type: 'RS' as const, count: 89, percent: 28.5 },
  ]

  return <BarPlot data={data} year="2024/25" />
}
```





---





### Stale cache after updates

```bash
# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
pnpm install --force
```

