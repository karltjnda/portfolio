import Image from 'next/image';

export default function Hero() {

    return (
        <div className='flex flex-col min-h-screen'>
            <div className="my-12 py-32 bg-white flex flex-row items-center justify-between" id="home">
                <div className="mx-auto text-left text-black font-roboto font-bold">
                    <h1 className="text-8xl">Hi, I'm Karl!</h1>
                    <p className=" text-4xl py-6">Interested in anything about </p>
                    <h1 className="text-6xl text-yellow-500">DATA SCIENCE & <br />WEB DEVELOPMENT</h1>
                </div>
                <div className="mx-auto text-black relative z-30">
                    <Image
                        src="/pic.jpg"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div >
    )
}