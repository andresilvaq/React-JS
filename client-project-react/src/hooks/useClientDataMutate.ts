import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { ClientData } from "../interface/ClientData";
import { AxiosPromise } from "axios";
import axios from "axios";
 
const API_URL = 'http://localhost:8080';

const postData = async(data : ClientData): AxiosPromise<any> =>  {
    const response = axios.post(API_URL + "/clients", data);

    return (await response); 
}

export function useClientDataMutate () {
    const queryClient = useQueryClient ();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data']);
        }
    })

    return mutate;
}