"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const router = useRouter()
    const prefix = "/portfolio"
    const navLink = [
        {
            name: "Home",
            link: "/#home",
        },
        {
            name: "About Me",
            link: "/#about",
        },
        {
            name: "Projects",
            link: "/#projects",
        },
        {
            name: "Contact Me",
            link: "/#contact",
        },
    ]

    return (
        <header className="w-full mx-auto p-4 sm:px-20 fixed top-0 z-50 shadow-lg bg-white ">
            <nav className="justify-between md:items-center md:flex h-10">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-yellow-600 stroke-yellow-600" viewBox="0 0 18 19"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-roboto font-bold">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About Me</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#contact">Contact Me</a></li>
                    </ul>
                </div>
                <div className="flex flex-row space-x-6 font-roboto font-semibold text-md items-center hidden lg:flex">
                    {navLink.map(({ link, name }) => (
                        <Link
                            key={name}
                            href={link}
                            scroll={false}
                            className={` ${router.asPath === link ? "border-b-4 border-yellow-600 " : "border-transparent"} ease-in duration-200 px-4`}>

                            {name}
                        </Link>
                    ))}
                    <Link href="https://www.linkedin.com/in/karl-tabajonda/" target="_blank">
                        <Image
                            src={`${prefix}/linkedin.png`}
                            alt="LinkedIn"
                            height={30}
                            width={25}>
                        </Image>
                    </Link>
                </div>
            </nav>
        </header>
    )
}