"use client"
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import ProductsListPage from "./components/products/ProductsListPage";
import { PlusCircleIcon } from "@heroicons/react/24/outline";


export default function Home() {
  return (
    <>
      <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="w-full flex justify-between mb-5">
          <h1 className="w-full lg:mb-4.5 scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
            Produtos
          </h1>
          <div className={`
            flex cursor-pointer shrink-0 px-3 py-2 lg:mr-6 text-sm font-bold items-center
            text-center text-white bg-green-700 rounded hover:bg-green-800 focus:ring-4 
            focus:outline-none focus:ring-green-300 bg-green-600 hover:bg-green-700 focus:ring-green-800
            `}>
            <span className="lg:block hidden">Add Novo Produto </span> 
            <PlusCircleIcon 
              className="text-white font-bold h-5 w-5 ml-1"
              aria-hidden="true"/>
          </div>
        </div>
        <ProductsListPage />
      </main>
    </>
  );
}
