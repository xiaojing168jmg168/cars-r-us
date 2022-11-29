const sequelize = require('../config/connection');
const seedCars = require('./carData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCars();
  await seedUsers();
  process.exit(0);
};

seedAll();
