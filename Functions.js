function isTouching(o1, o2){
    if(o1.x - o2.x < o1.width/2+o2.width/2 && 
      o2.x - o1.x < o1.width/2+o2.width/2 &&
      o1.y - o2.y < o1.height/2+o2.height/2 &&
      o2.y - o1.y < o1.height/2+o2.height/2){
      return true
    } else {
      return false
    }
}
function bounceOff(){
     if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x < rect2.width/2 + rect1.width/2) {
        rect1.velocityX = rect1.velocityX * (-1);
        rect2.velocityX = rect2.velocityX * (-1);
    }
     if (rect1.y - rect2.y < rect2.height/2 + rect1.height/2
      && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
       rect1.velocityY = rect1.velocityY * (-1);
       rect2.velocityY = rect2.velocityY * (-1);
    }
}