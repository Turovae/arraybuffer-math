import Magician from '../Magician';

const magician = new Magician('Uasya');

test('Creating magician', () => {
  expect(magician).toEqual({
    name: 'Uasya',
    type: 'Magician',
    attackValue: undefined,
    distance: undefined,
    isStoned: false,
  });
});
