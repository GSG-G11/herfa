const { User } = require('../models');

const users = [
  {
    first_name: 'صالح',
    last_name: 'معروف',
    email: 'stm1998@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '0592806729',
    whatsapp: '009725928111111106729',
    locationId: 1,
    image:
      'https://lh3.googleusercontent.com/ogw/ADea4I7drtUrcE8MKpdrcG9O2ENkamqSpx_P8ItAFJcz2A',
    description: 'صالح معروف خريج هندسة الحاسوب من الجامعة الإسلامية بغزة',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'عبد الله',
    last_name: 'رباح',
    email: 'abdallah897107@gmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '0592897107',
    whatsapp: '00970592897107',
    locationId: 1,
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
    description:
      'عبد لله رباح احد منتسبي برنامج التسريع المهني الدفعة ال11',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'عبد الرحمن',
    last_name: 'كلوسة',
    email: 'abdlrahmankal@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '05928068989729222',
    whatsapp: '059807474',
    locationId: 1,
    image:
      'http://handsontek.net/images/SharePoint/ProfilePicture/Outlook.PNG',
    description: 'انا صبحي اعيش في غزة لدي 5 من الابناء واعيش سعيدا',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'صباح',
    last_name: 'الرابي',
    email: 'sabahrabeye@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '05928069997292222',
    whatsapp: '059544545',
    locationId: 1,
    image:
      'https://image.shutterstock.com/image-photo/closeup-profile-confident-business-woman-260nw-259315901.jpg',
    description: 'اعمل في مهنة الخياطة منذ 20 سنه وقمت  بتفصيل ازياء للمشاهير',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'علي',
    last_name: 'رباح',
    email: 'aliraba7h@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '05928878990672922222',
    whatsapp: '025455589',
    locationId: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx88G-18kUyz_BIdAMZzwdbkkJ1pHa8yhJPA&usqp=CAU',
    description: ' عمري 33 سنة واعيش في مدينة غزة حياتي تسير بشكل عادي',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'محمود',
    last_name: 'الشيخ عيسى',
    email: 'mshe1987@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '0097280654321',
    whatsapp: '0599999999',
    locationId: 1,
    image:
      'https://pngset.com/images/chad-profile-pic-profile-photo-circle-face-person-human-dimples-transparent-png-106767.png',
    description: 'خيرة الاباء في ايدي الابناء ',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'ثروت',
    last_name: 'حسني',
    email: 'hosnitharwat@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '0592548067292222222',
    whatsapp: '0598789012',
    locationId: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRfpo86SB6nHTlhI0FZFHPbdDb-y_QKJuvx6ugVdIEn1chvgrONhKsaG_spVs9sxjv84&usqp=CAU',
    description: 'لسنا الوحيدون ولكننا الافضل',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'عزيز',
    last_name: 'الحلاق',
    email: '7laqpq@hotmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '05928063472922222222',
    whatsapp: '05900022250',
    locationId: 1,
    image:
      'https://lh3.googleusercontent.com/ogw/ADea4I7drtUrcE8MKpdrcG9O2ENkamqSpx_P8ItAFJcz2A',
    description: '20 عاما في الخدمة ',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'سالم',
    last_name: 'سالم',
    email: 'ssadlem@gmail.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '059280er6729222222222',
    whatsapp: '05981475693',
    locationId: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU',
    description: 'الاخذ شيء جميل والعطاء شيء اجمل',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
  {
    first_name: 'عبد العليم',
    last_name: 'النجار',
    email: 'aanajjar@yahoo.com',
    password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
    phone: '009725807878887',
    whatsapp: '0592804030',
    locationId: 1,
    image:
      'https://lh3.googleusercontent.com/ogw/ADea4I7drtUrcE8MKpdrcG9O2ENkamqSpx_P8ItAFJcz2A',
    description: 'اعمل نجارا في شركة التمليك لتجارة الاخشاب',
    facebook_link: 'https://www.facebook.com/profile.php?id=100011094496210',
    instagram_link: 'https://www.instagram.com/salehmarouf/?hl=en',
  },
];

const userSeeder = async () => {
  await Promise.all(
    users.map(async (user) => {
      const done = await User.create(user);
      console.log(done.id, ': created');
    }),
  );
};

module.exports = userSeeder;
