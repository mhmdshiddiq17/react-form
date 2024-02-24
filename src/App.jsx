import { useState } from 'react'
import React from 'react';
import './style.css';

function App() {

  return (
    
      <div className='flex justify-center min-h-screen items-center'>
        
        <div className='w-full max-w-xs'>
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>Login</h1>
          <p className='font-medium text-slate-500'>Welcome please enter your detail</p>
          <form action="">
            <div className='mb-6'>
              <label htmlFor="email" className='block text-slate-700 text-sm font-bold mb-2'>email</label>
              <input type="text" className='text-sm border rounded 2-full py-2 px-3 text-slate-700' placeholder='example@mail.com'/>
            </div>
          </form>
        </div>
      </div>
      
    
  )
}

export default App
