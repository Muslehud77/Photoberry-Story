import { imageListClasses } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import './gallery.css'
import { useState } from "react";
import {RxCross1} from 'react-icons/rx'

const Gallery = () => {
    const gallery = useLoaderData()
   const [modal,setModal] = useState(false)
   const [imgUrl,setImgUrl] = useState('')

    const getImg = (url) => {
        setImgUrl(url)
        setModal(true)
    }
console.log(imgUrl)
    return (
      <>
       
        <div className={modal ? "modalIn modalOp" : "modalIn"}>
          <img src={imgUrl} alt="" />
          <RxCross1 onClick={()=>setModal(false)} className="text-black hover:cursor-pointer fixed top-5 right-5 text-3xl rounded-full bg-yellow-50 p-1"/>
        </div>
        <div className="gallery h-full pt-20 bg-black">
          {gallery.map((g) => (
            <div onClick={() => getImg(g.url)} className="pics" key={g.id}>
              <img className="w-full" src={g.url} alt="" />
            </div>
          ))}
        </div>
      </>
    );
};

export default Gallery;