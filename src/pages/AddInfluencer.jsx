import React, { useState } from 'react'
import InputField from '../components/InputField'

const AddInfluencer = () => {

  const[name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
  }

  


  return (
    <div className='w-full md:px-20 sm:px-8 px-0 flex flex-col text-center'>

        <h1 className='font-poppins sm:text-2xl text-xl mb-8'>Add Influencers</h1>


        <form onSubmit={handleSubmit} >

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 w-full'>
        <InputField
            label={'Name'}
            id={'name'}
            onChange={(e) => setName(e.target.value)}
            value={name}

        />

        <InputField
            label={'name'}
            id={'name'}
            onChange={(e) => setName(e.target.value)}
            value={name}

        />

        <InputField
            label={'name'}
            id={'name'}
            onChange={(e) => setName(e.target.value)}
            value={name}

        />

        <InputField
            label={'name'}
            id={'name'}
            onChange={(e) => setName(e.target.value)}
            value={name}

        />

        </div>



        <button className='mt-10 bg-[#D10269] p-2 px-10 
        rounded-sm  text-white sm:text-[15px] text-[12px]'>Add</button>
        </form>
    </div>
  )
}

export default AddInfluencer