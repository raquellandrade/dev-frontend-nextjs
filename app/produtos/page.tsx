"use client"
import Header from "@/app/components/base/Header";
import Footer from "@/app/components/base/Footer";
import { ProductsList } from "@/app/components/products/ProductsList";
import { getProducts } from "@/app/apis/products/products";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Produtos() {
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);

  async function getProductsList() {
    try {
      const response = await getProducts();
      if(response.data) {
        setProducts(response.data);
        setProductsList(response.data);
      }

    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    getProductsList();
  }, []);


  return (
    <div className="">
      <Header />
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
        
        <ProductsList products={products} />
      </main>
      <Footer />
    </div>
  );
}
