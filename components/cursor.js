class Cursor {

    constructor(element, game) {
      this.basePrice = 10;
      this.production = 0.1;
      this.element = element;
      this.game = game;
      element.addEventListener('click', this.addCursor.bind(this));
    }

    currentPrice() {
      return this.basePrice + this.game.cursors*30;
    }

    addCursor() {
      if(this.game.cookieElement.numberOfCookies >= this.currentPrice() ){
        this.game.cookieElement.updateCookie(this.currentPrice());
        this.game.cursors += 1;
        this.game.cookieElement.cookieCoefficient();
        console.log("cookieElement");
        console.log(this.game.cookieElement);
      }
    }
}
