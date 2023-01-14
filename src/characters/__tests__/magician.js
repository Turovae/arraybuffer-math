import Magician from '../magician';

test('test correct magician', () => {
  expect(new Magician('magician')).toEqual({
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    isStoned: false,
  });
});

test('test magician get stoned property', () => {
  const magician = new Magician('magician');
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
});

test.each([
  [1, 10],
  [2, 9],
  [3, 8],
  [4, 7],
  [5, 6],
  [6, 5],
  [7, 4],
  [8, 3],
  [9, 2],
  [10, 1],
  [11, 0],
  [12, 0],
])(
  'test magician attack with distance %d without stoned',
  (distance, expected) => {
    expect(new Magician('magician').turnAttack(distance)).toBe(expected);
  },
);

test.each([
  [1, 10],
  [2, 6],
  [3, 3],
  [4, 0],
  [5, 0],
])(
  'test magician attack with distance %d with stoned',
  (distance, expected) => {
    const magician = new Magician('magician');
    magician.stoned = true;
    expect(magician.turnAttack(distance)).toBe(expected);
  },
);
