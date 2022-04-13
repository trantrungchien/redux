import { instance } from "./instace";
export const list = () =>{
    const url =`/category`;
    return instance.get(url);
}
export const add = (product) =>{
    const url =`/category`;
    return instance.post(url,product);
}
export const update = (user) =>{
    const url =`/category/${user.id}`;
    return instance.put(url,user);
}
export const remove = (id) =>{
    const url =`/category/${id}`;
    return instance.delete(url);
}
export const listOne = (id) =>{
    const url =`/category/${id}`;
    return instance.get(url);
}
