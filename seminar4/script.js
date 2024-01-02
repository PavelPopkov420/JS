// Задача 1

// for (let i = 0; i <= 11; i++) {

//     if (i == 0) {
//         console.log(` ${i} ноль`);
//     } else if (i % 2 == 0) {
//         console.log(` ${i} четное`)
//     } else console.log(` ${i} нечетное`);

// }

// Задача 2

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let newArr = arr.filter((value, index) => index !== 3 && index !== 4);
// console.log(newArr);

// Задача 3

// const arr = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
// console.log(arr);
// let sum = arr.reduce(function(a, b) {
//     return a + b;
// }, 0);
// console.log(`Сумма элементов массива равна: ${sum}`);
// let min = (values) => values.reduce((a, b) => Math.min(a, b));

// console.log(`Минимальное значение массима равно: ${min(arr)}`);

// console.log(`Есть ли в массиве значение 3: ${arr.includes(3)}`);

//Задача 4

var str = ""
console.log(str)
for (var x = 0; x <= 20; x++) {
    console.log(str += "x")
}