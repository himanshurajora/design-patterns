class Application {}

class ApplicationStarter {
  private application!: Application;

  getApplication() {
    if (!this.application) {
      this.application = new Application();
    }
    return this.application;
  }
}

class TestApp {
  constructor() {}

  start() {
    const starter = new ApplicationStarter();
    const app = starter.getApplication();
  }
}
