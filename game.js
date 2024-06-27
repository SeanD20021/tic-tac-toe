import { checkWinner } from "./checkWinner.js";
let symbol = "X"


function squareX(element) {
    element.textContent = symbol;
}

function squareO(element) {
    element.textContent = symbol;
}
const Player = (char) => {
    let symbol = char;
    const getSymbol = () => symbol;
    const setSymbol = (char) => {
        symbol = char;
        return;
    }

    let gamesWon = 0;
    const getGamesWon = () => gamesWon;
    const setGamesWon = () => gamesWon++;

    let choice;
    const getChoice = () => choice;
    const setChoice = (symbol) => {
        choice = symbol;
        /*let num = prompt("enter square to put character");
        console.log(num);
        choice = num;
        console.log("test");
        */
        return;
    }

    const clearEventListeners = () => {
        const element = document.getElementById(".game-board");

    }

    return {getSymbol, setSymbol, getGamesWon, setGamesWon, getChoice, setChoice};

}
const gameBoard = (() => {
    let board = ['','','','','','','','',''];
    const render = (board) => {
        const game = document.querySelector(".game-board");
        while(game.firstChild) {
            game.firstChild.remove();
        }
        //game.innerHTML = '';
        for(let i = 0; i < 9; i++) {
            //console.log(board[0]);
            const square = document.createElement("div");
            if (board[i] !== '') {
                square.textContent = board[i];
            }
            
            square.setAttribute("id", String(i));
            square.addEventListener("click", function() {
                clickHandler(square.id);
            });
            game.appendChild(square);

        }
    }
    const getBoard = () => board;
    const setBoard = (char, index) => {
        if (board[index] === '') {
            board[index] = char;
            return true;
        } else {
            return false;
        }
    }

    const clearBoard = () => {
        board = ['','','','','','','','',''];
    }

    let gameOver = false;
    const getGameOver = () => gameOver;
    const setGameOver = () => {
        gameOver = !gameOver;
        return;
    }
    return{getBoard, setBoard, getGameOver, setGameOver,render, clearBoard};
})();

const gameController = (() => {

})();

let clickHandler = function(square) {
    console.log(Number(square));
    console.log(symbol);
    let id = square;
    let empty;
    if (symbol === "X") {
        if(gameBoard.getBoard()[Number(id)] === "") {
            empty = true;
            playerOne.setChoice(Number(id));
            console.log(playerOne.getChoice());
            gameBoard.setBoard("X",playerOne.getChoice());
            console.log(gameBoard.getBoard());
            gameBoard.render(gameBoard.getBoard());
            symbol = "O";
        } else {
            empty = false
        }
    } else {
        if(gameBoard.getBoard()[Number(id)] === "") {
            empty = true;
            playerTwo.setChoice(Number(id));
            console.log(playerTwo.getChoice());
            gameBoard.setBoard("O",playerTwo.getChoice());
            console.log(gameBoard.getBoard());
            gameBoard.render(gameBoard.getBoard());
            symbol = "X";
        } else {
            empty = false
        }
        
    }
    if (empty) {
        let result = checkWinner(gameBoard.getBoard());
        console.log(result);
        if (result != "") {
            if (result === "X") {
                playerOne.setGamesWon(playerOne.getGamesWon() + 1);
                console.log(gameBoard.getBoard());
                gameBoard.clearBoard();
                console.log(gameBoard.getBoard());
                gameBoard.render(gameBoard.getBoard);
            } else if (result === "O") {
                playerTwo.setGamesWon(playerTwo.getGamesWon() + 1);
                console.log(gameBoard.getBoard());
                gameBoard.clearBoard();
                console.log(gameBoard.getBoard());
                gameBoard.render(gameBoard.getBoard);
            } else {
                console.log(gameBoard.getBoard());
                gameBoard.clearBoard();
                console.log(gameBoard.setBoard());
                gameBoard.render(gameBoard.getBoard);
                //tie

            }
    }
    //if (square.textContent == "") {
    //    square.textContent = "X"
    //}
    //console.log(Number(square.className) - 1);
    console.log("done");
    return;
    }
}
const playerOne = Player("X");
const playerTwo = Player("O");

gameBoard.render(gameBoard.getBoard());
/*const squares = document.querySelectorAll(".game-board div");
console.log(squares.length);
for(let square of squares) {
    square.addEventListener("click", function() {
        clickHandler(square.id);
    });
}

*/
//gameBoard.render(gameBoard.getBoard());
//console.log("1");
//playerOne.setSymbol('X');
//console.log(gameBoard.getGameOver());
/*while(!gameBoard.getGameOver()) {
    playerOne.setChoice()
    let choice = playerOne.getChoice();
    gameBoard.setBoard(playerOne.getSymbol(), parseInt(choice));
    gameBoard.render(gameBoard.getBoard());
    console.log(gameBoard.getBoard());
    let result = checkWinner(gameBoard.getBoard());
    if (result !== '') {
        console.log(result);
        gameBoard.setGameOver();
        
    }
    playerTwo.setChoice()
    choice = playerTwo.getChoice();
    gameBoard.setBoard(playerTwo.getSymbol(), parseInt(choice));
    gameBoard.render(gameBoard.getBoard());
    console.log(gameBoard.getBoard());
    result = checkWinner(gameBoard.getBoard());
    if (result !== '') {
        console.log(result);
        gameBoard.setGameOver();        
    }
}
*/
