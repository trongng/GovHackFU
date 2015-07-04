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
   
  characterAttributes(int[] attributes){

    //Load characterAttributes
    loadAttributes(attributes);
    
    //generate graph
    genGraph();
  }
  
  void loadAttributes(int[] attributes){
    this.strength     = attributes[0] * 10;
    this.dexterity    = attributes[2] * 15;
    this.intelligence = attributes[1] * 10;
    this.charisma     = attributes[3] * 15;
    this.vitality     = attributes[4] * 15;  
    this.luck         = attributes[5] * 15;    
  }
  
  void genGraph(){
    int Xorigin = 175;
    int Yorigin = 175;
    
    input = createShape();
    input.beginShape();
    
    //Set the fill and stroke
    input.fill(100,100,255);
    input.noStroke();
    
    //test values
    input.vertex(  Xorigin , Yorigin - this.strength );  //v1
    input.vertex(  Xorigin - (int) (this.dexterity / sqrt(2)), Yorigin + 20 - (int) (this.dexterity / sqrt(2)) );    //v2
    input.vertex(  Xorigin - (int) (this.charisma / sqrt(2)), Yorigin - 20 + (int) (this.charisma / sqrt(2)));    //v3
    input.vertex(  Xorigin , Yorigin + this.intelligence ); //v4
    input.vertex(  Xorigin + (int) (this.vitality / sqrt(2)), Yorigin - 20 + (int) (this.vitality / sqrt(2)));    //v5
    input.vertex(  Xorigin + (int) (this.luck / sqrt(2)), Yorigin + 20 - (int) (this.luck / sqrt(2)));      //v6
      
    //Shape is complete
    input.endShape(CLOSE);
  }
  
    void display() {
    // Locating and drawing the shape
    pushMatrix();
    shape(input);
    popMatrix();
  }
  
  void draw(){
    
    Boolean stop = false;
    while(stop = false){
    }
  }

}
