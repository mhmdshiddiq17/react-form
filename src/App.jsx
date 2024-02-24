import { useState } from 'react'
import React from 'react';
import './style.css';
import Button from './Components/Elements/Buttons/index.jsx';
import InputField from './Components/Input/index.jsx';

function App() {

  return (
    
      <div className='flex justify-center min-h-screen items-center'>
        
        <div className='w-full max-w-xs'>
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>Login</h1>
          <p className='font-medium text-slate-500 mb-8'>Welcome please enter your detail</p>
          <form action="">            
              <InputField label="email" type="email" placeholder="email@mail.com" nama="email"/>
              <InputField label="password" type="password" placeholder="password" nama="password"/>
            <Button classname='w-full bg-blue-600'>Login</Button>
          </form>
        </div>
      </div>
      
    
  )
}

export default App
