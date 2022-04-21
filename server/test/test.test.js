require('env2')('.env');
console.log(process.env.TEST_DB_URL)
test('should first', () => {
  expect(1).toBe(1);
});
