class Boxes3{
    constructor(){
        this.body = Bodies.rectangle(500,-25,50,50);
        this.body1 = Bodies.rectangle(500,-75,50,50);
        this.body2 = Bodies.rectangle(500,-125,50,50);
        this.body3 = Bodies.rectangle(500,-175,50,50);
        this.body4 = Bodies.rectangle(500,-225,50,50);
        this.body5 = Bodies.rectangle(500,-275,50,50);
        this.body6 = Bodies.rectangle(500,-325,50,50);
        World.add(world, [this.body,this.body1,this.body2,this.body3,this.body4,this.body5,this.body6]);
    }

    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, 50, 50);
        rect(this.body1.position.x, this.body1.position.y, 50, 50);
        rect(this.body2.position.x, this.body2.position.y, 50, 50);
        rect(this.body3.position.x, this.body3.position.y, 50, 50);
        rect(this.body4.position.x, this.body4.position.y, 50, 50);
        rect(this.body5.position.x, this.body5.position.y, 50, 50);
        rect(this.body6.position.x, this.body6.position.y, 50, 50);
    }
}