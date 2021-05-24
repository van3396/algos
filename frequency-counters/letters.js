const same = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let objStr1 = {};
  let objStr2 = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    objStr1[letter] ? ++objStr1[letter] : (objStr1[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    objStr2[letter] ? ++objStr2[letter] : (objStr2[letter] = 1);
  }

  for (let key in objStr1) {
    if (objStr1[key] !== objStr2[key]) {
      return false;
    }
    if (!(key in objStr2)) {
      return false;
    }
  }
  // for (let i = 0; i < str2.length; i++) {
  //     let letter = str2[i]
  //     if (!(objStr1[letter])) {
  //         return false
  //     } else {
  //         --objStr1[letter]
  //     }
  // }

  return true;
};

console.log(same('abc', 'cba'))
console.log(same('hello', 'olle'))
console.log(same("gagbgcdef", "abcdefggg"));
