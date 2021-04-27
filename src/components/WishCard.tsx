import { capitalize, formatPrice } from "../helpers";

export interface Wish {
  name: string;
  category: string;
  price?: number;
  link?: string;
  description?: string;
  author?: string;
}

interface Props {
  wish: Wish;
}

function WishCard({ wish }: Props): JSX.Element {
  const { name, category, price, link, description, author } = wish;
  return (
    <section>
      <h2>
        {capitalize(name)} {author != null && <small>af {author}</small>}
      </h2>
      <span>{capitalize(category)}</span>
      {description != null && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
      {price != null ? (
        <p>
          Fundet til <span>{formatPrice(price)}</span>
        </p>
      ) : null}
      <div>
        {link != null && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Se link
          </a>
        )}
      </div>
    </section>
  );
}

export default WishCard;
