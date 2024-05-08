const chance = require("chance").Chance();

listRestaurant = [];
for (let i = 0; i < 5; i++) {
  listRestaurant[i] = {
    id: i + 1,
    vote: chance.integer({ min: 1, max: 5 }),
    voteNum: chance.integer({ min: 10, max: 30 }),
    name: chance.name({ nationality: 'en' }),
    open_until: chance.integer({ min: 7, max: 12 }),
    address: chance.address,
    average_check: chance.integer({ min: 1000, max: 2000 }),
    description: "European, georgian cuisine",
    img: "nh" + i
  }
}
module.exports = listRestaurant;
