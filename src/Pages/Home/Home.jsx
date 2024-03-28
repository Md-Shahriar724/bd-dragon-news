import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import MainNews from "../../Components/NewsContent/MainNews";
import RightsideNav from "../../Components/RightSide/RightsideNav";
import LeftSidenav from "../../LeftSide/LeftSidenav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-6">
                <div className="" >
                    <LeftSidenav></LeftSidenav>
                </div>
                <div className="col-span-2 border-2">
                    <MainNews></MainNews>
                </div>
                <div className="">
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;