import { Outlet } from 'react-router-dom';

// Import Swiper React components


// Import Swiper styles

import "../styles.css";


import Login from '../Pages/Login/Login';

import Banner from '../Components/GetsbyStars';
import Scroller from '../Components/Scroller';
import Navbar from '../Components/Navbar';
import GetsbyStars from '../Components/GetsbyStars';


const Root = () => {
 
    return (
      <div>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
      </div>
    );
};

export default Root;