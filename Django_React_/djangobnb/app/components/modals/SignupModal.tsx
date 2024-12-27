'use client'

import Modal from "./Modal"
import CustomButton from "../forms/CustomButton"
import useSignupModal from "@/app/hooks/useSignupModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"




const SignupModel = () => {
    const router = useRouter();
    const SignupModal = useSignupModal()
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const submitSignup = async () =>{
        const formData = {
            email:email,
            password1:password1,
            password2:password2
        }
        const response = await apiService.postWithoutToken('/api/auth/register/',JSON.stringify(formData))
        if(response.access){
            handleLogin(response.user.pk,response.access,response.refresh);

            SignupModal.close();

            router.push('/')
        } else {
            const tmpError:string[] = Object.values(response).map((error:any)=>{
                return error;
            })

            setErrors(tmpError);

        }
    }



    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Django, please Signup </h2>

            <form action={submitSignup} className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" name="email" placeholder="Your email address" id="" />
                <input onChange={(e) => setPassword1(e.target.value)} type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" name="password" placeholder="Your Password" id="" />
                <input onChange={(e) => setPassword2(e.target.value)} type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" name="password" placeholder="Repeat your Password" id="" />
                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}               
                        </div>

                    )
                }
                )
                }

                <CustomButton label="submit" onClick={submitSignup} />
            </form>
        </>
    )
    return (
        <Modal isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Signup"
            content={content}
        />
    )

}
export default SignupModel