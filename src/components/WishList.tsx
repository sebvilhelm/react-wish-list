import type { Wish } from "./WishCard";
import { useState, useEffect } from "react";
import WishCard from "./WishCard";
import Spinner from "./Spinner";

type WishStatus = "success" | "loading" | "error";
interface WishState {
  wishes: Wish[];
  error: string | null;
  status: WishStatus;
}

function useWishes(): [
  readonly Wish[],
  { status: WishStatus; error?: string | null }
] {
  const [{ wishes, error, status }, setWishState] = useState<WishState>({
    wishes: [],
    error: null,
    status: "loading",
  });

  useEffect(() => {
    let canceled = false;

    setWishState({ wishes: [], error: null, status: "loading" });

    fetch("/api/get-wishes")
      .then<{ data: { wishes: Wish[] } }>((r) => r.json())
      .then(({ data }) => {
        if (canceled) return;

        setWishState({ wishes: data.wishes, error: null, status: "success" });
      })
      .catch((error) => {
        if (canceled) return;

        setWishState({ wishes: [], error: error.message, status: "error" });
      });

    return function () {
      canceled = true;
    };
  }, []);

  return [wishes, { error, status }];
}

function WishList(): JSX.Element {
  const [wishes, { error, status }] = useWishes();

  if (status === "error") {
    throw error;
  }

  return (
    <div>
      {status === "success" ? (
        wishes.map((wish) => <WishCard key={wish.name} wish={wish} />)
      ) : (
        <Spinner>Henter ønsker</Spinner>
      )}
    </div>
  );
}

export default WishList;
