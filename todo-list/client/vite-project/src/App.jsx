import { useState } from 'react'


import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainSection/>
      <Footer/>
    </>
  )
}

export default App
