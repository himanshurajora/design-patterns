class Pizza {
  private dough: string = "";
  private sauce: string = "";
  private topping: string = "";

  setDough(dough: string): void {
    this.dough = dough;
  }

  setSauce(sauce: string): void {
    this.sauce = sauce;
  }

  setTopping(topping: string): void {
    this.topping = topping;
  }
}

abstract class PizzaBuilder {
  protected pizza!: Pizza;

  getPizza() {
    return this.pizza;
  }

  createPizza() {
    this.pizza = new Pizza();
  }

  abstract buildDough(): void;
  abstract buildSauce(): void;
  abstract buildTopping(): void;
}

class PanirPizzaBuilder extends PizzaBuilder {
  buildDough() {
    this.pizza.setDough("Maida Dough");
  }

  buildSauce() {
    this.pizza.setSauce("Hot Sauce");
  }

  buildTopping() {
    this.pizza.setTopping("Panir");
  }
}

class AataCornPizzaBuilder extends PizzaBuilder {
  buildDough() {
    this.pizza.setDough("Aata Dough");
  }

  buildSauce() {
    this.pizza.setSauce("Sweet Sauce");
  }

  buildTopping() {
    this.pizza.setTopping("Corn");
  }
}

class ChickenPizzaBuilder extends PizzaBuilder {
  buildDough() {
    this.pizza.setDough("Maida Dough");
  }

  buildSauce() {
    this.pizza.setSauce("Hot Sauce");
  }

  buildTopping() {
    this.pizza.setTopping("Chicken");
  }
}

class Cook {
  private pizzaBuilder!: PizzaBuilder;

  setPizzaBuilder(pizzaBuilder: PizzaBuilder) {
    this.pizzaBuilder = pizzaBuilder;
  }

  getPizza() {
    return this.pizzaBuilder.getPizza();
  }

  createPizza() {
    this.pizzaBuilder.createPizza();
    this.pizzaBuilder.buildDough();
    this.pizzaBuilder.buildSauce();
    this.pizzaBuilder.buildTopping();
  }
}

class App2 {
  constructor() {
    const panirPizzaBuilder = new PanirPizzaBuilder();
    const aataCornPizzaBuilder = new AataCornPizzaBuilder();
    const chickenPizzaBuilder = new ChickenPizzaBuilder();

    const cook = new Cook();

    // create panir pizza
    cook.setPizzaBuilder(panirPizzaBuilder);
    cook.createPizza();

    const panirPizza = cook.getPizza();

    console.log(panirPizza);

    // create chicken pizza
    cook.setPizzaBuilder(chickenPizzaBuilder);
    cook.createPizza();

    const chickenPizza = cook.getPizza();
    console.log(chickenPizza);
  }
}

new App2();
