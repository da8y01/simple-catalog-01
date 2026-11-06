"use client";

import { ArticleCard } from "./_components/ArticleCard";
import { articles } from "./data/articles";
import { useTranslations } from "next-intl";

const CatalogPage = () => {
  const t = useTranslations("Catalog");

  return (
    <div className="container flex items-center flex-col grow pt-10">
      <div className="px-5 w-full max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">{t("titleCatalog")}</h1>
          <p className="text-lg text-base-content/70">{t("subtitle")}</p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold mb-2">{t("noItemsTitle")}</h2>
            <p className="text-base-content/70">{t("noItemsSubtitle")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pb-16">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
