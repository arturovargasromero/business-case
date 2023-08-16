import { JwtPayload, verify } from "jsonwebtoken";

export default function profileHandler(req: any, res: any) {
  const { tokenUser } = req.cookies;

  try {
    const user: any = verify(tokenUser, "secret");
    return res.json({ email: user.email, user: user.username });
  } catch (error) {
    return res
      .status(401)
      .json({ error: "invalid email or password", email: "", user: "" });
  }
}
