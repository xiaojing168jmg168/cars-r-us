const User = require('./User');
const Car = require('./Car')

User.hasMany(Car, {
  foreignKey: 'car_id',
});

Car.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Car };
