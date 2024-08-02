import React from 'react'
import pfp from '../src/assets/card-pfp.jpg'
const App = () => {
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
    <div className='bg-slate-600 min-h-96 w-80 rounded-xl p-10 tranition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
      <div className=' items-center justify-center flex'>
      <img src={pfp} alt="picture" className='h-32 rounded-full w-32 mr-4' />
      </div>
      <div className='pt-6 md:p-8 text-center space-y-4'>
      <p className='text-lg font-medium'>
      "In the world of web development, mastering the MERN stack means wielding the power to build dynamic and scalable applications from end to end, transforming ideas into interactive realities."
      </p>
      <p>
        ~Pratham Koranne
      </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default App