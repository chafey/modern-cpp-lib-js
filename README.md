# modern-cpp-lib-js
Example showing how to build a JS/WASM version of a C++ library using modern
cmake based on the following:
* https://cliutils.gitlab.io/modern-cmake/chapters/basics/structure.html
* https://gitlab.com/CLIUtils/modern-cmake/tree/master/examples/extended-project

But expanded to include cross compiling to JavaScript/WASM using Emscripten

## Dependencies

* CMake 3.17 or better
* A C++ compatible compiler
* Emscripten SDK 1.39.4 or better
* NodeJS 8.0 or later


## Visual Studio Code Remote Containers Support

This project includes support for developing in a docker container using the 
Visual Studio Code Remote - Containers extension.  The configured docker container
includes emscripten, cmake and gcc so you can build, debug and run this project
immediately without having to deal with toolchain dependencies.

NOTE: If you don't use VS Code but want to use Docker, you can try using the 
Dockerfile in the .devcontainer folder.

## Building JS/WASM

The requirements are:

* Docker (to build JS/WASM Emscripten)

To configure, build and test:

```bash
./build.sh
```

After building, you can run the browser based test by running an http server
at the root of this project and opening the file test/browser/index.  I use 
[HTTP Server / HTML Preview](https://marketplace.visualstudio.com/items?itemName=Flixs.vs-code-http-server-and-html-preview)