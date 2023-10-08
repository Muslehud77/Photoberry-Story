
import PropTypes from 'prop-types';
import bg from "../Assets/Rect Light.svg";
const ServiceCard = ({event}) => {

    const { id, category, thumbnail_img2, title_sm, details, pricing, title } =
      event;


    return (
      <div>
        <div className="">
          <div
            className={`card card-compact w-96  bg-gradient-to-r from-[#F8D17C] to-[#D29842] bg-opacity-10 shadow-xl`}
          >
            <figure>
              <img src={thumbnail_img2} alt={category} />
            </figure>
            <div className="card-body">
                <h4 className='text-left capitalize p-2 font-semibold bg-gray-200 bg-opacity-50 rounded-xl '>{category}</h4>
              <h2 className="text-xl font-serif uppercase">{title}</h2>
              <div className='flex justify-center'>
                <hr className="border-1 border-black w-52" />
              </div>
              <p>{details}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

ServiceCard.propTypes = {
    event: PropTypes.obj
};

export default ServiceCard;