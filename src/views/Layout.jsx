import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout(){
    return (
        <div>
            <Navbar/>
            <section className="">
                <Outlet/>
            </section>
        </div>
    )
}