//This is the sketch.jspage

function setup()
{
    createCanvas(700,500);
}

function draw()
{
    background(249,231,159);
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

    fill(0);
    textSize(25);
    text("Michelle Casey",450,475);
    text("Shapes",50,50);

    // shape 1
    fill(46,139,87);
    circle(250,250,50);

    // shape 2
    fill(240,128,128);
    circle(550,120,70);

    // shape 3
    fill(0,0,205);
    ellipse(100,350,90,180);

    // shape 4
    fill(255,140,0);
    square(40,140,50);

    // shape 5
    fill(32,178,170);
    ellipse(340,140,190,70);

    // shape 6
    fill(230,144,255);
    triangle(110, 255, 138, 200, 166, 255);

    // shape 7
    fill(127,255,0);
    rect(440,340,120,70);

    // shape 8
    fill(0,255,127);
    arc(180, 330, 50, 50, 50, PI + QUARTER_PI);

    // shape 9
    stroke(0,255,255);
    strokeWeight(7);
    line(35, 400, 650, 300);
    
    // shape 10
    fill(255,20,147);
    ellipse(340,290,50,190);

    
}