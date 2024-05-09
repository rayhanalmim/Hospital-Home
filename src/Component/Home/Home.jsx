import { useRef, useState } from "react";
import Faqsections from "../FAQ/Faqsections";
import Banner from "../OtherComponent/Banner";
import NavBar from "../OtherComponent/Header/NavBar";
import SearchBar from "../OtherComponent/SearchBar";
import Services from "../OtherComponent/Services";
import Footer from "../SharedComponent/Footer";
import LabFacility from "../OtherComponent/LabFacility";

const Home = () => {

    const bannerS = useRef();
    const aboutS = useRef();
    const statisticS = useRef();
    const FAQS = useRef();
    const constractS = useRef();

    const scrollHandeler = (elRef) => {
        console.log(elRef)
        window.scrollTo({ top: elRef.current.offsetTop, behavior: 'smooth' })
    }

    const [filters, setFilters] = useState({});

    const handleSearch = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="bg-slate-100 relative">
            <NavBar scrollHandeler={scrollHandeler} bannerS={bannerS} aboutS={aboutS} statisticS={statisticS} FAQS={FAQS} constractS={constractS}></NavBar>

            <div ref={bannerS} className="">
                <Banner />
            </div>
            <div className="mx-1 md:mx-16 pt-6 md:pt-0 relative pb-0 -top-20">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div ref={aboutS}>
                <Services filters={filters} />
            </div>
            <div ref={statisticS}>
                <LabFacility></LabFacility>
            </div>
            <div ref={FAQS} className="bg-gradient-to-b from-cyan-200 pb-14">
                <Faqsections />
            </div>
            <div ref={constractS}>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
