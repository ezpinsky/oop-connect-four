import Game from "./game.js";
import Column from "./column.js";

var game = undefined;

function updateUI(placePieceSpot) {
	const boardHolder = document.getElementById("board-holder");
	for (let i = 0; i <= 5; i++) {
		let rowIndex = i;
		for (let j = 0; j <= 6; j++) {
			let columnIndex = j;
			let selectedIndex = document.getElementById(`square-${rowIndex}-${columnIndex}`);
			let indexToken = game.getTokenAt(rowIndex, columnIndex);
			selectedIndex.innerHTML = "";
			if (indexToken === 1) {
				let token = document.createElement("div");
				token.classList.add("token", "black");
				selectedIndex.appendChild(token);
			} else if (indexToken === 2) {
				let token = document.createElement("div");
				token.classList.add("token", "red");
				selectedIndex.appendChild(token);
			}
		}
	}

	if (game === undefined) {
		boardHolder.classList.add("is-invisible");
	} else {
		boardHolder.classList.remove("is-invisible");
		document.getElementById("game-name").innerHTML = game.getName();
	}
	if (placePieceSpot !== undefined) {
		if (game.currentPlayer === 2) {
			placePieceSpot.classList.remove("black");
			placePieceSpot.classList.add("red");
		} else {
			placePieceSpot.classList.remove("red");
			placePieceSpot.classList.add("black");
		}
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
	const newGame = document.getElementById("new-game");
	const players = document.getElementById("form-holder");
	const player1 = document.getElementById("player-1-name");
	const player2 = document.getElementById("player-2-name");

	document.getElementById("click-targets").addEventListener("click", (e) => {
		let columnIndex = Number.parseInt(e.target.id[7]);
		game.playInColumn(columnIndex);
		updateUI(e.currentTarget);
	});

	players.addEventListener("keyup", (e) => {
		if (player1.value !== "" && player2.value !== "") {
			newGame.disabled = false;
		} else {
			newGame.disabled = true;
		}
	});

	newGame.addEventListener("click", (e) => {
		game = new Game(player1.value, player2.value);
		document.getElementById("click-targets").classList.add("black");
		player1.value = "";
		player2.value = "";
		newGame.disabled = true;
		updateUI();
	});
});
