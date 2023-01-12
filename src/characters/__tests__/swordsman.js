import Swordsman from '../swordsman';

test('test correct Swordsman', () => {
  expect(new Swordsman('swordsman')).toEqual({
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
