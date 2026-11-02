.PHONY: help build lint install clean reinstall publish bump-version

help:
	@echo "Dash UI Library - Available commands:"
	@echo ""
	@echo "  make build            Build UI library for distribution"
	@echo "  make lint             Type-check and lint code"
	@echo "  make install          Install all dependencies"
	@echo "  make clean            Remove dist/ and node_modules (clean state)"
	@echo "  make reinstall        Clean and reinstall dependencies (fixes stale caches)"
	@echo "  make bump-version V=<version>  Bump version (e.g., make bump-version V=1.0.1)"
	@echo "  make publish          Build and publish to GitHub Packages (requires gh CLI)"
	@echo ""

build:
	pnpm build

lint:
	pnpm build

install:
	pnpm install

bump-version:
	@if [ -z "$(V)" ]; then \
		echo "Error: Version required. Usage: make bump-version V=1.0.1"; \
		exit 1; \
	fi
	@echo "Bumping version to $(V)..."
	@sed -i '' 's/"version": "[^"]*"/"version": "$(V)"/' package.json
	@echo "Version bumped to $(V)"

publish: build
	@echo "Publishing to GitHub Packages..."
	@if ! command -v gh &> /dev/null; then \
		echo "Error: gh CLI is not installed. Install it from https://github.com/cli/cli"; \
		exit 1; \
	fi
	pnpm publish --registry https://npm.pkg.github.com
	@echo "✅ Package published successfully!"

clean:
	rm -rf dist
	rm -rf node_modules
	rm -rf pnpm-lock.yaml
	@echo "✅ Cleaned dist/, node_modules/, and lock file"

reinstall: clean
	@echo "📦 Reinstalling dependencies..."
	pnpm install
	@echo "✅ Dependencies reinstalled"
	@echo "💡 Tip: Run 'make build' to rebuild the distribution"
