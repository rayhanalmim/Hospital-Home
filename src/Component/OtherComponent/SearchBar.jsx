import { FaUserDoctor } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div>
            <div className="py-6 bg-white w-full">
                <div className="grid grid-cols-7 gap-1 py-3 rounded-lg shadow-2xl">
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

export default SearchBar;