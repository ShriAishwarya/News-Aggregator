import axios from "axios";

const URI='http://localhost:9999'

const getProduct = () => axios.get(`${URI}/product/get`)
const adduser = (product) => axios.post(`${URI}/set`,product)
const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editProduct = (id,product)=>axios.put(`${URI}/product/edit/${id}`,product)
const deleteProduct=(id)=>axios.delete(`${URI}/product/delete/${id}`)

export {getProduct,getProductbyId,adduser,editProduct,deleteProduct}