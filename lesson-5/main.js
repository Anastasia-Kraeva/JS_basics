//1

function alternation() {
    let board = document.querySelector('.board');
    let block;
    let flag = true;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0)
                flag = !flag;
            block = document.createElement('div');
            if (flag) {
                block.classList = 'block white';
            }
            else {
                block.classList = 'block black';
            }
            board.appendChild(block);
            flag = !flag;
        }
    }
}
alternation()