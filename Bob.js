class Bob
{
    constructor(x)
    {
        var options= 
        {
            'isStatic':false,
            'restitution':0.0,
            'friction':0.9,
            'density':1.4

        }
        //jump()
        //{

        //}

        this.body = Bodies.circle(x,500,50,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push()
        fill("pink");
        strokeWeight(4);
        stroke("red");
        ellipse(pos.x,pos.y,50);
        pop()
    }
    
}