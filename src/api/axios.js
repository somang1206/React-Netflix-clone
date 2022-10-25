import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:"d4b4f1e899eac6bca01ee9ddb15dc1f1",
        language:"ko-KR",
    }
});

export default instance;