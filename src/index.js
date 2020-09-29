 exports.min = (array) => {
   if (array === undefined || array[0] === undefined) return 0;
   return Math.min(...array);
}

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined) return 0;
  return Math.max(...array);
}

exports.avg = (array) => {
  if (array === undefined || array[0] === undefined) return 0;

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i]
  }
  return count / array.length;
}