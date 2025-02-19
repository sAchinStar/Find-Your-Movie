import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import MovieCard from './Components/MovieCard'
import Navbar from './Components/Navbar'
import Details from './Components/Details'

function App() {
  return (
    <>
      <Navbar />
      <Details/>
      <Header />
      <section id='filter-container'>
        <button className='filter-button'>Latest</button>
        <button className='filter-button'>Drama</button>
        <button className='filter-button'>Romance</button>
        <button className='filter-button'>South</button>
        <button className='filter-button'>Hollywood</button>
        <button className='filter-button'>Tollywood</button>
      </section>
      <section id='movie-section'>
        <div id='card-container'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <div id='button-container'>
          <button>&larr;Prev</button>
          <button>Next&rarr;</button>
        </div>
      </section>
    </>
  )
}

export default App
