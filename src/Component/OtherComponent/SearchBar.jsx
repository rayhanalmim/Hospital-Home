import { useState } from "react";
import { FaUserDoctor, FaBriefcaseMedical, FaHospital } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
    
    const [filters, setFilters] = useState({
        hospital_area: "",
        designation: "",
        hospital_name: "",
    });

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(filters); 
        }
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-4 md:grid-cols-7 gap-5 md:gap-2 py-3 pt-6 px-0 md:px-2 lg:px-0 bg-white rounded-lg shadow-2xl">
                <div className="w-full col-span-2 border-r-2 border-gray-400">
                    <div className="flex justify-center items-center gap-2">
                        <FaUserDoctor className="text-4xl text-cyan-800" />
                        <div>
                            <div className="space-y-1 text-sm w-full">
                                <label className="block dark-text-gray-400 pl-5 tracking-wide font-semibold">Select Area</label>
                                <select
                                    className="text-gray-900 w-full font-bold px-4 py-1 rounded-md"
                                    onChange={(e) => handleFilterChange("hospital_area", e.target.value)}
                                >
                                    <option value="">Select Area</option>
                                    <option value="Gulshan">Gulshan</option>
                                    <option value="Dhanmondi">Dhanmondi</option>
                                    <option value="Mirpur">Mirpur</option>
                                    <option value="Savar">Savar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full col-span-2 border-r-2 border-gray-400">
                    <div className="flex justify-center items-center gap-2">
                        <FaBriefcaseMedical className="text-4xl text-cyan-800" />
                        <div>
                            <div className="space-y-1 text-sm w-full">
                                <label className="block dark-text-gray-400 pl-5 tracking-wide font-semibold">Specialist</label>
                                <select
                                    className="text-gray-900 w-full font-bold px-1 md:px-4 py-1 rounded-md"
                                    onChange={(e) => handleFilterChange("designation", e.target.value)}
                                >
                                    <option value="">Select Specialist</option>
                                    <option value="Anesthesiologist">Anesthesiologist</option>
                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Neurologist">Neurologist</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full col-span-2 border-r-2 border-gray-400">
                    <div className="flex justify-center items-center gap-2">
                        <FaHospital className="text-4xl text-cyan-800" />
                        <div>
                            <div className="space-y-1 text-sm w-full">
                                <label className="block dark-text-gray-400 pl-5 tracking-wide font-semibold">Hospital</label>
                                <select
                                    className="text-gray-900 font-bold w-full px-0 md:px-4 py-1 rounded-md"
                                    onChange={(e) => handleFilterChange("hospital_name", e.target.value)}
                                >
                                    <option value="">Select Hospital</option>
                                    <option value="United Hospital">United Hospital</option>
                                    <option value="Ibn Sina Hospital">Ibn Sina Hospital</option>
                                    <option value="Evercare Hospital">Evercare Hospital</option>
                                    <option value="Central Hospital">Central Hospital</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-16 h-14 md:w-20 md:h-16 flex mx-auto justify-center pt-1">
                        <IoSearch
                            className="text-5xl p-2 cursor-pointer rounded-md bg-cyan-800 text-white"
                            onClick={handleSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
