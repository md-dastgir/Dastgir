
import MyResume from "../../public/MD_DASTGIR.pdf"

import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Home = () => {
  return (
    <div className='flex flex-col items-center pt-12 min-h-screen' id="home">
        <TopContent />
        <BottomContent />
    </div>
  )
}


const TopContent = () => {
    return(
        <div className='flex flex-col gap-4 pt-18 items-center'>

            <span className='md:text-7xl text-5xl text-white ml-8'>
                I'm Dastgir
            </span>

            <h1 className='md:text-7xl text-5xl text-gray-400'>
                FullStack Developer
            </h1>
        </div>
    )
}

const BottomContent = () => {
    return(
        <div className='w-full mt-32 md:px-12 px-4 md:flex justify-between items-center'>
            <button 
                className='w-fit border-gray-400 text-gray-400 text-xl font-semibold hover:cursor-pointer hover:bg-[#32332f] rounded-lg p-2 mt-8 flex justify-center items-center gap-2 hover:text-gray-300'
            >
                <GoDownload />
                <a href={MyResume} target="_blank">
                    Download Resume
                </a>
            </button>

            <div className='flex gap-5 md:mt-8 mt-3 ml-3'>
                <a className='text-gray-400 bg-[#0022] p-2 rounded-full text-2xl hover:text-gray-300' href="https://github.com/md-dastgir" target='_blank'>
                    <FaGithub />
                </a>
                <a className='text-gray-400 bg-[#0022] p-2 rounded-full text-2xl hover:text-gray-300' href="https://www.linkedin.com/in/md-dastgir" target='_blank'>
                    <FaLinkedin />
                </a>
                <a className='text-gray-400 bg-[#0022] p-2 rounded-full text-2xl hover:text-gray-300' href="" target='_blank'>
                    <IoIosMail />
                </a>
            </div>
        </div>
    )
}

export default Home