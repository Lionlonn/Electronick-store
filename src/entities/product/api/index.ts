
import { instance } from 'shared/api'

export type ProductItem = {
    name: string;
    category: string;
    id: number;
    price:number;
    rating:number;
    img: string[];
    favorite: boolean;
    info: string;
}


export const ProductApi = {
    getProduct() {
        return instance.get(`api/products`).then(response => {
            return response.data
            
        }).catch(error => {
            console.error("Ошибка при выполнении запроса:", error);
        });
    }
   
}


