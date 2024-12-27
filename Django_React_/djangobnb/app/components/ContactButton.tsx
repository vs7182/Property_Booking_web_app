'use client'

import { useRouter } from "next/navigation";
import useLoginModal from "../hooks/useLoginModal";
import apiService from "../services/apiService";

interface ContactButtonProps{
    userId: string | null;
    landlordId:string;
}

const ContactButton:React.FC<ContactButtonProps>= ({userId,landlordId}) =>{ 
    const login = useLoginModal();
    const router = useRouter();

    const startConversation = async () =>{
        if(userId){
            const conversation = await apiService.get(`/api/chat/start/${landlordId}/`);

            if(conversation.conversation_id){
                router.push(`/inbox/${conversation.conversation_id}`)
            }

        }else{
            login.open()
        }

    }

    return (
        <div onClick={startConversation} className="mt-6 py-4 px-6 bg-airbnb cursor-pointer text-white rounded-xl hover:bg-airbnb-dark transition">contact</div>
        
        
    )

}
export default ContactButton;