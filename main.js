/*let Tc = 20;
let Tf = (9 / 5) * Tc + 32;
alert(Tf)

let admin = '';
let name = ("Василиса");
admin = name;
alert(admin)

1000108
console.log(1000 + "108")

// document.write('<img.src="async_vs_defer.jpg">')
//попыталась вывести изображение
*/

// 2-ой урок ->
let N = 0
function guess(tC) {
    if (tC === 1) {
        N = Math.round(Math.random() * 10)
        console.log(N)
    }

    const myAnswer = +prompt('Введите число')
    parseInt(prompt('Введите число'), 10)
    if (myAnswer === N) {
        alert(`Вы выиграли на ${tC} попытке`)
        guess(1)
    } else {
        guess(tC + 1)
    }
}

// guess(1)
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 вывод идет после сложения
d = b++; alert(d);           // 1 вывод перед сложением
c = (2 + ++a); alert(c);     // 5 ++a сперва прибавляет к a единицу, затем возвращает значение и уже имело значение 2
d = (2 + b++); alert(d);     // 4 b++ добавляет единицу и возвращает старое значение
alert(a);                    // 3 сложение состоялось перед выводами (а с просто приравнялось к его значению)
alert(b);                    // 3 сложение состоялось после выводов (а d просто приравнялось к его значению)
*/
var a = 2;
var x = 1 + (a *= 2); // Присваивание с умножением  x *= y  x = x * y  ->  будет 5

let e = 5;
let f = -2;

if (e > 0 && f > 0) {
    console.log(e - f);
} else if (e < 0 && f < 0) {
    console.log(e * f);
} else {
    console.log(e + f);
}

function accountUpTo15() { //как лучше всего использовать в этом задании switch? получилось слишком громоздко
    let a = 13
    switch (a) {
        case 0:
            console.log(a);
            ++a
        case 1:
            console.log(a);
            ++a
        case 2:
            console.log(a);
            ++a
        case 3:
            console.log(a);
            ++a
        case 4:
            console.log(a);
            ++a
        case 5:
            console.log(a);
            ++a
        case 6:
            console.log(a);
            ++a
        case 7:
            console.log(a);
            ++a
        case 8:
            console.log(a);
            ++a
        case 9:
            console.log(a);
            ++a
        case 10:
            console.log(a);
            ++a
        case 11:
            console.log(a);
            ++a
        case 12:
            console.log(a);
            ++a
        case 13:
            console.log(a);
            ++a
        case 14:
            console.log(a);
            ++a
        case 15:
            console.log(a);
    }
}

accountUpTo15()

function sum(a, b) {
    return a + b
}
console.log(sum(12, 3))

function subtraction(a, b) {
    return a - b
}
console.log(subtraction(12, 3))

function division(a, b) {
    return a / b
}
console.log(division(12, 3))

function multiplication(a, b) {
    return a * b
}
console.log(multiplication(12, 3))

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2)
        case subtraction:
            return subtraction(arg1, arg2)
        case division:
            return division(arg1, arg2)
        case multiplication:
            return multiplication(arg1, arg2)
    }
}

console.log(mathOperation(22, 2, division))

console.log(0 == null)
console.log(typeof null) //object
console.log(typeof 0) //number

function power(val, pow) {
    if (pow > 1) {
        --pow
        val *= power(val, pow)
    }
    return val
}
console.log(power(4, 3))