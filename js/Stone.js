class Stone{
    constructor(x,y,w,h){
        var options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        this.color=color
        World.add(world,this.body)
    }
    show(){
        let walls=this.body.position
        push()
        translate(pos.x,pos.y)
        StrokeWeight(1)
        fill(this.color,"white")
        ellipseMode(CENTER)
        ellipse(0,0,this.w,this.h)
        noStroke()
        pop()
    }
}