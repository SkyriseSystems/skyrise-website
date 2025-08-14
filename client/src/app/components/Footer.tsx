"use client"

import next from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  return (
    <div>
      {/* <!--===== FOOTER AREA START =======--> */}

      <div className="footer1 _relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-footer-items footer-logo-area">
                <div className="footer-logo">
                <Link href={"/"}>
                      <Image
                        src="/assets/img/logo/Skyrise002.png"
                        alt="Skyrise Logo"
                        width={250}
                        height={114}
                      />
                    </Link>
                </div>
                <div className="space20"></div>
                <div className="heading1">
                  <p>
                    At SkyRise Systems, we're dedicated to delivering innovative
                    technology solutions tailored to meet the unique needs of
                    businesses like yours.{" "}
                  </p>
                </div>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Service We Offer</h3>

                <ul className="menu-list">
                  <li>
                    <a href="/service">Web Hosting & SEO Services</a>
                  </li>
                  <li>
                    <a href="/service">Data Analysis</a>
                  </li>
                  <li>
                    <a href="/service">Software Development</a>
                  </li>
                  <li>
                    <a href="/service">It Consulting & Support</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Useful Links</h3>

                <ul className="menu-list">
                  <li>
                    <a href={"/about"}>About Us </a>
                  </li>
                  <li>
                    <a href={"/service"}>Our Services</a>
                  </li>
                  <li>
                    <a href={"/blog"}>Blog & News</a>
                  </li>
                  <li>
                    <a href={"/project"}>Projects</a>
                  </li>
                  <li>
                    <a href={"/contact"}>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Contact Us</h3>

                <div className="contact-box">
                  <div className="icon">
                    <img src="assets/img/icons/footer1-icon1.png" alt="" />
                  </div>
                  <div className="pera">
                    <a href="tel:5797 3120">5797 3120</a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="assets/img/icons/footer1-icon2.png" alt="" />
                  </div>
                  <div className="pera">
                    <a href="tel:+266 5797 3120">+266 5797 3120</a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="assets/img/icons/footer1-icon3.png" alt="" />
                  </div>
                  <div className="pera">
                    <a href="mailto:skyrisesystems@gmail.com">
                      skyrisesystems@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="assets/img/icons/footer1-icon4.png" alt="" />
                  </div>
                  <div className="pera">
                    <a href="mailto:skyrisesysystems@gmail.com">
                      www.skyrise.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="coppyright">
                  <p>
                    Copyright @2025 SkyRise Systems Pty Ltd.All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="coppyright right-area">
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--===== FOOTER AREA END =======--> */}
    </div>
  );
}
