import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";

export interface Plateform
{
    id:number
    name:string
    slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Plateform} []
    metacritic:number

  }
  interface GameResponse {
    count: number;
    results: Game[];
  }
const useGames = () =>
{

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const controller = new AbortController()
    useEffect(() => {
        setLoading(true)
      apiClient
        .get<GameResponse>("/games", {signal:controller.signal})
        .then((res) => 
        {setGames(res.data.results)
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
    return {games, error,isLoading}
}

export default useGames;