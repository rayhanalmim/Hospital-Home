import Banner from "../OtherComponent/Banner";
import NavBar from "../OtherComponent/Header/NavBar";
import SearchBar from "../OtherComponent/SearchBar";


const Home = () => {
    return (
        <div className="bg-slate-100">
            <NavBar></NavBar>
            <div className="">
            <Banner></Banner>
            </div>
            <div className="mx-16">
            <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default Home;