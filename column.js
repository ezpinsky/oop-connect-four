export default class Column {
	constructor() {
		this.tokens = [null,null,null,null,null,null];
	}

	add(playerNum) {
		for (let i = 5; i >= 0; i--) {
			console.log(this.tokens)
			if(this.tokens[i]===null){
				this.tokens[i] = playerNum
				console.log(this.tokens)
				return;
			}
		}
	}

	getTokenAt(rowIndex){
		return this.tokens[rowIndex];
	}
}
