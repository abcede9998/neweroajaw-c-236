class Player{
    constructor(){}
    getCount(){
     var playercountref=database.ref("playerCount");
     playercountref.on("value", function(data){
        playercount=data.val();
     });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count,
        });
    }
    update(name){
        var playerIndex="Player-"+playercount;
        database.ref(playerIndex).set({
            name: name,
        })
    }
}