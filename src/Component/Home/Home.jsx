import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className=" mt-7 lg:mt-12 px-4 lg:px-20">
            <div>
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-180px)]">
            <Outlet></Outlet>
            </div>
            <div>
           < Footer></Footer>
            </div>
        </div>
    );
};

export default Home;