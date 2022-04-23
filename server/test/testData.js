const testData = {
  user: {
    id: 1,
    first_name: 'صالح',
    last_name: 'معروف',
    email: 'stm1998@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '0592806729',
    whatsapp: '009725928111111106729',
    image:
      'https://lh3.googleusercontent.com/ogw/ADea4I7drtUrcE8MKpdrcG9O2ENkamqSpx_P8ItAFJcz2A',
    description: 'صالح معروف خريج هندسة الحاسوب من الجامعة الإسلامية بغزة',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
    createdAt: '2022-04-23T09:30:30.631Z',
    updatedAt: '2022-04-23T09:30:30.631Z',
    locationId: 1,
  },
  works: [
    {
      id: 9,
      title: 'قصارة ايطاليه',
      content: 'تم بحمد الله الانتهاء من قصارة منزل قصارة ايطالية بألوان مميزة',
      image:
        'https://jimston-co.com/ar/uploads//images/fc945a5748bd60e9c68a9a60bbabd082.jpg',
      createdAt: '2022-04-23T09:30:30.912Z',
      updatedAt: '2022-04-23T09:30:30.912Z',
      userId: 1,
    },
  ],
  locations: {
    id: 1,
    city: 'بيت حانون',
    createdAt: '2022-04-23T09:30:30.541Z',
    updatedAt: '2022-04-23T09:30:30.541Z',
  },
  reviews: [
    {
      id: 1,
      rate: 1,
      content: 'يعمل بشكل جيد ولكن من الممكن ان يكون اضل',
      phone: '0599123412',
      createdAt: '2022-04-23T09:30:30.913Z',
      updatedAt: '2022-04-23T09:30:30.913Z',
      userId: 1,
    },
  ],
  services: [],
};
module.exports = testData;
