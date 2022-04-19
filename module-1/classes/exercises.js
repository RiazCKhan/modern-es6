/*
Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. 
The characters are located in a 10x10 game field. 
All characters appear at a random location. Create the three classes, 
and make sure you can query where each character is. 
*/

class Character {
  constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
  }

  get position() {
    //Write your code here
  }
}

//Define Player Character and NonPlayerCharacter classes here
class PlayerCharacter extends Character{ }

class NonPlayerCharacter extends Character{ }

function createPlayer(id, name) {
  //Write your code here
}

function createNonPlayer(id, name) {
  //Write your code here
}