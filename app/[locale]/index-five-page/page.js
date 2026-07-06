import BrandSlider from "@/components/BrandSlider";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const tHero = await getTranslations("Home5.hero");
  const tAbout = await getTranslations("Home5.about");
  const tResume = await getTranslations("Home5.resume");
  const tService = await getTranslations("Home5.service");
  const tSkills = await getTranslations("Home5.skills");
  const tProject = await getTranslations("Home5.project");
  const tPricing = await getTranslations("Home5.pricing");
  const tTestimonial = await getTranslations("Home5.testimonial");
  const tContact = await getTranslations("Home5.contact");
  const tGlobal = await getTranslations("Home5.global");

  return (
    <NextLayout header={5} footer={3} bgBlack={true} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-5">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="/assets/img/bale-2.png" alt="img" />
                  <span className="sub-text">
                    {tHero("sub")}
                  </span>
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s" dangerouslySetInnerHTML={{ __html: tHero.raw('title').replace('{br}', '<br/>') }} />
                <p className="wow fadeInUp" data-wow-delay=".5s" dangerouslySetInnerHTML={{ __html: tHero.raw('desc').replace('{br}', '<br/>') }} />
                <div className="button-items">
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Link href="about" className="theme-btn">
                      {tHero("hireMe")}
                      <i className="fas fa-long-arrow-right" />
                    </Link>
                  </div>
                  <span
                    className="button-text wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <span className="ms-3 d-line" />
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="play-text video-popup"
                    >
                      {tHero("watchVideo")}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="hero-image">
                <img src="/assets/img/home-5/hero/01.png" alt="img" />
                <ul
                  className="experience-text wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <li>{tHero("exp")}</li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>{tHero("awards")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <BrandSlider />
      {/* About Section Start */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-wrapper-3">
            <div className="about-image-1 wow fadeInUp" data-wow-delay=".3s">
              <img src="/assets/img/home-5/about/01.png" alt="img" />
            </div>
            <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
              <img src="/assets/img/home-5/about/02.png" alt="img" />
              <div className="icon-box">
                <img
                  src="/assets/img/home-5/about/trophy.png"
                  alt="img"
                  className="icon-img"
                />
                <div className="circle-text">
                  <img
                    src="/assets/img/home-5/about/circle-text.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="about-content-2 text-center">
              <div className="section-title text-center">
                <span className="sec-sub-text wow fadeInUp">{tAbout("sub")}</span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: tAbout.raw('title').replace('{br}', '<br/>') }} />
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo emo enim ipsam
              </p>
              <Link
                href="about"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                {tAbout("btn")} <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Education Experience Section Start */}
      <section className="education-experience section-border section-padding">
        <div className="container">
          <div className="section-title">
            <span className="sec-sub-text wow fadeInUp">{tResume("sub")}</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {tResume("title")}
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="/assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>{tResume("items.item1.date")}</span>
                  <h3>{tResume("items.item1.title")}</h3>
                  <p>{tResume("items.item1.desc")}</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="/assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>{tResume("items.item2.date")}</span>
                  <h3>{tResume("items.item2.title")}</h3>
                  <p>{tResume("items.item2.desc")}</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="/assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>{tResume("items.item3.date")}</span>
                  <h3>{tResume("items.item3.title")}</h3>
                  <p>{tResume("items.item3.desc")}</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="education-box-items">
                <div className="icon">
                  <img src="/assets/img/home-5/edu-icon.png" alt="img" />
                </div>
                <div className="content">
                  <span>{tResume("items.item4.date")}</span>
                  <h3>{tResume("items.item4.title")}</h3>
                  <p>{tResume("items.item4.desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Video Section Start */}
      <div
        className="cta-video-section cta-video-2 fix bg-cover"
        style={{ backgroundImage: 'url("/assets/img/home-5/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper style-2">
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section Start */}
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text wow fadeInUp">{tService("sub")}</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {tService("title")}
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="service-popular-image-2">
                <img
                  id="myImage2"
                  src="/assets/img/home-5/service/01.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-curve" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="/assets/img/home-5/service/01.png"
                      >
                        {tService("website")}
                      </Link>
                    </h3>
                    <p>{tService("desc")}</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-megaphone" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="/assets/img/home-5/service/01.png"
                      >
                        {tService("digital")}
                      </Link>
                    </h3>
                    <p>{tService("desc")}</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-coding" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="/assets/img/home-5/service/01.png"
                      >
                        {tService("webflow")}
                      </Link>
                    </h3>
                    <p>{tService("desc")}</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
              <div className="service-popular-content-2">
                <div className="service-content">
                  <div className="icon">
                    <i className="flaticon-price-tag" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link
                        href="service-details"
                        className="changeImage2 clicked"
                        data-image="/assets/img/home-5/service/01.png"
                      >
                        {tService("branding")}
                      </Link>
                    </h3>
                    <p>{tService("desc")}</p>
                  </div>
                </div>
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Section Start */}
      <section className="skill-section fix section-padding pt-0">
        <div className="section-title text-center">
          <span className="sec-sub-text wow fadeInUp">{tSkills("sub")}</span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            {tSkills("title")}
          </h2>
        </div>
        <div className="skill-wrapper">
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".2s">
            <img src="/assets/img/home-5/skills/figma.png" alt="img" />
            <div className="post-cat">95%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".4s">
            <img src="/assets/img/home-5/skills/framerpng.png" alt="img" />
            <div className="post-cat">35%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".5s">
            <img src="/assets/img/home-5/skills/webflow.png" alt="img" />
            <div className="post-cat">83%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".6s">
            <img src="/assets/img/home-5/skills/sketch.png" alt="img" />
            <div className="post-cat">98%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".7s">
            <img src="/assets/img/home-5/skills/python.png" alt="img" />
            <div className="post-cat">48%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".8s">
            <img src="/assets/img/home-5/skills/angular.png" alt="img" />
            <div className="post-cat">47%</div>
          </div>
          <div className="skill-box-items wow fadeInUp" data-wow-delay=".9s">
            <img src="/assets/img/home-5/skills/photoshop.png" alt="img" />
            <div className="post-cat">95%</div>
          </div>
        </div>
      </section>
      {/* Project Section Start */}
      <section className="project-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <sub className="sec-sub-text">{tProject("sub")}</sub>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {tProject("title")}
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="/assets/img/project/05.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>{tProject("cat1")}</p>
                      <h3>
                        <Link href="project-details" dangerouslySetInnerHTML={{ __html: tProject.raw('p1').replace('{br}', '<br/>') }} />
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="/assets/img/project/06.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>{tProject("cat2")}</p>
                      <h3>
                        <Link href="project-details" dangerouslySetInnerHTML={{ __html: tProject.raw('p2').replace('{br}', '<br/>') }} />
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="/assets/img/project/07.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>{tProject("cat1")}</p>
                      <h3>
                        <Link href="project-details">
                          {tProject("p3")}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items style-2">
                    <div className="project-image">
                      <img src="/assets/img/project/08.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>{tProject("cat2")}</p>
                      <h3>
                        <Link href="project-details">
                          {tProject("p4")}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="project-button text-center mt-5 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Link href="project" className="theme-btn">
              {tProject("btn")} <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <BrandSlider />
      {/* Pricing Section Start */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text wow fadeInUp">{tPricing("sub")}</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {tPricing("title")}
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="pricing-card-items style-2">
                <div className="pricing-shape">
                  <img src="/assets/img/pricing-shape.png" alt="shape-img" />
                </div>
                <div className="pricing-header">
                  <h3>{tPricing("regular")}</h3>
                  <p>{tPricing("small")}</p>
                </div>
                <ul className="pricing-list">
                  <li>{tPricing("it")}</li>
                  <li>{tPricing("design")}</li>
                  <li>{tPricing("ml")}</li>
                  <li className="style-2">{tPricing("auto")}</li>
                  <li className="style-2">{tPricing("support")}</li>
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    $19 <span>{tPricing("month")}</span>
                  </h2>
                  <p>{tPricing("small")}</p>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    {tPricing("choose")}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="pricing-card-items style-2 active">
                <div className="pricing-shape">
                  <img src="/assets/img/pricing-shape-2.png" alt="shape-img" />
                </div>
                <div className="pricing-header">
                  <h3>{tPricing("business")}</h3>
                  <p>{tPricing("small")}</p>
                </div>
                <ul className="pricing-list">
                  <li>{tPricing("it")}</li>
                  <li>{tPricing("design")}</li>
                  <li>{tPricing("ml")}</li>
                  <li>{tPricing("auto")}</li>
                  <li>{tPricing("support")}</li>
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    $53 <span>{tPricing("month")}</span>
                  </h2>
                  <p>{tPricing("small")}</p>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    {tPricing("choose")}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="pricing-card-items style-2">
                <div className="pricing-shape">
                  <img src="/assets/img/pricing-shape.png" alt="shape-img" />
                </div>
                <div className="pricing-header">
                  <h3>{tPricing("pro")}</h3>
                  <p>{tPricing("small")}</p>
                </div>
                <ul className="pricing-list">
                  <li>{tPricing("it")}</li>
                  <li>{tPricing("design")}</li>
                  <li>{tPricing("ml")}</li>
                  <li className="style-2">{tPricing("auto")}</li>
                  <li className="style-2">{tPricing("support")}</li>
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    $99 <span>{tPricing("month")}</span>
                  </h2>
                  <p>{tPricing("small")}</p>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    {tPricing("choose")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <section className="testimonial-section-5 fix section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text">{tTestimonial("sub")}</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
              {tTestimonial("title")}
            </h2>
          </div>
        </div>
        <TestimonialSlider2 style="style-2" />
      </section>
      {/* Contact Section Section Start */}
      <section className="contact-section section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="contact-image">
                  <img src="/assets/img/home-5/contact.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-right">
                  <div className="section-title">
                    <span className="sec-sub-text wow fadeInUp">
                      {tContact("sub")}
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                      dangerouslySetInnerHTML={{ __html: tContact.raw('title').replace('{br}', '<br/>') }}
                    />
                  </div>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items mt-4 mt-md-0"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={tContact("name")}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder={tContact("phone")}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder={tContact("email")}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder={tContact("subject")}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder={tContact("message")}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <button type="submit" className="theme-btn">
                          {tContact("btn")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Global Partner Section Start */}
      <div className="global-partner fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text wow fadeInUp">{tGlobal("sub")}</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: tGlobal.raw('title').replace('{br}', '<br/>') }} />
          </div>
          <div className="global-partner-wrapper">
            <div className="global-thumb wow fadeInUp" data-wow-delay=".2s">
              <img src="/assets/img/home-5/global/01.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".4s">
              <img src="/assets/img/home-5/global/02.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".6s">
              <img src="/assets/img/home-5/global/03.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".7s">
              <img src="/assets/img/home-5/global/04.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".8s">
              <img src="/assets/img/home-5/global/05.png" alt="img" />
            </div>
          </div>
          <div className="global-partner-wrapper">
            <div className="global-thumb wow fadeInUp" data-wow-delay=".2s">
              <img src="/assets/img/home-5/global/06.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".4s">
              <img src="/assets/img/home-5/global/07.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".6s">
              <img src="/assets/img/home-5/global/08.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".7s">
              <img src="/assets/img/home-5/global/09.png" alt="img" />
            </div>
            <div className="global-thumb wow fadeInUp" data-wow-delay=".8s">
              <img src="/assets/img/home-5/global/10.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
