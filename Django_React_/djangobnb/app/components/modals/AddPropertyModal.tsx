'use client'


import React, { ChangeEvent, useState } from 'react'
import Modal from './Modal'
import usePropertyModal from '@/app/hooks/useAddPropertyModal'
import CustomButton from '../forms/CustomButton'
import Categories from '../addproperty/Categories'
import SelectCountry, { SelectCountryValue } from '../forms/SelectCountry'
import Image from 'next/image'
import apiService from '@/app/services/apiService'
import { useRouter } from 'next/navigation'

const AddPropertyModal = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors,setErrors] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState('');
  const [dataTitle, setDataTitle] = useState('');
  const [dataDescription, setDataDescription] = useState('');
  const [dataPrice, setDataPrice] = useState('');
  const [dataBedrooms, setDataBedrooms] = useState('');
  const [dataBathrooms, setDataBathrooms] = useState('');
  const [dataGuests, setDataGuests] = useState('');
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  const [dataImage, setDataImage] = useState<File | null>(null);
  const addPropertymodal = usePropertyModal();

  const setCategory = (category: string) => {
    setDataCategory(category)
  }
  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setDataImage(tmpImage);
    }
  }

  const submitForm = async () =>{
    console.log("submit form");
    if(dataCategory&&dataTitle &&dataPrice &&dataDescription &&dataCountry &&dataImage){
      const formData = new FormData();
      formData.append('category',dataCategory);
      formData.append('title',dataTitle);
      formData.append('description',dataDescription);
      formData.append('price_per_night',dataPrice);
      formData.append('bedrooms',dataBedrooms);
      formData.append('bathrooms',dataBathrooms);
      formData.append('guests',dataGuests);
      formData.append('country',dataCountry.label);
      formData.append('country_code',dataCountry.value);
      formData.append('image',dataImage);



      const response = await apiService.post('/api/properties/create/',formData)
      if(response.success){
        console.log("Successs:->")

        router.push('/?added=true');

        addPropertymodal.close();
      }else {
        console.log('error');

        const tmpError:string[] = Object.values(response).map((error:any)=>{
          return error;
        })
        setErrors(tmpError)
      }
    }
  }

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className='mb-6 text-2xl'>Choose category</h2>
          <Categories dataCategory={dataCategory} setCategory={(category) => setCategory(category)} />

          <CustomButton label='Next' onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className='mb-6 text-2xl'>Describe your place</h2>
          <div className="pt-3 pb-3 space-y-4">
            <div className='flex flex-col space-y-2'>
              <label htmlFor="title">Title</label>
              <input type="text" value={dataTitle} className='w-full p-4 border border-gray-600 rounded-xl' onChange={(e) => setDataTitle(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="title">Description</label>
              <textarea value={dataDescription} className='w-full h-[200px] p-4 border border-gray-600 rounded-xl' onChange={(e) => setDataDescription(e.target.value)}></textarea>
            </div>
          </div>
          <CustomButton label='Previous' className='mb-2 bg-black hover:bg-gray-800' onClick={() => setCurrentStep(1)} />
          <CustomButton label='Next' onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <div>
          <h2 className='mb-6 text-2xl'>Details</h2>
          <div className="pt-3 pb-3 space-y-4">
            <div className='flex flex-col space-y-2'>
              <label htmlFor="title">Enter Price</label>
              <input type="number" value={dataPrice} className='w-full p-4 border border-gray-600 rounded-xl' onChange={(e) => setDataPrice(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="title">Bedrooms</label>
              <input type="number" value={dataBedrooms} className='w-full p-4 border border-gray-600 rounded-xl' onChange={(e) => setDataBedrooms(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="title">Bathrooms</label>
              <input type="number" value={dataBathrooms} className='w-full p-4 border border-gray-600 rounded-xl' onChange={(e) => setDataBathrooms(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="title">Number of guests</label>
              <input type="number" value={dataGuests} className='w-full p-4 border border-gray-600 rounded-xl' onChange={(e) => setDataGuests(e.target.value)} />
            </div>
          </div>
          <CustomButton label='Previous' className='mb-2 bg-black hover:bg-gray-800' onClick={() => setCurrentStep(2)} />
          <CustomButton label='Next' onClick={() => setCurrentStep(4)} />

        </div>

      ) : currentStep == 4 ? (
        <>
          <h2 className='mb-6 text-2xl'>Location</h2>
          <div className="pt-3 pb-3 space-y-4">
            <SelectCountry value={dataCountry} onChange={(value) => setDataCountry(value as SelectCountryValue)} />
          </div>
          <CustomButton label='Previous' className='mb-2 bg-black hover:bg-gray-800' onClick={() => setCurrentStep(3)} />
          <CustomButton label='Next' onClick={() => setCurrentStep(5)} />

        </>
      ) : currentStep == 5 ? (
        <>
          <h2 className='mb-6 text-2xl'>Add Image</h2>
          <div className="pt-3 pb-3 space-y-4">
            <div className='py-4 px-6 bg-gray-600 text-white rounded-xl'>
              <input type="file" accept='image' onChange={setImage} />
            </div>
            {dataImage && (<div className='w-[200px] h-[150px] relative'>
              <Image fill src={URL.createObjectURL(dataImage)} alt='upload image' className='w-full h-full object-cover rounded-xl' />
            </div>)}
          </div>

          {errors.map((error,index)=>{
            return(
              <div key={index} className='p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80'>
                {error}

              </div>
            )
          })}
          <CustomButton label='Previous' className='mb-2 bg-black hover:bg-gray-800' onClick={() => setCurrentStep(4)} />
          <CustomButton label='Submit' onClick={submitForm} />
        </>) : (<></>)
      }

    </>
  )
  return (
    <>
      <Modal
        isOpen={addPropertymodal.isOpen}
        close={addPropertymodal.close}
        label='Add Property'
        content={content}
      />
    </>

  )
}

export default AddPropertyModal