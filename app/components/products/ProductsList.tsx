"use client"
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import Product from "@/app/model/Product";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";

  interface ProductsListProps {
    products: Product[];
  }
  
  export function ProductsList(props: ProductsListProps) {
    return (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.products.map((product) => (
            <ProductItem key={product.id} produto={product} />
            ))}
          </TableBody>
        </Table>
        <ProductModal />
      </>
      
    )
  }
  