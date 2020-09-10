export default class Game {
	constructor(player1, player2, currentPlayer = 1) {
		this.player1 = player1;
		this.player2 = player2;
		this.currentPlayer = currentPlayer;
	}

	getName() {
		return `${this.player1} vs. ${this.player2}`;
	}

	playInColumn() {
		switch (this.currentPlayer) {
			case 1:
				this.currentPlayer = 2;
				break;
			case 2:
				this.currentPlayer = 1;
				break;
		}
	}
}
