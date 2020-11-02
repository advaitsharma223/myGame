class Fighter {

    constructor(x, y, width, height) {

        var options = {

            friction: 1.0,
            restitution: 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;  
        World.add(world, this.body);
        this.image = loadImage("covidWarrior.png");
    }

    display() {

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
