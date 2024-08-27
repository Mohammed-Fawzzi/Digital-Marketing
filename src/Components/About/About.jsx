import React from 'react'
import aboutArrow from '../../Assets/Group-4.png'
import servicesImage from '../../Assets/07.png'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
    </Helmet>
    
    {/* Content */}
      <section className='about border-top py-3 my-3'>

        <div className='d-flex justify-content-center'>
          <img src={aboutArrow} alt="about-start" className='about-arrow'/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className='home-head'>Read More About Us</h4>
              <span className='home-mark pt-4'>Track Your Business Marketing To The Next Level</span>
              <p className='text-black-50 py-3'>But I must explain to you how all this mistaken idea of denouncing pleasure pain was born and I will give you a complete.</p>
              <button className='btn rounded-pill text-white'>Get Started</button>
            </div>

            <div className="col-md-6 pt-3">
              <img src={servicesImage} alt="services-image" className='object-fit-cover w-100' loading='lazy'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
