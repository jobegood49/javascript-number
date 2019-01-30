console.log(`Hello`)

// operations
const alpha = 2
const beta = 4

const result_sum = 2 + 4
const result_multiplication = 2 * 8
const result_division = 2 / 4
const result_modulus = 2 % 4

console.log(`result_sum = ${result_sum}
result_multiplication = ${result_multiplication}
result_division = ${result_division}
result_modulus = ${result_modulus}
`)

// array
const array1 = [2, 3, 5, 7]
const array2 = [8, 2, 4, 10]

const resultMultiplicationFromArrayItem = array1[0] * array2[3]

console.log(resultMultiplicationFromArrayItem)

const newArray = array1.pop()
console.log('newArray', newArray)
console.log('array1', array1)

// loop
for (let i = 0; i < 5; i++) {
  console.log(array2[i])
}

array1.forEach(el => {
  console.log(el)
})
