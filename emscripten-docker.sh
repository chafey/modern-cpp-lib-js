#!/bin/bash
# docker run                  run a docker container
# --rm                        destroy filesystem on container exit
# -it                         interactive
# -v "$(pwd)""/src:delegated  mount current working directory as /src in container using delegated consistency
# -u $(id -u):$(id -g)        log into container as emscripten user (not root)
# trzeci/emscripten           the container name
# /bin/bash                   run the bash shell

docker run \
  --rm \
  -it \
  -v "$(pwd)":/src:delegated  \
  -u 1000:1000 \
  trzeci/emscripten \
  /bin/bash
