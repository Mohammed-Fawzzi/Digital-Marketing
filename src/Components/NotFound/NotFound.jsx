import React from 'react'
import Error from '../../Assets/404.svg'
import notFoundArrow from '../../Assets/Group-44.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Not Found</title>
    </Helmet>
    
    {/* Content */}
      <section className='not-found py-3 my-3 border-top position-relative'>
        <img src={notFoundArrow} alt="arrow" className='not-foundArrow'/>
        <div className="container py-5 text-start">
          <div className="row">
            <div className="col-md-12">

              <h1 className='home-mark'>Error 404</h1>

              <div className='d-flex flex-column align-items-center'>
                <img src={Error} alt="Error" className='error-image'/>
                <div className='mt-4 text-center'>
                  <h1 className='h5'>Oops! Page Not Found</h1>
                  <p>It seems we can’t find what you’re looking for. Perhaps searching can help.</p>

                  <div className="position-relative mb-4 blog-contact py-3">
                    <input className="form-control text-white" type="text" placeholder="Search...."/>
                    <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                  </div>
                </div>
                <div className='mt-3 back'>
                  <Link to="/" className='text-decoration-none'>
                    <span className='fw-bold h5'>Bring me back home</span> <i className="fa-solid fa-arrow-rotate-left"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
