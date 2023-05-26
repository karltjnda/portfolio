import Image from 'next/image';

export default function Skills() {

    return (
        <>
            <div className='w-full bg-black py-12 flex flex-col items-center justify-center'>
                <h1 className='font-roboto text-center text-white py-4 font-bold text-6xl'>Knowledge and Skills</h1>
                <div className='bg-yellow-500 w-4/5 rounded-2xl text-xl font-roboto font-bold text-black drop-shadow-2xl'>
                    <div className='flex items-center justify-center'>
                        <div className='p-14 text-center'>
                            <Image
                                src="/java.png"
                                height={100}
                                width={140}
                                alt="Java"
                                className='py-4'></Image>
                            <h1>Java</h1>
                        </div>
                        <div className='p-14 text-center'>
                            <Image
                                src="/js.png"
                                height={100}
                                width={140}
                                alt="JavaScript"
                                className='py-4'></Image>
                            <h1>JavaScript</h1>
                        </div>
                        <div className='p-14 text-center'>
                            <Image
                                src="/python.png"
                                height={100}
                                width={140}
                                alt="Python"
                                className='py-4'></Image>
                            <h1>Python</h1>
                        </div>
                        <div className='p-14 text-center'>
                            <Image
                                src="/robot.png"
                                height={100}
                                width={140}
                                alt="Machine Learning"
                                className='py-4'></Image>
                            <h1>Machine Learning</h1>
                        </div>
                        <div className='p-14 text-center'>
                            <Image
                                src="/data-analytics.png"
                                height={100}
                                width={140}
                                alt="Data Analytics"
                                className='py-4'></Image>
                            <h1>Data Analytics</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}