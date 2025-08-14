import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
            {/* <!--=====progress END=======--> */}

      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>

      {/* <!-- Preloader --> */}
{/* 
      <section>
        <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader ctn-preloader1">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="K" className="letters-loading">
                  K
                </span>
                <span data-text-preloader="Y" className="letters-loading">
                  Y
                </span>
                <span data-text-preloader="R" className="letters-loading">
                  R
                </span>
                <span data-text-preloader="I" className="letters-loading">
                  I
                </span>
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
              </div>
            </div>
            <div className="loader-section-left loader-section section-left"></div>
            <div className="loader-section-right loader-section section-right"></div>
          </div>
        </div>
      </section> 
      */}

      {/* <!-- Preloader end --> */}
      <Header />

      {/* // <!--=====HERO AREA START=======--> */}
     <div className="hero1"
        style={
          {
            "backgroundImage": "url(assets/img/bg/hero1-bg.png)",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover",
          }
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="main-headding">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> Skyrise Systems
                  Technology & It Solution
                </span>
                <h1 className="title tg-element-title">
                  Transform Your Business With Next Generation{" "}
                  <span className="after">IT Solutions</span>
                </h1>
                <div className="space16"></div>
                <p>
                  Welcome to Skyrise where we specialise in delivering tailored
                  technology and IT solutions designed to propel your business
                  forward. From streamlining operations to and driving growth.
                </p>

                <div className="space30"></div>
                <div className="buttons">
                  <a className="theme-btn1" href="/contact">
                    Get Started Now{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero1-all-images">
                <div className="image1 ">
                  <img src="assets/img/hero/hero1-image1.png" alt="" />
                </div>
                <div className="image4 shape-animaiton3">
                  <img src="assets/img/hero/hero1-image4.png" alt="" />
                </div>
                <div className="shape1">
                  <img src="assets/img/shapes/header1-shape1.png" alt="" />
                </div>
                <div className="shape2">
                  <img src="assets/img/shapes/header1-shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====HERO AREA END=======--> */}

      {/* <!--=====HERO BOTTOM AREA START=======--> */}
      <div className="">
        <div className="container">
          <div className="row hero-bottom-area">
            <div className="col-lg-3">
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/hero-bottom-icon1.png" alt="" />
                </div>
                <div className="headding">
                  <h5>12hr Service</h5>
                  <p>Always ready to Answer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/hero-bottom-icon2.png" alt="" />
                </div>
                <div className="headding">
                  <h5>5 Case Solved</h5>
                  <p>It Solution case solved</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/hero-bottom-icon3.png" alt="" />
                </div>
                <div className="headding">
                  <h5>5 Optimisation</h5>
                  <p>Keywords into online</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/hero-bottom-icon4.png" alt="" />
                </div>
                <div className="headding">
                  <h5>Award Wining</h5>
                  <p>Always ready to support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====HERO BOTTOM AREA END=======--> */}

      {/* <!--=====ABOUT AREA START=======--> */}
      <div className="about1 sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about2-images">
                  <img src="assets/img/about/about6-img.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> About Our
                  Company
                </span>
                <h2 className="title tg-element-title">
                  Discover Our Story Empowering Business Through Innovation
                </h2>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="800">
                  TechXen pioneering force in the realm of technology and IT
                  solutions, dedicated to revolutionising the way businesses
                  thrive in the digital age. Our approach is rooted in
                  collaboration, transparency, and a relentless pursuit of
                  excellence. We believe that by staying ahead of the curve and
                  embracing change, we can help our clients stay ahead of
                  competition.
                </p>

                <ul
                  className="list"
                  data-aos="fade-left"
                  data-aos-duration="1100"
                >
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Dramatically re-engineer value added IT system.
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Highlight any unique selling points or differentiators.
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Incorporate visuals such as team photos shots.
                  </li>
                </ul>
                <div className="space30"></div>
                <div className="" data-aos="fade-left" data-aos-duration="900">
                  <Link className="theme-btn1" href={"/about"}>
                    Discover More{" "}
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
      {/* <!--=====ABOUT AREA END=======--> */}

      {/* <!--=====SERVICE AREA START=======--> */}
      <div className="service sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> Our Services
                </span>
                <h2 className="title tg-element-title">
                  Empower Your Business With Our Comprehensive Technology & IT
                  Solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/service-icon1.png" alt="" />
                </div>
                <div className="heading1">
                  <h4>
                    <Link href={"/service"}>Cloud Solution</Link>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  We move your business to the cloud—making your files, apps, and tools accessible anywhere, anytime, securely. and Software as a Service (SaaS)
                  </p>
                  <div className="space16"></div>
                  <a href="/service" className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/service-icon2.png" alt="" />
                </div>
                <div className="heading1">
                  <h4>
                    <Link href={"/service"}>
                    Data Analytics
                    </Link>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  We turn raw data into smart decisions—using dashboards, reports, and visual insights to help you understand what’s really happening in your business.
                  </p>
                  <div className="space16"></div>
                  <a href="/service" className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/service-icon3.png" alt="" />
                </div>
                <div className="heading1">
                  <h4>
                    <Link href={"/service"}>
                    Web Hosting
                    </Link>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  We provide fast and affordable hosting and domain services, so your business is always online, secure, and easy to find.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/service"} className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/service-icon4.png" alt="" />
                </div>
                <div className="heading1">
                  <h4>
                    <Link href={"/service"}>Software Development</Link>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  We build web-based tools, desktop apps, and internal systems tailored to your operations. If you can imagine it, we can code it.
                  </p>
                  <div className="space16"></div>
                  <Link href={"/service"} className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <div className="single-box">
                <div className="icon">
                  <img src="assets/img/icons/service-icon5.png" alt="" />
                </div>
                <div className="heading1">
                  <h4>
                    <a href="/service">Mobile App Development</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  We create mobile apps for Android and iOS that bring your services to your customers’ fingertips anytime, anywhere.
                  </p>
                  <div className="space16"></div>
                  <a href="/service" className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====SERVICE AREA END=======--> */}

      {/* <!--=====WORK AREA START=======--> */}
      <div className="work4 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading4">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  How It Works 👋
                </span>
                <h2 className="title tg-element-title">
                  Unlocking Success: The Step-by-Step Guide to Our IT Solution
                  Process
                </h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="work4-box heading4">
                <span className="after">Step 01</span>
                <h4>
                  <a href="service-details.html">Initial Consultation</a>
                </h4>
                <div className="space16"></div>
                <p>
                  During this meeting, we'll take the time to understand your
                  unique needs and goals, allowing us to tailor our solutions to
                  meet your specific requirements.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <div className="work4-box active heading4">
                <span className="after">Step 02</span>
                <h4>
                  <a href="service-details.html">Assessment and Planning</a>
                </h4>
                <div className="space16"></div>
                <p>
                  We'll identify areas for improvement, evaluate potential
                  risks, and develop a strategic plan to address your immediate
                  needs and long-term goals.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <div className="work4-box heading4">
                <span className="after">Step 03</span>
                <h4>
                  <a href="service-details.html">
                    Solution Design & Development
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  Whether it's implementing a new network infrastructure,
                  migrating to the cloud, or developing custom software
                  applications our team will work tirelessly to ensure.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="work4-box heading4">
                <span className="after">Step 04</span>
                <h4>
                  <a href="service-details.html">Implementation & Deployment</a>
                </h4>
                <div className="space16"></div>
                <p>
                  With the assessment complete and the plan in place, we'll
                  begin designing and developing customized IT solutions to meet
                  your requirements.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="work4-box heading4">
                <span className="after">Step 05</span>
                <h4>
                  <a href="service-details.html">Training & Support</a>
                </h4>
                <div className="space16"></div>
                <p>
                  As part of our commitment to your success, we'll provide
                  comprehensive training to your staff to ensure they are
                  comfortable and confident technology.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <div className="work4-box heading4">
                <span className="after">Step 06</span>
                <h4>
                  <a href="service-details.html">Monitoring & Optimisation</a>
                </h4>
                <div className="space16"></div>
                <p>
                  Whether it's implementing a new network infrastructure,
                  migrating to the cloud, or developing custom software
                  applications our team will work tirelessly to ensure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====WORK AREA END=======--> */}

      {/* <!--=====WORK AREA START=======--> */}
      <div className="work sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> Best It
                  Solution
                </span>
                <h2 className="title tg-element-title">
                  Let's Elevate Your Business With Strategic IT Solutions
                </h2>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="700">
                  At Skyrise, we understand that every business is unique, which
                  is why we offer a range of flexible IT solutions designed to
                  address your specific challenges and goals.
                </p>

                <div
                  className="single-items"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div className="">
                    <div className="icon">
                      <img src="assets/img/icons/work-iocn1.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h4>
                      <a href="service-details.html">
                        Network Infrastructure Solutions
                      </a>
                    </h4>
                    <div className="space10"></div>
                    <p>
                      Build a reliable and secure network infrastructure that
                      supports your business operations enables seamless
                    </p>
                  </div>
                </div>

                <div
                  className="single-items"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                  <div className="">
                    <div className="icon">
                      <img src="assets/img/icons/work-iocn2.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h4>
                      <a href="service-details.html">Managed IT Services</a>
                    </h4>
                    <div className="space10"></div>
                    <p>
                      Focus on your core business activities while we take care
                      of your IT needs with our managed IT services.
                    </p>
                  </div>
                </div>

                <div
                  className="single-items"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                >
                  <div className="">
                    <div className="icon">
                      <img src="assets/img/icons/work-iocn3.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h4>
                      <a href="service-details.html">
                        Data Backup & Disaster Recovery
                      </a>
                    </h4>
                    <div className="space10"></div>
                    <p>
                      Protect your critical business data and ensure business
                      continuity with our data backup and disaster solution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space30"></div>
              <div className="" data-aos="fade-right" data-aos-duration="800">
                <a className="theme-btn1" href="/service">
                  Discover More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="work-images">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="image reveal image-anime">
                      <img src="assets/img/work/work-img1.png" alt="" />
                    </div>
                    <div className="image reveal image-anime">
                      <img src="assets/img/work/work-img3.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image reveal image-anime">
                      <img src="assets/img/work/work-img2.png" alt="" />
                    </div>
                  </div>
                </div>
                <img
                  src="assets/img/bg/work-bg.png"
                  alt=""
                  className="bg-image shape-animaiton4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====WORK AREA END=======--> */}

      {/* <!--=====PRICING AREA START=======--> */}
      <div className="pricing sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> Our Pricing
                  Plan
                </span>
                <h2 className="title tg-element-title">
                  Explore Our Flexible Pricing Plans
                </h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="single-pricing-box">
                <p className="title">Basic Plan</p>
                <h2>
                  M250<span>/ month</span>
                </h2>
                <p className="pera">
                  Ideal for startups and small businesses looking get started
                  essential IT services.
                </p>

                <div className="border"></div>

                <h4>Featured Included:</h4>
                <ul className="list">
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Network Monitoring
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Helpdesk Support (Limited Hours)
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Basic Cybersecurity Protection
                  </li>
                </ul>

                <div className="space30"></div>
                <div className="button">
                  <a className="theme-btn1" href="/contact">
                    Buy Now{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div className="single-pricing-box active">
                <div className="most-popular">
                  <p>Most Popular</p>
                </div>

                <p className="title">Standard Plan</p>
                <h2>
                  M500<span>/ month</span>
                </h2>
                <p className="pera">
                  Perfect for growing businesses that require additional
                  features and support.{" "}
                </p>

                <div className="border"></div>

                <h4>Featured Included:</h4>
                <ul className="list">
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    24/7 Network Monitoring
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Dedicated Helpdesk Support
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Advance Cybersecurity Protection
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Cloud Backup & Recovery
                  </li>
                </ul>

                <div className="space30"></div>
                <div className="button">
                  <a className="theme-btn1" href="/contact">
                    Buy Now{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <div className="single-pricing-box">
                <p className="title">Premium Plan</p>
                <h2>
                  M900<span>/ month</span>
                </h2>
                <p className="pera">
                  Tailored for larger enterprises with complex IT needs and
                  stringent security.
                </p>

                <div className="border"></div>

                <h4>Featured Included:</h4>
                <ul className="list">
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Customised Network Monitoring
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Priority Helpdesk Support
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Comprehensive Cybersecurity Suite
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Disaster Recovery Planning & Testing
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Onsite Support (as needed)
                  </li>
                </ul>

                <div className="space30"></div>
                <div className="button">
                  <a className="theme-btn1" href="/contact">
                    Buy Now{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====PRICING AREA END=======--> */}

      {/* <!--=====TESTIMONIAL AREA START=======--> */}
      <div className="testimonial sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> Testimonials
                </span>
                <h2 className="title tg-element-title">
                  Discover What Our Clients Have <br /> To Say About Us
                </h2>
              </div>
            </div>
          </div>

          <div className="row _relative">
            <div
              className="tes1-slider"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="tes1-single-slider">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="right-side">
                      <h4>What Our Clients Are Saying</h4>
                      <p>
                        "The team at Skyrise went above and beyond to understand
                        our business needs and deliver a tailored IT solution
                        that exceeded our expectations. Their expertise and
                        dedication, and we couldn't be happier with the
                        results."
                      </p>
                      <div className="bottom-area">
                        <div className="img">
                          <img
                            src="assets/img/testimonial/tes1-smoll-img.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h5>
                            <a href="#">Kelly Williams</a>
                          </h5>
                          <p>Client</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="left-side">
                      <img
                        src="assets/img/testimonial/tes1-big-img.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="tes1-arrows">
              <button className="testimonial-prev-arrow">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="testimonial-next-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====TESTIMONIAL AREA END=======--> */}

      {/* <!--=====TEAM AREA START=======--> */}
      <div className="team6 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading6">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  Our Team
                </span>
                <h2 className="tg-element-title">
                  The Team Behind the <span>Solutions</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="team-box"
                data-aos="zoom-in-up"
                data-aos-duration="100"
              >
                <div className="image image-anime">
                  <img src="assets/img/team/IMG_6493.jpg" width={40} height={400} alt="" />
                  <div className="hover-area">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="heading-area">
                  <h4>
                    <a href="#">Ts'oloane Makakane</a>
                  </h4>
                  <p>Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="team-box"
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <div className="image image-anime">
                  <img src="assets/img/team/mos.jpg" width={40} height={400} alt="" />
                  <div className="hover-area">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="heading-area">
                  <h4>
                    <a href="#">Mosiuoa Mohobane</a>
                  </h4>
                  <p>Chief Technology Officer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="team-box"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="image image-anime">
                  <img src="assets/img/team/IMG_6399.jpg" width={10} height={400} alt="" />
                  <div className="hover-area">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="heading-area">
                  <h4>
                    <a href="#">Batloung Masoabi</a>
                  </h4>
                  <p>Lead Softwar Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====TEAM AREA END=======--> */}

      {/* <!--=====BLOG AREA START=======--> */}
      <div className="blog sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="assets/img/icons/span1.png" alt="" /> Blog & Latest
                  News
                </span>
                <h2 className="title tg-element-title">Latest News & Blog</h2>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="blog-box"
                data-aos="zoom-in-up"
                data-aos-duration="1100"
              >
                <div className="image image-anime">
                  <img src="assets/img/blog/blog-img1.png" alt="" />
                </div>
                <div className="heading">
                  <div className="tags">
                    <a href="#">
                      <img src="assets/img/icons/blog-icon1.png" alt="" /> John
                      William
                    </a>
                    <a href="#">
                      <img src="assets/img/icons/blog-icon2.png" alt="" /> Feb
                      25, 24
                    </a>
                  </div>
                  <h4>
                    <a href="/blog">
                      Demystifying Blockchain: How It's Revolutionising
                      Industries.
                    </a>
                  </h4>
                  <a href="/blog" className="learn">
                    {" "}
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="blog-box"
                data-aos="zoom-in-up"
                data-aos-duration="900"
              >
                <div className="image image-anime">
                  <img src="assets/img/blog/blog-img2.png" alt="" />
                </div>
                <div className="heading">
                  <div className="tags">
                    <a href="#">
                      <img src="assets/img/icons/blog-icon1.png" alt="" /> John
                      William
                    </a>
                    <a href="#">
                      <img src="assets/img/icons/blog-icon2.png" alt="" /> Feb
                      25, 24
                    </a>
                  </div>
                  <h4>
                    <a href="/blog">
                      Cybersecurity Essentials: Protecting Your Business{" "}
                    </a>
                  </h4>
                  <a href="/blog" className="learn">
                    {" "}
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="blog-box"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                <div className="image image-anime">
                  <img src="assets/img/blog/blog-img3.png" alt="" />
                </div>
                <div className="heading">
                  <div className="tags">
                    <a href="#">
                      <img src="assets/img/icons/blog-icon1.png" alt="" /> John
                      William
                    </a>
                    <a href="#">
                      <img src="assets/img/icons/blog-icon2.png" alt="" /> Feb
                      25, 24
                    </a>
                  </div>
                  <h4>
                    <a href="/blog">
                      The Future of Work: Embracing Remote Collaboration Tools
                    </a>
                  </h4>
                  <a href="/blog" className="learn">
                    {" "}
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
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
                <h2 className="title tg-element-title">
                  At Skyrise IT Solutions, We're Committed To Businesses
                </h2>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="700">
                  Take the first step towards achieving your business goals by
                  contacting us today. Schedule a consultation with one of our
                  IT specialists to discuss your objectives and explore how our
                  innovative solutions can propel.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="buttons">
                <a className="cta-btn1" href="/contact">
                  Request a Consultaion{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
                <a className="cta-btn2" href="/service">
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
      <Footer />
    </main>
  );
}
