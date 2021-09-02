import axios, {Method} from "axios";

const DOMAIN = "";

export const request = (method : Method, url: string) => {
    return axios ({
        method, 
        url: DOMAIN = url,
        headers: {},
        data: {}
    })
    .then((res)=> {return res.data})
    .catch((err) => {return err});
}
