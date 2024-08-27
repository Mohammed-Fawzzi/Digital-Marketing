import React from 'react'
import Image1 from '../../Assets/Group-43.png'
import welcomeImage from '../../Assets/05.png'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
    </Helmet>
    
    {/* Content */}
      <section className='py-5 home'>
      <img src={Image1} alt="Arrow" className="nav-arrow"/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className='home-head'>Welcome</h4>
              <span className='home-mark pt-4'>Marketing Is The Key of Business Success</span>
              <p className='text-black-50 py-3'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
              <button className='btn rounded-pill text-white'>Get Started</button>
            </div>

            <div className="col-md-6">
              <img src={welcomeImage} alt="welcome-image" className='object-fit-cover w-100' loading='lazy'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
