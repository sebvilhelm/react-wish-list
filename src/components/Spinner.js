import React, { useState, useEffect } from "react";

function Spinner({ children }) {
  const [spinner, setSpinner] = useState("...");

  useEffect(
    () => {
      let timer = setTimeout(() => {
        if (spinner.length >= 3) {
          setSpinner(".");
        } else {
          setSpinner(spinner + ".");
        }
      }, 500);
      return () => clearTimeout(timer);
    },
    [spinner]
  );

  return (
    <div>
      {children}
      {spinner}
    </div>
  );
}

export default Spinner;
