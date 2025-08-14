import { Outlet, Link } from "react-router-dom";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import WppButton from "../components/WppButton";

function Layout() {
    return (
        <>
            <div className="container">
                <Menu />
                <Outlet />
                <WppButton />
            </div>
            <Rodape />
        </>
    )
};

export default Layout;