export function deleteProductQuery(folio: string) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = JSON.parse(localStorage.getItem("dataRow") || "");
      let arrayDatos: any = [];
      datos.map((dato: any) => {
        dato.id !== folio ? arrayDatos.push(dato) : "";
      });
      resolve(arrayDatos);
    }, 3000);
  });
  return promise;
}
