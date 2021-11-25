import React from 'react';
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return (
        <>
              <div className="w-full h-30">
                  <img
                  
                       className="w-full h-full rounded-xl"
                       scr={props.src}
                       alt="entertainment image"
                  />
              </div>
                        
        </>
    )
};


const EntertainmentCardSlider = () =>{
      const EntertainmentImage =[
          "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
          
         " https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png",

          "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",

      ];

      const settings={
          infinity :false,
          autoplay:false,
          slidesToShow:4,
          slidesToScroll:4,
          InitialSlide:0,
          responsive:[
              {
                 breakpoints:1024,
                 settings:{
                     slidesToShow:3,
                     slidesToScroll: 2,
                     infinite:true,
                 },
          },
              {
                 breakpoints:600,
                 settings:{
                     slidesToShow:2,
                     slidesToScroll: 1,
                    
                     InitialSlide:1
                 },
          },
              {
                 breakpoints:480,
                 settings:{
                     slidesToShow:2,
                     slidesToScroll: 1,
                    
                     
                 },
          },
        ],
      };

      return (
          <>
          <div className="container mx-auto px-4">      
            <Slider {...settings}>
                {EntertainmentImage.map((image)=>(
                    <EntertainmentCard src={image}/>
                ))}
                </Slider>
          </div>

          </>
      );

};



export default EntertainmentCardSlider;
