const { Work } = require('../models');

const works = [
  {
    title: 'باب حديد',
    content: 'صناعة باب حديد لمدخل فيلا بشكل جديد ومتخصص',
    userId: 4,
    image: 'https://i.pinimg.com/originals/fe/ec/8c/feec8c92468abc86dea2acf132ae3c02.jpg',
  },
  {
    title: 'كرسي خشبي',
    content: 'كرسي خشبي جميل مصنوع من خشب الزان والبلوط',
    userId: 5,
    image: 'https://s.alicdn.com/@sc04/kf/HTB1ChYrfEF7MKJjSZFLq6AMBVXaR.jpg_300x300.jpg',
  },
  {
    title: 'باب خشب بشكل جديد',
    content: 'باب خشبي للمدخل بسيط وجميل وبأسعار مناسبه',
    userId: 5,
    image: 'https://pbs.twimg.com/media/CzlRg2HWQAEyGfK.jpg',
  },
  {
    title: 'جبس وديكور',
    content: 'عمل غرفة ضيوف بديكور عصري وجديد وبشكل مميز',
    userId: 6,
    image: 'https://beautifull.cc/wp-content/uploads/2020/05/5363.jpg',
  },
  {
    title: 'تنسيق الحدائق',
    content: 'تصميم وزراعة حديقة شاليه الدار الجديدة منظر راقي وخلاب',
    userId: 7,
    image: 'https://modo3.com/thumbs/fit630x300/19506/1435134316/%D8%AA%D9%86%D8%B3%D9%8A%D9%82_%D8%A7%D9%84%D8%AD%D8%AF%D8%A7%D8%A6%D9%82_%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9.jpg',
  },
  {
    title: 'طبلون كهرباء',
    content: 'الانتهاء من تمديد شبكة كهرباء منزل',
    userId: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HXSvjc5bBxaZmWWZTmQlgN0IAHIAf2kTAA&usqp=CAU',
  },
  {
    title: 'تصميم ملابس',
    content: 'تصميم ملابس جديدة للأطفال',
    userId: 9,
    image: 'https://3tab.net/wp-content/uploads/2020/11/7465.jpg',
  },
  {
    title: 'متوفر كل الألوان',
    content: 'قطعة قماش ناعم قطن 100% والطول حسب الطلب وبسعر منافس',
    userId: 10,
    image: 'https://i.ytimg.com/vi/HqrTpKQ6iSg/maxresdefault.jpg',
  },
  {
    title: 'قصارة ايطاليه',
    content: 'تم بحمد الله الانتهاء من قصارة منزل قصارة ايطالية بألوان مميزة',
    userId: 1,
    image: 'https://jimston-co.com/ar/uploads//images/fc945a5748bd60e9c68a9a60bbabd082.jpg',
  },
  {
    title: 'تبليط ساحة مسجد',
    content: 'بالزخام والجرانيت تم الانتهاء من تبليط ساحة مسجد بعد عمل شاق',
    userId: 2,
    image: 'https://elsahanews.com/wp-content/uploads/2022/02/Capture-38.png',
  },
  {
    title: 'دهانات الحديد',
    content: 'دهان الحديد بلون اسود ونحاسي براق شغل نظيف',
    userId: 6,
    image: 'https://postt.cc/wp-content/uploads/2019/11/2923.jpg',
  },
];

const worksSeeder = async () => {
  await Promise.all(
    works.map(async (work) => {
      const done = await Work.create(work);
      console.log(done.id, ': created');
    }),
  );
};
module.exports = worksSeeder;
