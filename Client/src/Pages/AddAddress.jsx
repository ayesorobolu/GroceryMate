import React, { useState } from 'react'
import { assets } from '../assets/assets'

//
const InputField = ({type, placeholder, name, handleChange, address }) => (
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-[var(--color-primary)] transition'
     type={type}
     placeholder={placeholder}
     onChange={handleChange}
     name={name}
     value={address[name]}
     required />

)


const AddAddress = () => {

    const[address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',

    })

    const handleChange = (e) => {
        const {name, value} = e.target; 

        setAddress(()=>({
            ...prevAddress,
            [name]: value,
        }))
    }


const onSubmitHandler = async (e) => {
    e.preventDefault();
    }
  return (
    <div className='mt-16 pb-16'>
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-[var(--color-primary)]'>Address </span></p>

        <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
                <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address} name='firstname' type='text' placeholder='First Name'/>
                        <InputField handleChange={handleChange} address={address} name='lastname' type='text' placeholder='Last Name'/>
                    </div>

                    <InputField handleChange={handleChange} address={address} name='email' type='email' placeholder='Email Address'/>

                    <InputField handleChange={handleChange} address={address} name='street' type='text' placeholder='Street'/>

                    <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='city' type='text' placeholder='City'/>
                    <InputField handleChange={handleChange} address={address} name='state' type='text' placeholder='State'/>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='zipcode' type='number' placeholder='Zipcode'/>
                    <InputField handleChange={handleChange} address={address} name='country' type='text' placeholder='Country'/>
                    </div>

                    <InputField handleChange={handleChange} address={address} name='phone' type='text' placeholder='Phone'/>

                    <button className='w-full mt-6 bg-[var(--color-primary)] text-white py-3 hover:bg-[var(--color-primary-dull)] transition cursor-pointer uppercase'>
                        Save Address
                    </button>
                </form>
            </div>
            <img src={assets.add_address_iamge} alt="Add Address" className='md:mr-16 mb-16 md:mt-0'/>

        </div>
    </div>
  )
}

export default AddAddress