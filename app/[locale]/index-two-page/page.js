import ClientSlider from "@/components/ClientSlider";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import ProjectSlider from "@/components/ProjectSlider";
import { Service2 } from "@/components/Services";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const tHero = await getTranslations("Home2.hero");
  const tHome1 = await getTranslations("Home1");
  const tAbout = await getTranslations("AboutPage");
  const tCaseStudy = await getTranslations("CaseStudy");
  const tFunFact = await getTranslations("FunFact");
  const tNewsletter = await getTranslations("HomePage.newsletter");
  const tPricingPage = await getTranslations("PricingPage");
  const tCommon = await getTranslations("Common");

  return (
    <NextLayout footer={2} header={2} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-2 fix">
        <div className="frame-shape">
          <img src="/assets/img/hero/frame-1.png" alt="shape-img" />
        </div>
        <div className="man-shape float-bob-y">
          <img src="/assets/img/hero/man.png" alt="shape-img" />
        </div>
        <div className="girl-shape float-bob-x">
          <img src="/assets/img/hero/girl.png" alt="shape-img" />
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
                  {tHero("exp")}
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s" dangerouslySetInnerHTML={{ __html: tHero.raw('title').replace('{br}', '<br/>') }} />
                <div className="hero-button wow fadeInUp" data-wow-delay=".6s">
                  <Link href="about" className="theme-btn">
                    {tHero("btn")} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div
                className="dashboard-image wow fadeInUp"
                data-wow-delay=".7s"
              >
                <img src="/assets/img/hero/dashboard.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <div className="brand-section fix section-padding">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="wow fadeInUp" data-wow-delay=".2s" dangerouslySetInnerHTML={{ __html: tHome1.raw('brands.title').replace('{count}', '1563') }} />
            <ClientSlider />
          </div>
        </div>
      </div>
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-0" id="about">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items-2">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-image">
                        <img src="/assets/img/about/01.png" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="about-image-2">
                        <img src="/assets/img/about/02.png" alt="about-img" />
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
                      {tAbout("sub")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s" dangerouslySetInnerHTML={{ __html: tAbout.raw('title').replace('{br}', '<br/>') }} />
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    {tAbout("desc")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{tAbout("qualityTitle")}</h4>
                      <p dangerouslySetInnerHTML={{ __html: tAbout.raw('qualityDesc').replace('{br}', '<br/>') }} />
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="dot" />
                    <div className="content">
                      <h4>{tAbout("flexibleTitle")}</h4>
                      <p dangerouslySetInnerHTML={{ __html: tAbout.raw('flexibleDesc').replace('{br}', '<br/>') }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <Service2 />
      {/* Cta Marketing Section Start */}
      <Cta />
      {/* Grow Business Section Start */}
      <GrowBusiness2 />
      {/* Project Section Start */}
      <section
        className="project-section fix section-padding footer-bg"
        id="projects"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content text-white theme-bg-2 wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              {tCaseStudy("subtitle")}
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay="/3s" dangerouslySetInnerHTML={{ __html: tCaseStudy.raw('title').replace('{br}', '<br/>') }} />
          </div>
        </div>
        <ProjectSlider />
      </section>
      {/* Counter Section Start */}
      <section className="counter-section  section-padding pt-0">
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
                <p dangerouslySetInnerHTML={{ __html: tFunFact("conversionRate").replace(' ', '<br/>') }} />
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
                <p dangerouslySetInnerHTML={{ __html: tFunFact("trafficGenerated").replace(' ', '<br/>') }} />
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
                <p dangerouslySetInnerHTML={{ __html: tFunFact("positiveReview").replace(' ', '<br/>') }} />
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
                <p dangerouslySetInnerHTML={{ __html: tFunFact("proTeam").replace(' ', '<br/>') }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Planning Section Start */}
      <section className="planning-section fix section-padding">
        <div className="container">
          <div className="planning-wrapper">
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="planning-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {tHome1("planning.subtitle")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {tHome1("planning.title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s" dangerouslySetInnerHTML={{ __html: tHome1.raw('planning.desc').replace('{br}', '<br/>') }} />
                  <div
                    className="planning-items mb-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="number">01</div>
                    <div className="content">
                      <h5 className="mb-1">{tHome1("planning.step1Title")}</h5>
                      <p>{tHome1("planning.step1Desc")}</p>
                    </div>
                  </div>
                  <div
                    className="planning-items mt-0 mb-2 active wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="number">02</div>
                    <div className="content">
                      <h5 className="mb-1">{tHome1("planning.step2Title")}</h5>
                      <p>{tHome1("planning.step2Desc")}</p>
                    </div>
                  </div>
                  <div
                    className="planning-items mt-0 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="number">03</div>
                    <div className="content">
                      <h5 className="mb-1">{tHome1("planning.step3Title")}</h5>
                      <p>{tHome1("planning.step3Desc")}</p>
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
                          src="/assets/img/planning/plan-1.png"
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
      </section>
      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-2 fix section-padding fix"
        id="testimonial"
      >
        <div className="bg-shape">
          <img src="/assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              {tPricingPage("testimonialSub")}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".5s">
              {tPricingPage("testimonialTitle")}
            </h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section>
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
                  <img src="/assets/img/cta-newsletter.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cta-newsletter-content">
                  <div className="section-title mb-3">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {tNewsletter("sub")}
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                      dangerouslySetInnerHTML={{ __html: tNewsletter.raw('title').replace('{br}', '<br/>') }}
                    />
                  </div>
                  <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                    {tNewsletter("desc")}
                  </p>
                  <div className="form-clt wow fadeInUp" data-wow-delay=".7s">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder={tNewsletter("placeholder")}
                    />
                    <button className="theme-btn bg-2">
                      <span>
                        {tNewsletter("btn")} <i className="far fa-arrow-right" />
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
