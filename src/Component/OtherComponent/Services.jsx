import { FaLocationDot } from "react-icons/fa6";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
    const axiosPublic = useAxiosPublic();

    const { data: docData = [], isLoading } = useQuery({
        queryKey: ["docData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getDocData`)
            return res.data;
        }
    })
    console.log(docData);

    return (
        <div className="bg-gradient-to-t from-cyan-200 pb-14">

            <div className="pb-10">
                <h3 className="font-extrabold text-center  text-5xl">Meet Our Specialist</h3>
                <p className="text-center pt-2 text-xl">An introduction to your medical team, detailing their expertise and experience.</p>
            </div>
            <div className="grid grid-cols-4 justify-items-center gap-5 px-16">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-cyan-100"><img className="h-72 w-80 object-cover" src="https://i.ibb.co/WsdhH9K/pngwing-com-6.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dr. Jane Smith!</h2>
                        <p>Cardiologist</p>
                        <hr />
                        <div className="flex gap-2">
                            <div className="flex justify-center items-center">
                                <FaLocationDot></FaLocationDot>
                            </div>
                            <p>Dhaka</p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-cyan-100"><img className="h-72 w-80 object-cover" src="https://i.ibb.co/mqz8wHf/pngwing-com-5.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dr. Jane Smith!</h2>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-cyan-100"><img className="h-72 w-80 object-cover" src="https://i.ibb.co/4dBv64p/pngwing-com-4.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dr. Jane Smith!</h2>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-cyan-100"><img className="h-72 w-80 object-cover" src="https://i.ibb.co/YBY89gP/pngwing-com-3.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dr. Jane Smith!</h2>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-cyan-100"><img className="h-72 w-80 object-cover" src="https://i.ibb.co/JrWc2Cw/pngwing-com-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dr. Jane Smith!</h2>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-cyan-100"><img className="h-72 w-80 object-cover" src="https://i.ibb.co/WsdhH9K/pngwing-com-6.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dr. Jane Smith!</h2>
                        <p>Cardiologist</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;