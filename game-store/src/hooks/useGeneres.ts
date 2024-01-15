import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";

export interface Generes
{
    id:number
    name:string
    slug: string
}

interface GeneresResponse
{
    count: number
    results: Generes[]
}

const useGeneres = () =>
{

    const [generes, setGeneres] = useState<Generes[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const controller = new AbortController()
    useEffect(() => {
        setLoading(true)
      apiClient
        .get<GeneresResponse>("/genres", {signal:controller.signal})
        .then((res) => 
        {setGeneres(res.data.results)
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
    return {generes, error,isLoading}
}

export default useGeneres;