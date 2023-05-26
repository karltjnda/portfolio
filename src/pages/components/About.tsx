import Image from "next/image"

export default function About() {
    const prefix = "/portfolio"
    return (
        <section id="about">
            <div className="bg-yellow-500">
                <div className="flex flex-row items-center h-screen w-full">
                    <div className="flex items-start justify-center">
                        <Image
                            src={`${prefix}/pic2.jpg`}
                            alt="pogi"
                            width={500}
                            height={500}
                            className="rounded-2xl mx-14"
                        >
                        </Image>
                        <div className="flex flex-col justify-start mx-6 w-1/3 text-black">
                            <h1 className="font-roboto font-bold text-8xl text-white drop-shadow-lg">Karl Tabajonda</h1>
                            <p className="font-roboto font-semibold text-2xl text-black text-justify py-4">Hi! I'm Karl Tabajonda, and I graduated from the University of Santo Tomas' Computer Science program with a specialization in Data Science. I'm interested in and continue to learn about Data Science, Web Development, and Machine Learning.
                            </p>
                            <div className='bg-neutral-900 rounded-2xl text-yellow-200 text-xl font-roboto font-bold text-black drop-shadow-2xl py-8 my-2'>
                                <div className='flex items-center justify-center'>
                                    <div className='px-4 text-center'>
                                        <Image
                                            src={`${prefix}java.png`}
                                            height={100}
                                            width={100}
                                            alt="Java"
                                            className='py-4'></Image>
                                        <h1>Java</h1>
                                    </div>
                                    <div className='px-4 text-center'>
                                        <Image
                                            src={`${prefix}/js.png`}
                                            height={100}
                                            width={100}
                                            alt="JavaScript"
                                            className='py-4'></Image>
                                        <h1>JavaScript</h1>
                                    </div>
                                    <div className='px-4 text-center'>
                                        <Image
                                            src={`${prefix}/python.png`}
                                            height={100}
                                            width={100}
                                            alt="Python"
                                            className='py-4'></Image>
                                        <h1>Python</h1>
                                    </div>
                                    <div className='px-4 text-center'>
                                        <Image
                                            src={`${prefix}/sql1.png`}
                                            height={100}
                                            width={100}
                                            alt="MySQL"
                                            className='py-4'></Image>
                                        <h1>MySQL</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}