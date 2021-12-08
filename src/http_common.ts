import axios from "axios";

export default axios.create({
    baseURL: "http://laravel.phptest.local.com:100/",
    headers: {
        "Content-type": "application/json"
    }
});