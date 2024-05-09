import { useState } from "react";
import Faqsections from "../FAQ/Faqsections";
import Banner from "../OtherComponent/Banner";
import NavBar from "../OtherComponent/Header/NavBar";
import SearchBar from "../OtherComponent/SearchBar";
import Services from "../OtherComponent/Services";
import Footer from "../SharedComponent/Footer";

const Home = () => {
    const [filters, setFilters] = useState({}); 

    const handleSearch = (newFilters) => {
        setFilters(newFilters); 
    };

    return (
        <div className="bg-slate-100 relative">
            <NavBar />
            <div className="">
                <Banner />
            </div>
            <div className="mx-16 relative pb-0 -top-20">
                <SearchBar onSearch={handleSearch} /> 
            </div>
            <div>
                <Services filters={filters} />
            </div>
            <div className="bg-gradient-to-b from-cyan-200 pb-14">
                <Faqsections />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
