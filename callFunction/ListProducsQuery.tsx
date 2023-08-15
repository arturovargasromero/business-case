import { v4 } from "uuid";
import { formater } from "../callFunction/FormaterPrice";

export function listProductsQuery() {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = {
        id: v4(),
        fechaAlta: "15/8/2023 1:41:22",
        nombre: "producto prueba",
        cantidad: 2,
        precioUnitario: formater(2000),
        caracteristicas: "sadhahsdkjhasd",
      };
      resolve(data);
    }, 5000);
  });
  return promise;
}
