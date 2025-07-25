import ProductsListPage from "./components/products/ProductsListPage";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <ProductsListPage />
      </main>
    </>
  );
}
