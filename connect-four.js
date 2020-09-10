import Game from "./game.js";

var game = undefined;

function updateUI() {
	const boardHolder = document.getElementById("board-holder");
	if (game === undefined) {
		boardHolder.classList.add("is-invisible");
	} else {
		boardHolder.classList.remove("is-invisible");
		document.getElementById("game-name").innerHTML = game.getName();
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
	const newGame = document.getElementById("new-game");
	const players = document.getElementById("form-holder");
	const player1 = document.getElementById("player-1-name");
	const player2 = document.getElementById("player-2-name");

	players.addEventListener("keyup", (e) => {
		if (player1.value !== "" && player2.value !== "") {
			newGame.disabled = false;
		} else {
			newGame.disabled = true;
		}
	});

	newGame.addEventListener("click", (e) => {
		game = new Game(player1.value, player2.value);
		player1.value = "";
		player2.value = "";
		newGame.disabled = true;
		updateUI();
	});

	// const currentPlayer = "red";
	// const placePiece = document.getElementById("click-target")
	// placePiece.addEventListener("click", e =>{
	//     console.log(e.target.id);
	// })
	// function isColumnFull (){

	// }
});
