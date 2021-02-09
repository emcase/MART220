//This is the sketch.jspage

var dog;
var deadDog;
var dogs = [];
var animation = [];
var runanimation = [];
var dogObjects = [];
var dogRunObjects = [];
var deadDogObjects = [];
var deadDogAnimation = [];
var dogSpeed = 2;
var dogX = 100;
var dogY = 100;
var dogwidth = 10;
var i = 0;
var j = 0;
var k = 0;
var x = 0;
var counter = 0;
var edge = false;

function preload() {

    // CHALLENGE - can you make it so we don't have to copy and paste all this?

    // Bring in the dog assets from our folder
    // and create all our objects
    
    dog = new imageclass('assets/Idle (1).png', 0, 0);
    dogObjects[0] = dog;
    dog = new imageclass('assets/Idle (2).png', 0, 0);
    dogObjects[1] = dog;
    dog = new imageclass('assets/Idle (3).png', 0, 0);
    dogObjects[2] = dog;
    dog = new imageclass('assets/Idle (4).png', 0, 0);
    dogObjects[3] = dog;
    dog = new imageclass('assets/Idle (5).png', 0, 0);
    dogObjects[4] = dog;
    dog = new imageclass('assets/Idle (6).png', 0, 0);
    dogObjects[5] = dog;
    dog = new imageclass('assets/Idle (7).png', 0, 0);
    dogObjects[6] = dog;
    dog = new imageclass('assets/Idle (8).png', 0, 0);
    dogObjects[7] = dog;
    dog = new imageclass('assets/Idle (9).png', 0, 0);
    dogObjects[8] = dog;
    dog = new imageclass('assets/Idle (10).png', 0, 0);
    dogObjects[9] = dog;

    // Bring in all the run assets from our folder
    // and create all our objects
    dog = new imageclass('assets/Run (1).png', 0, 0);
    dogRunObjects[0] = dog;
    dog = new imageclass('assets/Run (2).png', 0, 0);
    dogRunObjects[1] = dog;
    dog = new imageclass('assets/Run (3).png', 0, 0);
    dogRunObjects[2] = dog;
    dog = new imageclass('assets/Run (4).png', 0, 0);
    dogRunObjects[3] = dog;
    dog = new imageclass('assets/Run (5).png', 0, 0);
    dogRunObjects[4] = dog;
    dog = new imageclass('assets/Run (6).png', 0, 0);
    dogRunObjects[5] = dog;
    dog = new imageclass('assets/Run (7).png', 0, 0);
    dogRunObjects[6] = dog;
    dog = new imageclass('assets/Run (8).png', 0, 0);
    dogRunObjects[7] = dog;

     // Bring in the deadDog assets from our folder
    // and create all our objects
    
    deadDog = new imageclass('assets/Dead (1).png', 0, 0);
    deadDogObjects[0] = deadDog
    deadDog = new imageclass('assets/Dead (2).png', 0, 0);
    deadDogObjects[1] = deadDog;
    deadDog = new imageclass('assets/Dead (3).png', 0, 0);
    deadDogObjects[2] = deadDog;
    deadDog = new imageclass('assets/Dead (4).png', 0, 0);
    deadDogObjects[3] = deadDog;
    deadDog = new imageclass('assets/Dead (5).png', 0, 0);
    deadDogObjects[4] = deadDog;
    deadDog = new imageclass('assets/Dead (6).png', 0, 0);
    deadDogObjects[5] = deadDog;
    deadDog = new imageclass('assets/Dead (7).png', 0, 0);
    deadDogObjects[6] = deadDog;
    deadDog = new imageclass('assets/Dead (8).png', 0, 0);
    deadDogObjects[7] = deadDog;
    deadDog = new imageclass('assets/Dead (9).png', 0, 0);
    deadDogObjects[8] = deadDog;
    deadDog = new imageclass('assets/Dead (10).png', 0, 0);
    deadDogObjects[9] = deadDog;


    for (var i = 0; i < dogObjects.length; i++) 
    {
        animation[i] = dogObjects[i].getImage(); 
    }

    for(var i = 0; i < dogRunObjects.length; i++)
    {
        runanimation[i] = dogRunObjects[i].getImage();
    }
    for(var i = 0; i < deadDogObjects.length; i++)
    {
        deadDogAnimation[i] = deadDogObjects[i].getImage();
    }
}

// create the canvas
function setup() {

    createCanvas(700, 500);
    setInterval(incrementIndex, 50);
    setInterval(incrementKIndex, 20);
 
}

// display all the frames using the draw function as a loop
function draw() {

    background(0,0,255);
    // upper border
    noStroke();
    fill(215,189,226);
     rect(0,0,700,25);
    // left border
    rect(0,25,25,500);
    // bottom border
    rect(25,475,700,25);
    // right border
    rect(675,25,25,500);

    // draw each frame based on the index in the array
    if(keyIsPressed)
    {
        if(key == "w"|| key == "s" || key == "a" || key == "d")
        {
        // display the image

        image(runanimation[j], dogRunObjects[j].getX(), dogRunObjects[j].getY());
           

       // move the dog along the horizontal axis
       
        dogRunObjects[j].x += dogSpeed; 

       if(dogRunObjects[j].x >= width - dogRunObjects[j].width|| dogRunObjects[j].x <= dogRunObjects[j].width/8)
       {
        dogSpeed *= -1;
        
        }
       
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }

    else
    {
        image(animation[i], dogObjects[i].getX(), dogObjects[i].getY());
    }
    if(key == "x")
    {
        background(0,0,255);

        // upper border
        noStroke();
        fill(215,189,226);
         rect(0,0,700,25);
        // left border
        rect(0,25,25,500);
        // bottom border
        rect(25,475,700,25);
        // right border
        rect(675,25,25,500); 
        
        image(deadDogAnimation[k], deadDogObjects[k].getX(), deadDogObjects[k].getY());
    }
// move the dog along the horizontal axis
       
    }    
function incrementIndex()
{
     // increment the index
     i += 1;
    
     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}
function incrementKIndex()
{
     // increment the k index
     k += 1;

     // if we reach the end of the array, start over
     if (k >= deadDogAnimation.length) {
         k = 0;
     }
}
function incrementRunIndex()
{

     // increment the index
     j += 1;
     
     // if we reach the end of the array, start over
     if (j >= runanimation.length) {
         j = 0;
     }
}


