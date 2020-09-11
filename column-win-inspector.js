import Column from "./column.js";

export default class ColumnWinInspector {
	constructor(Column) {
		this.Column = Column;
	}

	inspect() {
		let tokenCount = 0;
		let winningPlayer = 1;
		if (this.Column.tokens[3] !== null) {
			for (let i = 5; i >= 0; i--) {
				let token = this.Column.tokens[i];
				if (token === winningPlayer) {
					tokenCount++;
					if (tokenCount === 4) {
						return winningPlayer;
					}
				} else {
					tokenCount = 1;
					winningPlayer = token;
				}
			}
		}
		return 0;
	}
}
