//Class to create characterAttributes attribute image
class characterCanvas{
  // The characterAttributes attributes 
  int strength;
  int intelligence;
  int dexterity;
  int charisma;
  int vitality;
  int luck;
  
  // The attribute visual representation shape object
  PShape s;
  
  // User entered attributes
  PShape input;
  
  float x, y; //x, y coordinates
  
  characterCanvas(){
    
    //initialise shape
    initShape();
    
  }

  //Initialise the shape of the object
  void initShape(){
    //Create the shape
    s = createShape();
    s.beginShape();
    
    //Set the fill and stroke
    s.noFill();
    s.stroke(153);
    
    //  Hardcoding the vertices
    /*  350 x 350
      0,0
            v1
         v2    v6
         v3    v5
            v4
                  350,350
    */
    s.vertex(  175   , 75  );  //v1
    s.vertex(  75    , 125 );  //v2
    s.vertex(  75    , 225 );  //v3
    s.vertex(  175   , 275 );  //v4
    s.vertex(  275   , 225 );  //v5
    s.vertex(  275   , 125 );  //v6
    //Shape is complete
    s.endShape(CLOSE);
  }
  
    void display() {
    // Locating and drawing the shape
    pushMatrix();
    translate(x, y);
    shape(s);
    popMatrix();
  }
}
