import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Notfound from './Notfound';
const AppRouter = () => {

   
    return (
        <div>
            <h1>App Routing</h1>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/about">About</Link>&nbsp;
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
};
export default AppRouter;