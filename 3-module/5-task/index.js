let result = {
  min: -5.8,
  max: 73
}

let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let data = str
    .split(' ')
    .filter(Number)
    .map(i => Number(i));

  return {
    max: Math.max.apply(null, data),
    min: Math.min.apply(null, data)
  }

}


console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
