const sumZero1 = (arr, target) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    for (let z = i + 1; z < arr.length; z++) {
      let num = arr[z];
      if (currentNum + num === target) {
        result.push(currentNum, num);
        return result;
      }
    }
  }

  return undefined;
};

// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3], 0)); //[-3,3]
// console.log(sumZero1([-2, 0, 1, 3], 0)); // undefined

const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
};

// console.log(sumZero2([-8, -7, -1, 0, 1, 2, 3, 4, 5, 6]))
// console.log(sumZero2([-10, -8, -5, -1, 3, 4, 8, 9, 12]))
// console.log(sumZero2([-7, -5, -1, 3, 4, 9, 12]))

const test = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result.length;
//************************************************************* 
    // let values = {}
    // let counter = 0

    // for (let i = 0; i < arr.length; i++) {
    //     let num = arr[i]
    //     if (values[num] === undefined) {
    //         values[num] = 1
    //         counter++
    //     }
    // }
    // return counter

    //************************************************************* 

    if (arr.length === 0) {
        return 0
    }

    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
            // console.log(arr)
            // console.log(i, j)
        }
    }
   return i+1
};


const ex1 = [1, 1, 1, 3, 3, 3, 3];
const ex2 = [1, 1, 2, 2, 3, 4];
const ex3 = [];
const ex4 = [-2, -1, 0, 3, 4];

console.log(test(ex1));
console.log(test(ex2));
console.log(test(ex3));
console.log(test(ex4));
