class Monster{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 265, 235);
        World.add(world, this.body);
        this.image = loadImage("monster.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 265, 235);
    }
}