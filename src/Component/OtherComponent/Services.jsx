import { FaLocationDot } from "react-icons/fa6";
import useDocData from "../../Hook/useDocData";

const Services = ({ filters }) => {
    const { docData, isLoading, refetch } = useDocData(filters); 

    return (
        <div className="bg-gradient-to-t from-cyan-200 pb-14">
            <div className="pb-10">
                <h3 className="font-extrabold text-center text-5xl">Meet Our Specialist</h3>
                <p className="text-center pt-2 text-xl">An introduction to your medical team, detailing their expertise and experience.</p>
            </div>

            {isLoading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-4 justify-items-center gap-5 px-16">
                    {docData.slice(0, 8).map((data, idx) => (
                        <div key={idx} className="card bg-base-100 shadow-xl">
                            <figure className="bg-cyan-100">
                                <img
                                    className="h-72 w-80 object-cover"
                                    src={data.image}
                                    alt={`Dr. ${data.name}`}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">{data.name}</h2>
                                <p>{data.designation}</p>
                                <hr />
                                <div className="flex gap-2">
                                    <FaLocationDot />
                                    <p>{data.hospital_name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
