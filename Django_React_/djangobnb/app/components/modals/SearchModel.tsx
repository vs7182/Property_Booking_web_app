'use client'

import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModel";
import Modal from "./Modal";
import { useState } from "react";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import CustomButton from "../forms/CustomButton";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calendar";



const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
}

const SearchModel = () => {
    let content = (<></>);
    const searchModel = useSearchModal();
    const [numGuests, setNumGuests] = useState<string>('1')
    const [numBedrooms, setNumBedrooms] = useState<string>('0')
    const [country, setCountry] = useState<SelectCountryValue>();
    const [numBathrooms, setNumBathrooms] = useState<string>('0')
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);


    const CloseAndSearch =() =>{
        const newSearchQuery:SearchQuery = {
            country:country?.label,
            checkIn:dateRange.startDate,
            checkOut:dateRange.endDate,
            guests:parseInt(numGuests),
            bedrooms:parseInt(numBedrooms),
            bathrooms:parseInt(numBathrooms),
            category:'',
        }

        searchModel.setQuery(newSearchQuery);
        searchModel.close();
    }


    const _setDateRange = (selection: Range) => {
        if (searchModel.step === 'checkin') {
            searchModel.open('checkout')
        } else if (searchModel.step === 'checkout') {
            searchModel.open('details');
        }
        setDateRange(selection)
    }

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where do you want to go?</h2>

            <SelectCountry value={country} onChange={(value) => setCountry(value as SelectCountryValue)} />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton label="Check in date->" onClick={() => searchModel.open('checkin')} />
            </div>
        </>
    )

    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">When do you want to check in? </h2>
            <DatePicker value={dateRange} onChange={(value) => _setDateRange(value)} />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton label="<-Go to location" onClick={() => searchModel.open('location')} />

                <CustomButton label="Check out date->" onClick={() => searchModel.open('checkout')} />
            </div>

        </>
    )
    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">When do you want to check out? </h2>
            <DatePicker value={dateRange} onChange={(value) => _setDateRange(value)} />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton label="<-Go to Check in" onClick={() => searchModel.open('checkin')} />

                <CustomButton label="Details->" onClick={() => searchModel.open('details')} />
            </div>

        </>
    )
    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Details</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label htmlFor="">Number of guests.... </label>
                    <input type="number" min="1" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="w-full h-14 px-4 border border-gray-300 rounded-xl" />
                </div>
                <div className="space-y-4">
                    <label htmlFor="">Number of Bedrooms.... </label>
                    <input type="number" min="1" value={numBedrooms} onChange={(e) => setNumBedrooms(e.target.value)} className="w-full h-14 px-4 border border-gray-300 rounded-xl" />
                </div>
                <div className="space-y-4">
                    <label htmlFor="">Number of Bathrooms.... </label>
                    <input type="number" min="1" value={numBathrooms} onChange={(e) => setNumBathrooms(e.target.value)} className="w-full h-14 px-4 border border-gray-300 rounded-xl" />
                </div>
            </div>


            <div className="mt-6 flex flex-row gap-4">
                <CustomButton label="<-Go to Check out" onClick={() => searchModel.open('checkout')} />

                <CustomButton label="Search" onClick={CloseAndSearch} />
            </div>

        </>
    )



    if (searchModel.step == 'location') {
        content = contentLocation

    } else if (searchModel.step == 'checkin') {
        content = contentCheckin
    } else if (searchModel.step == 'checkout') {
        content = contentCheckout
    } else if (searchModel.step == 'details') {
        content = contentDetails
    }

    return (
        <Modal isOpen={searchModel.isOpen} close={searchModel.close} label="Search" content={content} />
    )
}

export default SearchModel;