import { useQuery } from "@tanstack/react-query";
import { ClientData } from "../interface/ClientData";
import { AxiosPromise } from "axios";
import axios from "axios";
 
const API_URL = 'http://localhost:8080';

const fetchData = async(): AxiosPromise<ClientData[]> =>  {
    const response = axios.get(API_URL + "/clients/react")

    return (await response); 
}

export function useClientData () {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['client-data'],
        retry: 2
    })

    
    return {
        ...query,
        data: query.data?.data
    }
   

}