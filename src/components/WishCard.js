import React from "react";
import { capitalize, formatPrice } from "../helpers";

function WishCard({ wish }) {
  const { name, category, price, link, description, author } = wish;
  return (
    <section>
      <h2>
        {capitalize(name)} {author && <small>af {author}</small>}
      </h2>
      <span>{capitalize(category)}</span>
      {description && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
      {price ? (
        <p>
          Fundet til <span>{formatPrice(price)}</span>
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

export default WishCard;
