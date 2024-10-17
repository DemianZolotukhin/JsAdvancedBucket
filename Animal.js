export class Animal {
    static alive = [];
  
    health = 100;
    constructor(name) {
      this.name = name;
      Animal.alive.push(this);
    }
  }
  