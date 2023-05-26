import Link from "next/link";

export default function Footer() {

    return (
        <footer className="mt-auto" id="contact">
            <div className="flex items-center justify-center h-screen w-full bg-zinc-700">
                <div className="flex flex-col">
                    <div className="font-roboto font-semibold text-8xl text-white py-12">Contact Me</div>
                    <Link href="https://drive.google.com/file/d/1CvNNvuf6xmYTvtEqNrKJxXXk7TI1jaKl/view?usp=sharing" target="_blank">
                        <button className="btn btn-lg bg-yellow-600 text-black font-roboto w-full">Download my CV</button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}