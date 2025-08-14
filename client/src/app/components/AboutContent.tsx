'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutContent() {
  const [aboutData, setAboutData] = useState(null);
  const [missionData, setMissionData] = useState(null);
  const [visionData, setVisionData] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';

  useEffect(() => {
    const fetchData = async (endpoint, setter) => {
      try {
        const res = await fetch(`${PAYLOAD_URL}/api/${endpoint}`);
        console.log(`Response status for ${endpoint}:`, res.status);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        if (!data || !data.docs) throw new Error('Invalid response format');
        setter(endpoint === 'team' ? data.docs : data.docs[0]);
      } catch (err) {
        console.error(`Error fetching ${endpoint}:`, err);
        setError(err.message);
      }
    };

    Promise.all([
      fetchData('about', setAboutData),
      fetchData('mission', setMissionData),
      fetchData('vision', setVisionData),
      fetchData('story', setStoryData),
      fetchData('team', setTeamData),
    ]).finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About Page</title>
      <link rel="shortcut icon" href="assets/img/logo/titile.png" type="image/x-icon" />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/fontawesome.css" />
      <link rel="stylesheet" href="assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="assets/css/nice-select.css" />
      <link rel="stylesheet" href="assets/css/slick-slider.css" />
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/aos.css" />
      <link rel="stylesheet" href="assets/css/mobile-menu.css" />
      <link rel="stylesheet" href="assets/css/main.css" />

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
                        <img src={`assets/img/logo/slider-logo${(index % 7) + 1}.png`} alt="" />
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

      {/* About Section */}
      <div className="about2 about-page-sec sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about2-images">
                {aboutData?.images?.map((img, index) => {
                  const isFirstOrLast = index === 0 || index === aboutData.images.length - 1;
                  return (
                    <div className={`image${index + 1}`} key={index}>
                      <Image
                        src={img.image?.url ? `${PAYLOAD_URL}/api/media/file/${img.image.url.split('/').pop()}` : '/assets/img/about/default-img.png'}
                        alt={img.image?.alt || ''}
                        layout="responsive"
                        width={isFirstOrLast ? 200 : 350}
                        height={isFirstOrLast ? 150 : 250}
                        objectFit="cover"
                        onError={() => console.error(`Failed to load image: ${img.image?.url}`)}
                      />
                    </div>
                  );
                })}
                <div className="counter-box">
                  <h3>{aboutData?.experienceYears}</h3>
                  <p>Years Of <br /> Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span">{aboutData?.subtitle}</span>
                <h2>{aboutData?.title}</h2>
                <div className="space16" />
                <div dangerouslySetInnerHTML={{ __html: aboutData?.description }} />
                <div className="space10" />
                <div className="porgress-line-all">
                  {aboutData?.progressBars?.map((bar, index) => (
                    <div className="progress-line" key={index}>
                      <div className="heading">
                        <h6>{bar.title}</h6>
                        <p>{bar.percentage}%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${bar.percentage}%` }}
                          role="progressbar"
                          aria-valuenow={bar.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space30" />
                <div className="button">
                  <Link className="theme-btn1" href="/contact">
                    Get A Quote <span><i className="fa-solid fa-arrow-right" /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="solution sp bg1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span">{missionData?.subtitle}</span>
                <h2>{missionData?.title}</h2>
                <div className="space16" />
                <div dangerouslySetInnerHTML={{ __html: missionData?.description }} />
                <div className="space30" />
                <div>
                  <Link className="theme-btn1" href="/contact">
                    Get A Quote <span><i className="fa-solid fa-arrow-right" /></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="solution-images">
                {missionData?.images?.map((img, index) => (
                  <div className={`image${index + 1}`} key={index}>
                    <Image
                      src={img.image?.url ? `${PAYLOAD_URL}/api/media/file/${img.image.url.split('/').pop()}` : '/assets/img/others/default-img.png'}
                      alt={img.image?.alt || ''}
                      layout="responsive"
                      width={300}
                      height={200}
                      objectFit="cover"
                      onError={() => console.error(`Failed to load image: ${img.image?.url}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="solution about-solution sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images">
                <div className="row">
                  {visionData?.images?.map((img, index) => (
                    <div className={index === 0 ? "col-lg-12" : "col-lg-6"} key={index}>
                      {index !== 0 && <div className="space30" />}
                      <div className="image">
                        <Image
                          src={img.image?.url ? `${PAYLOAD_URL}/api/media/file/${img.image.url.split('/').pop()}` : '/assets/img/about/default-img.png'}
                          alt={img.image?.alt || ''}
                          layout="responsive"
                          width={index === 0 ? 600 : 300}
                          height={index === 0 ? 400 : 200}
                          objectFit="cover"
                          onError={() => console.error(`Failed to load image: ${img.image?.url}`)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span">{visionData?.subtitle}</span>
                <h2>{visionData?.title}</h2>
                <div className="space16" />
                <div dangerouslySetInnerHTML={{ __html: visionData?.description }} />
                {visionData?.items?.map((item, index) => (
                  <div className="item-box" key={index}>
                    <div className="icon">
                      <Image
                        src={item.icon?.url ? `${PAYLOAD_URL}/api/media/file/${item.icon.url.split('/').pop()}` : '/assets/img/icons/default-icon.png'}
                        alt={item.icon?.alt || ''}
                        width={80}
                        height={40}
                        onError={() => console.error(`Failed to load image: ${item.icon?.url}`)}
                      />
                    </div>
                    <div>
                      <h3><a href="#">{item.title}</a></h3>
                      <div className="space10" />
                      <div dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                ))}
                <div className="space30" />
                <div>
                  <Link className="theme-btn1" href="/contact">
                    Get A Quote <span><i className="fa-solid fa-arrow-right" /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="about-tabs sp bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center m-auto">
              <div className="heading1">
                <span className="span">{storyData?.subtitle}</span>
                <h2>{storyData?.title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 m-auto text-center">
              <ul className="nav nav-pills tab-header-all mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="about-tab1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#about-tab1"
                    type="button"
                    role="tab"
                    aria-controls="about-tab1"
                    aria-selected="true"
                  >
                    {storyData?.year}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="space60" />
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="about-tab1" role="tabpanel" aria-labelledby="about-tab1-tab">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="tab-content-box">
                        <div className="heading1">
                          <h5>{storyData?.tabTitle}</h5>
                          <div className="space24" />
                          {storyData?.description?.map((para, index) => (
                            <p key={index}>
                              <span className="text">{para.label}</span>{' '}
                              <span dangerouslySetInnerHTML={{ __html: para.text }} />
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image">
                        <Image
                          src={storyData?.image?.url ? `${PAYLOAD_URL}/api/media/file/${storyData.image.url.split('/').pop()}` : '/assets/img/about/default-img.png'}
                          alt={storyData?.image?.alt || ''}
                          layout="responsive"
                          width={400}
                          height={300}
                          objectFit="cover"
                          onError={() => console.error(`Failed to load image: ${storyData.image?.url}`)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section 
          <div className="team2 about-page-team sp bg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto text-center">
                  <div className="heading1">
                    <span className="span">Our Team</span>
                    <h2>Meet With Our Expert Team</h2>
                  </div>
                </div>
              </div>
              <div className="space30" />
              <div className="row">
                {teamData?.map((member, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="team-box">
                      <div className="image-area">
                        <div className="image">
                          <Image
                            src={member.image?.url ? `${PAYLOAD_URL}/api/media/file/${member.image.url.split('/').pop()}` : '/assets/img/team/default-img.png'}
                            alt={member.image?.alt || ''}
                            layout="responsive"
                            width={300}
                            height={300}
                            objectFit="cover"
                            onError={() => console.error(`Failed to load image: ${member.image?.url}`)}
                          />
                        </div>
                        <div className="icon-area">
                          <ul>
                            {member.socialLinks?.map((link, idx) => (
                              <li key={idx}>
                                <a href={link.url}>
                                  <i className={link.icon} />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space30" />
                      <div className="heading1">
                        <h4><a href="#">{member.name}</a></h4>
                        <div className="space10" />
                        <p>{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          {/*=====TEAM AREA START=======*/}
          <div className="team2 about-page-team sp bg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto text-center">
                  <div className="heading1">
                    <span className="span"> Our Team</span>
                    <h2>Meet With Our Expert Team</h2>
                  </div>
                </div>
              </div>
              <div className="space30" />
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="team-box">
                    <div className="image-area">
                      <div className="image">
                        <img src="assets/img/team/IMG_6493.jpg" width={10} height={400} alt="" />
                      </div>
                      <div className="icon-area">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space30" />
                    <div className="heading1">
                      <h4>
                        <a href="#">Ts'oloane Makakane</a>
                      </h4>
                      <div className="space10" />
                      <p>CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team-box">
                    <div className="image-area">
                      <div className="image">
                        <img src="assets/img/team/mos.jpg" width={10} height={400} alt="" />
                      </div>
                      <div className="icon-area">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space30" />
                    <div className="heading1">
                      <h4>
                        <a href="#">Mosiuoa Mohobane</a>
                      </h4>
                      <div className="space10" />
                      <p>Chef Technology Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team-box">
                    <div className="image-area">
                      <div className="image">
                        <img src="assets/img/team/IMG_6399.jpg" width={10} height={400} alt="" />
                      </div>
                      <div className="icon-area">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space30" />
                    <div className="heading1">
                      <h4>
                        <a href="#">Batloung Masoabi </a>
                      </h4>
                      <div className="space10" />
                      <p>Lead Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====TEAM AREA END=======*/}

          {/* CTA Section */}
          <div className="cta">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="heading1-w">
                    <h2>{aboutData?.cta?.title}</h2>
                    <div className="space16" />
                    <div style={{color: 'white'}} dangerouslySetInnerHTML={{ __html: aboutData?.cta?.description }} />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="buttons">
                    <Link className="cta-btn1" href="/contact">
                      Request a Consultation <span><i className="fa-solid fa-arrow-right" /></span>
                    </Link>
                    <Link className="cta-btn2" href="/service">
                      Explore Solution <span><i className="fa-solid fa-arrow-right" /></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}