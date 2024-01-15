import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T>
{
    count: number
    results: T[]
}

const useData = <T>(endpoint:string) =>
{

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const controller = new AbortController()
    useEffect(() => {
        setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal:controller.signal})
        .then((res) => 
        {setData(res.data.results)
            setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return ;
            setError(err.message)
        setLoading(false)});
         // rteurn cleanup fucntion 
         return ()=> controller.abort();
    }, []);
// setloadin need to be set in finally block no need to use twice in error then in rposne oading should be set false in 
    return {data, error,isLoading}
}

export default useData;