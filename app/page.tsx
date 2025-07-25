"use client"
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import ProductsListPage from "./components/products/ProductsListPage";
import { PlusCircleIcon } from "@heroicons/react/24/outline";


export default function Home() {
  return (
    <>
      <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <ProductsListPage />
      </main>
    </>
  );
}
