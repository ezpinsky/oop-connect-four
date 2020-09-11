import Column from "./column.js";

export default class RowWinInspector {
	constructor(columns = []) {
		this.columns = columns;
	}

	inspect() {
		let count = 0;
		for (let i = 5; i >= 0; i--) {
			let row = [];
			for (let j = 0; j < 4; j++) {
				let currentToken = this.columns[j].tokens[i];
				row.push(currentToken);
			}
			let counter = 0;
			if (row.includes(null)) {
				console.log(`row at ${i} is ${row}`);
				break;
			} else if (this.fourInARow(row)) {
				return row[0];
			}
		}
		return 0;
	}

	fourInARow(row) {
		let token = row[0];
		let count = 0;
		for (let i = 0; i < 4; i++) {
			if (row[i] === token) {
				count++;
			}
			if (count === 4) {
				return true;
			}
		}
		return false;
	}
}
