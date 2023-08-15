export function dateFormater() {
  const fecha = new Date();
  const fechaformated = fecha.toLocaleString();

  return fechaformated;
}
