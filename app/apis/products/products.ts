import { Config } from "../../config/config";
import axios from "axios";

export function getProducts() {
    return axios.get(`${Config.API_URL}/products`);
}