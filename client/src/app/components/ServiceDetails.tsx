"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}

interface ServiceDetail {
  id: string;
  serviceId: string;
  title: string;
  slug: string;
  description: string;
  image: { url: string } | null;
  approach: string | null;
  customDevelopment: string | null;
  developmentServices: string | null;
  applications: string | null;
  technologies: { category: string; tools: string }[];
}

export default function ServiceDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [mainService, setMainService] = useState<ServiceDetail | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          setError('No service ID provided in the URL. Please navigate from the services list.');
          setLoading(false);
          return;
        }

        // Fetch service details
        const detailResponse = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/servicedetails?where[serviceId][equals]=${id}&_=${Date.now()}`,
          { cache: 'no-store' }
        );
        if (!detailResponse.ok) {
          throw new Error(`HTTP error! Status: ${detailResponse.status}`);
        }
        const detailData = await detailResponse.json();
        console.log('ServiceDetails API response:', JSON.stringify(detailData, null, 2));
        setRawResponse(detailData);
        if (!detailData.docs || detailData.docs.length === 0) {
          setError(`No service details found for ID "${id}". Please check the CMS data.`);
          setLoading(false);
          return;
        }
        setMainService({
          ...detailData.docs[0],
          image: detailData.docs[0].image
            ? { url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}${detailData.docs[0].image.url}` }
            : null,
        });

        // Fetch services for sidebar and more services
        const servicesResponse = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/services?_=${Date.now()}`,
          { cache: 'no-store' }
        );
        if (!servicesResponse.ok) {
          throw new Error(`HTTP error! Status: ${servicesResponse.status}`);
        }
        const servicesData = await servicesResponse.json();
        if (!servicesData.docs || !Array.isArray(servicesData.docs)) {
          throw new Error('Expected an array in services.docs');
        }
        setServices(
          servicesData.docs.map((doc: any) => ({
            id: doc.id,
            title: doc.title,
            description: doc.description,
            iconUrl: doc.icon?.url
              ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}${doc.icon.url}`
              : '/assets/img/icons/default-icon.png',
          }))
        );
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError(`Failed to fetch data: ${err.message}. Check CMS server.`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, serviceId: id }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      setFormStatus('Quote request submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setFormStatus(`Error submitting form: ${err.message}`);
    }
  };

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

      {/* Service Details Area */}
      <div className="service-details-area-all sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-box-area mb-40">
                <h3>Search by Keyword</h3>
                <div className="search">
                  <input type="text" placeholder="Type keyword here" />
                  <div className="button">
                    <button>
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Our Services</h3>
                <ul className="features-list">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link href={`/servicedetails?id=${service.id}`}>
                        {service.title}{' '}
                        <span>
                          <i className="fa-regular fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Tags</h3>
                <ul className="tags">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link href={`/servicedetails?id=${service.id}`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Download Brochure</h3>
                <p>
                  With a focus on excellence & commitment to exceeding
                  expectations, our experienced team is here to empower
                  Solution.
                </p>
                <div className="download-btns">
                  <a className="daownload1" href="#">
                    PDF Download{' '}
                    <img src="/assets/img/icons/download-img.png" alt="" />
                  </a>
                  <a className="daownload2" href="#">
                    DOC Download{' '}
                    <img src="/assets/img/icons/download-img.png" alt="" />
                  </a>
                </div>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Get A Free Quote</h3>
                <div className="contact-form">
                  <form onSubmit={handleFormSubmit}>
                    <div className="single-input">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="single-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="single-input">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="single-input">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        cols={30}
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                      ></textarea>
                    </div>
                    <div className="button">
                      <button className="theme-btn1" type="submit">
                        Submit Quote{' '}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                    {formStatus && <p>{formStatus}</p>}
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-8 details-left-space">
              <div className="service-details-post">
                {loading ? (
                  <p>Loading service data...</p>
                ) : error ? (
                  <div className="text-center">
                    <h2>Service Not Found</h2>
                    <p>{error}</p>
                    <Link href="/services" className="theme-btn1">
                      Back to Services{' '}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                ) : mainService ? (
                  <>
                    <article>
                      <div className="details-post-area">
                        <div className="image">
                          <Image
                            src={mainService.image?.url || '/images/fallback-service-img.png'}
                            alt={mainService.title || 'Service Image'}
                            width={800}
                            height={400}
                            onError={(e) => console.error(`Failed to load image: ${mainService.image?.url || '/images/fallback-service-img.png'}`, e)}
                          />
                        </div>
                        <div className="space30"></div>
                        <div className="heading1">
                          <h2>{mainService.title}</h2>
                          <div className="space16"></div>
                          <p>{mainService.description}</p>
                        </div>
                      </div>
                    </article>

                    <div className="space50"></div>

                    <article>
                      <div className="details-post-area">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="heading1">
                              <h5>Our Approach</h5>
                              <div className="space16"></div>
                              <p>{mainService.approach || 'No approach details available.'}</p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="space30"></div>
                            <div className="heading1">
                              <h5>Custom Development</h5>
                              <div className="space20"></div>
                              <p>{mainService.customDevelopment || 'No custom development details available.'}</p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="space30"></div>
                            <div className="heading1">
                              <h5>Development Services</h5>
                              <div className="space20"></div>
                              <p>{mainService.developmentServices || 'No development services details available.'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <div className="space50"></div>
                    <article>
                      <div className="details-post-area">
                        <div className="heading1">
                          <h5>Applications</h5>
                          <div className="space16"></div>
                          <p>{mainService.applications || 'No applications details available.'}</p>

                          <div className="space20"></div>
                          <ul className="expart-list">
                            {mainService.technologies && mainService.technologies.length > 0 ? (
                              mainService.technologies.map((tech, index) => (
                                <li key={index}>
                                  <span className="check">
                                    <i className="fa-solid fa-check"></i>
                                  </span>{' '}
                                  <span className="text">{tech.category}:</span> {tech.tools}
                                </li>
                              ))
                            ) : (
                              <li>No technologies listed.</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </article>

                    <div className="space20"></div>

                    <div className="row">
                      {services.slice(0, 2).map((service) => (
                        <div className="col-lg-6 col-md-6" key={service.id}>
                          <div className="">
                            <div className="servcie2-box servcie2-box-2">
                              <div className="icon">
                                <img src={service.iconUrl} alt={service.title} />
                              </div>
                              <Link href={`/servicedetails?id=${service.id}`} className="arrow">
                                <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                              <div className="heading1">
                                <h4>
                                  <Link href={`/servicedetails?id=${service.id}`}>
                                    {service.title}
                                  </Link>
                                </h4>
                                <div className="space16"></div>
                                <p>{service.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space50"></div>

                    <div className="faq-area-all">
                      <div className="heading1">
                        <h5>Frequently Asked Question</h5>
                      </div>
                      <div className="space20"></div>

                      <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              What does SkyRise do?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              SkyRise Systems provides innovative IT solutions, including software development, cloud solutions, and consulting services, tailored to businesses in Lesotho and beyond.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              How can SkyRise help my business?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              We offer customized solutions to streamline operations, enhance digital presence, and drive growth through technology tailored to your business needs.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              What industries does SkyRise serve?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              We serve various industries, including education, retail, NGOs, and more, providing solutions that address specific sector challenges.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              How experienced is the team at SkyRise?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Our team comprises skilled professionals with extensive experience in software development, IT consulting, and cloud solutions.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              How long does it take to implement a solution from SkyRise?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Implementation timelines vary based on project complexity, but we provide clear timelines during the planning phase to ensure timely delivery.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>No service data available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div className="servcie2 sp bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <h2>More Services</h2>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            {services.slice(0, 3).map((service) => (
              <div className="col-lg-4 col-md-6" key={service.id}>
                <div className="">
                  <div className="servcie2-box servcie2-box-2">
                    <div className="icon">
                      <img src={service.iconUrl} alt={service.title} />
                    </div>
                    <Link href={`/servicedetails?id=${service.id}`} className="arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="heading1">
                      <h4>
                        <Link href={`/servicedetails?id=${service.id}`}>
                          {service.title}
                        </Link>
                      </h4>
                      <div className="space16"></div>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <Link className="theme-btn1" href="/services">
                View All Services{' '}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
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
                  innovative solutions can propel.
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
                <Link className="cta-btn2" href="/services">
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