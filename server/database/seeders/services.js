const { MainServices } = require('../models');

const services = [
  {
    name: 'الحدادة',
  },
  {
    name: 'السباكة',
  },
  {
    name: 'النجارة',
  },
  {
    name: 'اعمال البناء',
  },
  {
    name: 'ميكانيكي سيارات',
  },
  {
    name: 'كهربائي',
  },
  {
    name: 'اعمال الدهان والجبس',
  },
  {
    name: 'اعمال التنضيف',
  },
  {
    name: 'حدائق وبستنة',
  },
  {
    name: 'اعمال النسيج',
  },
];

const servicesSeeder = async () => {
  await Promise.all(
    services.map(async (service) => {
      const done = await MainServices.create(service);
      console.log(done.id, ': created');
    }),
  );
};
module.exports = servicesSeeder;
