class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
	}
}
game = undefined;

// function updateUI() {
// 	const boardHolder = document.getElementById("board-holder");
// 	if (game === undefined) {
// 		boardHolder.classList.add("is-invisible");
// 	} else {
// 		boardHolder.classList.remove("is-invisible");
// 	}
// }

window.addEventListener("DOMContentLoaded", (event) => {
	const newGame = document.getElementById("new-game");
	const players = document.getElementById("form-holder");
	const player1 = document.getElementById("player-1-name");
	const player2 = document.getElementById("player-2-name");

	players.addEventListener("keyup", (e) => {
		console.log(`player 1 is ${player1.value}
        player 2 is ${player2.value}`);
		if (player1.value !== "" && player2.value !== "") {
			newGame.disabled = false;
		} else {
			newGame.disabled = true;
		}
	});

	// newGame.addEventListener("click", (e) => {
	// 	game = new Game(player1.value, player2.value);
	// 	player1.value = "";
	// 	player2.value = "";
	// 	newGame.disabled = true;
	// 	updatedUI();
	// });

	// const currentPlayer = "red";
	// const placePiece = document.getElementById("click-target")
	// placePiece.addEventListener("click", e =>{
	//     console.log(e.target.id);
	// })
	// function isColumnFull (){

	// }
});
