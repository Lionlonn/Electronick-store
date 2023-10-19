
import { instance } from '../../../shared/api/instance'



export const ProductApi = {
    getProduct(productId:number) {
        return instance.get(`api/products`).then(response => {
            return response.data
            
        }).catch(error => {
            console.error("Ошибка при выполнении запроса:", error);
        });
    }
   
}


