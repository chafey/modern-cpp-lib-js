let modernLibrary = require('../../dist/modern_cpp_lib_js.js');
const fs = require('fs')

modernLibrary.onRuntimeInitialized = async _ => {
  let result = modernLibrary._jsadd(1,1);
  console.log('_jsadd(1,1) = ', result)
  result = modernLibrary.ccall(
    'jsadd', 
    'number', 
    ['number', 'numnber'],
    [10, 5])
  
  console.log('ccall(\'jsadd\', \'number\', [\'number\', \'number\', [10,15]) = 10 + 5 = ', result);

  // embind
  var instance = new modernLibrary.RleDecode(300000, 512*512*2);
  const sourceBytes = instance.getSourceBytes();
  var data = fs.readFileSync('../../extern/modern-cpp-lib/tests/fixtures/ct.rle');
  sourceBytes.set(data);

  const begin = process.hrtime();
  for(var i=0; i < 1000; i++) {
    instance.decode();
  }
  const duration = process.hrtime(begin);//.reduce((sec, nano) => sec * 1e9 + nano)
  const durationInMs = duration[0] + duration[1] / 1000000000;
  console.log("RLE Decode took " + (durationInMs) + " seconds");

  var decoded = instance.getDestinationBytes();
  console.log('decoded length = ', decoded.length);
  //console.log(decoded);
  instance.delete();
}
