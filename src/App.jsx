import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import MovieCard from './Components/MovieCard'

function App() {
  return(
    <>
    <Header/>
    <MovieCard/>
    </>
  )
}

export default App
