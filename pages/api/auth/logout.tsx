import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function logoutHandler(req: any, res: any) {
  const { tokenUser } = req.cookies;
  console.log(tokenUser);
  if (!tokenUser) {
    return res.status(401).json({ error: "no token" });
  }
  try {
    const user = verify(tokenUser, "secret");
    const serialized = serialize("tokenUser", "null", {
      httpOnly: true, //en produccion esta cookie no podra ser vista
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", //saber si la cookie viene del mismo dominio
      maxAge: 0, //expiracion de la cookie
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    console.log(user);
    res.status(200).json("Logout succesfully");
  } catch (error) {
    return res.status(401).json({ error: "invalid token" });
  }

  return res.json({ data: "session cerrada" });
}
