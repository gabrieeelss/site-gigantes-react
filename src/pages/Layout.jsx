import { Outlet, Link } from "react-router-dom";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";

function Layout() {
    return (
        <>
            <div className="container">
                <Menu />
                <Outlet />
            </div>
            <Rodape />
        </>
    )
};

export default Layout;