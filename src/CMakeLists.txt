
add_executable(modern_cpp_lib_js jslib.cpp)

target_link_libraries(modern_cpp_lib_js PRIVATE modern_cpp_lib)

#C++ 11
target_compile_features(modern_cpp_lib_js PUBLIC cxx_std_11)
set_target_properties(modern_cpp_lib_js PROPERTIES CXX_EXTENSIONS OFF)

if (CMAKE_BUILD_TYPE STREQUAL Debug)
	SET(linkFlags "-g4 -s NO_EXIT_RUNTIME=1")
else() # Either MinSizeRel, RelWithDebInfo or Release, all which run with optimizations enabled.
	SET(linkFlags "-O3 -s NO_EXIT_RUNTIME=1 -s DISABLE_EXCEPTION_CATCHING=1")
endif()

set(CMAKE_CXX_FLAGS_RELEASE "-O3 -fno-exceptions")

set_target_properties(
    modern_cpp_lib_js 
    PROPERTIES 
    LINK_FLAGS "\
      --bind \
      -s EXPORTED_FUNCTIONS=[] \
      -s EXTRA_EXPORTED_RUNTIME_METHODS=[ccall] \
   ")
