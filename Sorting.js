// ARRAY RANDOMIZER NO REPEATS

function randomize(size) {
  var arr = [];
  var temp = 0;
  var rand = 0;
  var top = size;

  for (let i = 0; i < size; i++) {
    arr[i] = i + 1;
  }

  while (--top) {
    rand = Math.floor(Math.random() * (top + 1));
    temp = arr[rand];
    arr[rand] = arr[top];
    arr[top] = temp;
  }
  return arr;
}

var uArr = randomize(50);

//SORTING FUNCTIONS
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // if item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // base call
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  //recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  //   console.log(arr);
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    // find smallest number in subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // swap elements
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  console.log(arr);
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var left = [];
  var right = [];
  var newArr = [];
  var pivot = arr.pop();
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return newArr.concat(quickSort(left), pivot, quickSort(right));
}

// FUNCTION CALLS
// bubbleSort(uArr);
// mergeSort(uArr);
// insertionSort(uArr);
// selectionSort(uArr);
// quickSort(uArr);

// CREATE DATASET TO EVALUATE TIME COMPLEXITY
// TRACK AVERAGE TIME TO COMPLETE SORT BY ARR.LENGTH
// CHANGE INPUT SORT FUNCTION AND SORTTYPE VARIABLE
function populate() {
  let data = {};
  let sortType = "quickSort";
  var increment = 1000;
  var count = 1;
  let rounds = 25;
  for (let i = 1; i <= rounds; i++) {
    let avg = 0;
    for (let j = 1; j <= 10; j++) {
      let sum = 0;
      let total = 0;
      const start = performance.now();
      quickSort(randomize(increment));
      const end = performance.now();
      sum += end - start;
      total += 1;
      avg = sum / total;
    }
    data[count] = { algo: sortType, increment, time: avg };
    count += 1;
    increment += 1000;
  }
  return data;
}
// var dataSet = populate();
// console.table(dataSet);
