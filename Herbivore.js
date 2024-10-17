import { Animal } from './Animal.js'

export class Herbivore extends Animal {
    hidden = false;
  
    hide() {
      this.hidden = true;
    }
  }
  