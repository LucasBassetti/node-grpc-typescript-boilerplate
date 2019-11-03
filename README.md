[![TypeScript version][ts-badge]][typescript-36]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][LICENSE]
[![Build Status][travis-badge]][travis-ci]

# node-grpc-typescript-boilerplate

Minimalistic boilerplate to jump-start a [gRPC][grpc] [Node.js][nodejs] project in [TypeScript][typescript] [3.6][typescript-36].

What's included:

+ [gRPC][grpc] open source remote procedure call
+ [TypeScript][typescript] [3.6][typescript-36],
+ [TSLint][tslint] with [Microsoft rules][tslint-microsoft-contrib],
+ [Jest][jest] unit testing and code coverage,
+ Type definitions for Node.js and Jest,
+ [Prettier][prettier] to enforce a consistent code style,
+ [NPM scripts for common operations](#available-scripts),
+ a simple example of TypeScript code and unit test,
+ .editorconfig for consistent file format.

## Quick start

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs]. To start, just clone the repository with following commands:

```sh
git clone https://github.com/jsynowiec/node-typescript-boilerplate
cd node-grpc-typescript-boilerplate
npm install
```

or download and unzip current `master` branch:

```sh
wget https://github.com/jsynowiec/node-typescript-boilerplate/archive/master.zip -O node-typescript-boilerplate
unzip node-typescript-boilerplate.zip && rm node-typescript-boilerplate.zip
```

Now start adding your code in the `src` and unit tests in the `__tests__` directories. Have fun and build amazing things 🚀

### Unit tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

This is **optional**, but if you want to learn how to write JavaScript tests for TypeScript modules, read the [corresponding wiki page][wiki-js-tests].

## Available scripts

+ `start` - start project to development running `format:watch` and `start:watch`
+ `start:watch` - start project with nodemon to automatically watch changes
+ `format:watch` - format code with prettier automatically when save file
+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests
+ `doc` - generate grpc protos documentation in html

## Requirements

[go][go]

```
// add GOPATH to default PATH definitions
vi ~/.bash_profile

// add the following commands
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

[protoc][protoc]

`brew install protobuf`

[protolint][protolint]

`go get -u -v github.com/yoheimuta/protolint/cmd/protolint`

[vscode-protolint][vscode-protolint] 

## Environment Variables

Create a `.env` from a copy of `.env.example` and change the values with your preferences.

### 

## License
Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.6-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2010.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v10.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[typescript]: https://www.typescriptlang.org/
[typescript-36]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE

[grpc]: https://grpc.io/
[jest]: https://facebook.github.io/jest/
[tslint]: https://palantir.github.io/tslint/
[tslint-microsoft-contrib]: https://github.com/Microsoft/tslint-microsoft-contrib
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io

[go]: https://golang.org/doc/install
[protoc]: http://google.github.io/proto-lens/installing-protoc.html
[protolint]: https://github.com/yoheimuta/protolint
[vscode-protolint]: https://marketplace.visualstudio.com/items?itemName=mfuentesg.vscode-protolint

