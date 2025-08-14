'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isMounted) {
    return <header>Loading...</header>;
  }

  return (
    <div>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pera">
                <p>
                  A Professional Technology & IT Solution Company Based In Lesotho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="header-area header-area1 header-area-all d-none d-lg-block" id="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <Image
                        src="/assets/img/logo/Skyrise0002.png"
                        alt="Skyrise Logo"
                        width={160}
                        height={25}
                      />
                    </Link>
                  </div>
                  <div className="main-menu-ex main-menu-ex1">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/about">About</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/service">Service</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/project">Projects</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header1-buttons">
                    <div className="contact-btn">
                      <div className="icon">
                        <img src="assets/img/icons/header1-icon.png" alt="" />
                      </div>
                      <div className="headding">
                        <p>Make a Call</p>
                        <Link href="/contact">+266 5797 3120</Link>
                      </div>
                    </div>
                    <div className="button">
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
        </div>
      </header>

      {/* Mobile Header */}
      <div className="mobile-header d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <Image
                    src="/assets/img/logo/Skyrise0002.png"
                    alt="Skyrise Mobile Logo"
                    width={140}
                    height={25}
                  />
                </Link>
              </div>
              <div className="mobile-nav-icon" onClick={toggleMobileMenu}>
                <i className="fa-duotone fa-bars-staggered"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-sidebar d-block d-lg-none ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="logo-m">
          <Link href="/">
            <Image
              src="/assets/img/logo/Skyrise0002.png"
              alt="Skyrise Sidebar Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>
        <div className="menu-close" onClick={toggleMobileMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link href="/" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMobileMenu}>About Us</Link>
            </li>
            <li>
              <Link href="/service" onClick={toggleMobileMenu}>Service</Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleMobileMenu}>Blog</Link>
            </li>
            <li>
              <Link href="/project" onClick={toggleMobileMenu}>Project</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
            </li>
          </ul>
          <div className="mobile-button">
            <Link className="menu-btn2" href="/service" onClick={toggleMobileMenu}>
              Learn More{' '}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div className="single-footer-items">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon1.png" alt="" />
              </div>
              <div className="pera">
                <Link href="tel:+26657973120">+266 5797 3120</Link>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon2.png" alt="" />
              </div>
              <div className="pera">
                <Link href="tel:+26657973120">+266 5797 3120</Link>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon3.png" alt="" />
              </div>
              <div className="pera">
                <Link href="mailto:skyrisesystems@gmail.com">skyrisesystems@gmail.com</Link>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon4.png" alt="" />
              </div>
              <div className="pera">
                <Link href="https://www.skyrise.co.za">www.skyrise.co.za</Link>
              </div>
            </div>
          </div>
          <div className="contact-infos">
            <h3>Our Location</h3>
            <ul className="social-icon">
              <li>
                <Link href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}