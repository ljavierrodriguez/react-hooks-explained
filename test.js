const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total = numeros.reduce((total, value) => total + value, 0)
console.log(total)