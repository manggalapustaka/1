import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos";
import "aos/dist/aos.css";
import Navbar from "../src/component/Navbar";
import Hcontent from "./component/hcontent/Hcontent";
import About from "../src/component/About/About";
import Footer from "./component/footer/Footer";
import Visi from "./component/visi/Visi";
import { Kegiatan, Kegiatan2 } from "./component/kegiatan/Kegiatan";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hcontent />
            <About />
            <Visi />
            <Kegiatan />
            <Kegiatan2 />
            <Footer />
        </div>
    );
}

export default App;
