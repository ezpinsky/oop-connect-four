import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";

export default class Game {
	constructor(player1, player2, currentPlayer = 1, columns, winnerNumber = 0) {
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
		this.winnerNumber = winnerNumber;
	}

	getName() {
		if (this.winnerNumber === 3) {
			return `${this.player1} ties with ${this.player2}!!@`;
		}
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
		this.checkForTie();
	}

	checkForTie() {
		const fullColumns = document.querySelectorAll("div.full");
		if (fullColumns.length === 7) {
			this.winnerNumber = 3;
		}
	}

	isColumnFull(columnIndex) {
		return this.columns[columnIndex].isFull();
	}

	getTokenAt(rowIndex, columnIndex) {
		return this.columns[columnIndex].getTokenAt(rowIndex);
	}
}
