import Product from "@/app/model/Product";
import { getProducts } from "@/app/apis/products/products";

export async function getProductsList() {
    try {
      const response = await getProducts();
      if(response.data) {
       const productsList = response.data;
       return productsList;
      }
    } catch (error) {
      console.error("Error", error);
    }
  }