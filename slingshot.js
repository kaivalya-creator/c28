class slingshot{


            constructor(bodyA, pointB){
                var option = {
                    bodyA: bodyA,
                    pointB: pointB,
                    length:10,
                    stiffnes:0.04
                    
                }
                this.sling = Matter.Constraint.create(option)
                World.add(world, this.sling)
            }
display(){
    line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y)
}





}