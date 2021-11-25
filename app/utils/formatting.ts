const formatter = new Intl.NumberFormat("da-DK", {
  style: "currency",
  currency: "DKK",
});

export function formatPrice(price: number): string {
  return formatter.format(price / 100);
}
