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
  isOpen: boolean;
  loader: boolean;
}
  
export function ProductsList(props: ProductsListProps) {
  const { products, selectProduct, deleteProduct, handleOpenModal, isOpen, loader} = props;
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
            deleteProduct={deleteProduct} 
            selectProduct={selectProduct} 
            handleOpenModal={handleOpenModal}
            isOpen={isOpen}
            loader={loader}
          />
          ))}
        </TableBody>
      </Table>
    </>
  )
}
  