import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default function loginHandler(req, res) {
  const { email, password } = req.body;
  if (email === "admin@local.local" && password === "Admin123") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: "admin@local.local",
        username: "admin",
      },
      "secret"
    );
    const serialized = serialize("tokenUser", token, {
      httpOnly: true, //en produccion esta cookie no podra ser vista
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", //saber si la cookie viene del mismo dominio
      maxAge: 1000 + 60 * 60 * 24 * 30, //expiracion de la cookie
      path: "/",
    });

    res.setHeader("set-Cookie", serialized);
    return res.json({ message: "login succesfully" });
  }

  return res.status(401).json({ error: "invalid email or password" });
}
