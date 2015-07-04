//Class to create characterAttributes attribute image
class characterAttributes{
  // The characterAttributes attributes 
  int strength;
  int intelligence;
  int dexterity;
  int charisma;
  int vitality;
  int luck;
  
  // Shape of user entered attributes
  PShape input;
  
  float x, y; //x, y coordinates
  
  characterAttributes(int[] attributes){

    //Load characterAttributes
    loadAttributes(attributes);
    
    //generate graph
    genGraph();
  }
  
  void loadAttributes(int[] attributes){
    this.strength     = attributes[0];
    this.intelligence = attributes[1];
    this.dexterity    = attributes[2];
    this.charisma     = attributes[3];
    this.vitality     = attributes[4]; 
    this.luck         = attributes[5];  
  }
  
  void genGraph(){
    int Xorigin = 175;
    int Yorigin = 175;
    
    input = createShape();
    input.beginShape();
    
    input.vertex(  175   , this.strength  );  //v1
    input.vertex(  75 - (int)(this.dexterity * sqrt(2))      , 125 - (int)(this.dexterity * sqrt(2)) );    //v2
    input.vertex(  75 - (int)(this.vitality * sqrt(2))      , 225 + (int)(this.vitality * sqrt(2)) );    //v3
    input.vertex(  175   , 275 + this.intelligence ); //v4
    input.vertex(  275 + (int)(this.charisma * sqrt(2))      , 225 + (int)(this.charisma * sqrt(2)) );    //v5
    input.vertex(  275 + (int)(this.luck * sqrt(2))        , 125 - (int)(this.luck * sqrt(2)) );      //v6
      
    //Shape is complete
    input.endShape(CLOSE);
  }
  
    void display() {
    // Locating and drawing the shape
    pushMatrix();
    translate(x, y);
    shape(input);
    popMatrix();
  }

}
