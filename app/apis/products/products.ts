import { Config } from "../../config/config";
import Product from "@/app/model/Product";
import axios from "axios";

export function getProducts() {
    return axios.get(`${Config.API_URL}/products`);
}

export function getProduct(id: number) {
    return axios.get(`${Config.API_URL}/products/${id}`);
}

export function addProduct(payload: Product) {
    return axios.post(`${Config.API_URL}/products`, payload);
}

export function deleteProduct(id: number) {
    return axios.delete(`${Config.API_URL}/products/${id}`);
}

export function updateProduct(id: number, payload: Product) {
    return axios.put(`${Config.API_URL}/products/${id}`, payload);
}

