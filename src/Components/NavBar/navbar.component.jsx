import React from "react";
import { BiChevronRight,BiSearch,BiMenu,BiChevronDown} from "react-icons/bi";


const Navsm= () =>{
 
     return (
          <>
            <div className="text-white flex items-center justify-between">
           <div>
                <h3 className="text-xl font-bold">
                   
                   It all starts Here !
                  
                </h3>

                <span className="text-gray-400 text-xs flex items-center">
                     Bilaspur <BiChevronRight/>

                </span>
           </div>
           <div className="w-8 h-8">
               <BiSearch className="w-full h-full"/>
                </div>
           </div>  
          </>
     );

};

const Navmd =()=>{

      return (

     <div className="w-full flex items-center  gap-3 bg-white  px-3 py-2 rounded-md">
          <BiSearch/>
          <input
           type="search"
           className="w-full border-none bg-transparent focus:outline-none "
           placeholder="Search for movies,plays,events, sports and activities."
          
          />
     </div>
      );
};

const Navlg =() =>{

     return (
     <>
        
        <div className="container mx-auto px-4 flex items-center justify-between">
             <div className="w-1/2 flex items-center gap-3 ">
                  <div className="w-12 h-12"> 
                       <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                       />
                       </div>
                       <div className="w-full flex items-center gap-3 bg-white rounded-md px-3 py-2">
                          <BiSearch />
                          <input
                            type="search"
                            placeholder="search for movies,plays,events,sports"
                            className="w-full bg-transparent border-none focus:outline-none"
                          
                          />

                       
                  </div>
             </div>
             <div className=" flex items-center gap-3"> 
                  <span  className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                  Bilaspur<BiChevronDown />
                       
                  </span>
                <button className="bg-red-600 text-white px-1 py-2 text-sm rounded">Sign in</button>
             
             <div className="w-8 h-8  text-white">
                  <BiMenu className="w-full h-full"/>
             </div>
             </div>
        </div>

     </>
     );

}

//md : hidden means hide mobile devices or < mobile devices(large device)

const NavBar =() => {

return <>
  
  <nav className="bg-bms-700 p-4 ">
      
     <div className="md:hidden">
      { 
      /* small screen  📴*/ 
      
      }

      <Navsm/>
     </div>
      
      <div className="hidden md:flex lg:hidden">
          { /* Medium / Tab screen  */}

     <Navmd />
     </div>

     <div className="hidden lg:flex">
      {/*Large screen */}
      <Navlg />
     </div>


</nav>
</>

}

export default NavBar;