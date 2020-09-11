import Column from "./column.js";

export default class Game {
	constructor(player1, player2, currentPlayer = 1, columns) {
		this.player1 = player1;
		this.player2 = player2;
		this.currentPlayer = currentPlayer;
		this.columns = [
			new Column(),
			new Column(),
			new Column(),
			new Column(),
			new Column(),
			new Column(),
			new Column()
		];
	}

	getName() {
		return `${this.player1} vs. ${this.player2}`;
	}

	playInColumn(columnIndex) {
		this.columns[columnIndex].add(this.currentPlayer);

		switch (this.currentPlayer) {
			case 1:
				this.currentPlayer = 2;
				break;
			case 2:
				this.currentPlayer = 1;
				break;
		}
	}

	isColumnFull(columnIndex){
		return this.columns[columnIndex].isFull()
	}

	getTokenAt(rowIndex, columnIndex) {
		return this.columns[columnIndex].getTokenAt(rowIndex);
	}

}
