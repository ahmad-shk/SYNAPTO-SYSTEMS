import ClientSlider from "@/components/ClientSlider";
import { Pricing2 } from "@/components/Pricing";
import {
  TestiContentSlider,
  TestiThumbSlider,
} from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("Home6");
  return (
    <NextLayout header={6} footer={6} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-6 pb-0">
        <div className="robot-shape-1 float-bob-y">
          <img src="/assets/img/home-6/robot-1.png" alt="img" />
        </div>
        <div className="robot-shape-2 float-bob-y">
          <img src="/assets/img/home-6/robot-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content center">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="/assets/img/bale.png" alt="img" />
                  {t("hero.welcome")}
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s" dangerouslySetInnerHTML={{ __html: t.raw("hero.title").replace("{br}", "<br/>") }} />
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    <i className="fas fa-check-circle" /> {t("hero.feature1")}
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <i className="fas fa-check-circle" /> {t("hero.feature2")}
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".7s">
                    <i className="fas fa-check-circle" /> {t("hero.feature3")}
                  </li>
                </ul>
                <form
                  action="#"
                  className="sign-input-form wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="doming-input">
                    <input type="text" placeholder={t("hero.emailPlaceholder")} />
                    <div className="icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <button className="theme-btn" type="submit">
                      {t("hero.signUpFree")} <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="dashboard-image wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img src="/assets/img/home-6/dashboard.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Section Start */}
      <section className="work-process-section-6 fix section-padding">
        <div className="ai-shape-1 float-bob-y">
          <img src="/assets/img/home-6/ai-shape-1.png" alt="shape-img" />
        </div>
        <div className="ai-shape-2 float-bob-y">
          <img src="/assets/img/home-6/ai-shape-2.png" alt="shape-img" />
        </div>
        <div className="box-shape-left" />
        <div className="box-shape-right" />
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text-2 text-white wow fadeInUp">
              {t("workProcess.subtitle")}
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw("workProcess.title").replace("{br}", "<br/>") }} />
          </div>
          <div className="row align-items-center">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="work-process-card-items">
                <div className="number">01</div>
                <div className="content">
                  <h5>{t("workProcess.step1Title")}</h5>
                  <p>
                    {t("workProcess.step1Desc")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="arrow-shape mt-5">
                <img
                  src="/assets/img/home-6/arrow-line-shape.png"
                  alt="shape-img"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6" />
            <div className="col-xl-4 col-lg-6" />
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="work-process-card-items">
                <div className="number">02</div>
                <div className="content">
                  <h5>{t("workProcess.step2Title")}</h5>
                  <p>
                    {t("workProcess.step2Desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6" />
            <div className="col-xl-4 col-lg-6" />
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="arrow-shape text-center">
                <img
                  src="/assets/img/home-6/arrow-line-shape-2.png"
                  alt="shape-img"
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="work-process-card-items">
                <div className="number">03</div>
                <div className="content">
                  <h5>{t("workProcess.step3Title")}</h5>
                  <p>
                    {t("workProcess.step3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section-6 fix section-padding" id="services">
        <div className="container">
          <div className="section-title text-center">
            <span className="sec-sub-text-2 wow fadeInUp">{t("popularService.subtitle")}</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw("popularService.title").replace("{br}", "<br/>") }} />
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-copy-writing" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">{t("popularService.service1Title")}</Link>
                  </h3>
                  <p>
                    {t("popularService.service1Desc")}
                  </p>
                  <Link href="service-details" className="link-btn">
                    {t("popularService.readMore")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="popular-service-box-items active">
                <div className="icon">
                  <i className="flaticon-social-media" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">{t("popularService.service2Title")}</Link>
                  </h3>
                  <p>
                    {t("popularService.service2Desc")}
                  </p>
                  <Link href="service-details" className="link-btn">
                    {t("popularService.readMore")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-earning" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">{t("popularService.service3Title")}</Link>
                  </h3>
                  <p>
                    {t("popularService.service3Desc")}
                  </p>
                  <Link href="service-details" className="link-btn">
                    {t("popularService.readMore")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-software-development" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">{t("popularService.service4Title")}</Link>
                  </h3>
                  <p>
                    {t("popularService.service4Desc")}
                  </p>
                  <Link href="service-details" className="link-btn">
                    {t("popularService.readMore")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-copy-writing" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">{t("popularService.service5Title")}</Link>
                  </h3>
                  <p>
                    {t("popularService.service5Desc")}
                  </p>
                  <Link href="service-details" className="link-btn">
                    {t("popularService.readMore")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="popular-service-box-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">
                      {t("popularService.service6Title")}
                    </Link>
                  </h3>
                  <p>
                    {t("popularService.service6Desc")}
                  </p>
                  <Link href="service-details" className="link-btn">
                    {t("popularService.readMore")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Video Section Start */}
      <section className="feature-video-section fix section-padding">
        <div className="container">
          <div className="feature-video-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="feature-video-thumb">
                  <img src="/assets/img/home-6/video-feature.png" alt="img" />
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
              <div className="col-lg-6">
                <div className="feature-video-content">
                  <div className="section-title">
                    <span className="sec-sub-text-2 wow fadeInUp">
                      {t("featureVideo.subtitle")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw("featureVideo.title").replace("{br}", "<br/>") }} />
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s" dangerouslySetInnerHTML={{ __html: t.raw("featureVideo.desc").replace("{br}", "<br/>") }} />
                  <div className="feature-box-area">
                    <div
                      className="feature-items wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h5>
                        <i className="fas fa-check-circle" />
                        {t("featureVideo.feature1Title")}
                      </h5>
                      <p>
                        {t("featureVideo.feature1Desc")}
                      </p>
                    </div>
                    <div
                      className="feature-items wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h5>
                        <i className="fas fa-check-circle" />
                        {t("featureVideo.feature2Title")}
                      </h5>
                      <p>
                        {t("featureVideo.feature2Desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section Start */}
      <section className="feature-section-5 fix section-padding" id="feature">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="feature-content">
                  <div className="section-title">
                    <span className="sec-sub-text-2 wow fadeInUp">
                      {t("coreFeatures.subtitle")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {t("coreFeatures.title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s" dangerouslySetInnerHTML={{ __html: t.raw("coreFeatures.desc").replace("{br}", "<br/>") }} />
                  <ul className="list-items wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      {t("coreFeatures.list1")}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {t("coreFeatures.list2")}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {t("coreFeatures.list3")}
                    </li>
                  </ul>
                  <Link
                    href="contact"
                    className="theme-btn bg-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {t("coreFeatures.signUpFree")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="feature-dashboard-image">
                  <img src="/assets/img/home-6/dashboard-2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <Pricing2 />
      {/* Testimonial Section Start */}
      <section className="testimonial-section-6 fix section-padding">
        <div className="container">
          <div className="testimonial-wrapper-3">
            <div className="testimonial-top-items">
              <div className="section-title mb-0">
                <span className="sec-sub-text-2 wow fadeInUp">
                  {t("testimonial.subtitle")}
                </span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  {t("testimonial.title")}
                </h2>
              </div>
              <div className="testimonial-right">
                <Link
                  href="index-6"
                  className="theme-btn hover-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {t("testimonial.viewMore")} <i className="far fa-arrow-right" />
                </Link>
                <div className="author-items wow fadeInUp" data-wow-delay=".5s">
                  <img src="/assets/img/home-6/client.png" alt="img" />
                  <h6 className="text-white" dangerouslySetInnerHTML={{ __html: t.raw("testimonial.trustedBy").replace("{br}", "<br/>") }} />
                </div>
              </div>
            </div>
            <div className="testimonial-items">
              <div className="testimonial-thumb-item">
                <TestiThumbSlider />
              </div>
              <div className="testi-content">
                <TestiContentSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section Start */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
              {t("faq.title")}
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {t("faq.desc")}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="false"
                          aria-controls="faq1"
                        >
                          {t("faq.q1")}
                        </button>
                      </h4>
                      <div
                        id="faq1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a1")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                          aria-expanded="true"
                          aria-controls="faq2"
                        >
                          {t("faq.q2")}
                        </button>
                      </h4>
                      <div
                        id="faq2"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a2")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          {t("faq.q3")}
                        </button>
                      </h4>
                      <div
                        id="faq3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a3")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          {t("faq.q4")}
                        </button>
                      </h4>
                      <div
                        id="faq4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a4")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq5"
                          aria-expanded="false"
                          aria-controls="faq5"
                        >
                          {t("faq.q5")}
                        </button>
                      </h4>
                      <div
                        id="faq5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a5")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion2">
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq6"
                          aria-expanded="false"
                          aria-controls="faq6"
                        >
                          {t("faq.q6")}
                        </button>
                      </h4>
                      <div
                        id="faq6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a6")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq7"
                          aria-expanded="false"
                          aria-controls="faq7"
                        >
                          {t("faq.q7")}
                        </button>
                      </h4>
                      <div
                        id="faq7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a7")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq8"
                          aria-expanded="false"
                          aria-controls="faq8"
                        >
                          {t("faq.q8")}
                        </button>
                      </h4>
                      <div
                        id="faq8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a8")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq9"
                          aria-expanded="false"
                          aria-controls="faq9"
                        >
                          {t("faq.q9")}
                        </button>
                      </h4>
                      <div
                        id="faq9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a9")}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq10"
                          aria-expanded="false"
                          aria-controls="faq10"
                        >
                          {t("faq.q10")}
                        </button>
                      </h4>
                      <div
                        id="faq10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          {t("faq.a10")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Section Start */}
      <section className="cta-section-6 fix section-padding pt-0">
        <div className="container">
          <div
            className="cta-newsletter-wrapper-2 bg-cover"
            style={{
              backgroundImage: 'url("/assets/img/home-6/cta-shape.png")',
            }}
          >
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="section-title mb-0">
                  <span className="text-white sec-sub-text-2 wow fadeInUp">
                    {t("newsletter.subtitle")}
                  </span>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    {t("newsletter.title")}
                  </h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <h5 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  {t("newsletter.ctaTitle")}
                </h5>
                <div className="form-clt wow fadeInUp" data-wow-delay=".5s">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder={t("newsletter.emailPlaceholder")}
                  />
                  <button className="theme-btn bg-2">
                    <span>
                      {t("newsletter.signUp")} <i className="far fa-arrow-right" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <div className="brand-section-6 fix section-padding pt-0">
        <div className="container">
          <h5 className="brand-text-6 wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw("partners").replace("<span1>", "<span>").replace("</span1>", "</span>") }} />
          <ClientSlider />
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
