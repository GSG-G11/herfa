require('env2')('.env');
// console.log(process.env.TEST_DB_URL.split(5)[0])
test('should first', () => {
  expect(1).toBe(1);
});
