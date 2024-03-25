abstract class AbstractFactory {
  abstract getTyre(): Tyre;
  abstract getDoor(): Door;

  static getFactory(company: Companies) {
    switch (company) {
      case Companies.Mrf:
        return new MrfFactory();
      case Companies.Ceat:
        return new CeatFactory();
    }
  }
}

abstract class Tyre {}

class MrfTyre extends Tyre {}

class CeatTyre extends Tyre {}

abstract class Door {}

class MrfDoor extends Door {}
class CeatDoor extends Door {}

class MrfFactory extends AbstractFactory {
  getTyre() {
    return new MrfTyre();
  }

  getDoor() {
    return new MrfDoor();
  }
}

enum Companies {
  Mrf,
  Ceat,
}

class CeatFactory extends AbstractFactory {
  getTyre() {
    return new CeatTyre();
  }

  getDoor() {
    return new CeatDoor();
  }
}

class App {
  constructor() {}

  start() {
    const factory = AbstractFactory.getFactory(Companies.Mrf);
    const tyre = factory.getTyre();
    const door = factory.getDoor();
  }
}

const app = new App();
app.start();
