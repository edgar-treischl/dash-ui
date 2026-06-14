# Cleaning Up Storybook from dash-master

This guide shows you how to remove Storybook files from the dash-master repository now that Storybook has been moved to the separate dash-storybook repository.

## Quick Checklist

- [ ] Remove `.storybook/` directory
- [ ] Remove all `*.stories.tsx` files
- [ ] Remove `src/Introduction.mdx`
- [ ] Remove `src/docs/` directory
- [ ] Remove `storybook-static/` (if exists)
- [ ] Remove `public/` directory (optional)
- [ ] Update `package.json` - remove Storybook scripts
- [ ] Update `package.json` - remove Storybook devDependencies
- [ ] Reinstall dependencies: `pnpm install`
- [ ] Test build: `pnpm build`

## Overview

The dash-master repository should focus solely on the component library code. All Storybook-related files, stories, and documentation have been moved to dash-storybook.

## Files and Directories to Remove

### 1. Storybook Configuration Directory

```bash
cd /path/to/dash-master/packages/ui
rm -rf .storybook/
```

This removes:
- `.storybook/main.ts`
- `.storybook/manager.ts`
- `.storybook/preview.ts`

### 2. Story Files

Remove all `*.stories.tsx` files throughout the source code:

```bash
cd /path/to/dash-master/packages/ui/src

# Remove story files
rm -f BarPlot/BarPlot.stories.tsx
rm -f Selector/YearSelect.stories.tsx
rm -f Icons/SelectIcon.stories.tsx
```

Or use find to remove all at once:

```bash
cd /path/to/dash-master/packages/ui/src
find . -name "*.stories.tsx" -delete
```

### 3. Documentation Files

Remove MDX documentation files:

```bash
cd /path/to/dash-master/packages/ui/src

# Remove introduction
rm -f Introduction.mdx

# Remove docs folder
rm -rf docs/
```




### 5. Storybook Build Output

Remove any storybook build artifacts:

```bash
cd /path/to/dash-master/packages/ui
rm -rf storybook-static/
```

### 6. Update package.json

Remove Storybook-related scripts and dependencies:

**Edit `packages/ui/package.json`:**

**Remove these scripts:**
```json
"storybook": "storybook dev -p 6006",
"storybook:build": "storybook build",
```

**Remove these devDependencies:**
```json
"@storybook/addon-essentials": "^8.6.18",
"@storybook/addon-interactions": "^8.6.18",
"@storybook/react": "^8.6.18",
"@storybook/react-vite": "^8.6.18",
"storybook": "^8.6.18",
"vite": "^8.0.16"
```

**Keep these (needed for the component library):**
- `tsup` - For building the library
- `typescript` - For type checking
- `@types/react` - For React types
- `react` and `react-dom` - Peer dependencies

### 7. Update .gitignore (Optional)

If your `.gitignore` has Storybook-specific entries, you can remove them:

```bash
# Remove these lines if they exist
storybook-static/
.storybook/
```

### 8. Clean Node Modules

After updating `package.json`, reinstall dependencies:

```bash
cd /path/to/dash-master/packages/ui
rm -rf node_modules
pnpm install
```

## Complete Cleanup Script

For convenience, here's a script that does everything at once:

```bash
#!/bin/bash
# Run from dash-master root directory

cd packages/ui

echo "Removing Storybook configuration..."
rm -rf .storybook/

echo "Removing story files..."
find src -name "*.stories.tsx" -delete

echo "Removing documentation files..."
rm -f src/Introduction.mdx
rm -rf src/docs/

echo "Removing Storybook build output..."
rm -rf storybook-static/

echo "Removing public assets (optional - comment out if needed)..."
# rm -rf public/

echo "✓ Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Edit packages/ui/package.json to remove Storybook scripts and dependencies"
echo "2. Run: rm -rf node_modules && pnpm install"
echo "3. Test the build: pnpm build"
echo "4. Commit the changes"
```

## What to Keep

The following should remain in dash-master:

✅ **Keep:**
- `src/` - All component source code (`.tsx`, `.ts`, `.css` files)
- `src/index.ts` - Main export file
- `tsup.config.ts` - Build configuration
- `package.json` - Updated without Storybook dependencies
- `tsconfig.json` - TypeScript configuration
- `dist/` - Built library output (after running `pnpm build`)

## Verification

After cleanup, your `packages/ui/` directory should look like:

```
packages/ui/
├── src/
│   ├── BarPlot/
│   │   └── BarPlot.tsx          ✅ Keep
│   ├── Selector/
│   │   ├── YearSelect.tsx       ✅ Keep
│   │   └── YearSelect.css       ✅ Keep
│   ├── Icons/
│   │   ├── SelectIcon.tsx       ✅ Keep
│   │   └── SelectIcon.css       ✅ Keep
│   ├── retention.tsx            ✅ Keep
│   └── index.ts                 ✅ Keep
├── dist/                        ✅ Keep (generated)
├── package.json                 ✅ Keep (updated)
├── tsconfig.json                ✅ Keep
└── tsup.config.ts               ✅ Keep
```

## Testing After Cleanup

```bash
# Test that the library still builds correctly
cd packages/ui
pnpm build

# Verify output
ls -la dist/
# Should show: index.js, index.cjs, index.css, index.d.ts, index.d.cts
```

## Update dash-storybook

After cleaning up dash-master, update the storybook repo:

```bash
cd /path/to/dash-storybook
pnpm update-components
```

This ensures the storybook still works with the cleaned-up library.

## Summary

✅ **Removed from dash-master:**
- Storybook configuration (`.storybook/`)
- All story files (`*.stories.tsx`)
- Documentation files (`*.mdx`, `docs/`)
- Storybook build output (`storybook-static/`)
- Storybook dependencies in `package.json`

✅ **Kept in dash-master:**
- Component source code
- Build configuration
- Library-specific dependencies

✅ **Now in dash-storybook:**
- All Storybook configuration
- All component stories
- All documentation
- Logo and branding

The dash-master repository is now a clean, focused component library! 🎉
