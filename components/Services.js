import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Services = async () => {
  const t = await getTranslations("Services");
  return (
    <section
      className="service-section-4 fix bg-cover section-padding"
      style={{
        backgroundImage: 'url("/assets/img/service/service-bg-min.jpg")',
      }}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content bg-color-3 wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {t("subtitle")}
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw('title').replace('{br}', '<br/>') }} />
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-keywords" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details#shop-smart">{t("keywordResearch")}</Link>
                </h3>
                <p>
                  {t("serviceDesc")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items active">
              <div className="icon">
                <i className="flaticon-copy-writing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details#mobile-app">{t("contentWriting")}</Link>
                </h3>
                <p>
                  {t("serviceDescApp")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-www" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details#optimizations">{t("siteOptimizations")}</Link>
                </h3>
                <p>
                  {t("serviceDescOpt")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

export const Service2 = async ({ paddingTop = 0, title }) => {
  const t = await getTranslations("Services");
  return (
    <section
      className={`service-section section-padding pt-${paddingTop}`}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {title || t("subtitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw('title').replace('{br}', '<br/>') }} />
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="/assets/img/service/new_service_shop.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details#shop-smart">{t("keywordResearch")}</Link>
                </h3>
                <p>
                  {t("serviceDesc")}
                </p>
                <Link href="service-details#shop-smart" className="theme-btn bg-2">
                  {t("learnMore")} <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="/assets/img/service/new_service_app.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details#mobile-app">{t("contentWriting")}</Link>
                </h3>
                <p>
                  {t("serviceDescApp")}
                </p>
                <Link href="service-details#mobile-app" className="theme-btn bg-2">
                  {t("learnMore")} <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="/assets/img/service/new_service_opt.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details#optimizations">{t("siteOptimizations")}</Link>
                </h3>
                <p>
                  {t("serviceDescOpt")}
                </p>
                <Link href="service-details#optimizations" className="theme-btn bg-2">
                  {t("learnMore")} <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
