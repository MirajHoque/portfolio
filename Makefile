# Portfolio — common tasks.  Run `make help` to see them.
.DEFAULT_GOAL := help
PORT ?= 8080

.PHONY: help serve csp check links html open

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	  | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-8s\033[0m %s\n", $$1, $$2}'

serve: ## Preview the site at http://localhost:$(PORT)
	@echo "Serving on http://localhost:$(PORT) — Ctrl+C to stop"
	@python3 -m http.server $(PORT)

csp: ## Regenerate _headers, netlify.toml and vercel.json
	@python3 scripts/generate-csp.py

links: ## Verify every local link and anchor resolves
	@bash scripts/check-links.sh

html: ## Validate the markup (needs Node)
	@npx --yes html-validate index.html 404.html

check: csp-check links ## Run the checks CI runs

.PHONY: csp-check
csp-check:
	@python3 scripts/generate-csp.py --check

open: ## Open the site in the default browser
	@open "http://localhost:$(PORT)" 2>/dev/null || xdg-open "http://localhost:$(PORT)"
