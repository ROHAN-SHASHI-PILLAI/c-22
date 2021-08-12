class rope{
constructor(body1,body2,pointA,pointB)
{

this.pointA=pointA;
this.pointB=pointB;

var options={
bodyA:body1,
bodyB:body2,	
pointB:{x:this.pointA,y:this.pointB}
}

//create rope constraint here
con=Matter.Constraint.create({
pointA:{x:410,y:80},
bodyB:bob1,
length:100,
stiffness:0.1 
}) 
World.add(world,con1);

}
//create display() here 
display(){
var pointA= this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
strokeweight(2);
line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
line(con.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y);
line(con.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y);
line(con.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y);
line(con.pointA.x,con.pointA.y,bob5.position.x,bob5.position.y);
}
}
