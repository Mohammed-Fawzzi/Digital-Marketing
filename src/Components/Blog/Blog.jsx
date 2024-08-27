import React from 'react'
import blog1 from '../../Assets/blog1.jpg'
import blog2 from '../../Assets/blog2.jpg'
import blog3 from '../../Assets/blog3.jpg'
import { Helmet } from 'react-helmet'

export default function Blog() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Blog</title>
    </Helmet>
    
    {/* Content */}
      <section className='blog py-3 my-3'> 
        <div className="container">

          <div className="row border-top py-5">
            <div className="col-md-3">
              <img src={blog1} alt="blog-image" className='object-fit-cover w-100 rounded-4' loading='lazy'/>
            </div>

            <div className="col-md-9">
              <div className='d-flex'>
                <span className='text-black-50 fw-bold pe-3'>Posted</span>
                <p>Jan 1, 2024</p>
                <span className='text-black-50 fw-bold ps-3'> - </span>
                <span className='text-black-50 ps-1'>By</span>
                <span className='text-black-50 fw-bold ps-1'> - </span>
                <h5 className='fw-bold home-head ps-3'>News</h5>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='h1 fw-bold'>Punto Pago allows quick and secure payments for services in Panama</span>
                <button className='btn btn-primary p-3'><i className='fa-solid fa-arrow-right fs-4'></i></button>
              </div>
            </div>
          </div>

          <div className="row border-top py-5">
            <div className="col-md-3">
              <img src={blog2} alt="blog-image" className='object-fit-cover w-100 rounded-4' loading='lazy'/>
            </div>

            <div className="col-md-9">
              <div className='d-flex'>
                <span className='text-black-50 fw-bold pe-3'>Posted</span>
                <p>Jan 1, 2024</p>
                <span className='text-black-50 fw-bold ps-3'> - </span>
                <span className='text-black-50 ps-1'>By</span>
                <span className='text-black-50 fw-bold ps-1'> - </span>
                <h5 className='fw-bold home-head ps-3'>News</h5>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='h1 fw-bold'>Collaborative effort of team members for optimal project outcomes</span>
                <button className='btn btn-primary p-3'><i className='fa-solid fa-arrow-right fs-4'></i></button>
              </div>
            </div>
          </div>

          <div className="row border-top border-bottom py-5">
            <div className="col-md-3">
              <img src={blog3} alt="blog-image" className='object-fit-cover w-100 rounded-4' loading='lazy'/>
            </div>

            <div className="col-md-9">
              <div className='d-flex'>
                <span className='text-black-50 fw-bold pe-3'>Posted</span>
                <p>Jan 1, 2024</p>
                <span className='text-black-50 fw-bold ps-3'> - </span>
                <span className='text-black-50 ps-1'>By</span>
                <span className='text-black-50 fw-bold ps-1'> - </span>
                <h5 className='fw-bold home-head ps-3'>News</h5>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <span className='h1 fw-bold'>The user can also replenish a balance make remittances</span>
                <button className='btn btn-primary p-3'><i className='fa-solid fa-arrow-right fs-4'></i></button>
              </div>
            </div>
          </div>

          <div className="row py-5 text-center justify-content-center position-relative blog-joins">
            <div className="col-md-8">
              <p className='h3 home-head'>Join Our Community</p>
              <h1 className='fw-bold py-3'>Subscribe to our newsletter</h1>
              <p >But I must explain to you how all this mistaken idea of denouncing pleasure and <br /> praising pain was born and I will give you a complete.</p>
              <div className="position-relative mb-4 blog-contact py-3">
                <input className="form-control rounded-pill text-white" type="text" placeholder="Enter Your Email"/>
                <button className="btn position-absolute rounded-pill">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
