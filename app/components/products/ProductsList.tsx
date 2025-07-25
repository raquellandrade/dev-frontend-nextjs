
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import Product from "@/app/model/Product";
import ProductItem from "./ProductItem";

  interface ProductsListProps {
    products: Product[];
    selectProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
    handleOpenModal: (editButtonClicked: boolean) => void;
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
            <ProductItem 
              key={product.id} 
              produto={product} 
              deleteProduct={props.deleteProduct} 
              selectProduct={props.selectProduct} 
              handleOpenModal={props.handleOpenModal}
            />
            ))}
          </TableBody>
        </Table>
      </>
      
    )
  }
  