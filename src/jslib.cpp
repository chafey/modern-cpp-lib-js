#include <modern_cpp_lib/lib.hpp>
#include <stdio.h>
#include <emscripten.h>
#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace emscripten;

class RleDecode {
  public: 
  RleDecode(size_t sourceSize, size_t destinationSize) {
    source.resize(sourceSize);
    destination.resize(destinationSize);
  }

  val getSourceBytes() {
    return val(typed_memory_view(source.size(), source.data()));
  }
  
  val getDestinationBytes() {
    return val(typed_memory_view(destination.size(), destination.data()));
  }

  void decode() {
    rleDecode(source, destination);
  }

  private:
    std::vector<unsigned char> source;
    std::vector<unsigned char> destination;
};

EMSCRIPTEN_BINDINGS(RleDecode) {
  class_<RleDecode>("RleDecode")
    .constructor<size_t, size_t>()
    .function("getSourceBytes", &RleDecode::getSourceBytes)
    .function("getDestinationBytes", &RleDecode::getDestinationBytes)
    .function("decode", &RleDecode::decode)
   ;
}

extern "C" {
  EMSCRIPTEN_KEEPALIVE int jsadd(int a, int b)
  {
    return add(a,b);
  }
}
