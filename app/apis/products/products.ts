import { Config } from "../../config/config";
import Product from "@/app/model/Product";
import axios from "axios";

export function getProducts() {
    return axios.get(`${Config.API_URL}/products`);
}

export function getProduct(id: number) {
    return axios.get(`${Config.API_URL}/products/${id}`);
}