import React from 'react'
import contactImage from '../../Assets/02.png'
import contactArrow from '../../Assets/Group-44.png'
import { Helmet } from 'react-helmet'

export default function Contacts() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
    </Helmet>
    
    {/* Content */}
      <section className='contact py-3 my-3 border-top position-relative'>
        <img src={contactArrow} alt="contact-arrow" className='contact-arrow'/>
        <div className="container py-4">
          <div className="row g-5">

            <div className="col-md-6">
              <p className='home-head h5'>Contact Us</p>
              <h1 className='py-3'>let's talk about everything's!</h1>
              <img src={contactImage} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
            </div>

            <div className="col-md-6">
              <form className='py-5'>
                <div>
                  <label htmlFor="name" className='fw-bold h4'>Enter Your Full Name</label>
                  <input type="text" id='name' className='form-control w-100 p-3 my-2'/>
                </div>

                <div className='py-3'>
                  <label htmlFor="email" className='fw-bold h4'>Enter Your Email Address</label>
                  <input type="email" id='email' className='form-control w-100 p-3 my-2'/>
                </div>

                <div>
                  <label htmlFor="message" className='fw-bold h4'>Write Massage</label>
                  <textarea id="message" className='form-control w-100 py-3 my-3 textarea-custom' />
                </div>

                <div className='d-flex justify-content-between'>
                  <div className='py-3 d-flex align-items-center'>
                    <input type="checkbox" id='checkbox' className='form-check-input me-2'/>
                    <label htmlFor="checkbox" className='fw-bold pt-1'> Save My Email</label>
                  </div>

                  <button className='btn rounded-pill px-5 text-white'>Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
