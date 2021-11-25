import type { LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";

interface Wish {
  id: string;
  author?: string;
  category: string;
  description?: string;
  gotten?: boolean;
  hidden?: boolean;
  link?: string;
  name: string;
  price?: number;
}

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

  return json(data);
};

export default function WishList() {
  let data = useLoaderData<LoaderData>();
  return (
    <main>
      <h1>Min ønskeseddel!</h1>
      <pre>{JSON.stringify(data.wishes, null, 2)}</pre>
    </main>
  );
}
