export function createProductQuery(data: any) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const datosActuales = JSON.parse(localStorage.getItem("dataRow") || "");
      localStorage.setItem("dataRow", JSON.stringify([...datosActuales, data]));
      resolve([...datosActuales, data]);
    }, 3000);
  });
  return promise;
}
