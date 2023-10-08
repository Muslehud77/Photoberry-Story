import { Outlet } from 'react-router-dom';

// Import Swiper React components


// Import Swiper styles

import "../styles.css";


import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/Footer';



const Root = () => {
 
    return (
      <div className='bg-gray-100'>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Root;