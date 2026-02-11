# Changesets

Uses [changesets](https://github.com/changesets/changesets) for versioning and publishing.

## Stable release (main)

1. Run `pnpm changeset` to create a changeset
2. Merge to `main`
3. CI creates a "Release Version" PR with version bumps
4. Merge the release PR → CI publishes to npm as `latest`

## Release candidate (next)

Used to publish prerelease versions under the `next` npm tag before merging to `main`.

### Setup (once per RC cycle)

```bash
git checkout next
changeset pre enter next
git add .changeset/pre.json
git commit -m "chore: enter rc prerelease mode"
git push
```

### Publishing RCs

1. Add changesets as usual: `pnpm changeset`
2. Push to `next`
3. CI creates a "Release RC Version" PR with RC version bumps (e.g. `3.0.0-next.0`)
4. Merge the release PR → CI publishes to npm under the `next` tag

### Installing RCs

```bash
npm install @jsimck/eslint-config@next
```

### Graduating to stable

When ready to promote to a stable release:

```bash
git checkout next
changeset pre exit
git add .changeset/pre.json
git commit -m "chore: exit rc prerelease mode"
```

Then merge `next` into `main`. CI will publish the stable version as `latest`.
