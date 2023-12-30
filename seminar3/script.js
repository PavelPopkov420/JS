// Задача 1

function degree(x, y) {
    let num = Math.pow(x, y);
    degree = num;
}
degree(Number(prompt('Введите число, которое хотите возвести в куб: ')), 3);
console.log(degree);

// Задача 2

const salary = (money) => {
    if (!isNaN(money) && money > 0) {
        return money * 0.87;
    } else console.log('Неверные данные');
}
console.log(`Ваша зарплата с учетом вычета равна: ${salary(prompt('Введите вашу зп: '))}`);

// Задача 3

const bigNumber = (first, second, third) => {
    if (first > second && first > third) {
        console.log(`Масимальное значение: ${first}`);
    } else if (second > first && second > third) {
        console.log(`Масимальное значение: ${second}`);
    } else if (third > first && third > second) {
        console.log(`Масимальное значение: ${third}`);
    }

}
console.log(bigNumber(Number(prompt('Введите первое значение')), Number(prompt('Введите второе значение')), Number(prompt('Введите третье значение'))));

// Задача 4

const sum = (a, b) => {
    return a + b;
}

const diff = (a, b) => {
    if (b > a) {
        a = b;
        b = a;
        return a - b;
    } else return a - b;

}

const multiplication = (a, b) => {
    return a * b;
}

const segment = (a, b) => {
    return a / b;
}

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите первое число'));



console.log(sum(num1, num2));
console.log(diff(num1, num2));
console.log(multiplication(num1, num2));
console.log(segment(num1, num2));