import React from "react";
import {Route} from "react-router-dom";

import DefaultLayout from "../Layouts/Default.layout";


const DefaultHOC =({component:Component,...react}) =>{

    return (
    //Fragment <></>
    //... spread operator.
    //Component
    //exact
    //path
    
    <>
    
    <Route
     {...react}
    component={(props)=>(
        <DefaultLayout>
            <Component {...props}/>
            </DefaultLayout>
    )}
    />
    </>

    );
  };


export default DefaultHOC;