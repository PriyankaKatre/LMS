import jwt from "jsonwebtoken";

const isAutheticated = async(req, res, next) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not Autheticated",
      });
    }
    let decode = await jwt.verify(token, process.env.SECRATEKEY);
    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Token is not valid",
      });
    }
    req.id = decode.userId;
    next();
  } catch (e) {
    console.log(e);
  }
};

export default isAutheticated;
