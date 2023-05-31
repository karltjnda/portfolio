import Image from 'next/image';

const prefix = "/portfolio"

export default function Hero() {

    return (
        <div className='flex flex-col lg:min-h-screen'>
            <div className="my-12 py-32 bg-white flex flex-col md:flex-row items-center justify-between" id="home">
                <div className="mx-10 lg:mx-auto text-black font-roboto font-bold text-center md:text-left">
                    <h1 className="text-6xl lg:text-8xl">Hi, I'm Karl!</h1>
                    <p className=" text-2xl py-6 lg:text-4xl">Interested in anything about </p>
                    <h1 className="text-4xl lg:text-8xl text-yellow-500 ">DATA SCIENCE & <br />WEB DEVELOPMENT</h1>
                </div>
                <div className="mx-auto text-black relative z-30">
                    <img
                        src={`${prefix}/pic.jpg`}
                        alt="Picture of the author"
                        className="p-8 md:px-8 max-w-sm lg:max-w-xl"
                    />
                </div>
            </div>
        </div >
    )
}