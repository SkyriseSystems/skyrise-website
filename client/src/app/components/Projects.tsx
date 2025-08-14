"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/projects?page=${currentPage}&limit=${projectsPerPage}&_=${Date.now()}`;
        console.log('Fetching projects from:', apiUrl);
        const res = await fetch(apiUrl, {
          cache: 'no-store',
        });
        console.log('Projects API Response status:', res.status);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Projects API endpoint not found. Ensure /api/projects is correctly set up and the CMS server is running at http://localhost:3000.');
          }
          throw new Error(`HTTP error! Status: ${res.status}, StatusText: ${res.statusText}`);
        }
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        const data = await res.json();
        console.log('Projects API response:', JSON.stringify(data, null, 2));
        if (!data || !data.docs || !Array.isArray(data.docs)) {
          throw new Error('Expected an array in data.docs');
        }
        setProjects(
          data.docs.map((doc: any) => ({
            id: doc.id,
            title: doc.title,
            description: doc.description,
            imageUrl: doc.image?.url
              ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}${doc.image.url}`
              : '/assets/img/others/project-page-img1.png',
          }))
        );
      } catch (err: any) {
        console.error('Error fetching projects:', {
          message: err.message,
          stack: err.stack,
        });
        setError(`Failed to load projects: ${err.message}. Check if the CMS server is running at http://localhost:3000 and /api/projects is accessible.`);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage]);

  const totalPages = Math.ceil(12 / projectsPerPage); // Update with data.totalDocs from API
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setLoading(true);
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

      {/* Project Boxes Area */}
      <div className="project-boxs-area sp">
        <div className="container">
          <div className="row">
            {loading ? (
              <p>Loading projects...</p>
            ) : error ? (
              <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <div className="col-lg-4 col-md-6" key={project.id}>
                  <div className="project-page-box">
                    <div className="image">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={370}
                        height={360}
                        onError={() => console.error(`Failed to load image: ${project.imageUrl}`)}
                      />
                    </div>
                    <div className="heading2">
                      <h4>
                        <Link href={`/projectdetails?id=${project.id}`}>
                          {project.title}
                        </Link>
                      </h4>
                      <Link href={`/projectdetails?id=${project.id}`} className="learn">
                        Learn More{' '}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects available. Please add projects in the CMS at http://localhost:3000/admin.</p>
            )}
          </div>

          <div className="space30"></div>
          <div className="row">
            <div className="col-12 m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                    >
                      <i className="fa-solid fa-angle-left"></i>
                    </Link>
                  </li>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(index + 1);
                        }}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </li>
                </ul>
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
                <h2>At TechXen IT Solutions, We're Committed To Businesses</h2>
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