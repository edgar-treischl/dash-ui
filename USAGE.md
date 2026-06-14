# Using @edgar-treischl/dash-ui Components

This guide explains how to import `@edgar-treischl/dash-ui` components in your external project.

## Installation Options

### Option 1: Direct from GitHub Repository (Quick Development)

Install directly from the dash-ui repository:

```bash
# Using pnpm
pnpm add github:edgar-treischl/dash-ui

# Using npm
npm install github:edgar-treischl/dash-ui

# Using yarn
yarn add github:edgar-treischl/dash-ui
```

**Import components:**
```typescript
import { BarPlot } from 'dash-ui'

<BarPlot data={schoolData} year="2024/25" />
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
pnpm update dash-ui
```

---

### Option 2: GitHub Packages Registry (Recommended for CI/CD)

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

#### Install from GitHub Packages

```bash
pnpm add @edgar-treischl/dash-ui
```

**Import components:**
```typescript
import { BarPlot } from '@edgar-treischl/dash-ui'

<BarPlot data={schoolData} year="2024/25" />
```


---

### CI/CD with GitHub Packages

The library automatically publishes to GitHub Packages on every push to `main` and on version tags.

**Automatic publishing:**
- **On push to main**: Pre-release version (e.g., `1.0.0-main`)
- **On version tag** (e.g., `v1.0.1`): Stable release (e.g., `1.0.1`)

To publish a new release:
```bash
# 1. Update version in package.json
# 2. Create and push a git tag
git tag v1.0.1
git push origin v1.0.1
# → Automatically published to GitHub Packages!
```

---

## Available Components

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
import { BarPlot } from 'dash-ui'

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

## Supported School Types

- **GS** - Grundschulen (Primary Schools)
- **MS** - Mittelschulen (Middle Schools)
- **RS** - Realschulen (Secondary Schools)
- **GY** - Gymnasien (Gymnasia)
- **IGS** - Integrierte Gesamtschulen (Integrated Comprehensive Schools)

---

## Requirements

- **React 19.0+** (peer dependency - must be installed in your project)
- **React-DOM 19.0+**

---

## Troubleshooting

### "Module not found" error

**Solution:** Ensure React 19+ is installed:
```bash
pnpm add react@^19.0.0 react-dom@^19.0.0
```

### GitHub Packages authentication fails

**Solutions:**
1. Verify your Personal Access Token (PAT) has `read:packages` scope
2. Check `.npmrc` has correct token and registry URL
3. Ensure username is correct: `@edgar-treischl` (not `@edgar` or `@dash-master`)

### Stale cache after updates

```bash
# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
pnpm install --force
```

---

## Getting Updates

To receive updates when new components are released:

**Check latest version:**
```bash
# From GitHub Packages
npm view @edgar-treischl/dash-ui@latest version

# Or manually check: https://github.com/edgar-treischl/dash-ui/releases
```

**Update to latest:**
```bash
pnpm update @edgar-treischl/dash-ui@latest
```

---

## Development

To contribute improvements or report issues:

1. Fork the [dash-ui repository](https://github.com/edgar-treischl/dash-ui)
2. Create a feature branch
3. Make changes in `src/`
4. Test in `examples/playground` (run `pnpm dev`)
5. Submit a pull request

See [CONTRIBUTING](CONTRIBUTING.md) for detailed guidelines.
