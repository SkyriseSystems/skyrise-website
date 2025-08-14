import React from "react";
import Link from "next/link";

export default function BlogContent() {
  return (
    <div>
      {/* <!--=====HERO AREA START=======--> */}

      <div className="common-hero">
        {/* <!--=====HERO AREA END=======--> */}

        <section className="hero10-benar">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="marquee-wrap marquee-wrap-inner">
                  <div className="marquee-text">
                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo1.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo2.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo3.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo4.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo5.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo6.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo7.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo1.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo2.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo3.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo4.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo5.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo6.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo7.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo4.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo5.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo6.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo7.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo1.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo2.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo3.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo4.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo5.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo6.png" alt="" />
                    </div>

                    <div className="brand-single-box">
                      <img src="assets/img/logo/slider-logo7.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider-after"></div>
          </div>
        </section>
      </div>

      {/* <!--=====BLOG AREA START=======--> */}

      <div className="blog blog-page sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img2.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <Link href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </Link>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <Link href={"/blogdetails"}>
                      The Importance of Cybersecurity
                    </Link>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We explore the growing trend of remote work and its
                    implications for cybersecurity.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img1.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <Link href={"/blogdetails"}>
                      The Future of Cloud Computing
                    </Link>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We take a deep dive into the future of cloud computing and
                    discuss emerging trends and predictions that the industry.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img3.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      Embracing Remote Collaboration Tools
                    </a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We explore the growing trend of remote work and its
                    implications for cybersecurity.
                  </p>
                  <div className="space16"></div>
                  <Link href="blog-details.html" className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img4.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      Stay Up-to-Date With Technology
                    </a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We take a deep dive into the future of cloud computing and
                    discuss emerging trends and predictions that the industry.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img5.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      Discover How Organisations Like Yours..
                    </a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We explore the growing trend of remote work and its
                    implications for cybersecurity.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img6.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">Protecting Sensitive Data</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We take a deep dive into the future of cloud computing and
                    discuss emerging trends and predictions that the industry.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img7.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">Preventing Cyber Attacks</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We explore the growing trend of remote work and its
                    implications for cybersecurity.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src="assets/img/blog/blog2-img8.png" alt="" />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date">
                      <img src="assets/img/icons/date.png" alt="" /> 10/02/2024
                    </a>
                    <a href="#" className="date outhor">
                      <img src="assets/img/icons/user.png" alt="" /> Ben Cutting
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      Maintaining Regulatory Compliance
                    </a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    We take a deep dive into the future of cloud computing and
                    discuss emerging trends and predictions that the industry.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/blogdetails"} className="learn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space60"></div>
          <div className="row">
            <div className="col-12 m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="#">12</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--=====BLOG AREA END=======--> */}

      {/* <!--=====CTA AREA START=======--> */}

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
                <a className="cta-btn1" href="service.html">
                  Request a Consultaion{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
                <a className="cta-btn2" href="service.html">
                  Explore Solution{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--=====CTA AREA END=======--> */}
    </div>
  );
}
