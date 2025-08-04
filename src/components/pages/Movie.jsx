import React from 'react'
import Header from '../templates/Header'
import Hero from '../organisms/Movie/Hero'
import MovieList from '../organisms/Movie/MovieList'
import Footer from '../templates/Footer'
import Subscribe from '../organisms/Home/Subscribe'

function Movie() {
  return (
    <>
    <Header />
    <Hero />
    <MovieList />
    <Subscribe />
    <Footer />
    </>
  )
}

export default Movie