export function formater(price: number) {
  const formateador = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "MXN",
  });

  return formateador.format(price);
}
