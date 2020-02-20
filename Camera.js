//create camera for the scrolling feature.
function Camera(game, tank_x, tank_y, width, height) {
    // console.log("ddd");
    // console.log(tank_x);
    this.game = game;
    this.ctx = game.ctx;
    // this.x = 0;
    // this.y = 0;

    this.walls;
    this.buildings;
    this.tanks;
    

    if (tank_x < 300) {
        this.x = 0;
    }
    else if (tank_x > 2000) {
        this.x = 2000;
    }
    else {
        this.x = tank_x - width / 2; // the start x-coordinate
    }

    if (tank_y < 300) {
        this.y = 0;
    }
    else if (tank_y > 2200) {
        this.y = 2200;
    }
    else {
        this.y = tank_y - height / 2; // the start x-coordinate
    }

    


    // this.endX = tank_x + width / 2; // the start x-coordinate
    // this.y = tank_y - height / 2; // the end x-coordinate
    // this.endY = tank_y + height / 2; // the end y-coordinate
    this.width = width; // the end x-coordinate
    this.height = height; // the end y-coordinate
    this.type = "camera";

    Entity.call(this, game, this.x, this.y, this.width, this.height);
}

Camera.prototype = new Entity();
Camera.prototype.constructor = Camera;

Camera.prototype.draw = function() {
    // console.log(this.game.tanks[0].y);
    console.log(this.x);
    this.ctx.beginPath();
    this.ctx.lineWidth = "2";
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(
        this.x - this.game.camera.x,
        this.y - this.game.camera.y,
        this.width,
        this.height
    );


    if (this.game.tanks[0].x >= 2300 && this.game.tanks[0].y >=2300) {
        
        this.ctx.strokeStyle = 'blue';
        this.ctx.fillStyle = 'pink';
        this.ctx.fillRect(this.x - this.game.camera.x,this.y-this.game.camera.y + 400,200,200);
    }
    else{
        this.ctx.strokeStyle = 'blue';
        this.ctx.fillStyle = 'pink';
        this.ctx.fillRect(this.x - this.game.camera.x + 800,this.y-this.game.camera.y + 400,200,200);
    }


    var pixel = 4;
    // walls drawing on the minimap
    for (let i = 0; i < this.walls.length; i++){
        // draw a rectangle for walls with black;
    }
    // buildings drawing on the minimap
    for (let i = 0; i < this.buildings.length; i++){
        // draw a rectangle for a building using brown and a tree using green
    }

    for (let i = 0; i < this.tanks.length; i++) {
        // draw our tank using blue index 0 using a circle;

        // draw enemy tanks or vehicles using red circle.
    }




    // this.ctx.rect(this.startX, this.endX, this.startY, this.endY);
    // this.ctx.stroke();

    Entity.prototype.draw.call(this);
};

Camera.prototype.update = function() {
    if ((this.game.tanks[0].x < 500 || this.game.tanks[0].x > 2000) && 
        (this.game.tanks[0].y < 300 || this.game.tanks[0].y > 2200)) {
            this.x = this.x;
            this.y = this.y;
    }
    else if (this.game.tanks[0].x < 500 || this.game.tanks[0].x > 2000) {
        this.y = this.game.tanks[0].y - this.height / 2;
    }
    else if (this.game.tanks[0].y < 300 || this.game.tanks[0].y > 2200) {
        this.x = this.game.tanks[0].x - this.width / 2;
    }
    else {
        this.x = this.game.tanks[0].x - this.width / 2;
        this.y = this.game.tanks[0].y - this.height / 2;
    }

    // update all components from actual map and tanks
    this.walls = this.game.walls;
    this.buildings = this.game.buildings;
    this.tanks = this.game.tanks;





    // this.endX = this.game.tanks[0].x + this.width / 2;
    
    // this.endY = this.game.tanks[0].y + this.height / 2;
    //this.x = Entity.prototype.update.call(this);



    Entity.prototype.update.call(this);
};