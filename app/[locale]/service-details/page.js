import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("ServiceDetailsPage");
  return (
    <NextLayout>
      <Breadcrumb pageName={t("breadcrumb")} />
      {/* Shop Smart Section Start */}
      <section id="shop-smart" className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("problemSub")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {t("shopSmartTitle")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {t("shopSmartDesc")}
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      {t("shopSmartList1")}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {t("shopSmartList2")}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {t("shopSmartList3")}
                    </li>
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      {t("learnMore")}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                      <img src="/assets/img/service/new_service_shop.png" alt="Shop Smart" style={{ maxWidth: "500px", width: "100%", borderRadius: "10px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section Start */}
      <section id="mobile-app" className="about-section fix section-padding" style={{ backgroundColor: "#101828" }}>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between flex-row-reverse">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("mobileAppSub")}
                    </span>
                    <h2 className="wow fadeInUp text-white" data-wow-delay=".3s">
                      {t("mobileAppTitle")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp text-white" data-wow-delay=".5s" style={{ color: "#fff" }}>
                    {t("mobileAppDesc")}
                  </p>
                  <ul className="about-list wow fadeInUp text-white" data-wow-delay=".3s">
                    <li style={{ color: "#fff" }}>
                      <i className="fas fa-check" />
                      {t("mobileAppList1")}
                    </li>
                    <li style={{ color: "#fff" }}>
                      <i className="fas fa-check" />
                      {t("mobileAppList2")}
                    </li>
                    <li style={{ color: "#fff" }}>
                      <i className="fas fa-check" />
                      {t("mobileAppList3")}
                    </li>
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="contact" className="theme-btn style-white text-white">
                      {t("getApp")}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                      <img src="/assets/img/service/new_service_app.png" alt="Mobile App" style={{ maxWidth: "500px", width: "100%", borderRadius: "10px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Video Section Start */}
      <section id="optimizations" className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <img src="/assets/img/service/new_service_opt.png" alt="Optimizations & Marketing" style={{ maxWidth: "550px", width: "100%", borderRadius: "10px", display: "block" }} />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {t("optimizationsTitle")}
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    {t("optimizationsDesc")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      {t("dataDrivenTitle")}
                    </h5>
                    <p>
                      {t("dataDrivenDesc")}
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      {t("tailoredTitle")}
                    </h5>
                    <p>
                      {t("tailoredDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Working Process Section Start */}
      <WorkingProcess />
      {/* Grow Business Section Start */}
      <GrowBusiness2 bg={"footer-bg"} />
      {/* Pricing Section Start */}
      <Pricing />
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};
export default page;
