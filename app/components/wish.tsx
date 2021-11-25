import { formatPrice } from "~/utils/formatting";

export interface Wish {
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

interface WishCardProps {
  wish: Wish;
}
export function WishCard({ wish }: WishCardProps): JSX.Element {
  const { name, category, price, link, description, author } = wish;
  return (
    <section className="wish-card">
      <header className="wish_card_header">
        <h2 className="wish-card_title">
          {name} {author && <small>af {author}</small>}
        </h2>
        <span className="wish-card_category">{category}</span>
      </header>
      {description && (
        <div className="wish-card_description">
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
      {price ? (
        <p>
          Fundet til{" "}
          <span className="wish-card_price">{formatPrice(price)}</span>
        </p>
      ) : null}
      <div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Se link
          </a>
        )}
      </div>
    </section>
  );
}
