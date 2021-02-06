class Game 
{


     constructor()
     {



     }

     getState()
     {

          var gameStateRef = database.ref('gameState');
          gameStateRef.on("value",function(data){
               gameState=data.val();
          });

     }

     update(state)
     {

        database.ref('/').update({
             gameState:state
        })  

     }

     async start()
     {

          if(gameState===0)
          {
               player = new Player();
               var playerCountRef=await database.ref('playerCount').once("value");

               if(playerCountRef.exists())
               {

                    playerCount = playerCountRef.val();
                    player.getCount();

               }
               
               form = new Form();
               form.display();

          }
          car1= createSprite(100,200);
          car2= createSprite(300,200);
          car3= createSprite(500,200);
          car4= createSprite(700,200);
          
          car1.addImage(car1Img);
          car2.addImage(car2Img);
          car3.addImage(car3Img);
          car4.addImage(car4Img);
          /*car1 = createSprite (displayWidth/2-400,displayHeight/2,60,60);
          car2 = createSprite (displayWidth/2-300,displayHeight/2,60,60);
          car3 = createSprite (displayWidth/2-200,displayHeight/2,60,60);
          car4 = createSprite (displayWidth/2-100,displayHeight/2,60,60);*/


          cars=[car1,car2,car3,car4]
     }
     
     play()
     {

          form.hide();
          //text("Game Starts ",250,250);
          Player.getPlayerInfo();
          if(allPlayers!==undefined)
          {
               background(groundImg);
               image(bigTrackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
               var index = 0;
               var x = 200;
               var y;
               //var position = 200;
               for(var p in allPlayers)
               {
                    index++;
                    x = x+200;
                    y = displayHeight-allPlayers[p].distance;
                    cars[index-1].x=x;
                    cars[index-1].y=y;

                    if(index === player.index)
                    {

                         cars[index-1].shapeColor="red";
                         //var carShadow = createSprite(cars[index-1].x,cars[index-1].y+50,20,20);
                         //carShadow.shapeColor="red";
                        fill("red")
                        ellipse(x,y,60,60);
                         camera.position.x = displayWidth/2;
                          camera.position.y= cars[index-1].y;

                    }

                        
                         
                    //position = position+20;
                    //text(allPlayers[p].name + ":" + allPlayers[p].distance,200,position);

               }

          }

          if(keyIsDown(UP_ARROW) && player.index!==null)
          {

               player.distance = player.distance + 10;
               player.update();

          }

          if(player.distance>4290)
          {

               gameState = 2;

          }




          drawSprites();

     }

     End()
     {
          console.log("gameEnded");





     }





}




