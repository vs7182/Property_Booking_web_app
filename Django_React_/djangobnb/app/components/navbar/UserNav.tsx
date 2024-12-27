'use client'

import { useState } from "react";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import LogutButton from "../LogoutButton";
import { useRouter } from "next/navigation";



interface UserNavProps {
    userId?: string | null;
}

const UserNav: React.FC<UserNavProps> = ({ userId }) => {
    const router = useRouter()
    const loginModel = useLoginModal();
    const signupModel = useSignupModal();
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
                    {userId ? (
                        <>
                            <MenuLink label="Inbox"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/inbox')
                                }}
                            />
                            <MenuLink label="My Properties"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/myproperties')
                                }}
                            />
                            <MenuLink label="My Favorite"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/myfavorites')
                                }}
                            />
                            <MenuLink label="My Reservation"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/myreservations')
                                }}
                            />
                            <LogutButton />
                        </>) : (
                        <>
                            <MenuLink label="Login" onClick={() => {
                                console.log("You clicked on  login")
                                setIsOpen(false);
                                loginModel.open()
                            }} />
                            <MenuLink label="Signup" onClick={() => {
                                console.log("You clicked on  signup")
                                setIsOpen(false);
                                signupModel.open()
                            }} />
                        </>
                    )}

                </div>

            )}
        </div>


    )
}

export default UserNav;

