export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export function modifyBodyClassList(
  className: string,
  method: "add" | "remove"
) {
  const body = document.querySelector("body");
  body?.classList[method](className);
}
