import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
const WishList = lazy(() => import("./components/WishList"));

function App() {
  return (
    <main>
      <header>
        <h1>Sebastians Ønskeseddel</h1>
      </header>
      <Suspense fallback={<Spinner />}>
        <WishList />
      </Suspense>
    </main>
  );
}

export default App;
