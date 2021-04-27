import type { ReactChild } from "react";
import { useState, useEffect } from "react";

function Spinner({ children }: { children: ReactChild }): JSX.Element {
  const [spinner, setSpinner] = useState("...");

  useEffect(() => {
    let interval = setInterval(() => {
      if (spinner.length >= 3) {
        setSpinner(".");
      } else {
        setSpinner((spinner) => spinner + ".");
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      {children}
      {spinner}
    </div>
  );
}

export default Spinner;
