//This is the sketch.jspage

// creating variables
var counter = 0;
var shape1X = 250, shape1Y = 250;
var shape2X = 550, shape2Y = 120;
var shape3X = 100, shape3Y = 350;
var shape4X = 40, shape4Y = 140;
var shape5X = 340, shape5Y = 140;
var shape6X = 110, shape6Y = 255;
var shape7X = 440, shape7Y = 340;
var shape8X = 180, shape8Y = 330;
var shape9X = 35, shape9Y = 400;
var shape10X = 340, shape10Y = 290;

var shape1Size = 50;
var shape2Size = 70;
var shape3Sizew = 90;
var shape3Sizeh = 180;
var shape4Size = 50;
var shape5Sizew = 190;
var shape5Sizeh = 70;
var shape7Sizew = 120;
var shape7Sizeh = 70;
var shape8Size = 50;
var shape10Sizew = 50;
var shape10Sizeh = 190;

var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
var redColor5, greenColor5, blueColor5;
var redColor6, greenColor6, blueColor6;
var redColor7, greenColor7, blueColor7;
var redColor8, greenColor8, blueColor8;
var redColor9, greenColor9, blueColor9;
var redColor10, greenColor10, blueColor10;

// create new picture variables

var dogbone;
var dogboneX = 100;
var dogboneY = 100;
var dogboneSpeed = 2;
var paw;
var pawX = 200;
var pawY = 200;
var pawSpeed = 3;
var flower;
var flowerX = 500;
var flowerY = 300;
var flowerSpeed = 2;
var myFont;
var timerText = 0;

function preload()
{
// preload the images and the font here from
// the assets folder

    dogbone = loadImage('Assets/DogBone.png');
    paw = loadImage('Assets/Paw.png');
    flower = loadImage('Assets/Flower.png');
    myFont = loadFont('Assets/PottaOne-Regular.ttf');
}

// set up a random color initially
function setup()
{
    createCanvas(700,500);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);

    setInterval(changeSpeed, 1000);
}

function draw()
{
    background(249,231,159);

    // added all my images after preloading them
    image(dogbone,dogboneX, dogboneY);
    image(paw, pawX, pawY);
    image(flower, flowerX, flowerY);
       
   
    // change the dogbone along the horizontal axis
    dogboneX += dogboneSpeed;
    if(dogboneX >= width - dogbone.width || dogboneX  <= dogbone.width/8)
    {
        dogboneSpeed *= -1;
    }
    // change the paw along the vertical axis
    pawY += pawSpeed;
    if(pawY >= height - paw.height || pawY  <= paw.height/8)
    {
    pawSpeed *= -1;
    }
    // change the flower along a diagonal axis
    
    flowerY += flowerSpeed;
    if(flowerY >= height - flower.height || flowerY  <= flower.height/8)
    {
    flowerSpeed *= -1;
    }
    flowerX += flowerSpeed;
    if(flowerX >= width - flower.width || flowerX  <= flower.width/8)
    {
    flowerSpeed *= -1;
    }
    

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

    //Change Font
    fill(0);
    textFont(myFont);
    textSize(25);
    text("Michelle Casey",450,475);
    text("Shapes",50,50);

    // add the time passed text
    text("Time: " + timerText, 550, 50);
 
    // change the shapes and color over 1000
    if(counter > 1000)
    {
        shape1X = random(100,600);
        shape1Y = random(100,500);
        shape2X = random(100,600);
        shape2Y = random(100,500);
        shape3X = random(100,600);
        shape3Y = random(100,500);
        shape4X = random(100,600);
        shape4Y = random(100,500);
        shape5X = random(100,600);
        shape5Y = random(100,500);
        shape6X = random(100,600);
        shape6Y = random(100,500);
        shape7X = random(100,600);
        shape7Y = random(100,500);
        shape8X = random(100,600);
        shape8Y = random(100,500);
        shape9X = random(100,600);
        shape9Y = random(100,500);
        shape10X = random(100,600);
        shape10Y = random(100,500);
        redColor1 = random(255);
        greenColor1 = random(255);
        blueColor1 = random(255);
        redColor2 = random(255);
        greenColor2 = random(255);
        blueColor2 = random(255);
        redColor3 = random(255);
        greenColor3 = random(255);
        blueColor3 = random(255);
        redColor4 = random(255);
        greenColor4 = random(255);
        blueColor4 = random(255);
        redColor5 = random(255);
        greenColor5 = random(255);
        blueColor5 = random(255);
        redColor6 = random(255);
        greenColor6 = random(255);
        blueColor6 = random(255);
        redColor7 = random(255);
        greenColor7 = random(255);
        blueColor7 = random(255);
        redColor8 = random(255);
        greenColor8 = random(255);
        blueColor8 = random(255);
        redColor9 = random(255);
        greenColor9 = random(255);
        blueColor9 = random(255);
        redColor10 = random(255);
        greenColor10 = random(255);
        blueColor10 = random(255);
        shape1Size = random(100);
        shape2Size = random(100);
        shape3Sizew = random(50);
        shape3Sizeh = random(100);
        shape4Size = random(100);
        shape5Sizew = random(200);
        shape5Sizeh = random(100);
        shape6Size = random(135);
        shape7Sizew = random(200);
        shape7Sizeh = random(100);
        shape8Size = random(100);
        shape10Sizew = random(100);
        shape10Sizeh = random(200);
        counter = 0;
    }
    counter++;
        // shape 1
        fill(redColor1,greenColor1,blueColor1);
        circle(shape1X,shape1Y,shape1Size);

        // shape 2
        fill(redColor2,greenColor2,blueColor2);
        circle(shape2X,shape2Y,shape2Size);

        // shape 3
        fill(redColor3,greenColor3,blueColor3);
        ellipse(shape3X,shape3Y,shape3Sizew,shape3Sizeh);

        // shape 4
        fill(redColor4,greenColor4,blueColor4);
        square(shape4X,shape4Y,shape4Size);

        // shape 5
        fill(redColor5,greenColor5,blueColor5);
        ellipse(shape5X,shape5Y,shape5Sizew,shape5Sizeh);

        // shape 6
        fill(redColor6,greenColor6,blueColor6);
        triangle(shape6X, shape6Y, 138, 200, 166, 255);

        // shape 7
        fill(redColor7,greenColor7,blueColor7);
        rect(shape7X,shape7Y,shape7Sizew,shape7Sizeh);

        // shape 8
        fill(redColor8,greenColor8,blueColor8);
        arc(shape8X, shape8Y, shape8Size, 50, 50, PI + QUARTER_PI);

        // shape 9
        stroke(redColor9,greenColor9,blueColor9);
        strokeWeight(7);
        line(shape9X, shape9Y, 650, 300);

        // shape 10
        fill(redColor10,greenColor10,blueColor10);
        ellipse(shape10X,shape10Y,shape10Sizew,shape10Sizeh);
}


/*
Update the time shown and change the speed 
*/

function changeSpeed() {
    timerText++;
    if (timerText % 5 == 0) {
      dogboneSpeed = random(1,10);
      pawSpeed = random(1,10);
      flowerSpeed = random(1,10);
     
  }
}

    


