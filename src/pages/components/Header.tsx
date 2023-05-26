"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const router = useRouter()
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
                <div></div>
                <div className="flex flex-row space-x-6 font-roboto font-semibold text-md items-center">
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
                            src="/linkedin.png"
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