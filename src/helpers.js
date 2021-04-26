export function formatPrice(price) {
  const formatter = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK"
  });
  return formatter.format(price / 100);
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
