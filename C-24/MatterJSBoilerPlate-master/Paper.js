class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        World.add(world, this.body)
    }

    display(){
        var paperPos = this.body.position

        push()
        translate(paperPos.x, paperPos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill(123, 109, 96)
        ellipse(0,0,2*this.radius,2*this.radius)
        pop()
    }
}