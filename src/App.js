import {Container} from "react-bootstrap";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Contacts from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import VilkiPalki from "./pages/SeparateProject/SeparateProject";
import emailjs from "@emailjs/browser";

function App() {
    emailjs.init('YOUR_PUBLIC_KEY');
    return (
        <Routes>
            <Route path="/" element={
                <Container>
                    <Home/>
                    <About/>
                    <Projects/>
                    <Services/>
                    <Contacts/>
                </Container>
                }/>
            <Route path="/projects/:projectName" element={<VilkiPalki/>}/>
        </Routes>
    );
}


export default App;
