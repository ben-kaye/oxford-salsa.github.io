.PHONY: help install dev build preview clean

help:
	@echo "Targets:"
	@echo "  make install   Install npm deps"
	@echo "  make dev       Start dev server on http://localhost:4321"
	@echo "  make build     Production build to dist/"
	@echo "  make preview   Serve dist/ at http://localhost:4321"
	@echo "  make clean     Remove dist/ and .astro/"

install:
	npm install

dev: node_modules
	npm run dev

build: node_modules
	npm run build

preview: build
	npm run preview

clean:
	rm -rf dist .astro

node_modules:
	npm install
