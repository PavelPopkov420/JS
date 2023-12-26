// Здадание 1

let num1 = Number(prompt('Введите число №1'));
let num2 = Number(prompt('Введите число №2'));
if (num1 === 1 || num1 < 1) {
    console.log('Число №1 меньше либо равно единице')
} else {
    console.log('Число #1 больше единицы')
};
if (num2 === 3 || num2 > 3) {
    console.log('Число №2 больше либо равно трем')
} else {
    console.log('Число #2 меньше трех')
}

// Задание 2

let test = true;
alert((test === true) ? '+++' : '---')

//Задание 3

let ansewr = Number(prompt('Введите день месяца: '))
if (ansewr >= 1 && ansewr <= 10) {
    console.log('Ваш день относится к первой декаде месяцв')
} else if (ansewr >= 11 && ansewr <= 20) {
    console.log('Ваш день относится ко второй декаде месяца')
} else if (ansewr >= 21 && ansewr <= 31) {
    console.log('Ваш день относится к третьей декаде месяца')
} else {
    console.log('Такого дня в месяце не существует !!!')
};


// Задание 4

let num = Number(prompt('Введите число больше нуля'));
if (num > 0) {
    let hundred = Math.trunc((num % 1000) / 100);
    let ten = Math.trunc((num % 100) / 10);
    let one = num % 10;
    console.log(alert(`Сотен: ${hundred} , десятков: ${ten}, единиц: ${one}`))
} else {
    alert('Вы ввели число меньше либо равно нулю')
}