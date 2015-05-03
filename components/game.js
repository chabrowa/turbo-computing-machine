
class Game {

  constructor(element){
    this.cookieElement = new Cookie(document.getElementById('cookie'), this);
    this.cursorElement = new Cursor(document.getElementById('cursors'), this);
    this.grandmasElement = new Grandma(document.getElementById('grandmas'), this);
    this.cursors = 0;
    this.grandmas = 0;
    this.element = element;
    this.element.addEventListener('click', this.currentPrices.bind(this));
  }

  currentPrices() {
    document.getElementById("cursorPrice").innerHTML =  this.cursorElement.currentPrice();
  }

}
