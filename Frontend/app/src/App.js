// import logo from './logo.svg';
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Footer/Contact';
import Faq from './Component/Footer/Faq';
import About from './Component/Home/About';
import Blog from './Component/Footer/Blog';
import Food from './Component/Food/Food';
import Career from './Component/Career/Career';
import Clinicalpschologist from './Component/Jobs/Clinicalpschologist';
import Medicalsocialworker from './Component/Jobs/Medicalsocialworker';
import Seniorfinancemanager from './Component/Jobs/Seniorfinancemanager';
import Registerednurse from './Component/Jobs/Registerednurse';
import Staffnurse from './Component/Jobs/Staffnurse';
import Centermanager from './Component/Jobs/Centermanager';
import Mernfullstackdeveloper from './Component/Jobs/Mernfullstackdeveloper';
import Privacypolicy from './Component/Footer/Privacypolicy';
import Termsandconditions from './Component/Footer/Termsandconditions';
import Forgotpassword from './Component/Login/Forgotpassword';
import Resetpassword from './Component/Login/Resetpassword';
import Changepassword from './Component/Login/Changepassword';


function App() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/data/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/food" element={<Food />}></Route>
      <Route path="/career" element={<Career />}></Route>
      <Route path="/clinicalpschologist" element={<Clinicalpschologist />}></Route>
      <Route path="/medicalsocialworker" element={<Medicalsocialworker />}></Route>
      <Route path="/seniorfinancemanager" element={<Seniorfinancemanager />}></Route>
      <Route path="/registerednurse" element={<Registerednurse />}></Route>
      {/* <Route path="/" element={< />}></Route> */}
      <Route path="/staffnurse" element={<Staffnurse />}></Route>
      <Route path="/centermanager" element={<Centermanager />}></Route>
      <Route path="/mernfullstackdeveloper" element={<Mernfullstackdeveloper />}></Route>
      <Route path="/privacypolicy" element={<Privacypolicy />}></Route>
      <Route path="/termsandconditions" element={<Termsandconditions />}></Route>
      <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
      <Route path="/resetpassword" element={<Resetpassword />}></Route>
      <Route path="/changepassword" element={<Changepassword />}></Route>
    </Routes>
    <Footer/>

     <div>
      <h2>Data from Django</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    </>
  );
}

export default App;
