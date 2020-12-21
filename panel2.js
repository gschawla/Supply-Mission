class panel2 {
    constructor(x, y, width, height) {
      var options = {
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      fill("red");
      rect(390,650, this.width, this.height);
      
    }
  };