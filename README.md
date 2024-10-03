# KASDK

The core team at `Rusty Kaspa` is often too busy to regularly publish npm packages. To address this, I download the [last release](https://github.com/kaspanet/rusty-kaspa/releases) and publish updated versions under the `@kasdk/*` package namespace.

# NPM Packages

- [@kasdk/nodejs](https://www.npmjs.com/package/@kasdk/nodejs)

- [@kasdk/web-keygen](https://www.npmjs.com/package/@kasdk/web-keygen)

- [@kasdk/web-rpc](https://www.npmjs.com/package/@kasdk/web-rpc)

- [@kasdk/web](https://www.npmjs.com/package/@kasdk/web)

- [@kasdk/web-core](https://www.npmjs.com/package/@kasdk/web-core)

# How to publish new versions? (Personal Not 😏)

- Download latest version from `https://github.com/kaspanet/rusty-kaspa/releases`

- Extract, copy and paste all files and folders here.

- Revise package versions and their names.

- For each package go to its directory and publish the latest version. e.g.

```bash
$ cd nodejs/kaspa
$ npm publish
```

NOTE: Skip dev packages
