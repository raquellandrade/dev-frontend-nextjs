import Product from "@/app/model/Product";
import Moeda from "@/app/utils/moeda";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface ProductProps {
    product: Product;
}

export default function ProductDetail(props: ProductProps) {
    const { product } = props
    return (
        <div className="font-[sans-serif] bg-white">
      <div className="p-6 mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="flex justify-center px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
              <img
                src={product.image}
                alt="Product"
                className="w-1/3 rounded object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333]">
              {product.title}
            </h2>
            <h2 className="text-lg font-normal text-[#333] mt-2">
              {product.description}
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-[#333] text-4xl font-bold">{Moeda.formatar(product.price)}</p>
            </div>
          
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                type="button"
                className={`
                    min-w-[200px] px-4 py-3 cursor-pointer text-sm font-bold rounded
                    text-white bg-blue-700 inline-flex items-center justify-center
                    rounded hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800
                `}
              >
                Editar
                <PencilIcon
                  className="text-white font-bold h-4 w-4 ml-1"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className={`
                    inline-flex items-center justify-center
                    min-w-[200px] px-4 py-2.5 text-sm font-bold rounded cursor-pointer
                    text-white bg-red-700 rounded hover:bg-red-800 focus:ring-4 
                    focus:outline-none focus:ring-red-300 bg-red-600 hover:bg-red-700 focus:ring-red-800`}
              >
                Excluir
                <TrashIcon
                    className="text-white font-bold h-4 w-4 ml-1"
                    aria-hidden="true"
                 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}