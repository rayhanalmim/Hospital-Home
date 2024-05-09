import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDocData = (filters = {}) => {
    const axiosPublic = useAxiosPublic();

    const { data: docData = [], isLoading, refetch } = useQuery({
        queryKey: ["DocData", filters], 
        queryFn: async () => {
            const queryString = new URLSearchParams(filters).toString(); 
            const res = await axiosPublic.get(`/getDocData?${queryString}`);
            return res.data;
        }
    });

    return { docData, isLoading, refetch };
};

export default useDocData;
