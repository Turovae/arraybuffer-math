import extendCharacter from './extendCharacter';

export default class Daemon extends extendCharacter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
