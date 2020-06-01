# oclif-graphql-codegen-example

CLI for viewing country data as minimal example of oclif graphql-codegen

Also doubles as testbed for further changes/enhancements to
[`@graphql-codegen/typescript-oclif`](https://www.npmjs.com/package/@graphql-codegen/typescript-oclif).

## Getting Started

This project uses [`yarn`](https://yarnpkg.com/) for package management in alignment with the [`graphql-code-generator`](https://github.com/dotansimha/graphql-code-generator) project.

To initialize:

```bash
yarn
```

The project also includes a `Makefile` to make it easier to encode certain required workarounds. To generate the oclif commands from the `*.graphql` documents invoke the `generate` target:

```bash
make generate
```
