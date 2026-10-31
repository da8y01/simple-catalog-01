import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Catalog",
  description: "Browse articles and items in the catalog",
});

const CatalogLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CatalogLayout;
