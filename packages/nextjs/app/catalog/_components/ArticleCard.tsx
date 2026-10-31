"use client";

import Link from "next/link";
import { Article } from "~~/app/catalog/data/articles";

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="card bg-base-100 shadow-md border border-base-300 h-full flex flex-col">
      <figure className="bg-base-200 h-48 flex items-center justify-center">
        {article.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.image} alt={article.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl">🛍️</div>
        )}
      </figure>
      <div className="card-body flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2">
          <h2 className="card-title text-lg leading-tight flex-grow">{article.name}</h2>
          <span className="badge badge-primary whitespace-nowrap">{article.price}</span>
        </div>
        <p className="text-sm text-base-content/70 flex-grow">{article.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className={`badge badge-sm ${article.inStock !== false ? "badge-success" : "badge-ghost"}`}>
            {article.inStock !== false ? "In Stock" : "Out of Stock"}
          </span>
          <Link href={`/catalog/${article.id}`} className="btn btn-sm btn-outline">
            View Item
          </Link>
        </div>
      </div>
    </article>
  );
};
