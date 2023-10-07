

import { useLoaderData } from 'react-router-dom';
import GetsbyStars from '../../Components/GetsbyStars';
import Scroller from '../../Components/Scroller';
import Slider from '../../Components/Slider/Slider';

const Home = () => {

  const events = useLoaderData()



    return (
      <div>
        <GetsbyStars></GetsbyStars>
        <Slider ev={events}></Slider>
        <Scroller></Scroller>
      </div>
    );
};

export default Home;