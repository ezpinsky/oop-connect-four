import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js";

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
		} else if (this.winnerNumber === 1) {
			return `${this.player1} Wins!!@`;
		} else if (this.winnerNumber === 2) {
			return `${this.player2} Wins!!@`;
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
		this.checkForColumnWin();
		this.checkForRowWin();
	}

	checkForTie() {
		const fullColumns = document.querySelectorAll("div.full");
		if (fullColumns.length === 7) {
			this.winnerNumber = 3;
		}
	}

	isColumnFull(columnIndex) {
		if (this.winnerNumber === 1 || this.winnerNumber === 2) {
			return true;
		}

		return this.columns[columnIndex].isFull();
	}

	getTokenAt(rowIndex, columnIndex) {
		return this.columns[columnIndex].getTokenAt(rowIndex);
	}

	checkForColumnWin() {
		if (this.winnerNumber !== 0) {
			return;
		}

		for (let i = 0; i <= 6; i++) {
			let ColumnInspector = new ColumnWinInspector(this.columns[i]);
			if (ColumnInspector.inspect() > 0) {
				this.winnerNumber = ColumnInspector.inspect();
				return;
			}
		}
	}

	checkForRowWin() {
		if (this.winnerNumber !== 0) {
			return;
		}
		for (let i = 0; i < 3; i++) {
			let columnSlice = this.columns.slice(i, i + 4);
			let rowInspector = new RowWinInspector(columnSlice);
			if (rowInspector.inspect() > 0) {
				this.winnerNumber = rowInspector.inspect();
			}
		}
	}
}
