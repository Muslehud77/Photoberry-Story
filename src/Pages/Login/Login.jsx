import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import bg from "../../Assets/Backgounds/blob-scene-haikei (2).svg";
import { AuthContext } from "../../ConetextProvider/ContextProvider";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";





let imgs = []




const Login = () => {
  const images = useLoaderData()
const { emailSignIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
const navigate = useNavigate()
const [show, setShow] = useState(false);



  imgs = images

const handleSubmit = (e) => {
  e.preventDefault();

  // const email = e.target.email.value;
  // const password = e.target.password.value;

  const form = new FormData(e.currentTarget);

  const email = form.get("email");
  const password = form.get("password");

  emailSignIn(email, password)
  .then(res=> {
    console.log(res.user)
    navigate('/')
  })
  .catch(err=> {
    console.log(err)
  })

};

const socialLogin = (media) => {
  media()
  .then(res=>{
    console.log(res.user)
     navigate("/");
  })
 .catch(err=> {
  console.log(err)
 })
}



  return (
    <section className="w-full relative bg-black bg-opacity-60 px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
      <div>
        <div className="max-w-md relative z-10 border py-10 px-10 md:px-12 mx-auto space-y-8 bg-white rounded-md">
          <h2 className="font-semibold text-3xl">Login your account</h2>
          <hr />
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-semibold">Your Email</p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100"
            />
            <p className="font-semibold">Password</p>
            <div className="relative">
              <input
                id="password"
                required
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password "
                className="input input-bordered w-full bg-gray-100 text-black"
              />
              <div
                className="hover:cursor-pointer absolute right-3 bottom-3 text-black text-xl"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {!show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="space-y-8">
              <input
                type="submit"
                value="login"
                className="btn btn-neutral w-full"
              />
            </div>
          </form>
          <div>
            <span>
              Don't Have An Account ?{" "}
              <Link
                className="hover:font-semibold text-blue-700"
                to="/register"
              >
                Register
              </Link>
            </span>
            <div className="mt-3">
              <div className="flex justify-center gap-5 items-center mb-2">
                <div className="w-16 h-[1px] bg-black"></div>
                <h2 className="text-xl font-bold ">or</h2>
                <div className="w-16 h-[1px] bg-black"></div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => socialLogin(googleSignIn)}
                  className="btn w-full btn-outline"
                >
                  <FcGoogle className="text-2xl" /> continue with Google
                </button>
                <button
                  onClick={() => socialLogin(facebookSignIn)}
                  className="btn w-full btn-outline"
                >
                  {" "}
                  <BsFacebook className="text-2xl" /> continue with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <ShuffleGrid />
      </div>
      <img
        className="absolute top-0 w-full h-full object-cover opacity-50"
        src={bg}
        alt=""
      />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};



const generateSquares = () => {


  return shuffle(imgs).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full object-cover h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Login;
