class Game {
  constructor({
    lettersWrapper,
    categoryWrapper,
    wordWrapper,
    outputWrapper,
  }) {
      this.lettersWrapper = lettersWrapper
      this.categoryWrapper = categoryWrapper
      this.wordWrapper = wordWrapper
      this.outputWrapper = outputWrapper
  }
  start() {
    console.log("Lets play the game");
  }
}

const Damian = {
    name: 'Damian',
    age: 26,

}

function showName({name, age}){
    console.log(name, age);
}

showName(Damian);
