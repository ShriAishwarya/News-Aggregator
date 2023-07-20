import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./assets/stylenav.css";
import "./cmp/newsApi.css";
import Sidebar from "./nav/Sidebar";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import NewsFetcher from "./cmp/newsApi";
import Login from './loginpage/login'
import SignUp from './loginpage/signup'
import SportsFetcher from './cmp/sportsapi';
import EnterimentFetcher from './cmp/entapi';
import ScienceFetcher from './cmp/scienceapi';
import TopIndFetcher from './cmp/latestIndapi';
import TechFetcher from './cmp/techapi';

function App() {
  return (
    
    <Router> 
      <Sidebar/>
      <Routes>
        {/* loginpage */}
              <Route exact path="/" element={<Login/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path='/' element={<Login/>}/>
              
              {/* homepage */}
 		{/* <Route path='/about-us' element={<AboutUs/>} /> */}

     <Route path='/home' element={<NewsFetcher/>} />
     <Route path='/home' element={<NewsFetcher/>} />
 		<Route path='/about-us/aim' element={<OurAim/>} />
 		<Route path='/about-us/vision' element={<OurVision/>} />
 		<Route path='/services' element={<TopIndFetcher />} />
 		<Route path='/services/services1' element={<SportsFetcher/>} />
 		<Route path='/services/services2' element={<ScienceFetcher/>} />
 		<Route path='/services/services3' element={<EnterimentFetcher/>} />
     <Route path='/services/services4' element={<TechFetcher/>} />

		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
 		<Route path='/events/events1' element={<EventsOne/>} />
 		<Route path='/events/events2' element={<Login/>} />
 		<Route path='/support' element={<Support/>} />
     <Route path='/newsApi' element={<NewsFetcher/>} />
      </Routes>
    </Router>
  )
}
export default App;


