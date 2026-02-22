---
'@jsimck/eslint-config': minor
---

- Extract stylistic rules from `base` into a separate `stylistic` config
- `base` is now minimal: global ignores, browser/node/es2025 globals, parser options
- Export `prettierOptions` for easy extension with plugins (e.g. Tailwind)
- Add `globals.es2025` for modern JS builtins (Iterator, Float16Array, etc.)
- Add `**/__generated__/**` to default ignores (GraphQL codegen)
- Remove `**/docs/**` and `**/node_modules/**` from ignores (too broad / redundant)
- Add Advanced Usage section to README (composing, overriding, prettier plugins)
