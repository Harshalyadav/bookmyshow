import React from "react";
import HeroCarousal from "../Components/HeroCarousel/HeroCarousel.Component";

//Components

import NavBar from "../Components/NavBar/navbar.component";



const DefaultLayout =(props) =>{

    return (
        
        <>
          <NavBar /> 
          <HeroCarousal/>
        {props.children}
        
        
    
        </>
    );

};


export default DefaultLayout;