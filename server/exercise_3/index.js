import cars from "../exercise_2/cars.js";


// Create a function bmwSum that returns the sum of all prices of the BMW cars.
function bmwSum(arr) {
  return arr.reduce((prev, curr) => {
    if (curr.brand === 'BMW') {
      return prev + curr.price
    }
    return prev
  }, 0)
}

console.log(bmwSum(cars));


// Another way to write it

function bmwSum2(arr) {
  return arr.reduce((prev, curr) => {
    return curr.brand === 'BMW' ? prev + curr.price : prev
  }, 0)
}

console.log(bmwSum2(cars));