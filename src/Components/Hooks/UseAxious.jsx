import axios from "axios";

const axiousInstace = axios.create({
    baseURL:'https://techraddarserver.vercel.app'
})

const UseAxious = () => {
    return axiousInstace
};

export default UseAxious;