import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function logoutHandler(req, res) {
  const { tokenUser } = req.cookies;
  console.log(tokenUser);
  if (!tokenUser) {
    return res.status(401).json({ error: "no token" });
  }
  try {
    const user = verify(tokenUser, "secret");
    const serialized = serialize("tokenUser", null, {
      httpOnly: true, //en produccion esta cookie no podra ser vista
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", //saber si la cookie viene del mismo dominio
      maxAge: 0, //expiracion de la cookie
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({
      message: "Logout succesfully",
      user: user.username,
      email: user.email,
    });
  } catch (error) {
    return res.status(401).json({ error: "invalid token" });
  }

  return res.json({ data: "session cerrada" });
}
