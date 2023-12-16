// import Link from "next/link";
// import React from "react";
// import { UserButton, currentUser } from "@clerk/nextjs";
// import { Button } from "./ui/button";
// import { ArrowUpRight, LogIn } from "lucide-react";


// const Navbar = async () => {
//     const session = await currentUser();
//     return (
//         <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
//             <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
//                 {/* Logo */}
//                 <Link href={"/"} className="flex items-center gap-2">
//                     <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
//                         Secureflod
//                     </p>
//                 </Link>
//                 {session ? (
//                     <UserButton />
//                 ) : (
//                     <div className="flex items-center w-[250px] justify-evenly text-xl">
//                         <Link href="/sign-in">
//                             Login
//                         </Link>
//                         <Link href="/sign-up">
//                             <Button variant={"outline"} className="text-lg bg-gray-950 hover:bg-gray-800 hover:text-slate-200  text-slate-200 font-medium border-2 rounded-lg">
//                                 Sign up
//                                 <ArrowUpRight className="w-5 h-5 ml-2" />
//                             </Button>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;

"use client"

import Link from "next/link"


import { siteConfig } from "@/config/site"
import { navLinks } from "@/config/link"
import { UserButton } from "@clerk/nextjs"

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> { }

interface Props { }
export default function Navbar(props: Props) {
    return (
        <header className="select-none">
            <nav className="mx-auto flex items-center justify-between px-4 md:px-8 lg:max-w-7xl">
                <div>
                    <div className="flex items-center justify-between py-3 md:block md:py-5">
                        <Link href="/">
                            <h1 className="text-2xl font-bold duration-200">
                                Secureflod
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div
                        className="absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border bg-background p-4 md:static md:mt-0 md:border-none md:p-0"
                        style={{ width: "100%", maxWidth: "20rem" }}
                    >
                        <ul className="flex flex-col items-center space-y-4 opacity-60 md:flex-row md:space-x-6 md:space-y-0">
                            {navLinks.data.map((item, index) => {
                                return (
                                    item.href && (
                                        <Link
                                            key={index}
                                            href={item.disabled ? "/" : item.href}
                                            className="hover:underline"
                                        >
                                            {item.title}
                                        </Link>
                                    )
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <UserButton />
            </nav>
        </header>
    )
}