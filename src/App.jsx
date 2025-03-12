
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.modules.css'
import { Navbar } from './components/Navbar/Navbar';
import { MainSite } from './pages/MainSite/MainSite';
import { Footer } from './components/Footer/Footer';
import { Contact } from './pages/Contact/Contact';
import { Annoucements } from './pages/Announcements/Annoucements';
import { Churches } from './pages/Churches/Churches';
import { Gallery } from './pages/Gallery/Gallery';

import { db } from "./config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "nazwaTwojejKolekcji"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};

fetchData();



function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path="/" element={<MainSite/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/annoucements" element={<Annoucements />} />
            <Route path="/churches" element={<Churches />} />
            <Route path="/gallery" element={<Gallery/>} />
            {/* <Route path="/" element={} /> */}
            {/* <Route path="/" element={} /> */}


      </Routes>
      <Footer />
    </Router>
  )
}

export default App
