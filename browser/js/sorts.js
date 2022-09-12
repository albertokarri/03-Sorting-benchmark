/**
 * Copy your sorting algorithms in here.
 * They must be named `bubbleSort` and `mergeSort`, and take an array param.
 */

// PLACEHOLDER FUNCTION — REPLACE WITH YOUR BUBBLE SORT IMPLEMENTATION

function swap(arr, i) {
  /* let aux = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = aux; */
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    let swapped = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
        swapped++;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// PLACEHOLDER FUNCTION — REPLACE WITH YOUR MERGE SORT IMPLEMENTATION

function split(arr) {
  let mitad = Math.round(arr.length / 2);
  let firstHalf = arr.slice(0, mitad);
  let secondHalf = arr.slice(mitad);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0]
      ? mergedArr.push(arr1.shift())
      : mergedArr.push(arr2.shift());
  }
  return mergedArr.concat(arr1.concat(arr2));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let [splitedArr1, splitedArr2] = split(arr);
  return merge(mergeSort(splitedArr1), mergeSort(splitedArr2));
}
