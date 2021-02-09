class imageclass{

    constructor(dogpath, x, y)
    {
        this.dogpath = dogpath;
        this.x = x;
        this.y = y;
       
    }
 

    
    getImage()
    {
        var myImage = loadImage(this.dogpath);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    setX(x)
    {
        this.x = x;
    }
    setY(y)
    {
        this.y = y;
    }
    }