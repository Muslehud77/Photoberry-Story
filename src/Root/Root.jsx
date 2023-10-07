import { Outlet } from 'react-router-dom';

// Import Swiper React components


// Import Swiper styles

import "../styles.css";


import Navbar from '../Components/Navbar';



const Root = () => {
 
    return (
      <div>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
      </div>
    );
};

export default Root;