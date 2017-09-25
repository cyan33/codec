/*
  codec is a small code-decode utility
*/

(function(root) {
  const alphanumeic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  // encode
  let srcToTarget = {};
  // decode
  let targetToSrc = {};

  function encode(src) {
    let newKey;
    while (srcToTarget[src]) {
      newKey = Array(7).fill(1).reduce((accu, curr) => {
        return accu + alphanumeic[Math.floor(Math.random() * alphanumeic.length)];
      }, '')

      if (!targetToSrc[newKey]) {
        srcToTarget[src] = newKey
        targetToSrc[newKey] = src
      }
    }
    return newKey;
  }

  function decode(key) {
    return targetToSrc[key];
  }

  let codec = {
    encode,
    decode
  };

  if (typeof exports === 'object') {
    module.exports = codec;
  } else if (typeof define === 'function' && define.amd) {
    define(function() { return root.codec = codec; })
  } else {
    root.codec = codec;
  }
})(typeof window === 'object' ? window : global)
