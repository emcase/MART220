//This is the sketch.jspage

var dog;
var deadDog;
var dogs = [];
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var dogObjects = [];
var dogRunObjects = [];
var dogRunLeftObjects = [];
var catObjects = [];
var catAnimation = [];
var imageObjects = [];
var images = [];
var currentObjects;
var currentAnimation;
var dogSpeed = 2;

var i = 0;
var j = 0;
var k = 0;

// Define the variables that will hold the strings read in from a file
var result;
var runresult;
var runresultleft;
var catresult;
var imageresult;

// Define the variable that will iterate over the animation and objects
var counter = 0;

// Define the variable that will be used when creating an interval
var myInterval;

// Define a variable for to slow the movement animations down
var index = 0;

function preload() {

    {       
        result = loadStrings('assets/characteridle.txt');
        runresult = loadStrings('assets/characterrun.txt');
        runresultleft = loadStrings('assets/characterrunleft.txt');
        catresult = loadStrings('assets/charactercat.txt');
        imageresult = loadStrings('assets/images.txt');
     }
}


function setup() {
// create the canvas
    createCanvas(700, 500);

// create an interval for the idle animation
    myInterval = setInterval(incrementIndex, 50);
    setInterval(incrementKIndex, 20);
    setInterval(incrementIndex, 50);
  
// assign the idle objects to the generic object variable
  currentObjects = dogObjects;

// create the dog idle objects and set the animation array too
  for (var i = 0; i < result.length; i++) 
  {
    dogObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = dogObjects[i].getImage();
  }
 // create movement to the right and left and the animations in this for loop
 for (var i = 0; i < runresult.length; i++) 
 {
   dogRunObjects.push(new imageclass('assets/' + runresult[i], 0, 0));
   runanimation[i] = dogRunObjects[i].getImage();
   dogRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 0, 0));
   leftrunanimation[i] = dogRunLeftObjects[i].getImage();

 }
 // create the cat idle objects and set the animation array too
 for (var i = 0; i < catresult.length; i++) 
 {
   catObjects.push(new imageclass('assets/' + catresult[i], 450, 250));
   catAnimation[i] = catObjects[i].getImage();
 }

 //create the image objects
 for (var i = 0; i < imageresult.length; i++) 
 {
   imageObjects.push(new myimageclass('assets/' + imageresult[i],0,0));
   images[i] = imageObjects[i].getImage();
 }

}
// display all the frames using the draw function as a loop
function draw() 
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

    

  // check to see if any keys have been pressed
  if (keyIsPressed) 
  {
    // stop the idle interval
    clearInterval(myInterval);
    // set the variable to null - we will check for this later
    myInterval = null;

    // use this if statement to slow the movement animations
    index++;
    if (index > 3) 
    {
      incrementIndex();
      index = 0;
    }

    // Dog moves to the right
    if (key == "d") 
    {
      
    // assign the generic animation and object variables
      currentAnimation = runanimation;
      currentObjects = dogRunObjects;

    // make sure we don't go over the size of the arrays
    // keep in mind the idle has 10 and the movement has 8
      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }

      // move the animation by updating the x component
      currentObjects[counter].setX(currentObjects[counter].getX() + 2);

      // make sure you you assign the x component of the left movement too
      for (var i = 0; i < dogRunLeftObjects.length; i++)
      {
        dogRunLeftObjects[i].setX(currentObjects[0].getX());
      }
        

      // make sure the movement object is assigned to the current object again
      dogRunObjects = currentObjects;

      // Dog moves to the left
    } 
    else if (key == "a") 
    {
      currentAnimation = leftrunanimation;
      currentObjects = dogRunLeftObjects;

      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }
      currentObjects[counter].setX(currentObjects[counter].getX() - 2);

      for (var i = 0; i < dogRunObjects.length; i++)
      {
        dogRunObjects[i].setX(currentObjects[0].getX());
      }
        

      dogRunLeftObjects = currentObjects;
    }

    for (var i = 0; i < dogObjects.length; i++)
      dogObjects[i].setX(currentObjects[0].getX());

  } 
  
  // this last part just checks for the idle and resets the animations
  else 
  {
    if (myInterval == null) 
    {
      myInterval = setInterval(incrementIndex, 50);
    
    }
    currentObjects = dogObjects;
    currentAnimation = animation;
  }

if (keyIsPressed) 
{
  // stop the idle interval
  clearInterval(myInterval);
  // set the variable to null - we will check for this later
  myInterval = null;

  // use this if statement to slow the movement animations
  index++;
  if (index > 3) 
  {
    incrementIndex();
    index = 0;
  }

  // Dog moves down
  if (key == "s" ) 
  {
    
  // assign the generic animation and object variables
    currentAnimation = animation;
    currentObjects = dogObjects;

  // make sure we don't go over the size of the arrays
  // keep in mind the idle has 10 and the movement has 8
    if (counter >= currentAnimation.length) 
    {
      counter = 0;
    }

    // move the animation by updating the x component
    currentObjects[counter].setY(currentObjects[counter].getY() + 2);

    // make sure you you assign the x component of the left movement too
    for (var i = 0; i < dogObjects.length; i++)
    {
      dogObjects[i].setY(currentObjects[0].getY());
    }
      

    // make sure the movement object is assigned to the current object again
    dogObjects = currentObjects;

    // Dog moves up
  } 
  else if (key == "w") 
  {
    currentAnimation = animation;
    currentObjects = dogObjects;

    if (counter >= currentAnimation.length) 
    {
      counter = 0;
    }
    currentObjects[counter].setY(currentObjects[counter].getY() - 2);

    for (var i = 0; i < dogObjects.length; i++)
    {
      dogObjects[i].setY(currentObjects[0].getY());
    }
      

    dogObjects = currentObjects;
  }

  for (var i = 0; i < dogObjects.length; i++)
    dogObjects[i].setY(currentObjects[0].getY());

} 

// this last part just checks for the idle and resets the animations
else 
{
  if (myInterval == null) 
  {
    myInterval = setInterval(incrementIndex, 50);
  
  }
  currentObjects = dogObjects;
  currentAnimation = animation;
}
  // display the images regardless of the movement or idle
  image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());

  // Display the cat image
  //translate (catAnimation[k].width/2,height/2);
  image(catAnimation[k], catObjects[k].getX(), catObjects[k].getY());


// display images randomly

  for(var i = 0; i < images.length; i++)
  {
  image(images[i],imageObjects[i].getX(),imageObjects[i].getY());

  }
  
}
function incrementIndex() 
{
  // increment the index
  counter += 1;
  // if we reach the end of the array, start over
  if (counter >= currentObjects.length) 
  {
    counter = 0;
  }
}


function incrementKIndex()
{
     // increment the k index
     k += 1;

     // if we reach the end of the array, start over
     if (k >= catAnimation.length) 
     {
         k = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;
     
     // if we reach the end of the array, start over
     if (j >= runanimation.length) 
     {
         j = 0;
     }
}

