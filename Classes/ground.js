class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true, density: 1});
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}