var origBoard;
const Human = 'O';
const AI = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const cells = document.querySelectorAll('.cell'); // create an array on the element cell
const resetElem = document.querySelector('.Reset');


startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none"; //reset result notification
	origBoard = [0,1,2,3,4,5,6,7,8];
    //initialize game
	for (var i = 0; i < cells.length; i++) { // iterate through the elements
		cells[i].innerText = ''; 
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square) {
	if(typeof origBoard[square.target.id] == 'number'){ //the typeof fixes a bug where you can override the AI's decision
        turn(square.target.id, Human);

        if (!checkWin(origBoard, Human) && !checkTie()) {

            turn(bestSpot(), AI); //Ai gets to make its move

        }
}
	
}

function turn(squareId, player) {

	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player);

	if (gameWon) {

        gameOver(gameWon);
    }

}

function checkWin(board, player) {

    
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);//check all places that have values on the board
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {//has player played
			gameWon = {index: index, player: player}; // shows what combo and who won
			break;
		}
	}
	return gameWon;

}

function gameOver(gameWon) {
	
	for (var i = 0; i < cells.length; i++) { //removes the ability to click things after game is over
		cells[i].removeEventListener('click', turnClick, false);
	}
	declareWinner(gameWon.player == Human ? "VICTORY" : "DEFEAT");//declaration
}

function declareWinner(who) {
	document.querySelector(".endgame").style.display = "block"; //display results of game
	document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
	return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
	return minMax(origBoard, AI).index; //returns the index of the decision for MINMAX alg
}

function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {//removes ability to click
			
			cells[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("TIE")//declaration
		return true;
	}
	return false;
}

function minMax(newBoard, player) {
	var availSpots = emptySquares();

	if (checkWin(newBoard, Human)) {
		return {score: -10};
	} else if (checkWin(newBoard, AI)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == AI) {
			var result = minMax(newBoard, Human);
			move.score = result.score;
		} else {
			var result = minMax(newBoard, AI);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === AI) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
const resetHandler = (e) => {
    startGame();
}

resetElem.addEventListener('click', resetHandler);//for some reason this isn't working

//To best illustrate the algorithm I provided a pseudo code representation of the AI
/*pseudo code for minMax function which harbors the AI moves:

function minMax(position, depth, maximizingPlayer)
    if depth == 0 or game over in position
        return static evaluation of position
    
    if maximizingPlayer
        maxEval = -infinity
        for each child of position
            eval minMax(child, depth-1, false)
            maxEval = max(maxEval, eval)
        return maxEval
    else
        minEval = +infinity
        for each child of position
            eval = minMax(child, depth-1, true)
            minEval = min(minEval, eval)
        return minEval
        
*/

//walking dinosaur

var character = document.getElementById("character");
var block = document.getElementById("block");
