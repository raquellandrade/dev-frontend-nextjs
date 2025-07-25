"use client"
import { ProductsList } from "@/app/components/products/ProductsList";
import { getProducts, deleteProduct, updateProduct, addProduct, } from "@/app/apis/products/products";
import { useEffect, useState } from "react";
import Product from "@/app/model/Product";
import useProcessando from "@/app/data/hooks/useProcessando";
import ProductModal from "./ProductModal";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import LoadingMessage from "../base/LoadingMessage";

export default function ProductsListPage() {
const initialProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
}
  const [products, setProducts] = useState<Product[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando();
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(initialProduct);

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

  async function deleteProductData(id: number) {
    try {
      await deleteProduct(id);
      const filter = productsList.filter((product) => product.id !== id);
      setProducts(filter);
    } catch (error) {
      console.error("Error", error);
    }
  }

  async function updateProductData(id: number, payload: Product) {
    try {
      const response = await updateProduct(id, payload);
      if (response.data) {
        for (let index = 0; index < productsList.length; index++) {
          if (productsList[index].id === id) {
            productsList[index] = payload;
          }
        }
        setProducts(productsList);
      }
    } catch (error) {
      console.error("Error", error);
    }
    setIsOpenModal(false);
  }

  async function addNewProduct(payload: Product) {
    try {
      const response = await addProduct(payload);
      if (response.data) {
        productsList.splice(0, 0, response.data);
        setProducts(productsList);
      }
    } catch (error) {
      console.error("Error", error);
    }
    setIsOpenModal(false);
  }

  function selectProduct(product: Product) {
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(initialProduct);
    setIsOpenModal(false);
  }

  function handleOpenModal(editButtonClicked: boolean) {
    setIsOpenModal(editButtonClicked);
  }

  async function loadProducts() {
    try {
        iniciarProcessamento()
        await getProductsList();
    } finally {
        finalizarProcessamento()
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {processando || !products.length ? (
          <LoadingMessage />
          ) : products.length > 0 ? (
              <>
                <div className="w-full flex justify-between mb-5">
                    <h1 className="w-full lg:mb-4.5 scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
                        Produtos
                    </h1>
                    <button 
                        onClick={() => {
                            setIsOpenModal(true);
                        }}
                        className={`
                            flex cursor-pointer shrink-0 px-3 py-2 lg:mr-6 text-sm font-bold items-center
                            text-center text-white bg-green-700 rounded hover:bg-green-800 focus:ring-4 
                            focus:outline-none focus:ring-green-300 bg-green-600 hover:bg-green-700 focus:ring-green-800
                        `}>
                        <span className="lg:block hidden">Add Novo Produto </span> 
                        <PlusCircleIcon 
                        className="text-white font-bold h-5 w-5 ml-1"
                        aria-hidden="true"/>
                    </button>
                </div>
              
                <ProductsList 
                    products={products} 
                    deleteProduct={deleteProductData}
                    selectProduct={selectProduct} 
                    handleOpenModal={handleOpenModal}
                />
                <ProductModal 
                    product={selectedProduct} 
                    isModalOpen={isModalOpen}
                    handleCloseModal={handleCloseModal} 
                    addNewProduct={addNewProduct} 
                    updateProductData={updateProductData}
                />
              </>
          ) : (
              <div>Nenhum produto encontrado</div>
        )}
    </>
  );
}
