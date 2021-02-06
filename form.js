class Form
{

     constructor()
     {
          this.Input = createInput("name");
          this.Button = createButton("Submit");
          this.Reset = createButton("Reset");
          this.Greeting = createElement('h2');

     }

     hide()
     {

          this.Input.hide();
          this.Button.hide();
          this.Greeting.hide();

     }   

     display()
     {

        var Title = createElement('h1');
        Title.html("Car Racing Game");
        Title.position(displayWidth/2-150,displayHeight-875);
        this.Input.position(displayWidth/2-125,displayHeight-600);
        this.Button.position(displayWidth/2-75,displayHeight-550);
        this.Reset.position(displayWidth-100,displayHeight-800);
        
        this.Button.mousePressed(()=>{
             this.Input.hide();
             this.Button.hide();
             player.name = this.Input.value();
               playerCount=playerCount+1;
               player.index = playerCount;
               player.update();
             player.updateCount(playerCount);
             this.Greeting.html("Hello: " + player.name);
             this.Greeting.position(displayWidth/2-75,displayHeight-500);
    
        })
        this.Reset.mousePressed(()=>{

          game.update(0);
          player.updateCount(0);
          
     })
         
          
     }  
   

}








