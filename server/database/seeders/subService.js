const { MainServices } = require('../models');

const subServices = [
  {
    name: 'الحدادة العامة',
    mainServiceId: 1,
  },
  {
    name: 'الابواب',
    mainServiceId: 1,
  },
  {
    name: 'السياج والحماية',
    mainServiceId: 1,
  },
  {
    name: 'شبكات المجاري',
    mainServiceId: 2,
  },
  {
    name: 'المياه الصحية',
    mainServiceId: 2,
  },
  {
    name: 'تمديدات منزلية',
    mainServiceId: 2,
  },
  {
    name: 'الموبيليا',
    mainServiceId: 3,
  },
  {
    name: 'الابواب الخشبية',
    mainServiceId: 3,
  },
  {
    name: 'الطوبار',
    mainServiceId: 4,
  },
  {
    name: 'القصارة',
    mainServiceId: 4,
  },
  {
    name: 'البلاط',
    mainServiceId: 4,
  },
  {
    name: 'ميكانيكا السيارات',
    mainServiceId: 5,
  },
  {
    name: 'كهرباء السيارات',
    mainServiceId: 5,
  },
  {
    name: 'الكهرباء العامة',
    mainServiceId: 6,
  },
  {
    name: 'كهرباء المنازل',
    mainServiceId: 6,
  },
  {
    name: 'الطاقة المتجددة',
    mainServiceId: 6,
  },
  {
    name: 'دهانات',
    mainServiceId: 7,
  },
  {
    name: 'دهانات الحديد',
    mainServiceId: 7,
  },
  {
    name: 'دهانات الاخشاب',
    mainServiceId: 7,
  },
  {
    name: 'الجبس',
    mainServiceId: 7,
  },
  {
    name: 'دراي كلين',
    mainServiceId: 8,
  },
  {
    name: 'تنضيف السجاد',
    mainServiceId: 8,
  },
  {
    name: 'تنظيف المؤسسات',
    mainServiceId: 8,
  },
  {
    name: 'زراعة الاشجار',
    mainServiceId: 9,
  },
  {
    name: 'تشتيل المزارع',
    mainServiceId: 9,
  },
  {
    name: 'رش المبيدات',
    mainServiceId: 9,
  },
  {
    name: 'بيع الاقمشة',
    mainServiceId: 10,
  },
  {
    name: 'الخياطة',
    mainServiceId: 10,
  },
  {
    name: 'تفصيل الملابس',
    mainServiceId: 10,
  },
];

const subServicesSeeder = async () => {
  await Promise.all(
    subServices.map(async (service) => {
      const done = await MainServices.create(service);
      console.log(done.id, ': created');
    }),
  );
};
module.exports = subServicesSeeder;
