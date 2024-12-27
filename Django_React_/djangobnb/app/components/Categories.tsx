'use client'


import Image from "next/image"
import useSearchModal, { SearchQuery } from "../hooks/useSearchModel"
import { useState } from "react";

const Categories = () => {
    const searchModel = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category)

        const query: SearchQuery = {
            country: searchModel.query.country,
            checkIn: searchModel.query.checkIn,
            checkOut: searchModel.query.checkOut,
            guests: searchModel.query.guests,
            bedrooms: searchModel.query.bedrooms,
            bathrooms: searchModel.query.bathrooms,
            category:_category
        }

        searchModel.setQuery(query);
    }
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div onClick={()=>_setCategory('')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == '' ? 'border-black':'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                <span className="text-xs">All</span>
            </div>
            <div onClick={()=>_setCategory('beach')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'beach' ? 'border-black':'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                <span className="text-xs">Beach house</span>
            </div>
            <div onClick={()=>_setCategory('hotels')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'hotels' ? 'border-black':'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                <span className="text-xs">hotels</span>
            </div>
            <div onClick={()=>_setCategory('villas')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'villas' ? 'border-black':'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                <span className="text-xs">villas</span>
            </div>
            <div onClick={()=>_setCategory('flats')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'flats' ? 'border-black':'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                <span className="text-xs">flats</span>
            </div>
            <div onClick={()=>_setCategory('Tiny house')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'Tiny house' ? 'border-black':'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                <span className="text-xs">tiny house</span>
            </div>
        </div>

    )

}

export default Categories