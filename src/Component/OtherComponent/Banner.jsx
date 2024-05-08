import { FaUserDoctor } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
    return (
        <div className="">
            <div className="bg-[url('https://i.ibb.co/q7kthwH/Seek-Png-com-technology-background-png-682869.png')] bg-cover bg-center h-[600px] w-full rounded mb-4">
                <div className="grid grid-flow-col md:grid-flow-row grid-cols-2 gap-3 pt-24">
                    <div className="flex justify-center pt-16 pl-32">
                        <div>
                            <div className="bg-cyan-800 flex justify-center items-center w-40 py-1 rounded-sm">
                                <h3 data-aos="fade-right" className="text-white text-3xl  tracking-wide pt-0">Experience</h3>
                            </div>

                            <div>
                                <p data-aos="fade-left" className="text-black text-4xl font-bold">Excellence <br /> in HealthCare</p>
                            </div>
                            <div>
                                <p>Experience the latest in healthcare technology at <span className="text-rose-600 font-bold">HealthCare</span> . We offer state-of-the-art treatments and personalized care to meet your unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 w-96 flex justify-center items-center ml-32 relative">
                        <img className="z-10" src="https://i.ibb.co/vPjdrpZ/pngegg-1.png" alt="" />
                        <div>
                            <div className="stats shadow absolute top-0 z-0 -right-32">

                                <div className="stat ">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                    </div>
                                    <div className="stat-title">New Users</div>
                                    <div className="stat-value">4,200</div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="stats shadow absolute bottom-0 -left-28">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                    </div>
                                    <div className="stat-title">New Registers</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-28 py-6">
                <div className="grid grid-cols-7 gap-1 p-2">
                    <div className="w-full col-span-2">
                        <div className="flex justify-center gap-2">
                            <div className="flex justify-center items-center">
                                <FaUserDoctor className='text-4xl text-cyan-800'></FaUserDoctor>
                            </div>
                            <div>
                                <div className="space-y-1 text-sm w-full">
                                    <label className="block dark-text-gray-400">Select Area</label>
                                    <select
                                        className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                                    >
                                        <option value="">Select Light Color</option>
                                        <option value="Daylight">Daylight</option>
                                        <option value="Warm">Warm</option>
                                        <option value="Green">Green</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Red">Red</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex justify-center gap-2">
                            <div className="flex justify-center items-center">
                                <FaUserDoctor className='text-4xl text-cyan-800'></FaUserDoctor>
                            </div>
                            <div>
                                <div className="space-y-1 text-sm w-full">
                                    <label className="block dark-text-gray-400">Select Area</label>
                                    <select
                                        className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                                    >
                                        <option value="">Select Light Color</option>
                                        <option value="Daylight">Daylight</option>
                                        <option value="Warm">Warm</option>
                                        <option value="Green">Green</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Red">Red</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex justify-center gap-2">
                            <div className="flex justify-center items-center">
                                <FaUserDoctor className='text-4xl text-cyan-800'></FaUserDoctor>
                            </div>
                            <div>
                                <div className="space-y-1 text-sm w-full">
                                    <label className="block dark-text-gray-400">Select Area</label>
                                    <select
                                        className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                                    >
                                        <option value="">Select Light Color</option>
                                        <option value="Daylight">Daylight</option>
                                        <option value="Warm">Warm</option>
                                        <option value="Green">Green</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Red">Red</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="col-span-2">
                            <div className=" w-20 h-16 flex justify-center items-center">
                                <IoSearch className="text-5xl p-2 rounded-md bg-cyan-800 text-white"></IoSearch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;