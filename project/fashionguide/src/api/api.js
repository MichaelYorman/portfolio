import axios from "axios";

const api=axios.create({
     baseURL: "https://henrijor.com/portfolio/fashionguide",
})

export default api;