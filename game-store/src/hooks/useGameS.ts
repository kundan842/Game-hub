import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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

const useGames = () => useData<Game>('/games')


export default useGames;