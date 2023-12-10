import axios from "axios";

const instance = axios.create({
    baseURL:'https://localhost:5000'
})

const GettingAxious = () => {
   return instance
};

export default GettingAxious;