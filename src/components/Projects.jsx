import { MdOutlineArrowOutward } from "react-icons/md";
import ecom from '../../public/images/ecom.jpg'
import chatapp from '../../public/images/chatapp.avif'
import dashboard from '../../public/images/dashboard.jpg'

const Projects = () => {
  return (
    <div className='bg-[#3B3B3B] min-h-screen px-16 py-18' id='project'>
        <h1 className='text-5xl text-center text-white mb-12'>Projects</h1>
        <div className="grid md:grid-cols-3 gap-8">

        <ProjectCard title="EMS" image={ecom} link="https://github.com/md-dastgir/Employee-Management-System"/>
        <ProjectCard title="Zerodha" image={chatapp} link="https://github.com/md-dastgir/ZerodhaApp" />
        <ProjectCard title="Airbnb" image={dashboard} link="https://github.com/md-dastgir/AirbnbClone" />
        </div>
    </div>
  )
}


const ProjectCard = ({title, image, link}) => {
    return(
            <div className="px-4 pt-4 pb-2 w-full bg-[#2E2F2B] space-y-4 rounded-2xl">
                <div className="bg-[#3B3B3B] h-[175px] overflow-hidden rounded-xl flex justify-center items-center relative">

                    <img className="fit-cover" src={image} alt={title} />

                    <div className="hover:bg-[#363833]/80 rounded-xl w-full h-full absolute top-0 flex justify-center items-center opacity-0 hover:opacity-100">
                        <h1 className="text-4xl font-bold text-white select-none">{title}</h1>
                    </div>
                </div>
                <div className="bg-[#2E2F2B] flex flex-col gap-2 pb-2">
                    <div className="flex gap-6 ml-5 mt-2">

                        <button 
                            className="bg-[#3B3B3B] text-lg text-gray-200 flex items-center justify-center py-2 w-5/12 rounded-lg hover:scale-103 transition-transform duration-300 hover:cursor-pointer"
                        >
                            <a href="#project">
                                Live Demo <MdOutlineArrowOutward className="ml-2" />
                            </a>
                        </button>

                        <button 
                            className="bg-[#3B3B3B] text-lg text-gray-200 flex items-center justify-center py-2 w-5/12 rounded-lg hover:scale-103 transition-transform duration-300 hover:cursor-pointer"
                        >
                            <a href={link} target="_blank">
                                Source Code <MdOutlineArrowOutward className="ml-2" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Projects