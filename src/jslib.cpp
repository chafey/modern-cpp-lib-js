#include <stdio.h>
#include <emscripten.h>
#include <modern_cpp_lib/lib.hpp>

extern "C" {
  EMSCRIPTEN_KEEPALIVE int jsadd(int a, int b)
  {
    return add(a,b);
  }
}
