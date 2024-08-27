import React from 'react'
import { Helmet } from 'react-helmet'

export default function Services() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Services</title>
    </Helmet>
    
    {/* Content */}
      <section className='services position-relative'>
        <div className="container-fluid py-3">

        <div className="services-header text-center py-3">
          <h5 className='services-head'>What We Can Do For You</h5>
          <h1 className=' fw-bold'>services we can help you with</h1>
        </div>

          <div className="row p-3 justify-content-center text-center">

            <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
              <div className='p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3'>
                <i className="fa-solid fa-gear fs-4"></i>
              </div>
              <h4 className='fw-bold py-4'>Product management</h4>
              <p className=' text-body-tertiary fw-bold'>30 Available vacancy</p>
            </div>

            <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
              <div className='p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3'>
                <i className="fa-solid fa-code fs-4"></i>
              </div>
              <h4 className='fw-bold py-4'>Web & mobile development</h4>
              <p className=' text-body-tertiary fw-bold'>30 Available vacancy</p>
            </div>

            <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
              <div className='p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3'>
                <i className="fa-solid fa-headphones fs-4"></i>
              </div>
              <h4 className='fw-bold py-4'>customer support</h4>
              <p className=' text-body-tertiary fw-bold'>30 Available vacancy</p>
            </div>

            <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
              <div className='p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3'>
                <i className="fa-solid fa-wand-magic-sparkles fs-4"></i>
              </div>
                <h4 className='fw-bold py-4'>Design & vreatives              </h4>
              <p className=' text-body-tertiary fw-bold'>30 Available vacancy</p>
            </div>

            <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
              <div className='p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3'>
                <i className="fa-solid fa-bullseye fs-4"></i>
              </div>
              <h4 className='fw-bold py-4'>Marketing & communication</h4>
              <p className=' text-body-tertiary fw-bold'>30 Available vacancy</p>
            </div>

            <div className="col-md-3 m-3 p-5 rounded-3 services-settings">
              <div className='p-2 services-gear mb-2 d-flex justify-content-center align-items-center rounded-3'>
                <i className="fa-solid fa-chart-line fs-4"></i>
              </div>
              <h4 className='fw-bold py-4'>Business development</h4>
              <p className=' text-body-tertiary fw-bold'>30 Available vacancy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
