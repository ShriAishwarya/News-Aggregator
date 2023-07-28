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
import BusinessFetcher from './cmp/Businessapi';
import HealthFetcher from './cmp/healthapi';
import EventsFetcher from './cmp/eventsindapi';
import UkFetcher from './cmp/uknewsapi';
import UsFetcher from './cmp/Usnewsapi';
import JpFetcher from './cmp/jpnewsapi';
import AustFetcher from './cmp/austnewsapi';

function App() {
  return (
    
    <Router> 
      <Sidebar/>
      <Routes>
        {/* loginpage */}
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/" element={<NewsFetcher/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path='/' element={<Login/>}/>
              
              {/* homepage */}
 		{/* <Route path='/about-us' element={<AboutUs/>} /> */}

     <Route path='/home' element={<NewsFetcher/>} />
     <Route path='/home' element={<NewsFetcher/>} />
 		<Route path='/home/about-us' element={<OurAim/>} />
 		<Route path='/about-us/vision' element={<OurVision/>} />

    {/* Media */}
 		<Route path='/media' element={<TopIndFetcher />} />
 		<Route path='/media/sports' element={<SportsFetcher/>} />
 		<Route path='/media/science' element={<ScienceFetcher/>} />
 		<Route path='/media/enteriment' element={<EnterimentFetcher/>} />
     <Route path='/media/technology' element={<TechFetcher/>} />
     <Route path='/media/business' element={<BusinessFetcher/>} />
     <Route path='/media/health' element={<HealthFetcher/>} />

     {/* Events */}

		<Route path='/events' element={<EventsFetcher/>} />
    <Route path='/events/uk' element={<UkFetcher/>} />
    <Route path='/events/us' element={<UsFetcher/>} />
    <Route path='/events/jp' element={<JpFetcher/>} />
    <Route path='/events/austrilia' element={<AustFetcher/>} />


		<Route path='/settings' element={<Events/>} />
 		<Route path='/settings/profile' element={<EventsOne/>} />
 		<Route path='/sign-in' element={<Login/>} />
 		<Route path='/support' element={<Support/>} />
     <Route path='/newsApi' element={<NewsFetcher/>} />
      </Routes>
    </Router>
  )
}
export default App;


