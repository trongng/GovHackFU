/**
* Character_buildup
* This "file" will be responsible for the following:
* Setup - 
*    Dimensions       :  350, 350
*    BG Color         :  White
*    Attribute shade  :  dependent on the attribute??
*/
Character c1;
int attr[];
void setup(){
  size(350,350, P2D);
  smooth();
  
  //predetermined values
  String stags[] = {"a", "b", "c", "d", "e", "f"};
  
  //Make new character
  c1 = new Character(attr, stags);
}

void draw(){
  background(250);
  
  int [] attr = {7,7,7,2,2,2};
  c1.cc.display();
  c1.ca.display(attr);
  
}


