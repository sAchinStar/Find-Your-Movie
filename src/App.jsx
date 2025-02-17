import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import MovieCard from './Components/MovieCard'

function App() {
  return (
    <>
      <Header />
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
