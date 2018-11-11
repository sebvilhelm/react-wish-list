export const priceSortStates = ['none', 'priceASC', 'priceASC']

export function getSortFunction(a, b, sortBy) {
  switch (sortBy) {
    case priceSortStates[1]:
      return a.price - b.price
    case priceSortStates[2]:
      return (a.price - b.price) * -1
    default:
      return false
  }
}

export function formatPrice(price) {
  const formatter = new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
  })
  return formatter.format(price / 100)
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
