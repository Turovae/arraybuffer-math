import extendCharacter from './extendCharacter';

export default class Magician extends extendCharacter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
