class dustbin{
    constructor(){

	this.rect1 = Bodies.rectangle(500, 610, 20, 100, {isStatic:true});
	World.add(world, this.rect1);
	
	this.rect2 = Bodies.rectangle(700, 610, 20, 100, {isStatic:true});
	World.add(world, this.rect2);

	this.rect3 = Bodies.rectangle(600, 650, 200, 20, {isStatic:true});
    World.add(world, this.rect3);


    }




}