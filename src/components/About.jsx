import MyPic from '../../public/images/myPic.jpeg'

const About = () => {
  return (
    <div className='text-white bg-[#3B3B3B] w-full min-h-screen pt-14 pb-14' id='about'>

        <h1 className='text-5xl text-center mb-8'>About Me</h1>

        <div 
            className='bg-[#2E2F2B] w-10/12 min-h-[450px] mx-auto md:flex xs:flex-col rounded-tl-lg md:rounded-bl-lg rounded-tr-lg'
        >
            <LeftContent />
            <MiddleContent />
            <RightContent />
        </div>
    </div>
  )
}


const LeftContent = () => {
    return(
        <div className='md:w-7/12 py-16 px-10 space-y-10'>
            <p className='flex flex-col text-gray-300'>
                <span>
                    Hi, I'm Md Dastgir, a B.Tech student at IEC College of Engineering and Technology, Greater Noida. I'm passionate about web development and enjoy building clean, responsive, and user-friendly websites.
                </span> <br />

                <span>
                    I love learning new technologies, improving my coding skills, and turning ideas into practical digital experiences. I'm continuously exploring modern web development tools and working on projects to strengthen my technical abilities.
                </span> <br />

                <span>
                    My goal is to grow as a developer, contribute to meaningful projects, and create web experiences that are both functional and visually appealing.
                </span>
            </p>
            <h1 className='text-xl font-mono text-gray-300'>MD DASTGIR</h1>
        </div>
    )
}

const MiddleContent = () => {
    return(
        <div className='md:w-[5px] md:h-[460px] w-full h-[5px] bg-white shadow-xl'></div>
    )
}

const RightContent = () => {
    return(
        <div className='md:w-5/12 pt-3.5 bg-[#3B3B3B]'>
            <img 
                src={MyPic} 
                alt="MY PICTURE" 
                className='md:rounded-tr-lg rounded-br-lg rounded-bl-lg'
            />
        </div>
    )
}

export default About