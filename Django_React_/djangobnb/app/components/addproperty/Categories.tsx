import Image from 'next/image';
import React from 'react'

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ dataCategory, setCategory }) => {
    return (
        <div>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div onClick={() => setCategory('Bleach')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Bleach" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                    <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                    <span className="text-xs">Beach</span>
                </div>
                <div onClick={() => setCategory('Bleach house')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Bleach house" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                    <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                    <span className="text-xs">Beach house</span>
                </div>
                <div onClick={() => setCategory('hotels')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "hotels" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                    <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                    <span className="text-xs">hotels</span>
                </div>
                <div onClick={() => setCategory('villas')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "villas" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                    <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                    <span className="text-xs">villas</span>
                </div>
                <div onClick={() => setCategory('flats')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "flats" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                    <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                    <span className="text-xs">flats</span>
                </div>
                <div onClick={() => setCategory('tiny house')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "tiny house" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-400 hover:opacity-100`}>
                    <Image src="/icon_category.jpg" width={35} height={35} alt="Category-beach" />
                    <span className="text-xs">tiny house</span>
                </div>
            </div>


        </div>
    )
}

export default Categories
