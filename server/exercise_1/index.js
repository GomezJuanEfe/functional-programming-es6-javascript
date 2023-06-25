const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const doubleItems = arr.map( i => i * 2);
console.log('Double', doubleItems);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const filteredArr = arr.filter( i => i % 2 === 0);
console.log('Filtered', filteredArr);

// utilizar el método reduce para sumar todos los elementos
// 21

const sumArr = arr.reduce((prev, curr) => prev + curr);
console.log('Reduce', sumArr);