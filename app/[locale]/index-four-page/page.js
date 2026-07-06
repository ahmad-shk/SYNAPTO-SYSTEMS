import Faq from "@/components/Faq";
import Services from "@/components/Services";
import {
  TestimonialSlider4,
  TestimonialSlider5,
} from "@/components/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const tHero = await getTranslations("Home4.hero");
  const tBrand = await getTranslations("Home4.brand");
  const tAbout = await getTranslations("Home4.about");
  const tTestimonial = await getTranslations("Home4.testimonial");
  const tCommon = await getTranslations("Common");
  const tContact = await getTranslations("Home4.contact");

  return (
    <NextLayout header={2} footer={4} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-4">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="/assets/img/bale.png" alt="img" />
                  {tHero("exp")}
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  {tHero("title")}
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  {tHero("desc")}
                </p>
                <div className="about-author">
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Link href="about" className="theme-btn">
                      {tHero("learnMore")}
                      <i className="fas fa-long-arrow-right" />
                    </Link>
                  </div>
                  <div
                    className="author-image wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="/assets/img/about/face-mans-2.png"
                      alt="author-img"
                    />
                    <div className="content">
                      <h6 dangerouslySetInnerHTML={{ __html: tHero.raw('trusted').replace('{br}', '<br/>') }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-image">
                <img
                  src="/assets/img/hero/digital-marketing-hero-img-min.png"
                  alt="img"
                />
                <div className="circle-musk-shape float-bob-x">
                  <img src="/assets/img/hero/circle-musk.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <section className="brand-section-2 fix">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="/assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="/assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: tBrand.raw('title').replace('{span}', `<span>${tBrand('span')}</span>`) }} />
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="/assets/img/brand/linkedIn.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="/assets/img/brand/dropbox.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="/assets/img/brand/trello.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="/assets/img/brand/framer.png" alt="img" />
              </div>
            </div>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="/assets/img/brand/grammarly.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="/assets/img/brand/amazon.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="/assets/img/brand/outbrain.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="/assets/img/brand/shopify.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="digital-about-image">
                  <img
                    src="/assets/img/about/digittal-about-img.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {tAbout("subtitle")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {tAbout("title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {tAbout("desc")}
                  </p>
                  <ul
                    className="about-list style-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <i className="fas fa-check-circle" />
                      {tAbout("list1")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      {tAbout("list2")}
                    </li>
                  </ul>
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn bg-2">
                      {tAbout("btn")}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <Services />
      {/* Working Process Section Start */}
      <WorkingProcess />
      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-4 fix section-padding"
        id="testimonial"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              {tTestimonial("subtitle")}
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {tTestimonial("title")}
            </h2>
          </div>
        </div>

        <TestimonialSlider4 />
        <TestimonialSlider5 />
      </section>
      {/* Faq Section Start */}
      <Faq />
      {/* News Section Start */}
      <section className="news-section section-padding pt-0" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              {tCommon("newsTitle")}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {tCommon("newsSubtitle")}
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/07.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2026</p>
                  <h4>
                    <Link href="news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    {tCommon("readMore")}
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/08.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2026</p>
                  <h4>
                    <Link href="news-details">
                      Remote work made easy way better tools.
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    {tCommon("readMore")}
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/09.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2026</p>
                  <h4>
                    <Link href="news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    {tCommon("readMore")}
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="contact-section fix section-padding pt-0 fix">
        <div className="pattern-shape">
          <img src="/assets/img/box-pattern.png" alt="radius-shape" />
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-image">
                <img src="/assets/img/contact.jpg" alt="img" />
                <div className="circle-musk-shape float-bob-x">
                  <img src="/assets/img/hero/circle-musk.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="/assets/img/bale.png" alt="img" />
                  {tContact("subtitle")}
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: tContact.raw('title').replace('{br}', '<br/>') }} />
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s" dangerouslySetInnerHTML={{ __html: tContact.raw('desc').replace('{br}', '<br/>') }} />
              <Link
                href="contact"
                className="theme-btn mt-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                {tContact("btn")}
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
