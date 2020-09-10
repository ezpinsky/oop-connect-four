class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
}
window.addEventListener("DOMContentLoaded", event =>{
    game = undefined;

    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");

    player1.addEventListener("keyup", e =>{

        if(player1.value !== undefined && player2.value !== undefined){
        document.getElementById("new-game").disabled = false;
        }else{
            document.getElementById("new-game").disabled = true;
        }
    });





    // const currentPlayer = "red";
    // const placePiece = document.getElementById("click-target")
    // placePiece.addEventListener("click", e =>{
    //     console.log(e.target.id);
    // })
    // function isColumnFull (){

    // }
})
