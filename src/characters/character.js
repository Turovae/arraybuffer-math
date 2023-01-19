export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.attackValue = undefined;
    this.distance = undefined;
    this.isStoned = false;
  }

  get attack() {
    if (!this.attackValue) {
      throw new Error('Атака не определена');
    }
    if (!this.distance) {
      throw new Error('Дистанция не определена');
    }
    const distAttack = this.attackValue * (1 - (this.distance - 1) / 10);
    if (distAttack <= 0) {
      return 0;
    }
    if (this.isStoned) {
      const total = Math.round(distAttack - Math.log2(this.distance) * 5);
      return total > 0 ? total : 0;
    }
    return Math.round(distAttack);
  }

  set attack(value) {
    this.attackValue = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(state) {
    this.isStoned = state;
  }
}
