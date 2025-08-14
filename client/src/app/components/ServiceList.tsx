"use client";

   import React, { useEffect, useState } from 'react';
   import Link from 'next/link';
   import Image from 'next/image';

   interface Service {
     id: string;
     title: string;
     description: string;
     iconUrl: string;
   }

   export default function ServiceList() {
     const [services, setServices] = useState<Service[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
       const fetchServices = async () => {
         try {
           const res = await fetch('/api/services?_=' + Date.now(), {
             cache: 'no-store',
           });
           console.log('Services API Response status:', res.status);
           if (!res.ok) {
             throw new Error(`HTTP error! Status: ${res.status}`);
           }
           const contentType = res.headers.get('content-type');
           if (!contentType || !contentType.includes('application/json')) {
             throw new Error('Response is not JSON');
           }
           const data = await res.json();
           console.log('Services API response:', JSON.stringify(data, null, 2));
           if (!data || !data.docs || !Array.isArray(data.docs)) {
             throw new Error('Expected an array in data.docs');
           }
           setServices(
             data.docs.map((doc: any) => ({
               id: doc.id,
               title: doc.title,
               description: doc.description,
               iconUrl: doc.icon?.url
                 ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}${doc.icon.url}`
                 : '/assets/img/icons/default-icon.png',
             }))
           );
         } catch (err: any) {
           console.error('Error fetching services:', {
             message: err.message,
             stack: err.stack,
           });
           setError(`Failed to load services: ${err.message}. Check if the CMS server is running.`);
           setServices([]);
         } finally {
           setLoading(false);
         }
       };

       fetchServices();
     }, []);

     return (
       <div>
         {/* Hero Area */}
         <div className="common-hero">
           <section className="hero10-benar">
             <div className="container-fluid p-0">
               <div className="row">
                 <div className="col-12">
                   <div className="marquee-wrap marquee-wrap-inner">
                     <div className="marquee-text">
                       {Array.from({ length: 24 }).map((_, index) => (
                         <div className="brand-single-box" key={index}>
                           <img src={`/assets/img/logo/slider-logo${(index % 7) + 1}.png`} alt="" />
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
               <div className="slider-after"></div>
             </div>
           </section>
         </div>

         {/* Service Area */}
         <div className="servcie2 service-page-sec">
           <div className="container">
             <div className="row">
               {loading ? (
                 <p>Loading services...</p>
               ) : error ? (
                 <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>
               ) : services.length > 0 ? (
                 services.map((service) => (
                   <div className="col-lg-4 col-md-6" key={service.id}>
                     <div className="servcie2-box">
                       <div className="icon">
                         <Image
                           src={service.iconUrl}
                           alt={service.title}
                           width={30}
                           height={30}
                           onError={() => console.error(`Failed to load image: ${service.iconUrl}`)}
                         />
                       </div>
                       <Link href={`/servicedetails?id=${service.id}`} className="arrow">
                         <i className="fa-solid fa-arrow-right" />
                       </Link>
                       <div className="heading1">
                         <h4>
                           <Link href={`/servicedetails?id=${service.id}`}>
                             {service.title}
                           </Link>
                         </h4>
                         <div className="space16" />
                         <p>{service.description}</p>
                       </div>
                     </div>
                   </div>
                 ))
               ) : (
                 <p>No services available</p>
               )}
             </div>
           </div>
         </div>

         {/* Solution Area */}
         <div className="solution about-solution sp">
           <div className="container">
             <div className="row align-items-center">
               <div className="col-lg-6">
                 <div className="images">
                   <div className="row">
                     <div className="col-lg-12">
                       <div className="image">
                         <img src="/assets/img/about/visiton-img1.png" alt="" />
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <div className="space30"></div>
                       <div className="image">
                         <img src="/assets/img/about/visiton-img2.png" alt="" />
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <div className="space30"></div>
                       <div className="image">
                         <img src="/assets/img/about/visiton-img3.png" alt="" />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-lg-6">
                 <div className="heading1">
                   <span className="span">Our Vision</span>
                   <h2>Driving Innovation: Our Vision at SkyRise</h2>
                   <div className="space16"></div>
                   <p>
                     To be Lesotho’s leading tech solutions provider—known for
                     trust, innovation, and transforming everyday challenges into
                     digital opportunities.
                   </p>
                   {services.slice(0, 2).map((service) => (
                     <div className="item-box" key={service.id}>
                       <div className="icon">
                         <div>
                           <img
                             src={service.iconUrl}
                             alt={service.title}
                           />
                         </div>
                       </div>
                       <div>
                         <h3>
                           <Link href={`/servicedetails?id=${service.id}`}>{service.title}</Link>
                         </h3>
                         <div className="space10"></div>
                         <p>{service.description}</p>
                       </div>
                     </div>
                   ))}
                   <div className="space30"></div>
                   <div>
                     <Link className="theme-btn1" href="/contact">
                       Get A Quote{' '}
                       <span>
                         <i className="fa-solid fa-arrow-right"></i>
                       </span>
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

         {/* CTA Area */}
         <div className="cta">
           <div className="container">
             <div className="row align-items-center">
               <div className="col-lg-7">
                 <div className="heading1-w">
                   <h2>At SkyRise Systems, We're Committed To Businesses</h2>
                   <div className="space16"></div>
                   <p>
                     Take the first step towards achieving your business goals by
                     contacting us today. Schedule a consultation with one of our
                     IT specialists to discuss your objectives and explore how our
                     innovative solutions can propel your business forward.
                   </p>
                 </div>
               </div>
               <div className="col-lg-5">
                 <div className="buttons">
                   <Link className="cta-btn1" href="/contact">
                     Request a Consultation{' '}
                     <span>
                       <i className="fa-solid fa-arrow-right"></i>
                     </span>
                   </Link>
                   <Link className="cta-btn2" href="/service">
                     Explore Solutions{' '}
                     <span>
                       <i className="fa-solid fa-arrow-right"></i>
                     </span>
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }