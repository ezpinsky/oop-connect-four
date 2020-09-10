export default class Column {
	constructor(columnNum) {
		this.columnNum = columnNum;
	}

	add(playerNum) {
		for (let i = 5; i >= 0; i--) {
			let currentPlace = document.getElementById(`square-${i}-${this.columnNum}`);
			if (!currentPlace.hasAttribute("player")) {
				currentPlace.setAttribute("player", playerNum);
				return;
			}
		}
	}
}
