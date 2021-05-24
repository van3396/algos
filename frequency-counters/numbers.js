/*
Write a function called samem which accepts two arrays.  The funciton should return true if every value in the 
array has it's corresponding value squared in the second array.  The frequency of value must be the same.

examples:

same([1, 2, 3], [4, 1, 9]) true
same([1, 2, 3], [1, 9]) false
same([1, 2, 1], [4, 4, 1]) false (must be same frequency)
*/

const same1 = (arr1, arr2) => {
  //check if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let value = arr2.indexOf(Math.pow(arr1[i], 2));
    if (value === -1) {
      return false;
    }
    arr2.splice(value, 1);
  }

  return true;
};

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let objArr1 = {};
  let objArr2 = {};

  for (let i = 0; i < arr1.length; i++) {
    objArr1[arr1[i]] ? ++objArr1[arr1[i]] : (objArr1[arr1[i]] = 1);
  }
  console.log('obj1:',objArr1)
  for (let i = 0; i < arr2.length; i++) {
    objArr2[arr2[i]] ? ++objArr2[arr2[i]] : (objArr2[arr2[i]] = 1);
  }
  console.log('obj2:',objArr2)

  for (let key in objArr1) {
    if (objArr1[Math.pow(key, 2)] !== objArr2[key]) {
      return false;
    }
    if (!(Math.pow(key, 2) in objArr2)) {
      return false;
    }
    console.log('key', (Math.pow(key, 2) in objArr2))
  }

  return true;
};

console.log(same([1, 2, 3, 1], [1, 4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));
