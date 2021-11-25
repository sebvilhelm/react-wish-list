import type { LoaderFunction, HeadersFunction } from "remix";
import { useLoaderData, json } from "remix";
import type { Wish } from "~/components/wish";
import { WishCard } from "~/components/wish";

export let headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    "Cache-Control":
      loaderHeaders.get("Cache-Control") ?? "max-age=300, s-maxage=3600",
  };
};

interface WishesData {
  records: ReadonlyArray<{
    id: string;
    fields: Omit<Wish, "id">;
    createdTime: string;
  }>;
}

interface LoaderData {
  wishes: ReadonlyArray<Wish>;
}

export let loader: LoaderFunction = async () => {
  let response = await fetch(
    `https://api.airtable.com/v0/${process.env.WISH_LIST_ID}/Wishes?api_key=${process.env.AIRTABLE_KEY}`,
    {
      headers: { Accept: "application/json" },
    }
  );
  if (!response.ok) {
    throw new Response(response.statusText, {
      status: response.status,
    });
  }

  let responseData: WishesData = await response.json();
  let wishes: ReadonlyArray<Wish> = responseData.records
    .map(({ id, fields }) => ({ id, ...fields }))
    .filter((wish) => !wish.gotten && !wish.hidden)
    .sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });

  let data: LoaderData = { wishes };

  return json(data, {
    headers: {
      "Cache-Control": "max-age=300, s-maxage=3600",
    },
  });
};

export default function WishList() {
  let data = useLoaderData<LoaderData>();
  return (
    <main>
      <h1>Min ønskeseddel!</h1>
      {data.wishes.map((w) => (
        <WishCard key={w.id} wish={w} />
      ))}
    </main>
  );
}
