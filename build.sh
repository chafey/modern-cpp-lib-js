#!/bin/sh
mkdir -p build
#(cd build && emconfigure cmake -DCMAKE_BUILD_TYPE=Debug ..)
(cd build && emconfigure cmake ..)
(cd build && emmake make VERBOSE=1)
(cd test/node; npm run test)
cp ./build/src/modern_cpp_lib_js.* ./dist
