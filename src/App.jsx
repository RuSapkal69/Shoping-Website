import React from 'react'
import CustomerReviews from './Components/CustomerReviews'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import PopularProducts from './Components/PopularProducts'
import Services from './Components/Services'
import SpecialOffer from './Components/SpecialOffer'
import Subscribe from './Components/Subscribe'
import SuperQuality from './Components/SuperQuality'
import Nav from './Header/Nav'
const App = () => {
  return (
    <main className='relative'>
      <Nav /> 
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer />
      </section>
    </main>
  )
}

export default App
