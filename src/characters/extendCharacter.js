import Character from './character';

export default class extendCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.isStoned = false;
  }

  set stoned(state) {
    this.isStoned = state;
  }

  get stoned() {
    return this.isStoned;
  }

  // set attack(value) {
  //   console.log(value);
  //   this.attack = value;
  // }

  // get distanceAttack() {
  //   return this.stoned ? this.attack : this.attack;
  // }
  turnAttack(distance) {
    const distAttack = this.attack * (1 - (distance - 1) / 10);
    if (distAttack <= 0) {
      return 0;
    }
    if (this.isStoned) {
      const total = Math.round(distAttack - Math.log(distance) * 5);
      return total > 0 ? total : 0;
    }
    return Math.round(distAttack);
  }
}
