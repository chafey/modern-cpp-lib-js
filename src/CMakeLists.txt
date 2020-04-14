add_executable(modern_cpp_lib_js jslib.cpp)

target_link_libraries(modern_cpp_lib_js PRIVATE modern_cpp_lib)

set_target_properties(
    modern_cpp_lib_js 
    PROPERTIES 
    LINK_FLAGS "\
      -s EXPORTED_FUNCTIONS=[] \
     -s EXTRA_EXPORTED_RUNTIME_METHODS=[ccall] \
   ")
