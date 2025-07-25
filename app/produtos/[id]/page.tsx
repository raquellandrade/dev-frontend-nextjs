"use client"
import ProductDetail from "@/app/components/products/ProductDetail";
import { getProduct } from "@/app/apis/products/products";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Product from "@/app/model/Product";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import useProcessando from "@/app/data/hooks/useProcessando";
import LoadingMessage from "@/app/components/base/LoadingMessage";

export default function ProductPage() {
    const {iniciarProcessamento, finalizarProcessamento} = useProcessando();
    const initialProduct = {
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
    }
    const [product, setProduct] = useState<Product>(initialProduct);
    const params = useParams();
    const id: number = Number(params?.id);
    const [loader, setLoader] = useState(false);

    async function getProductData(id: number) {
        try {
            const response = await getProduct(id);
            if (response.data) {
                setProduct(response.data);
                console.log('produto ', response.data)
            }

        } catch (error) {
            console.error("Error", error);
        }
    }

    async function loadProducts() {
        setLoader(true);
        try {
            iniciarProcessamento()
            await getProductData(id);
        } finally {
            finalizarProcessamento()
        }
        setLoader(false);
      }

    useEffect(() => {
        loadProducts();
    }, [id]);

    return (
        <>
            <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="w-full flex justify-between mb-5">
                    <h1 className="w-full lg:mb-4.5 scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
                        Produtos
                    </h1>
                    <div className="flex items-center shrink-0">
                        <a href="/produtos" className={`
                            flex cursor-pointer shrink-0 px-3 py-2 lg:mr-6 text-sm font-bold items-center
                            text-center border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] rounded
                            `}>
                                <ChevronLeftIcon 
                                className="text-[#333] font-bold h-5 w-5"
                                aria-hidden="true"/>
                            <span className="lg:block hidden">Voltar </span>
                        </a>
                    </div>
                </div>
                {loader ? (
                        <LoadingMessage />
                        ) :  (product?.id ? <ProductDetail product={product} /> : '')
                    }
            </main>
        </>
    )
}