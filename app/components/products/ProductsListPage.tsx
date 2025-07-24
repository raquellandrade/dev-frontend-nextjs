"use client"
import { ProductsList } from "@/app/components/products/ProductsList";
import { getProducts } from "@/app/apis/products/products";
import { useEffect, useState } from "react";
import Product from "@/app/model/Product";
import useProcessando from "@/app/data/hooks/useProcessando";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  function handleCloseModal() {
    setSelectedProduct(initialProduct);
    setIsOpenModal(false);
    setIsOpen(false);
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
    {processando ? (
        <div>Carregando...</div>
        ) : products.length > 0 ? (
            <ProductsList products={products} />
        ) : (
            <div>Nenhum produto encontrado</div>
        ) 
    }
    </>
  );
}
