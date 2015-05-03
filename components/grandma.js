class Grandma {

    constructor(element) {
      this.price = 100;
      this.production = 0.5;
      this.element = element;
    }

    currentPrice(currentQuantity) {
        this.price = 100 + currentQuantity*50;
    }
}
