/*
let b = 0
do {
    console.log(b)
    b++
} while (b < 10)

for (let i = 0; i, 10; i++) {
    console.log(i)
}

const arr = ['a', 'b', 'c']
for (const idx in arr) {
    console.log(idx)
    console.log(arr[idx])
}

for (const value of arr) {
    console.log(value)
}

arr.forEach(function (element, index, arr) {
    console.log(element, index, arr)
})
*/

//homework
1
let count = 0
while (count < 100) {
    ++count
    if (count > 1) {
        let pre_count = 1
        while (pre_count <= count) {
            ++pre_count
            if (count % pre_count !== 0) {
                continue;
            } else {
                if (pre_count === count) {
                    console.log(count);
                } else {
                    break;
                }
            }
        }
    }
}

//2
function calc() {
    const cart = [1624, 351, 792, 13887, 365]
    let result = cart.reduce(function (sum, current) {
        return sum + current
    }, 0)

    console.log(result)
}
calc()

//3
for (let a = 0; a < 10; console.log(a), a++) { }

//4
function dubl(b) {
    for (let row = 1; row <= 20; ++row) {
        let x = 'x'
        while (x.length < row) {
            x = x + 'x'
        }
        console.log(x)
    }
}
dubl()