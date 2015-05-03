class Cookie {

  constructor(element, game){
    this.numberOfCookies = 0;
    this.cookiesPerSec = 0;
    this.element = element;
    this.game = game;
    element.addEventListener('click', this.clickIncrease.bind(this));
    setInterval(this.cookieIncrease.bind(this), 1000);
  }

  clickIncrease() {
    this.numberOfCookies += 1;
    document.getElementById("cookieNumber").innerHTML = this.numberOfCookies;
  }

  updateCookie(soldCookies) {
    this.numberOfCookies -= soldCookies;
    document.getElementById("cookieNumber").innerHTML = this.numberOfCookies;
  }

  cookieCoefficient() {
    console.log(this.game.cursorElement.production);
    var cursorCoefficient = this.game.cursorElement.production * this.game.cursors;
    this.cookiesPerSec = cursorCoefficient;
    console.log("coeff");
    console.log(cursorCoefficient);
  }

  cookieIncrease() {
    console.log(this.numberOfCookies);
    this.numberOfCookies += this.cookiesPerSec;
    this.updateCookie(0);
  }

}
