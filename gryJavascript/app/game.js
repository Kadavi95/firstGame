import { Quote} from './Quote.js';
class Game {
  currentStep = 0;
  lastStep = 7;

  quotes = [
    {
      text: "Pan Tadeusz",
      category: "Utwór literacki",
    },
    { text: "janko muzykant", 
    category: "Utwór literacki" },
    { text: "akademia pana kleksa",
    category: "Film" },
    { text: "matrix", 
    category: "Film" },
  ];
  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;

    const {text, category} = this.quotes[Math.floor(Math.random()* this.quotes.length)]
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text); 
    
  }
  guess(letter, event) {
    event.target.disabled = true;
    if (this.quote.guess(letter)){
      this.drawQuote();
    } else {
      this.currentStep += 1;
      const step = document.getElementsByClassName('step')[this.currentStep];
      console.log(step);
      step.style.opacity = 1;
      const prevStep = document.getElementsByClassName('step')[this.currentStep - 1];
      prevStep.style.opacity = 0.1;
      if(this.currentStep === this.lastStep){
        this.loosing(); 
      } 
    };
    

  }

  drawLetters(){
    const labelTable = [];
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      labelTable.push(label);
     
    }
    console.log(labelTable);
    labelTable.forEach((item) => {
      const button = document.createElement("button")
      button.innerHTML = item;
      button.addEventListener("click", (event) => {
        this.guess(item, event);
      });
      this.lettersWrapper.appendChild(button);
    });
  }
  drawQuote(){
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content
    if (!content.includes('_')) {
      this.winning()
    }
  }      
  start() {
    const step = document.getElementsByClassName('step')[this.currentStep];
    step.style.opacity = 1;
    this.drawLetters();
    this.drawQuote();
  }
  winning() {
    this.wordWrapper.innerHTML = 'Gratulacje';
    this.lettersWrapper.innerHTML = '';

  }
  loosing() {
    this.wordWrapper.innerHTML = 'Przegrałeś ';
    this.lettersWrapper.innerHTML = '';
  }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output')  
});

game.start()
