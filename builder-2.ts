class TestObject {
  name: string;
  age: number;
  type: string;
  info: string;
}

class ObjectBuilder {
  private object: TestObject;

  constructor() {
    this.object = new TestObject();
  }

  setName(name: string) {
    this.object.name = name;
    return this;
  }

  setAge(age: number) {
    this.object.age = age;
    return this;
  }

  setType(type: string) {
    this.object.type = type;
    return this;
  }

  setInfo(info: string) {
    this.object.info = info;
    return this;
  }

  build() {
    if (
      !this.object.name ||
      !this.object.age ||
      !this.object.type ||
      !this.object.info
    ) {
      throw new Error(
        "Name, Age, Type and Info are required to build the object"
      );
    }

    return this.object;
  }
}

class Test {
  constructor() {}

  start() {
    const builder = new ObjectBuilder();
    const object = builder
      .setName("John")
      .setAge(30)
      .setType("Human")
      .setInfo("A person who loves to code")
      .build();

    console.log(object);
  }
}
