const { Location } = require('../models');

const locations = [
  {
    city: 'بيت حانون',
  },
  {
    city: 'بيت لاهيا',
  },
  {
    city: 'معسكر جباليا',
  },
  {
    city: 'جباليا ',
  },
  {
    city: 'غزة',
  },
  {
    city: 'الزهراء',
  },
  {
    city: 'النصيرات',
  },
  {
    city: 'دير البلح',
  },
  {
    city: 'المغازي',
  },
  {
    city: 'البريج',
  },
  {
    city: 'خانيونس',
  },
  {
    city: 'رفح',
  },
];

const locationSeeder = async () => {
  await Promise.all(
    locations.map(async (location) => {
      const done = await Location.create(location);
      console.log(done.id, ': created');
    }),
  );
};
module.exports = locationSeeder;
