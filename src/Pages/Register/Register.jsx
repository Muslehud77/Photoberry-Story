import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import bg from "../../Assets/Backgounds/blob-scene-haikei (1).svg";



let imgs = [];

const handleSubmit = (e) => {
  e.preventDefault();

  // const email = e.target.email.value;
  // const password = e.target.password.value;

  const form = new FormData(e.currentTarget);

  const email = form.get("email");
  const password = form.get("password");
};

const Register = () => {
  const images = useLoaderData();

  imgs = images;

  return (
    <section className="relative bg-black  bg-opacity-60 py-20">
      <div>
        <div className="max-w-md relative z-10  py-10 px-16 mx-auto space-y-8  bg-black text-white bg-opacity-50 backdrop-blur-md rounded-md">
          <h2 className="font-semibold text-3xl">Register Account</h2>
          <hr />
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-semibold">Your Name</p>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <p className="font-semibold">Your Photo</p>
            <input
              type="url"
              name="photoUrl"
              placeholder="Your photo url"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <p className="font-semibold">Your Email</p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <p className="font-semibold">Set Password</p>
            <input
              required
              type="password"
              name="password"
              placeholder="Password must be at-least 6 characters"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <input required type="checkbox" className="checkbox checkbox-sm bg-white" name="" id="" />
                <label>
                  Accept{" "}
                  <a className="hover:underline" href="">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-neutral outline outline-white bg-black text-white w-full"
              />
            </div>
          </form>
          <div>
            <div className="mt-3">
              <div className="flex justify-center gap-5 items-center mb-2">
                <div className="w-16 h-[1px] bg-white"></div>
                <h2 className="text-xl font-bold ">or</h2>
                <div className="w-16 h-[1px] bg-white"></div>
              </div>

              <div className="space-y-2">
                <button className="btn w-full bg-white btn-outline">
                  <FcGoogle className="text-2xl" /> SignUp with Google
                </button>
                <button className="btn w-full bg-white btn-outline">
                  {" "}
                  <AiFillFacebook className="text-2xl" /> SignUp with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute top-0 w-full h-full object-cover opacity-50" src={bg} alt="" />
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
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
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

export default Register;
