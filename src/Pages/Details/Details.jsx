
import { useLoaderData } from 'react-router-dom';
import Tiles from './Exicuter';

const Details = () => {
    const event = useLoaderData()

   const {
     id,
     category,
     title,
     title_sm,
     thumbnail_img,
     thumbnail_img2,
     detail_img,
     details,
     details_short,
     special_services,
   } = event;


    return (
      <div className="h-screen bg-black">
        <Tiles detail_img={detail_img}></Tiles>
      </div>
    );
};

export default Details;