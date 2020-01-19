let formatter =
  Intl.NumberFormat.make(
    ~locales=[|"da-DK"|],
    ~style=Currency({isoCode: "DKK", display: None}),
    (),
  );

let formatPrice = price => Intl.NumberFormat.format(formatter, price /. 100.);

let capitalize = str =>
  (str |> Js.String.charAt(0)) ++ (str |> Js.String.sliceToEnd(~from=1));