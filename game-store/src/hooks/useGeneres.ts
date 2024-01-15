import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Generes
{
    id:number
    name:string
    slug: string
}

const useGeneres = () => useData<Generes>('/genres')


export default useGeneres;