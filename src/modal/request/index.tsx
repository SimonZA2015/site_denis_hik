import {REQUEST_SERVER} from "../configs/backend";

type TRequestDHCApi<T> = {
    url: string,
    method?: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
    onSuccess?: (response: T) => void
    onError?: (err: {message: string, code: number}) => void
}

const RequestDHCAPi = <T,>({url, method = "GET", body, onError, onSuccess}: TRequestDHCApi<T>): Promise<any>  => {
    const pr = fetch(`${REQUEST_SERVER}${url}`, {
        method: method,
        body: body,
        mode: "cors",
        headers: {"Access-Control-Allow-Origin": "*"}
    })
        pr
        .then((response) => response.json())
        .then((data) => {
            onSuccess && onSuccess(data as T)
        })
        .catch((error) => {
            onError && onError(error )
        });

    return pr
}

export default RequestDHCAPi