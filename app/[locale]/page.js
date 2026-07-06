import ClientSlider from "@/components/ClientSlider";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import ProjectSlider from "@/components/ProjectSlider";
import { Service2 } from "@/components/Services";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
const page = () => {
  const t = useTranslations("HomePage");
  return (
    <NextLayout footer={2} header={1}>
      {/* Hero Section Start */}
      <section className="hero-section hero-2 fix">
        <div className="frame-shape">
          <img src="/assets/img/hero/frame-1.png" alt="shape-img" />
        </div>
        <div className="man-shape float-bob-y">
          <img src="/assets/img/hero/man.png" alt="shape-img" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
        </div>
        <div className="girl-shape float-bob-x">
          <img src="/assets/img/hero/girl.png" alt="shape-img" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
          {/* <img src="/assets/img/hero/girl.png" alt="shape-img" /> */}
        </div>
        <div className="frame-shape-2">
          <img src="/assets/img/hero/frame-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="/assets/img/bale.png" alt="img" />
                  {/* 25+ Years Of Experience */}
                  {t("hero.sub")}
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  {/* Complete Ordering and Delivery System for Your Shop */}
                  {t("hero.title")}
                </h2>
                <h4 className="wow fadeInUp" data-wow-delay=".4s">
                  {/* Complete Ordering and Delivery System for Your Shop */}
                  {t("hero.desc")}
                  {/* Complete Ordering and Delivery System<br /> */}
                  {/* for Your Shop */}
                </h4>
                <div className="hero-button wow fadeInUp" data-wow-delay=".6s">
                  <Link href="/about" className="theme-btn">
                    {t("hero.btn")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div
                className="dashboard-image wow fadeInUp"
                data-wow-delay=".7s"
              >
                <img src="/assets/img/hero/Gemini_Generated_Image_zfpk1pzfpk1pzfpk-Photoroom.png" alt="img" />
                {/* <img src="/assets/img/hero/dashboard.png" alt="img" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <div className="brand-section fix section-padding">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="wow fadeInUp" data-wow-delay=".2s">
              {t("brand.title", { count: 2 })}
            </h6>
            <ClientSlider />
          </div>
        </div>
      </div>

      <Service2 />

      {/* About Section Start */}
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items-2">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-image">
                        <img src="/assets/img/about/0005.png" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="about-image-2">
                        <img src="/assets/img/about/0006.png" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("about_online_orders.sub")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      {/* We Increase Your Website Lead and Grow Sales */}
                      {t("about_online_orders.title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    {t("about_online_orders.desc")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{t("about_online_orders.feature1_title")}</h4>
                      <p>
                        {t("about_online_orders.feature1_desc")}
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{t("about_online_orders.feature2_title")}</h4>
                      <p>
                        {t("about_online_orders.feature2_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("about_pos.sub")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      {/* We Increase Your Website Lead and Grow Sales */}
                      {t("about_pos.title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    {t("about_pos.desc")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{t("about_pos.feature1_title")}</h4>
                      <p>
                        {t("about_pos.feature1_desc")}
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{t("about_pos.feature2_title")}</h4>
                      <p>
                        {t("about_pos.feature2_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-2">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-image">
                        <img src="/assets/img/about/0005.png" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="about-image-2">
                        <img src="/assets/img/about/0006.png" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items-2">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-image">
                        <img src="/assets/img/about/0005.png" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="about-image-2">
                        <img src="/assets/img/about/0006.png" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("about_sales.sub")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      {/* We Increase Your Website Lead and Grow Sales */}
                      {t("about_sales.title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    {t("about_sales.desc")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{t("about_sales.feature1_title")}</h4>
                      <p>
                        {t("about_sales.feature1_desc")}
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{t("about_sales.feature2_title")}</h4>
                      <p>
                        {t("about_sales.feature2_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      {/* Cta Marketing Section Start */}
      <Cta />

      {/*  */}

      <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <video
                    src="/assets/video/addvideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      display: "block",
                      position: "relative",
                      zIndex: "10",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {t("video_section.title")}
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    {t("video_section.desc")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      {t("video_section.feature1_title")}
                    </h5>
                    <p>
                      {t("video_section.feature1_desc")}
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      {t("video_section.feature2_title")}
                    </h5>
                    <p>
                      {t("video_section.feature2_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      {/* Grow Business Section Start */}

      {/* <GrowBusiness2 /> */}
      {/* Project Section Start */}
      {/* <section className="project-section fix section-padding footer-bg">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content text-white theme-bg-2 wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Popular Projects
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay="/3s">
              Explore Our Popular Case Studiessss
            </h2>
          </div>
        </div>
        <ProjectSlider />
      </section> */}
      {/* Counter Section Start */}
      {/* <section className="counter-section  section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="counter-items">
                <h2>
                  <span className="count">
                    <Counter end={98} />
                  </span>
                  %
                </h2>
                <p>
                  Average <br />
                  Conversion Rate
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="counter-items">
                <h2>
                  <span className="count">
                    <Counter end={35} />
                  </span>
                  M+
                </h2>
                <p>
                  Traffic <br />
                  Generated
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="counter-items">
                <h2>
                  <span className="count">
                    <Counter end={97} />
                  </span>
                  %
                </h2>
                <p>
                  Positive <br />
                  Customer Review
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="counter-items">
                <h2>
                  <span className="count">
                    <Counter end={92} />
                  </span>
                  %
                </h2>
                <p>
                  Professional <br />
                  Team Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Planning Section Start */}
      {/* <section className="planning-section fix section-padding">
        <div className="container">
          <div className="planning-wrapper">
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="planning-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      Planning &amp; Grow
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Planning And Executing Successful Events
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantium <br />
                    doloremque laudantium, totam rem aperiam, eaque
                  </p>
                  <div
                    className="planning-items mb-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="number">01</div>
                    <div className="content">
                      <h5 className="mb-1">Market Research</h5>
                      <p>Attention to detail quality is unmatched industry</p>
                    </div>
                  </div>
                  <div
                    className="planning-items mt-0 mb-2 active wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="number">02</div>
                    <div className="content">
                      <h5 className="mb-1">Content Marketing</h5>
                      <p>Attention to detail quality is unmatched industry</p>
                    </div>
                  </div>
                  <div
                    className="planning-items mt-0 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="number">03</div>
                    <div className="content">
                      <h5 className="mb-1">Customer Support</h5>
                      <p>Attention to detail quality is unmatched industry</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="planning-image-items">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="planning-image">
                        <img
                          src="/assets/img/planning/plan-01.png"
                          alt="planning-img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="planning-image-2">
                        <img
                          src="/assets/img/planning/plan-2.png"
                          alt="planning-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial Section Start */}
      {/* <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="/assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".5s">
              We’ve 1250+ Global Clients Say Us
            </h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section> */}
      {/* Cta Newsletter Section Start */}
      <section className="cta-newsletter-section fix section-padding">
        <div className="container">
          <div className="cta-newsletter-wrapper fix">
            <div className="line-shape">
              <img src="/assets/img/line-shape.png" alt="shape-img" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="cta-newsletter-image">
                  <img src="/assets/img/new_newsletter_promo.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cta-newsletter-content">
                  <div className="section-title mb-3">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("newsletter.sub")}
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      {t("newsletter.title")}
                    </h2>
                  </div>
                  <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                    {t("newsletter.desc")}
                  </p>
                  <div className="form-clt wow fadeInUp" data-wow-delay=".7s">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder={t("newsletter.placeholder")}
                    />
                    <button className="theme-btn bg-2">
                      <span>
                        {t("newsletter.btn")} <i className="far fa-arrow-right" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
