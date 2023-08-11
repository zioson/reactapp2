import React from "react";
import logo from "../assets/vlogo.png"

const Navbar = () =>{
    return (
        <div className="bg-black">
            <div className="bg-black h-[4rem] flex items-center justify-between px-6 md:max-w-[90vw] mx-auto">
                {/*Left*/}
                <div className="flex items-center">
                        <div className="flex w-[4rem] h-[3.9rem] bg-black rounded-full ">
                            <img src={logo} alt="" className="object-covor "/>
                        </div>
                        <div className="text-white font-bold">
                            <p className="text-[21px] pl-0.2">Navi Meet</p>
                        </div>
                </div>
                    
                
                    
                {/*right*/}
                <div className="">
                        <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
                            <li>About Us</li>
                            <li>Product</li>
                            <li>Blogs</li>

                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;