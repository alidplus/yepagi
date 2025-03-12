# Monorepo Rules

## Lint
run command below in root package to lint of all dependencies versions.
```sh
yarn lint:deps
```

## internal packages bundeling
- use rollup (for ts) or vite (for tsx). [rollup help for ts packages](https://gist.github.com/aleclarson/9900ed2a9a3119d865286b218e14d226)
- keep them lean as possible
- When bundling, Do NOT include peerDependencies since they are expected to be provided by the consumer of the library. By excluding these dependencies, we keep bundle size down and avoid bundling duplicate dependencies.
