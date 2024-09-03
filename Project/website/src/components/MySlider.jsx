import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowOutward } from "react-icons/md";

function MySlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className=' w-full overflow-hidden'>
        <Slider {...settings}>
      {/* {
        data.map((d)=>(

          <div>
             <p className=" text-center">{d.content}</p>
          </div>
        ))
      } */}
        
        <p className='inline text-center'>Spring Fashion Sale<button className='ml-2 text-red-500'>Shop now <MdArrowOutward className='inline text-red-500'/></button></p>
        <p className='text-center'>Summer sale discount off 70%</p>
        <p className='text-center'>Time to refresh your wardrobe.</p>
  
      </Slider>
    </div>
  ) 
}

const data=[
  {content:'para - 1',
    name:'milan'
  },
  {content:'para - 2',
    name:'ugam'
  },
  {content:'para - 3',
    name:'darshit'
  }
]


export default MySlider
