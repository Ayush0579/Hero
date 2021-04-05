class Hero{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 140, 90);
        World.add(world, this.body);
        this.image = loadImage("hero.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 140, 90);
    }

    dragged(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}