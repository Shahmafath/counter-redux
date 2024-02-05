import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <Counter/>
    </div>
  )
}

export default App
