"use client"
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ProductsListPage from "@/app/components/products/ProductsListPage";

export default function Produtos() {
  return (
    <>
      <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <ProductsListPage />
      </main>
    </>
  );
}
