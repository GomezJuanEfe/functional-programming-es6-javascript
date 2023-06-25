import cars from './cars.js';

// Create a function ferraris that returns all the cars of the Ferrari brand.

function ferraris(arr) {
  return arr.filter( i => i.brand === 'Ferrari')
}

console.log(ferraris(cars));


// Create a function nineties that returns all the cars with models between 1980 and 1990.

function nineties(arr) {
  return arr.filter( i => i.model >= 1980 && i.model <= 1990)
}

console.log(nineties(cars));


// Create a function list that returns an array of strings with the same number of cars.

function list(arr) {
  return arr.map( i => `This ${i.brand} from ${i.model} costs $${i.price}`)
}

console.log(list(cars));