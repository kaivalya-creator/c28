class paper{
    constructor(x, y){
    var options = {
        density:1.2
    }
        this.body = Bodies.circle(x, y, 25, options);

        World.add(world, this.body);
        this.image = loadImage("paper.png")
    }
   



display(){

imageMode(CENTER)
image(this.image, this.body.position.x, this.body.position.y, 25, 25)

}
 




}