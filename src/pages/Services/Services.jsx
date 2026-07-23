import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceCard from '@/components/common/ui/ServiceCard'
import { services } from '@/constants/services'

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

            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
