import logo from '../../Assets/Logo/Photoberry Golden 2.png'
import {BsFacebook , BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'


const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-black text-neutral-content">
          <aside>
            <img src={logo} className="w-20" alt="" />
            <p>
              <span className="font-semibold ">Photoberry Story</span>
              <br />
              Turning Moments into Memories
            </p>
          </aside>
          <nav className='-mr-28'>
            <header className="footer-title">Find Us On</header>
            <div className="grid grid-flow-col gap-4">
              <a href="" className="text-2xl">
                <BsFacebook />
              </a>
              <a href="" className="text-2xl">
                <BsInstagram />
              </a>
              <a href="" className="text-2xl">
                <BsTwitter />
              </a>
              <a href="" className="text-2xl">
                <BsLinkedin />
              </a>
            </div>
            <header className="footer-title mt-5">Address</header>
            <div className="">
              <p>Saf Amin Shopping-Mall, Chattogram, Bangladesh</p>
            </div>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;