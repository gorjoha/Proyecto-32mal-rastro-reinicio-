    class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        this.trayectoria =[];
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
        if(this.body.velocity.x  ){
            var position = [this.body.position.x, this.body.position.y];
            this.trayectoria.push(position);
          }
        for(var i=0; i<this.trayectoria.length; i++){
            console.log("EFEFEGv")
            fill(this.color)
            ellipseMode(RADIUS);
            ellipse(this.trayectoria[i][0],this.trayectoria[i][1],this.r,this.r);
          }
    }

};