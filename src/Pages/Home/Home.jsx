

import { useLoaderData } from 'react-router-dom';
import GetsbyStars from './GetsbyStars';
import Slider from './Slider';
import Scroller from './Scroller';
import AboutUs from './AboutUs';
import WorkFlow from './WorkFlow';
import Services from './Services';


const Home = () => {

  const events = useLoaderData()



    return (
      <div>
        <GetsbyStars></GetsbyStars>
        <AboutUs></AboutUs>
        <Scroller></Scroller>
        <WorkFlow ev={events}></WorkFlow>
        <Services ev={events}></Services>
      </div>
    );
};

export default Home;