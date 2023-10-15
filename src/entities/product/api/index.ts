
import { instance } from '../../../shared/api/instance'



export const ProductApi = {
    getProduct() {
        return instance.get(`api/products`).then(response => {
            return console.log(response.data);
            
        }).catch(error => {
            console.error("Ошибка при выполнении запроса:", error);
        });
    }
   
}


