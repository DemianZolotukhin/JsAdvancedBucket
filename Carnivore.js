import { Animal } from './Animal.js'
import { Herbivore } from './Herbivore.js'

export class Carnivore extends Animal {
    bite(toBite) {
      if (toBite instanceof Herbivore && !toBite.hidden) {
        toBite.health -= 50;
      }
  
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
  