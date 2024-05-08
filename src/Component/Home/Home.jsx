import Faqsections from "../FAQ/Faqsections";
import Banner from "../OtherComponent/Banner";
import NavBar from "../OtherComponent/Header/NavBar";
import SearchBar from "../OtherComponent/SearchBar";
import Services from "../OtherComponent/Services";
import Footer from "../SharedComponent/Footer";


const Home = () => {
    return (
        <div className="bg-slate-100 relative">
            <NavBar></NavBar>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="mx-16 relative pb-0 -top-20">
                <SearchBar></SearchBar>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className="bg-gradient-to-b from-cyan-200 pb-14">
                <Faqsections></Faqsections>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;