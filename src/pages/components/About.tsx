import Image from "next/image"

export default function About() {
    const prefix = "/portfolio"
    return (
        <section id="about">
            <div className="flex items-center h-full lg:h-screen w-full bg-yellow-500">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
                    <img src={`${prefix}/pic2.jpg`} alt="pogi" className="p-10 md:p-0 md:rounded-2xl my-12 lg:my-2 lg:mx-14 max-w-sm lg:max-w-xl"></img>
                    <div className="flex flex-col justify-start mx-6 lg:w-1/3">
                        <h1 className="font-roboto font-bold text-4xl text-center lg:text-left md:text-8xl text-white drop-shadow-lg ">Karl Tabajonda</h1>
                        <p className="mx-10 py-4 md:mx-0 font-roboto font-semibold text-lg md:text-2xl text-black text-center lg:text-justify">Hi! I'm Karl Tabajonda, and I graduated from the University of Santo Tomas' Computer Science program with a specialization in Data Science. I'm interested in and continue to learn about Data Science, Web Development, and Machine Learning.</p>
                        <div className="bg-neutral-900 rounded-2xl text-yellow-200 text-xl font-roboto font-bold text-black drop-shadow-2xl py-8 my-4 lg:my-2">
                            <div className="flex flex-row items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={`${prefix}/java.png`} alt="Java" className="py-4 max-w-[60%]"></img>
                                    <h1>Java</h1>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img src={`${prefix}/js2.png`} alt="JavaScript" className="py-4 max-w-[60%]"></img>
                                    <h1>JavaScript</h1>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img src={`${prefix}/python.png`} alt="Python" className="py-4 max-w-[50%]"></img>
                                    <h1>Python</h1>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img src={`${prefix}/sql1.png`} alt="MySQL" className="py-4 max-w-[60%]"></img>
                                    <h1>MySQL</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}