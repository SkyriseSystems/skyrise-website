"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  image?: { url: string };
  implementationProcess?: object[];
  benefits?: { title: string; description: string }[];
}

export default function ProjectDetails() {
  const searchParams = useSearchParams();
  const [mainProject, setMainProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<any>(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchMainProject = async () => {
      const projectId = searchParams.get('id') || '';
      if (!projectId) {
        setError('No project ID provided in the URL.');
        setLoading(false);
        return;
      }
      try {
        console.log('Fetching from:', `${API_BASE_URL}/api/projectdetails?where[projectId][equals]=${projectId}&_=${Date.now()}`);
        const response = await fetch(`${API_BASE_URL}/api/projectdetails?where[projectId][equals]=${projectId}&_=${Date.now()}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Project details API endpoint not found. Ensure /api/projectdetails is correctly set up.');
          }
          throw new Error(`HTTP error! Status: ${response.status}, StatusText: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Direct CMS API response:', JSON.stringify(data, null, 2));
        setRawResponse(data);
        if (!data.docs || data.docs.length === 0) {
          setError(`No project details found for ID "${projectId}". Please ensure the project exists in the CMS.`);
          return;
        }
        setMainProject({
          id: data.docs[0].id,
          title: data.docs[0].title,
          description: data.docs[0].description,
          image: data.docs[0].image && typeof data.docs[0].image === 'object' && data.docs[0].image.url ? { url: `${API_BASE_URL}${data.docs[0].image.url}` } : { url: '/assets/img/others/project-details-img1.png' },
          implementationProcess: data.docs[0].implementationProcess?.length ? data.docs[0].implementationProcess : ['Needs Assessment', 'Solution Design', 'Data Migration', 'Change Management', 'Testing & Quality', 'Go Live & Support'],
          benefits: data.docs[0].benefits?.length ? data.docs[0].benefits : [
            { title: 'Improved Efficiency', description: 'Streamline business processes and workflows, reducing manual effort and improving productivity.' },
            { title: 'Enhanced Data Visibility', description: 'Centralized data access for better decision-making and real-time insights.' },
            { title: 'Scalability', description: 'Adaptable systems that grow with your business needs.' },
            { title: 'Cost Savings', description: 'Reduce operational costs through automation and optimized resource use.' },
          ],
        });
      } catch (err: any) {
        console.error('Fetch error:', {
          message: err.message,
          name: err.name,
          stack: err.stack,
        });
        setError(`Failed to fetch project data: ${err.message}. Check CMS server and network logs at http://localhost:3000.`);
      } finally {
        setLoading(false);
      }
    };

    fetchMainProject();
  }, [searchParams]);

  const tags = [
    'Software Development',
    'Cloud',
    'It Solution',
    'Data Analytics Service',
    'Technology',
    'Custom Development',
    'Cyber Security',
    'Consulting Service',
  ];

  const moreProjects = [
    {
      id: '1',
      title: 'Consulting Service',
      description: 'Strategic IT planning, roadmap development, business process analysis, and improvement for IT solutions & technology.',
      icon: '/assets/img/icons/service-page-icon1.png',
    },
    {
      id: '2',
      title: 'Software Development',
      description: 'Mobile app development for iOS, Android, and cross-platform solutions & web application.',
      icon: '/assets/img/icons/service-page-icon2.png',
    },
    {
      id: '3',
      title: 'Cloud Solution',
      description: 'Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
      icon: '/assets/img/icons/service-page-icon3.png',
    },
  ];

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


      {/* Project Details Area */}
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
                <h3>Tags</h3>
                <ul className="tags">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <Link href="/service">{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Get A Free Quote</h3>
                <div className="contact-form">
                  <div className="single-input">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="single-input">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="single-input">
                    <input type="number" placeholder="Phone Number" />
                  </div>
                  <div className="single-input">
                    <textarea placeholder="Your Message" cols={30} rows={3}></textarea>
                  </div>
                  <div className="button">
                    <Link href="/contact" className="theme-btn1">
                      Learn More <span><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 details-left-space">
              <div className="service-details-post">
                {loading && <div>Loading project data...</div>}
                {error && <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>}
                {mainProject && (
                  <>
                    <article>
                      <div className="details-post-area">
                        <div className="image">
                          <Image
                            src={mainProject.image?.url || '/assets/img/others/project-details-img1.png'}
                            alt={mainProject.title || 'Project Image'}
                            width={770}
                            height={500}
                          />
                        </div>
                        <div className="space30"></div>
                        <div className="heading1">
                          <h2>{mainProject.title}</h2>
                          <div className="space16"></div>
                          <p>{mainProject.description}</p>
                        </div>
                      </div>
                    </article>

                    <div className="space50"></div>

                    <article>
                      <div className="details-post-area">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="heading1">
                              <h5>Our Implementation Process</h5>
                              <div className="space16"></div>
                              <div className="boxs-area">
                                <ul>
                                  {mainProject.implementationProcess?.slice(0, 3).map((step, index) => (
                                    <li key={index}>
                                      <span className="check">
                                        <i className="fa-solid fa-check"></i>
                                      </span>
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                                <ul>
                                  {mainProject.implementationProcess?.slice(3).map((step, index) => (
                                    <li key={index}>
                                      <span className="check">
                                        <i className="fa-solid fa-check"></i>
                                      </span>
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <div className="space50"></div>

                    <article>
                      <div className="details-post-area">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="heading1">
                              <h5>Benefits of Implementation</h5>
                              <div className="space16"></div>
                              <div className="row">
                                {mainProject.benefits?.map((benefit, index) => (
                                  <div className="col-lg-6 col-md-6" key={index}>
                                    <div className="project-details-box heading1">
                                      <h4>
                                        <Link href="/project">{benefit.title}</Link>
                                      </h4>
                                      <div className="space16"></div>
                                      <p>{benefit.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <div className="space50"></div>

                    <div className="get-started-box">
                      <h3>Get Started with {mainProject.title} Today</h3>
                      <div className="space16"></div>
                      <p>
                        Ready to take your business to the next level with {mainProject.title.toLowerCase()}? Contact us today to learn more about our services and how we can help you optimize your business operations for success.
                      </p>
                      <div className="space30"></div>
                      <Link href="/contact" className="get-started-btn">
                        Call Now <span><i className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Projects Section */}
      <div className="servcie2 sp bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            {moreProjects.map((project) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div className="servcie2-box servcie2-box-2">
                  <div className="icon">
                    <img src={project.icon} alt="" />
                  </div>
                  <Link href={`/service?id=${project.id}`} className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="heading1">
                    <h4>
                      <Link href={`/project?id=${project.id}`}>{project.title}</Link>
                    </h4>
                    <div className="space16"></div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <Link className="theme-btn1" href="/service">
                View All Services <span><i className="fa-solid fa-arrow-right"></i></span>
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
                <h2>At TechXen IT Solutions, We're Committed To Businesses</h2>
                <div className="space16"></div>
                <p>
                  Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="buttons">
                <Link className="cta-btn1" href="/contact">
                  Request a Consultation <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
                <Link className="cta-btn2" href="/services">
                  Explore Solutions <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}