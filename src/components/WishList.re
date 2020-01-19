[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

type wish = {
  name: string,
  category: string,
  price: float,
  link: option(string),
  description: option(string),
  author: option(string),
};

type state =
  | Pending
  | Success(array(wish))
  | Error(Js.Promise.error);

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => Pending);

  React.useEffect0(() => {
    Js.Promise.(
      fetch("/api/get-wishes")
      |> then_(response => response##json())
      |> then_(jsonResponse => {
           setState(_previousState => Success(jsonResponse##data##wishes));
           Js.Promise.resolve();
         })
      |> catch(err => {
           setState(_previousState => Error(err));
           Js.Promise.resolve();
         })
      |> ignore
    );
    None;
  });

  switch (state) {
  | Pending => <Spinner />
  | _ => <p> {React.string("Hello")} </p>
  };
};