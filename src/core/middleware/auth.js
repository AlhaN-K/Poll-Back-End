const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth/index");

class AuthMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserReader.getUserByUsernameAndPassword(
        username,
        password
      );
      if (!user) {
        res.status(401).end("User not found.");
      } else {
        const payload = {
          id: user.ID,
          username: user.username,
          email: user.email,
        };
        const jwt = AuthenticationManager.getJwtToken(payload);
        res.send(jwt);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = AuthMiddleware.parseAuthorizationToken(
        req.headers.authorization
      );
      if (!jwtToken) {
        throw new Error("Token doesn't exists");
      }
      const payload = AuthenticationManager.getJwtTokenPayload(jwtToken);
      req.jwt_payload = payload;
      next();
    } catch (error) {
      res.status(401).end();
    }
  }
  static parseAuthorizationToken(authorization) {
    if (!authorization) {
      throw new Error("Authorization token not found!");
    }
    const bearer = authorization.split(" ");
    return bearer[1];
  }
}
module.exports = AuthMiddleware;
