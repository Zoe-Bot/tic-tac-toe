let symbol = [' ', 'X', 'O'];

let currentPlayer = 1;
let infoPlayer = 2;
let winner = 0;
let win = 0;

let fields = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

function setup() {
    document.getElementById('player').innerHTML = symbol[infoPlayer];
}

function draw(field) {
    setup()
    if(fields[field] === 0) {
        document.getElementById(field).innerHTML = symbol[currentPlayer];
        fields[field] = symbol[currentPlayer];
        winner = 1;
    }
    changePlayer();
    checkWinner();

    if(win == 1 || win == 2) {
        document.getElementById('information').innerHTML = 'Player ' + symbol[winner] + ' hat gewonnen';
    }

}

function changePlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    infoPlayer = infoPlayer === 1 ? 2 : 1;
}


function checkWinner() {

    if(
        fields[0] == 'X' && fields[1] == 'X' && fields[2] == 'X' ||
        fields[3] == 'X' && fields[4] == 'X' && fields[5] == 'X' ||
        fields[6] == 'X' && fields[7] == 'X' && fields[8] == 'X' ||

        fields[0] == 'X' && fields[3] == 'X' && fields[6] == 'X' ||
        fields[1] == 'X' && fields[4] == 'X' && fields[7] == 'X' ||
        fields[2] == 'X' && fields[5] == 'X' && fields[8] == 'X' ||

        fields[0] == 'X' && fields[4] == 'X' && fields[8] == 'X' ||
        fields[2] == 'X' && fields[4] == 'X' && fields[6] == 'X'
    ) {
        win = 1;
    } else if (
        fields[0] == 'O' && fields[1] == 'O' && fields[2] == 'O' ||
        fields[3] == 'O' && fields[4] == 'O' && fields[5] == 'O' ||
        fields[6] == 'O' && fields[7] == 'O' && fields[8] == 'O' ||

        fields[0] == 'O' && fields[3] == 'O' && fields[6] == 'O' ||
        fields[1] == 'O' && fields[4] == 'O' && fields[7] == 'O' ||
        fields[2] == 'O' && fields[5] == 'O' && fields[8] == 'O' ||

        fields[0] == 'O' && fields[4] == 'O' && fields[8] == 'O' ||
        fields[2] == 'O' && fields[4] == 'O' && fields[6] == 'O'
    ) {
        win = 2;
    }
}


function L(l) {
    console.log(l);
}
