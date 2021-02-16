class myimageclass{

    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.x = Math.floor(random(100,600));
        this.y = Math.floor(random(100,400));
        
    }
 
 
    
    getImage()
    {
        var myImage = loadImage(this.path);
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