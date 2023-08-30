import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Service from './Pages/Service';
import Footer from './components/Footer';

import Navigation from './components/Navigation';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WhyUs from './Pages/WhyUs';

function App() {

  return (
    <div className="App">
      {/* <Todolist/> */}

      <Router>
        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>

        {/* <Contact/> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
