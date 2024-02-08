// Реализация паттерна "Строитель" для класса

// Необходимо реализовать паттерн "Строитель" для заданного класса.

class User {
  static userObj = {};

  static userName(name: string) {
    this.userObj = { ...this.userObj, name };
    return this;
  }

  static age(age: number) {
    this.userObj = { ...this.userObj, age };
    return this;
  }

  static skills(skills: string[]) {
    this.userObj = { ...this.userObj, skills };
    return this;
  }

  static create() {
    return this.userObj;
  }
}

console.log(User.userName("Bob").age(47).skills(["Coding"]).create()); // User({name: 'Bob', age: 47, skills: ['Coding']})
