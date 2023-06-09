import axios from "axios";


const API_TESTING = "https://thehworld-v1.onrender.com/api/web";
const API_STAGING = "";

const API_USE = API_TESTING;


export const getAllCategories = () => {
    return axios.get(`${API_USE}/get/all/categories`)
        .then((res) => {
            console.log("Category - ", res);
            return res.data.category;
        }).catch((err) => {
            console.log(err);
        });
}


export const getAllProductsFromCategory = (cateId) => {
    return axios.get(`${API_USE}/get/all/products/category/${cateId}`)
        .then((res) => {
            return res.data.product
        }).catch((err) => {
            console.log("Error - ", err);
        });
}