let formatPrice: int => string = [%raw
  "
function(price) {
  const formatter = new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
  })
  return formatter.format(price / 100)
}"
];

let capitalize = str =>
  (str |> Js.String.charAt(0)) ++ (str |> Js.String.sliceToEnd(~from=1));