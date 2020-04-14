let modernLibrary = require('../../build/src/modern_cpp_lib_js.js');

modernLibrary.onRuntimeInitialized = async _ => {
  let result = modernLibrary._jsadd(1,1);
  console.log(result)
  result = modernLibrary.ccall(
    'jsadd', 
    'number', 
    ['number', 'numnber'],
    [10, 5])
  
  console.log('ccall = 10 + 5 = ', result);
}
