import Banner from "../OtherComponent/Banner";
import NavBar from "../OtherComponent/Header/NavBar";


const Home = () => {
    return (
        <div className="bg-slate-100">
            <NavBar></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;