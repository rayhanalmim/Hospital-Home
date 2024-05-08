import { FaUserDoctor } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa6";

const SearchBar = () => {
    return (
        <div>
            <div className=" w-full">
                <div className="grid grid-cols-7 gap-1 py-3 pt-6 bg-white rounded-lg shadow-2xl">
                    <div className="w-full col-span-2 border-r-2 border-gray-400">
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex justify-center items-center">
                                <FaUserDoctor className='text-4xl text-cyan-800'></FaUserDoctor>
                            </div>
                            <div>
                                <div className="space-y-1 text-sm w-full">
                                    <label className="block dark-text-gray-400 pl-5 tracking-wide font-semibold">Select Area</label>
                                    <select
                                        className="text-gray-900 w-full font-bold px-4 py-1 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                                    >
                                        <option value="">Select Area</option>
                                        <option value="Gulshan">Gulshan</option>
                                        <option value="Dhanmondi">Dhanmondi</option>
                                        <option value="Mirpur">Mirpur</option>
                                        <option value="Savar">Savar</option>
                                        <option value="Uttara">Uttara</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full col-span-2 border-r-2 border-gray-400">
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex justify-center items-center">
                                <FaBriefcaseMedical className='text-4xl text-cyan-800'></FaBriefcaseMedical>
                            </div>
                            <div>
                                <div className="space-y-1 text-sm w-full">
                                    <label className="block dark-text-gray-400 pl-5 tracking-wide font-semibold">Specialist</label>
                                    <select
                                        className="text-gray-900 w-full font-bold px-4 py-1 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                                    >
                                        <option value="">Select Specialist</option>
                                        <option value="Anesthesiologist">Anesthesiologist</option>
                                        <option value="Cardiologist">Cardiologist</option>
                                        <option value="Cardiothoracic ">Cardiothoracic </option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Endocrinologist">Endocrinologist</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    <div className="w-full col-span-2 border-r-2 border-gray-400">
                        <div className="flex justify-center gap-2">
                            <div className="flex justify-center items-center">
                                <FaHospital className='text-4xl text-cyan-800'></FaHospital>
                            </div>
                            <div>
                                <div className="space-y-1 text-sm w-full">
                                    <label className="block dark-text-gray-400 pl-5 tracking-wide font-semibold">Hospital</label>
                                    <select
                                        className="text-gray-900 font-bold w-full px-4 py-1 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                                    >
                                        <option value="">Select Hospital</option>
                                        <option value="United Hospital">United Hospital</option>
                                        <option value="Ibn Sina Hospital">Ibn Sina Hospital</option>
                                        <option value="Evercare Hospital">Evercare Hospital</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="col-span-2">
                            <div className=" w-20 h-16 flex mx-auto justify-center pt-1">
                                <IoSearch className="text-5xl p-2 cursor-pointer rounded-md bg-cyan-800 text-white"></IoSearch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;