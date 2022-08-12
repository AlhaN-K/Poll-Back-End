const UserReader = require("./model/read");
const UserCreator = require("./model/create");

class UserController {
  static async getAllUser(req, res, next) {
    try {
      const users = await UserReader.getAllUsers();
      res.send(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const userId = req.params.id;
      if (userId != req.loggedInUser.id) {
        throw new Error("You cannot access others data!!");
      }
      const result = await UserReader.getUserById(userId);
      res.send(result);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  static async createUser(req, res, next) {
    try {
      const userData = req.body;
      const result = await UserCreator.createNewUser(userData);
      res.send(result);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
module.exports = UserController;
