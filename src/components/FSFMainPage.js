import {ShopForm} from "./ShopForm";
import {InventoryTable} from "./InventoryTable";
import {ChatContextProvider} from "../context/ChatContext";

export function FSFMainPage() {

    return (
        <ChatContextProvider>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container px-5">
                    <a className="navbar-brand" href="#page-top">Fantasy Shop Forge</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#!">Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container px-5">
                        <h1 className="masthead-heading mb-0">Fantasy Shop Forge: </h1>
                        <h2 className="masthead-subheading mb-0">RPG Game Master's Inventory Generator</h2>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Get Started</a>
                    </div>
                </div>
            </header>
            <section id="scroll">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <ShopForm/>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <InventoryTable/>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-black">
                <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Your
                    Website 2023</p></div>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

            <script src="../bootstrap-js/bootstrap_scripts.js"></script>
        </ChatContextProvider>
    );
}