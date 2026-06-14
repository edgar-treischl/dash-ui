.PHONY: help storybook storybook-build build lint install clean

help:
	@echo "Dash Monorepo - Available commands:"
	@echo ""
	@echo "  make storybook        Start Storybook dev server (HMR enabled)"
	@echo "  make storybook-build  Build Storybook for production"
	@echo "  make build            Build UI library for distribution"
	@echo "  make lint             Type-check and lint code"
	@echo "  make install          Install all dependencies"
	@echo "  make clean            Remove dist/ and build artifacts"
	@echo ""

storybook:
	cd packages/ui && pnpm storybook

storybook-build:
	cd packages/ui && pnpm storybook:build

build:
	cd packages/ui && pnpm build

lint:
	cd packages/ui && pnpm build

install:
	pnpm install

clean:
	rm -rf packages/ui/dist
	rm -rf packages/ui/storybook-static
	rm -rf node_modules
	find . -name "node_modules" -type d -prune -exec rm -rf {} \; 2>/dev/null || true
