const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([3, 2, 6, 2, 2, 0, 34, -2, 5, 0, 1], 5));
