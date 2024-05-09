import { Typography } from "@material-tailwind/react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMicroscope, GiTrophyCup } from "react-icons/gi";
import { GrCubes } from "react-icons/gr";
import CountUp from 'react-countup';
import CustomTitle from "../SharedComponent/Title/CustomTitle";

const LabFacility = () => {

  return (
    <div className=" bg-cyan-200 text-gray-900 font-barlow w-full bg-cover bg-no-repeat bg-inherit bg-center relative">
        <div className='w-full bg-dark-blue bg-opacity-90 bg-cover'>
            <div className="py-20 px-2 container mx-auto">
                <div className="flex flex-col items-center text-center justify-center">
                    <CustomTitle title={'CLINICAL SERVICES'} double></CustomTitle>
                </div>
                <div className="max-w-2xl text-center mx-auto">
                    <Typography variant="h2" color="black" className="font-bold">
                        Laboratory Priority Services Delivered
                        We Have Great Skills
                    </Typography>
                </div>
                <div className="grid grid-cols-1 px-12 md:grid-cols-2 lg:grid-cols-4 mt-16">
                    <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                        <FaUserDoctor className="font-bold text-primary-teal text-5xl xl:text-7xl" />
                        <div>
                            <div className=" sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold "><CountUp enableScrollSpy end={320} />+</div>
                            <div className=" font-medium">Permanent Staff</div>
                        </div>
                    </div>
                    <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                        <GiMicroscope className="font-bold text-primary-teal text-5xl xl:text-7xl" />
                        <div>
                            <div className=" sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold "><CountUp enableScrollSpy end={10} />K+</div>
                            <div className=" font-medium">Test Completed</div>
                        </div>
                    </div>
                    <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                        <GiTrophyCup className="font-bold text-primary-teal text-5xl xl:text-7xl" />
                        <div>
                            <div className=" sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold "><CountUp enableScrollSpy end={400} />+</div>
                            <div className=" font-medium">Wining Awards</div>
                        </div>
                    </div>
                    <div className="flex py-5 justify-around items-center border-x border-solid border-white px-4">
                        <GrCubes className="font-bold text-primary-teal text-5xl xl:text-7xl" />
                        <div>
                            <div className=" sm:text-4xl md:text-4xl text-2xl xl:text-4xl font-bold "><CountUp enableScrollSpy end={12} />K+</div>
                            <div className=" font-medium">Years Of Exps.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default LabFacility;
