import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../src/component/Navbar";
import About from "../src/component/About/About";
import Footer from "./component/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Footer />
        </div>
    );
}

export default App;
