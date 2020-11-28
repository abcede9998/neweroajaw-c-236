class Form{
    constructor(){}
    display(){
    var title=createElement("h2");
    title.html("epic Car Racing Game");
    title.position(width/2+100, 150);
    var input=createInput("enter name");
    var button=createButton("Play");
    var greeting=createElement("h3");
    input.position(width/2+200,height/2);
    button.position(650,height/2);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playercount=playercount+1;
        player.update(name);
        player.updateCount(playercount);
        greeting.html("hello " + name);
        greeting.position(width/2+200,height/2);

    });
    }
}