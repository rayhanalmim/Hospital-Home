import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDocData = () => {
    
    const axiosPublic = useAxiosPublic();

    const { data: docData = [], isLoading , refetch } = useQuery({
        queryKey: ["DocData"],
        queryFn: async () => {
            const res = await axiosPublic.get('/getDocData')
      
            return res.data;
        }
    })
    return {docData, isLoading, refetch};
};

export default useDocData;