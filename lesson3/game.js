function generateNumber() {
    const arr = []
    while (arr.length < 4) {
        const d = Math.floor(Math.random() * 10)
        if (arr.indexOf(d) < 0) {
            arr.push(d)
        }
    }
    return arr.join('')
}

function game() {
    const N = generateNumber()
    console.log(N)

    let tryCounter = 1
    while (true) {
        const myAns = prompt('Введите четырехзначное число:')

        // let tryCounter = 1

        if (myAns === N) {
            break
        }

        let cow = 0
        let bull = 0

        for (let i = 0; i < myAns.length; i++) {
            const digit = myAns[i]
            const found = N.indexOf(digit)
            if (found >= 0) {
                if (found === i) {
                    bull++
                } else {
                    cow++
                }
            }
        }

        console.log(`У вас ${cow} коров и ${bull} быков`)

        tryCounter++
    }

    alert(`Вы угадали за ${tryCounter} попыток`)
}

game()