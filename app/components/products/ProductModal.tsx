"use client"
import Product from "@/app/model/Product";
import Moeda from "@/app/utils/moeda";
import NewProduct from "../crud/NewProduct";

interface ProductProps {
    product: Product;
}

export default function ProductModal() {
   // const { product } = props;

    return(
        <div>
            <NewProduct />
        </div>
    );
}