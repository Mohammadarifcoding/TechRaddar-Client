import axios from "axios";

const axiousInstace = axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxious = () => {
    return axiousInstace
};

export default UseAxious;