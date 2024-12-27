'use client'

import usePropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
    const loginModel = useLoginModal();
    const addPropertyModel = usePropertyModal();

    const airbnbYouHome = () => {
        if (userId) {
            addPropertyModel.open();
        } else{
            loginModel.open();
        }


    }
    return (
        <div onClick={airbnbYouHome} className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
            DjangoBnb your home
        </div>
    )


}

export default AddPropertyButton