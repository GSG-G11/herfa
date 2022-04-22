const { Review } = require('../models');

const reviews = [
  {
    rate: 1,
    content: 'يعمل بشكل جيد ولكن من الممكن ان يكون اضل',
    phone: '0599123412',
    userId: 1,
  },
  {
    rate: 5,
    content: 'مريح في العمل دقيق بالمواعيد ويعمل بمهارة',
    phone: '0599321654',
    userId: 2,
  },
  {
    rate: 3,
    content: 'يعمل بجهد وبدقة عالية ولكن لا يكون جيد بالمواعيد',
    phone: '059649878',
    userId: 3,
  },
  {
    rate: 4,
    content: 'ممتاز ويأتي على المواعيد بشكل جيد',
    phone: '059357951',
    userId: 4,
  },
  {
    rate: 4,
    content: 'يمتلك العديد من المهارات الفنية',
    phone: '059158358',
    userId: 4,
  },
  {
    rate: 4,
    content: 'يعمل بشكل جيد جدا ولكنه يحتاج الى وقت طويل قليلا',
    phone: '059223311',
    userId: 4,
  },
  {
    rate: 2,
    content: 'ليس جيدا',
    phone: '059332211',
    userId: 3,
  },
  {
    rate: 2,
    content: 'ليس جديا بالعمل ويماطل بالمواعيد',
    phone: '059778899',
    userId: 2,
  },
  {
    rate: 1,
    content: 'لا يعرف معنى المواعيد اطلاقا',
    phone: '059998855',
    userId: 3,
  },
  {
    rate: 1,
    content: 'لا يقدر العمل هو فقط يريد ان يستلم مهمة ثم يختفي',
    phone: '059951463',
    userId: 3,
  },
  {
    rate: 5,
    content: 'ماهر جدا جدا جدا جدا',
    phone: '059950022',
    userId: 5,
  },
  {
    rate: 5,
    content: 'ممتاز جدا ودقيق جدا',
    phone: '0592583002',
    userId: 5,
  },
  {
    rate: 1,
    content: 'استيعاب بطيئ',
    phone: '05998530853',
    userId: 6,
  },
  {
    rate: 1,
    content: '.......',
    phone: '0562806729',
    userId: 7,
  },
  {
    rate: 2,
    content: 'هناك من افضل منه بكثير',
    phone: '056852852',
    userId: 8,
  },
  {
    rate: 4,
    content: 'جيدا جدا وماهر في عمله',
    phone: '055852741',
    userId: 9,
  },
  {
    rate: 5,
    content: 'محترف بمعنا الكلمه ',
    phone: '0573232320',
    userId: 10,
  },
  {
    rate: 1,
    content: 'يعمل ولكنه يتعب بسرعة',
    phone: '05981222222',
    userId: 8,
  },
  {
    rate: 5,
    content: 'فناااااااااااااان',
    phone: '0578541268',
    userId: 9,
  },
  {
    rate: 2,
    content: 'جيد جدا ولكن يعمل بشكل عشوائي',
    phone: '0599852123',
    userId: 10,
  },
  {
    rate: 5,
    content: 'محترف جدا وممتاز جدا',
    phone: '0597899512',
    userId: 9,
  },
];

const reviewsSeeder = async () => {
  await Promise.all(
    reviews.map(async (review) => {
      const done = await Review.create(review);
      console.log(done.id, ': created');
    }),
  );
};
module.exports = reviewsSeeder;
