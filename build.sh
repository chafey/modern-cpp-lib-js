#!/bin/sh
mkdir -p build
(cd build && emconfigure cmake -DCMAKE_BUILD_TYPE=Debug ..)
(cd build && emmake make)
(cd test/node; npm run test)

