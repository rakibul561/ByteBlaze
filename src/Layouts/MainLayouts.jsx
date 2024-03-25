import { Outlet } from "react-router-dom";
import Navbar from "../Component/Nav";
// import Home from "../Home";
// import Blog from "../Pagse/Blog";
// import Bookmark from "../Pagse/Bookmark";
import Fotter from "../Component/Fotter";


const MainLayouts = () => {
    return (
        <div>
            <div className="h-16"> <Navbar></Navbar>
            </div>

            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet>
                </Outlet>

            </div>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayouts;