// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Spinner$ReactWishList from "./Spinner.bs.js";

function WishList(Props) {
  var match = React.useState((function () {
          return /* Pending */0;
        }));
  var setState = match[1];
  React.useEffect((function () {
          fetch("/api/get-wishes").then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    Curry._1(setState, (function (_previousState) {
                            return /* Success */Block.__(0, [jsonResponse.data.wishes]);
                          }));
                    return Promise.resolve(/* () */0);
                  })).catch((function (err) {
                  Curry._1(setState, (function (_previousState) {
                          return /* Error */Block.__(1, [err]);
                        }));
                  return Promise.resolve(/* () */0);
                }));
          return ;
        }), ([]));
  if (typeof match[0] === "number") {
    return React.createElement(Spinner$ReactWishList.make, { });
  } else {
    return React.createElement("p", undefined, "Hello");
  }
}

var make = WishList;

export {
  make ,
  
}
/* react Not a pure module */
