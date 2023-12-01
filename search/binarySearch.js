const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};

console.log(binarySearch([1, 4, 6, 9, 12, 15, 18, 22, 34, 99], 6));
