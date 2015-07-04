

class Character{
  public characterAttributes ca;
  public characterCanvas cc;
  //public characterTags ct;
  
  Character(int[] attr, String[] stags){
    
    cc = new characterCanvas();
    cc = new characterCanvas(attr);
    //ct = new characterTags(stags);
    
  }

}
