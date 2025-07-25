"use client"
import Id from "@/app/model/id";
import Product from "@/app/model/Product";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface ProductModalProps {
    product: Partial<Product>;
    handleCloseModal: () => void;
    addNewProduct: (product: Product) => void;
    updateProductData: (id: number, payload: Product) => void;
    isModalOpen: boolean;
}

export default function ProductModal(props: ProductModalProps) {
   const { product, handleCloseModal, addNewProduct, updateProductData, isModalOpen } = props;
   const [title, setTitle] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [price, setPrice] = useState<number>(0);
   const [category, setCategory] = useState<string>("");
   const [url, setUrl] = useState<string>("");
   const getId: () => number = () => {
        if(product.id) {
            return product.id;
        } else {
            return Number(Id.newId());
        }
    }
    const id: number = getId();

   useEffect(() => {
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice(0);
    if (product.title) {
        setTitle(product.title);
    }
    if (product.description) {
        setDescription(product.description);
    }
    if (product.category) {
        setCategory(product.category);
    }
    if (product.price) {
        setPrice(product.price);
    }
  }, [product]);

   function handleUploadImage(obj: Blob) {
    const blob = URL.createObjectURL(obj);
    setUrl(blob);
  }

  function handleSubmit() {
    const payload: Product = {
        id: id,
        title: title,
        description: description,
        price: price,
        category: category,
        image: product.image || url
    }
    
    if (product.id) {
      updateProductData(product.id, payload);
    } else {
      addNewProduct(payload);
    }
  }

    return(
        <>
            <div className={`relative z-10 ${!isModalOpen && "hidden"}`}>
                <div
                className="fixed inset-0 bg-gray-500/75 transition-opacity"
                ></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                        className="sm:max-w-[700px] relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6"
                        >
                            <form className={`w-full`} action="#">
                                <div className="w-full border-b border-gray-900/10 pb-12">
                                    <h2 className="w-full scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
                                        {id ? 'Editar produto' : 'Adicionar novo Produto'}
                                    </h2>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="nome" className="block text-sm/6 font-medium text-gray-900">
                                                Nome
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    id="nome"
                                                    name="nome"
                                                    type="nome"
                                                    autoComplete="nome"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="categoria" className="block text-sm/6 font-medium text-gray-900">
                                                Categoria
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="categoria"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    name="categoria"
                                                    type="text"
                                                    autoComplete="categoria"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        {!product.image && (
                                            <div className="col-span-full">
                                                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                                                    Imagem {url}
                                                </label>
                                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                    <div className="text-center">
                                                        <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                                            <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                            >
                                                            <span>Faça o upload</span>
                                                            <input 
                                                                id="file-upload"
                                                                onChange={(e) => {
                                                                    if (!e.target.files) return;
                                                                    handleUploadImage(e.target.files[0])
                                                                }} 
                                                                name="file-upload" 
                                                                type="file" 
                                                                className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">ou arraste um arquivo</p>
                                                        </div>
                                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF até 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                
                                        <div className="col-span-full">
                                            <label htmlFor="preco" className="block text-sm/6 font-medium text-gray-900">
                                                Preço
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="preco"
                                                    value={price}
                                                    onChange={(e) => setPrice(Number(e.target.value))}
                                                    name="preco"
                                                    type="number"
                                                    autoComplete="preco"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="descricao" className="block text-sm/6 font-medium text-gray-900">
                                                Descrição
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="descricao"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    name="descricao"
                                                    rows={3}
                                                    className="block w-full rounded-md bg-white px-3 pt-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button onClick={handleCloseModal} type="button" className="cursor-pointer text-sm/6 font-semibold text-gray-900">
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Salvar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}