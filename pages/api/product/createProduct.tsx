import { v4 } from "uuid";
import { formater } from "@/callFunction/FormaterPrice";
import { dateFormater } from "@/callFunction/FormaterDate";

export default function createProduct(req: any, res: any) {
  const { nombre, cantidad, precioUnitario, descripcion } = req.body;
  const product = {
    id: v4(),
    nombre,
    cantidad,
    precioUnitario: formater(Number(precioUnitario)),
    fechaAlta: dateFormater(),
    descripcion,
  };
  try {
    return res.json({ message: "created product", product });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
}
