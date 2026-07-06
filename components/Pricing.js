import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Pricing = async () => {
  const t = await getTranslations("Pricing");
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {t("subtitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            {t("title1")}
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="/assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>{t("regular")}</h3>
                <p>{t("smallBusiness")}</p>
              </div>
              <ul className="pricing-list">
                <li>{t("itConsulting")}</li>
                <li>{t("digitalProduct")}</li>
                <li>{t("machineLearning")}</li>
                <li className="style-2">{t("automation")}</li>
                <li className="style-2">{t("support")}</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $19 <span>{t("month")}</span>
                </h2>
                <p>{t("smallBusiness")}</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  {t("choosePackage")}
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="/assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>{t("business")}</h3>
                <p>{t("smallBusiness")}</p>
              </div>
              <ul className="pricing-list">
                <li>{t("itConsulting")}</li>
                <li>{t("digitalProduct")}</li>
                <li>{t("machineLearning")}</li>
                <li>{t("automation")}</li>
                <li>{t("support")}</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $53 <span>{t("month")}</span>
                </h2>
                <p>{t("smallBusiness")}</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  {t("choosePackage")}
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="/assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>{t("professional")}</h3>
                <p>{t("smallBusiness")}</p>
              </div>
              <ul className="pricing-list">
                <li>{t("itConsulting")}</li>
                <li>{t("digitalProduct")}</li>
                <li>{t("machineLearning")}</li>
                <li className="style-2">{t("automation")}</li>
                <li className="style-2">{t("support")}</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $99 <span>{t("month")}</span>
                </h2>
                <p>{t("smallBusiness")}</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  {t("choosePackage")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

export const Pricing2 = async ({
  priceingClass = "pricing-section-3",
  paddingTop = "0",
}) => {
  const t = await getTranslations("Pricing");
  return (
    <section
      className={`fix section-padding pt-${paddingTop} ${priceingClass}`}
      id="pricing"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub-text-2 wow fadeInUp">{t("subtitle")}</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw('title2').replace('{br}', '<br/>') }} />
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>{t("regular")}</h3>
                <p>
                  {t("pricingDesc")}
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  {t("choosePackage")}
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>12 <span>{t("month")}</span>
                </h2>
                <div className="discount">
                  <h6>
                    {t.rich("off", {
                      percent: 23,
                      br: <br />
                    })}
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="/assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  {t("blogCopy")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("ecommerceCopy")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("socialMedia")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("contentWritingFeature")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("adProviding")}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items-2 active">
              <div className="pricing-header">
                <h3>{t("standard")}</h3>
                <p>
                  {t("pricingDesc")}
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  {t("choosePackage")}
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>45<span>{t("month")}</span>
                </h2>
                <div className="discount">
                  <h6>
                    {t.rich("off", {
                      percent: 23,
                      br: <br />
                    })}
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="/assets/img/arrow-2.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  {t("blogCopy")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("ecommerceCopy")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("socialMedia")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("contentWritingFeature")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("adProviding")}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>{t("premium")}</h3>
                <p>
                  {t("pricingDesc")}
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  {t("choosePackage")}
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>98<span>{t("month")}</span>
                </h2>
                <div className="discount">
                  <h6>
                    {t.rich("off", {
                      percent: 23,
                      br: <br />
                    })}
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="/assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  {t("blogCopy")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("ecommerceCopy")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("socialMedia")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("contentWritingFeature")}
                </li>
                <li>
                  <i className="far fa-check" />
                  {t("adProviding")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
