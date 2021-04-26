import { useState, useEffect } from "react";
import WishCard from "./WishCard";
import Spinner from "./Spinner";

function useWishes() {
  const [wishes, setWishes] = useState(undefined);
  const [error, setError] = useState(null);

  async function fetchWishes() {
    try {
      const res = await fetch("/api/get-wishes");
      const { data } = await res.json();
      setWishes(data.wishes);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchWishes();
  }, []);

  return [wishes, { error }];
}

function WishList() {
  const [wishes, { error }] = useWishes();

  if (error) {
    throw error;
  }

  return (
    <div>
      {wishes ? (
        wishes.map((wish) => <WishCard key={wish.name} wish={wish} />)
      ) : (
        <Spinner>Henter ønsker</Spinner>
      )}
    </div>
  );
}

export default WishList;
