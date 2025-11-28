import { Outlet } from "react-router-dom";
import NavBar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";

export default function AppLayout({ }) {
    return (
        <div className="min-h-screen flex flex-col bg-surface">
            <NavBar></NavBar>
            <main className="flex-1">
                <Outlet />
            </main>
            <section>
                <Footer></Footer>
            </section>

            {/*  <section className="text-center py-6 text-lg text-gray-500">
                Footer
            </section> */}

        </div>


    );

}
