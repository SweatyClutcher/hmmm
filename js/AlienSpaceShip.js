class AlienSpaceShip{
    constructor(x, y, width, height){
        var options={isStatic : true,
            frictionAir : 0,
            restitution : 0
        }
        this.image = loadImage("images/AlienSpaceShip.png")
        this.image1 = loadImage("images/Hatchling.png")
        this.image2 = loadImage("images/PrimoGeovishap.png")
        this.image3 = loadImage("images/Azdaha.png")
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    invade(){
            a1 = createSprite(displayWidth / 2 + 400, random(100, displayHeight - 100))
            a1.addImage(this.image1)
            a1.scale = 0.1
            a2 = createSprite(displayWidth / 2 + 400, random(100, displayHeight - 100))
            a2.addImage(this.image1)
            a2.scale = 0.1
            a3 = createSprite(displayWidth / 2 + 400, random(100, displayHeight - 100))
            a3.addImage(this.image1)
            a3.scale = 0.1
            a4 = createSprite(displayWidth / 2 + 400, random(100, displayHeight - 100))
            a4.addImage(this.image1)
            a4.scale = 0.1
            a5 = createSprite(displayWidth / 2 + 400, random(100, displayHeight - 100))
            a5.addImage(this.image1)
            a5.scale = 0.1
        drawSprites();
    }
}