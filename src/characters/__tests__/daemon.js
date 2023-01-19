import Daemon from '../Daemon';

const daemon = new Daemon('Uasya');

test('Creating daemon', () => {
  expect(daemon).toEqual({
    name: 'Uasya',
    type: 'Daemon',
    attackValue: undefined,
    distance: undefined,
    isStoned: false,
  });
});

test('get attack without attackValue', () => {
  expect(() => daemon.attack).toThrow(new Error('Атака не определена'));
});

test('set attack and get attack without distance', () => {
  daemon.attack = 100;
  expect(() => daemon.attack).toThrow(new Error('Дистанция не определена'));
});

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [5, 60],
  [6, 50],
  [7, 40],
  [8, 30],
  [9, 20],
  [10, 10],
  [11, 0],
  [12, 0],
])(
  'get attack with distance %d without stoned',
  (distance, expected) => {
    daemon.distance = distance;
    expect(daemon.attack).toBe(expected);
  },
);

test('test set / get stoned', () => {
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
});

test.each([
  [1, 100],
  [2, 85],
  [3, 72],
  [4, 60],
  [5, 48],
  [6, 37],
  [7, 26],
  [8, 15],
  [9, 4],
  [10, 0],
  [11, 0],
])(
  'get attack with distance %d with stoned',
  (distance, expected) => {
    daemon.distance = distance;
    expect(daemon.attack).toBe(expected);
  },
);
