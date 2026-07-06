import Counter from "./Counter";
import { getTranslations } from "next-intl/server";

const FunFactCounter = async ({ style }) => {
  const t = await getTranslations("FunFact");
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={98} />
            </span>
            %
          </h2>
          <h6>{t("conversionRate")}</h6>
          <p>{t("description")}</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={35} />
            </span>
            m+
          </h2>
          <h6>{t("trafficGenerated")}</h6>
          <p>{t("description")}</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={97} />
            </span>
            %
          </h2>
          <h6>{t("positiveReview")}</h6>
          <p>{t("description")}</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={92} />
            </span>
            %
          </h2>
          <h6>{t("proTeam")}</h6>
          <p>{t("description")}</p>
        </div>
      </div>
    </div>
  );
};
export default FunFactCounter;
