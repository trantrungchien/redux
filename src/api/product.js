 import { instance } from "./instace";
 export const listProduct = () =>{
     const url =`/product`;
     return instance.get(url);
 }
 export const addProduct = (product) =>{
    const url =`/product`;
    return instance.post(url,product);
}
export const removeProduct = (id) =>{
    const url =`/product/${id}`;
    return instance.delete(url);
}
export const updateProduct = (user) =>{
    const url =`/product/${user.id}`;
    return instance.put(url,user);
}
export const listProductOne = (id) =>{
    const url =`/product/${id}`;
    return instance.get(url);
}
