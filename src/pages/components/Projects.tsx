import Link from "next/link"

export default function Projects() {
    return (
        <>
            <div className="container mx-auto py-14" id="projects">
                <h1 className="text-center font-roboto font-bold text-yellow-500 text-6xl py-14">PROJECTS</h1>
                <div className="flex flex-col">
                    <div className="flex flex-col items-stretch lg:flex-row">
                        <div className="flex-1 p-4">
                            <div className="card lg:card-side bg-base-100 shadow-xl px-4 h-full w-full">
                                <figure><img src="/project-img1.png" alt="Album" className="p-5 object-cover" /></figure>
                                <div className="card-body flex-1 font-roboto">
                                    <h2 className="card-title">Apparel Mobile App</h2>
                                    <p className="whitespace-normal text-justify">An app mainly about fabric, caring, removing stains, and
                                        a weather feature that uses an API to check what kind of apparel you can wear on that day.</p>
                                    <div className="card-actions justify-end">
                                        <Link href="https://drive.google.com/file/d/1mG7RYGDCOPedTaaGf6pP3v83zX8NzO68/view?usp=sharing" target="_blank">
                                            <button className="btn bg-yellow-600">Learn More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="card lg:card-side bg-base-100 shadow-xl px-4 h-full w-full">
                                <figure><img src="/project-img2.png" alt="Album" className="p-5 object-cover w-96" /></figure>
                                <div className="card-body flex-1 font-roboto">
                                    <h2 className="card-title">RCPD: Products and Services Showroom</h2>
                                    <p className="whitespace-normal text-justify"> A web application that showcases the client’s business services and products. It has a login page for the staff and the owner, manipulate the products that are displayed, and audit log for the changes in the website.</p>
                                    <div className="card-actions justify-end">
                                        <Link href="https://drive.google.com/file/d/1naAkJ1co_pHdnaBw7JdazFzviEOdCc5Y/view?usp=sharing" target="_blank">
                                            <button className="btn bg-yellow-600">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch lg:flex-row">
                        <div className="flex-1 p-4">
                            <div className="card lg:card-side bg-base-100 shadow-xl px-4 h-96 w-full">
                                <figure><img src="/project-img3.png" alt="Album" className="p-5 object-cover w-96" /></figure>
                                <div className="card-body flex-1 font-roboto">
                                    <h2 className="card-title">Trainr Web Application</h2>
                                    <p className="whitespace-normal text-justify">A fitness platform website where users could sign up for fitness packages that included coaching in their training. It has a login page for the clients and an admin page for the coaches, where they can assign workout or fitness plans to their respective clients.</p>
                                    <div className="card-actions justify-end">
                                        <Link href="https://drive.google.com/file/d/1jsZQGa4zynoiE1FCDmjNE_ikGFnxS4Yb/view?usp=sharing" target="_blank">
                                            <button className="btn bg-yellow-600">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="card lg:card-side bg-base-100 shadow-xl px-4 h-full w-full">
                                <figure><img src="/twitter.png" alt="Album" className="p-5 object-cover w-96" /></figure>
                                <div className="card-body flex-1 font-roboto">
                                    <h2 className="card-title">Prediction of Insomnia from Twitter Posts With Ensemble Method Using LIWC, BIG 5 and BERT-CNN-BiLSTM</h2>
                                    <p className="whitespace-normal text-justify">A thesis about predicting if a twitter post has insomnia or not using the ensemble of LIWC, Big 5, and the BERT-CNN-BiLSTM algorithm.</p>
                                    <div className="card-actions justify-end">
                                        <Link href="https://drive.google.com/file/d/1BOc-kaAt5lnTo62sunf7HlugAqlCOse1/view?usp=sharing" target="_blank">
                                            <button className="btn bg-yellow-600">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}