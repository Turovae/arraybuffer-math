import Character from './character';

export default class extendCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
  }

  set stoned(state) {
    this._stoned = state;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    console.log(value);
    this.attack = value;
  }

  get distanceAttack() {
    return this.stoned ? this.attack : this.attack;
  }
}
