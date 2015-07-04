

class Character{
  public characterAttributes ca;
  public characterCanvas cc;
  //public characterTags ct;
  
  Character(int[] attr, String[] stags){
    //int attr [] = {2,3,4,5,7,4};
    cc = new characterCanvas();
    ca = new characterAttributes(attr);
    //ct = new characterTags(stags);
    
  }

}
