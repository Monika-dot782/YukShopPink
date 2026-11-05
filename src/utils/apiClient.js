import axios from "axios";

const token = "8|6dHLpqBauzJvfWmlufyc2FkWYvrIOY3PUdhH3vww5b9abbb5";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
    },
});

export default apiClient;