import Product from "@/app/model/Product";
import {
    TableCell,
    TableRow,
  } from "@/components/ui/table";
  import Image from "next/image";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import Moeda from "@/app/utils/moeda";

interface ProductItemProps {
    produto: Product;
}

export default function ProductItem(props: ProductItemProps) {
    const { produto } = props;
    return (
        <TableRow>
        <TableCell className="font-medium">{produto.id}</TableCell>
        <TableCell>
          <Image className="w-auto h-auto" src={produto.image} width={50} height={80} alt={produto.title} />
          </TableCell>
        <TableCell className="max-w-[500px] whitespace-normal">{produto.title}</TableCell>
        <TableCell>{produto.category}</TableCell>
        <TableCell>{Moeda.formatar(produto.price)}</TableCell>
        <TableCell className="text-right">
          <a href="#"
              className={`
              inline-flex cursor-pointer items-center px-3 py-2 mr-2
              text-sm font-medium text-center text-white bg-blue-700 
              rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800`}>
              Ver
              <EyeIcon
                  className="text-white font-bold h-4 w-4 ml-1"
                  aria-hidden="true"
                />
          </a>
          <div className={`
              inline-flex cursor-pointer mr-2 items-center px-3 py-2 
              text-sm font-medium text-center text-white bg-blue-700 
              rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800
              `}>
              Editar
              <PencilIcon
                  className="text-white font-bold h-4 w-4 ml-1"
                  aria-hidden="true"
                />
          </div>
          <div className={`
          inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 
          focus:outline-none focus:ring-red-300 bg-red-600 hover:bg-red-700 focus:ring-red-800
              `}>
              Deletar
          </div>

        </TableCell>
      </TableRow>
    )
}