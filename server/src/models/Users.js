const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = User = mongoose.model('users',UserSchema);
// export const UserModel = mongoose.model("users", UserSchema);