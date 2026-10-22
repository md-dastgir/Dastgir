import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    }


  return (
    <div className='text-gray-400 z-1000 bg-[#2E2F2B] flex justify-between py-5 md:px-12 px-4 items-center sticky top-0'>

        <h1 className="text-2xl font-bold font-mono">MD</h1>

        <div className="flex gap-10 font-mono max-[700px]:hidden justify-end grow-1">
            <a className="hover:text-white" href="#home">HOME</a>
            <a className="hover:text-white" href="#about">ABOUT</a>
            <a className="hover:text-white" href="#skill">SKILL</a>
            <a className="hover:text-white" href="#project">PROJECT</a>
            <a className="hover:text-white" href="#contact">CONTACT</a>
        </div>

        <button onClick={handleMenuClick}>
            {
                openMenu ? 
                <RxCross2 className="min-[700px]:hidden hover:cursor-pointer hover:text-gray-300 text-2xl " /> 
                :
                <LuMenu className="min-[700px]:hidden hover:cursor-pointer hover:text-gray-300 text-2xl"/>
            }
        </button>

        {
            openMenu && <OpenSideBar />
        }

    </div>
  )
}


const OpenSideBar = () => {
    return(
        <div className="h-screen w-[275px] bg-[#3B3B3B] fixed top-14 right-0 rounded-tl-xl">
            <div className="flex flex-col gap-4 mt-10 px-8">
                <a className="hover:text-white" href="#home">HOME</a>
                <a className="hover:text-white" href="#about">ABOUT</a>
                <a className="hover:text-white" href="#skill">SKILL</a>
                <a className="hover:text-white" href="#project">PROJECT</a>
                <a className="hover:text-white" href="#contact">CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar