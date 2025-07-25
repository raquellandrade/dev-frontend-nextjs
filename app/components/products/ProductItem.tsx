"use client"
import Product from "@/app/model/Product";
import {
    TableCell,
    TableRow,
  } from "@/components/ui/table";
import Image from "next/image";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Moeda from "@/app/utils/moeda";
import Link from 'next/link';

interface ProductItemProps {
    produto: Product;
    selectProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
    handleOpenModal: (editButtonClicked: boolean) => void; 
}

export default function ProductItem(props: ProductItemProps) {
    const { produto, selectProduct, deleteProduct, handleOpenModal } = props;
    const editButtonClicked = true;

    return (
      <>
        <TableRow>
          <TableCell className="font-medium">{produto.id}</TableCell>
          <TableCell>
            <Image className="w-[64px] h-[90px]" src={produto.image} width={50} height={80} alt={produto.title} />
            </TableCell>
          <TableCell className="max-w-[500px] whitespace-normal">{produto.title}</TableCell>
          <TableCell>{produto.category}</TableCell>
          <TableCell>{Moeda.formatar(produto.price)}</TableCell>
          <TableCell className="text-right">
            <Link href={`/produtos/${produto.id}`}
                className={`
                inline-flex cursor-pointer items-center px-3 py-2 mr-2
                text-sm font-medium text-center text-white bg-indigo-700 
                rounded hover:bg-indigo-800 focus:ring-4 focus:outline-none 
                focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-800`}>
                Ver
                <EyeIcon
                    className="text-white font-bold h-4 w-4 ml-1"
                    aria-hidden="true"
                  />
            </Link>
            <button 
              onClick={() => {
                handleOpenModal(editButtonClicked);
                selectProduct(produto);
              }}
              className={`
                inline-flex cursor-pointer mr-2 items-center px-3 py-2 
                text-sm font-medium text-center text-white bg-indigo-700 
                rounded hover:bg-indigo-800 focus:ring-4 focus:outline-none 
                focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-800
                `}>
                Editar
                <PencilIcon
                    className="text-white font-bold h-4 w-4 ml-1"
                    aria-hidden="true"
                  />
            </button>
            <button 
            className={`
            inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium 
            text-center text-white bg-red-700 rounded hover:bg-red-800 focus:ring-4 
            focus:outline-none focus:ring-red-300 bg-red-600 hover:bg-red-700 focus:ring-red-800
                `}
                onClick={() => {
                  if(produto.id) {
                    deleteProduct(produto.id);
                  }
                }}
            >
                Excluir
                <TrashIcon
                      className="text-white font-bold h-4 w-4 ml-1"
                      aria-hidden="true"
                  />
            </button>

          </TableCell>
        </TableRow>
      </>
    )
}