//Class to create characterAttributes attribute image
class characterCanvas{
  // Attribute labels
  String attribute[] = {"Strength", "Dexterity", "Charisma", "Intelligence", "Vitality", "Luck"};
  
  // The attribute visual representation shape object
  PShape s;
  
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
    //Write labels
    fill(0, 102, 153);
    text(attribute[0], 150, 60);
    fill(0, 102, 153);
    text(attribute[1], 15, 125);
    fill(0, 102, 153);
    text(attribute[2], 15, 225);
    fill(0, 102, 153);
    text(attribute[3], 145, 295);
    fill(0, 102, 153);
    text(attribute[4], 285, 225);
    fill(0, 102, 153);
    text(attribute[5], 285, 125);
    //end of writing labels
    shape(s);
    popMatrix();
  }
}
