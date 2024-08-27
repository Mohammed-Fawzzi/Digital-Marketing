import React from 'react'
import project1 from '../../Assets/project1.jpg'
import project2 from '../../Assets/project2.jpg'
import project3 from '../../Assets/project3.jpg'
import project4 from '../../Assets/project4.jpg'
import project5 from '../../Assets/project5.jpg'
import project6 from '../../Assets/project6.jpg'
import { Helmet } from 'react-helmet'

export default function Projects() {
  return (
    <>
    {/* Helmet */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Projects</title>
    </Helmet>
    
    {/* Content */}
      <section className='projects border-top py-3 my-3'>
        <div className='px-5'>
          <p className='home-head h5'>Portfolio</p>
          <h2 className='fw-bold'>Recent Projects</h2>
        </div>

        <div className="container">
          <div className="row py-3 g-5">
            
          <div className="col-md-6 project position-relative">
            <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
              <h5 className='fw-bold'>Login Mobile Interface illustrations</h5>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <p className='text-black-50 pt-3 fw-bold'>Digital Experience <span className='fw-bold text-black-50'>-</span> Ecommerce</p>
                <button className='btn btn-primary'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
            </div>
            <img src={project1} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
          </div>

          <div className="col-md-6 project position-relative">
          <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
              <h5 className='fw-bold'>Some new ideas for branding</h5>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <p className='text-black-50 pt-3 fw-bold'>Branding Strategy</p>
                <button className='btn btn-primary'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
            </div>
            <img src={project2} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
          </div>

          <div className="col-md-6 project position-relative">
          <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
              <h5 className='fw-bold'>Designing a mobile store application</h5>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <p className='text-black-50 pt-3 fw-bold'>Branding Strategy <span className='fw-bold text-black-50'>-</span> Digital Experience </p>
                <button className='btn btn-primary'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
            </div>
            <img src={project3} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
          </div>

          <div className="col-md-6 project position-relative">
          <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
              <h5 className='fw-bold'>The difference between UI and UX</h5>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <p className='text-black-50 pt-3 fw-bold'>Uncategorized</p>
                <button className='btn btn-primary'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
            </div>
            <img src={project4} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
          </div>

          <div className="col-md-6 project position-relative">
          <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
              <h5 className='fw-bold'>Interesting stories about IT world</h5>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <p className='text-black-50 pt-3 fw-bold'>Branding Strategy</p>
                <button className='btn btn-primary'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
            </div>
            <img src={project5} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
          </div>

          <div className="col-md-6 project position-relative">
          <div className="inner-project position-absolute bg-white p-4 top-50 start-50 translate-middle-x w-75 rounded-3">
              <h5 className='fw-bold'>Beautiful design of mobile application</h5>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <p className='text-black-50 pt-3 fw-bold'>Digital Experience <span className='fw-bold text-black-50'>-</span> Ecommerce</p>
                <button className='btn btn-primary'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
            </div>
            <img src={project6} alt="project-image" className='object-fit-cover w-100 rounded-5' loading='lazy'/>
          </div>

          </div>
        </div>
      </section>
    </>
  )
}
