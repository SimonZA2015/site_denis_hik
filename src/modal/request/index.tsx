import axios from "axios";
import env from "../../env";

type TRequestDHCApi<T> = {
    url: string,
    method?: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
    onSuccess?: (response: T) => void
    onError?: (err: {message: string, code: number}) => void
}

const RequestDHCAPi = <T, >({url, method = "GET", body, onError, onSuccess}: TRequestDHCApi<T>): Promise<any> => {
    const res = axios<T>(`${env.baseEndpoint}/${url}`,{
        method,
        headers: {"Access-Control-Allow-Origin": "*"},
        // @ts-ignore
        mode: 'no-cors',
    })
    res
        .then((data) => {
            onSuccess && onSuccess(data as T)
        })
        .catch((error) => {
            onError && onError(error)
        });

    return res
}

export default RequestDHCAPi