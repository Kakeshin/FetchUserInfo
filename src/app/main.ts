import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const url: string = "https://api.mozambiquehe.re";
const api_key: string = "";
const platform: string = "";
const player_name: string = "";

const options: AxiosRequestConfig = {
    url: `${url}/bridge?auth=${api_key}&player=${player_name}&platform=${platform}`,
    method: "GET",
}

axios(options)
    .then((result) => {
        const data = result.data;
        console.log(data.global);
        console.log(data.total);
    })
    .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
    });