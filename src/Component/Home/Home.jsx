import Banner from "../OtherComponent/Banner";
import NavBar from "../OtherComponent/Header/NavBar";
import SearchBar from "../OtherComponent/SearchBar";


const Home = () => {
    return (
        <div className="bg-slate-100">
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="mx-10">
            <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default Home;