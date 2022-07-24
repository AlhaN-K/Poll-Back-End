const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth/index");
class AuthMiddleware {
  static async login(req, res, next) {
    try {
      const { user_name, password } = req.body;
      const user = await UserReader.getUserByUsernameAndPassword(
        user_name,
        password
      );
      if (!user) {
        res.status(401).end();
      } else {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
        const jwt = AuthenticationManager.getJwtToken(payload);
        res
          .cookie("token", jwt.token, {
            httpOnly: true,
            maxAge: jwt.expirySeconds * 1000,
          })
          .end();
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
module.exports = AuthMiddleware;
