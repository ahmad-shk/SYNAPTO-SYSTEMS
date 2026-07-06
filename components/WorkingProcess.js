import { useTranslations } from "next-intl";

const WorkingProcess = () => {
  const t = useTranslations("WorkingProcess");
  return (
    <section className="working-section-2 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {t("subtitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw('title').replace('{br}', '<br/>') }} />
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="working-card-items">
              <div className="icon">
                <img src="/assets/img/working-process/icon-1.png" alt="img" />
              </div>
              <div className="content">
                <span className="sub-title">{t("step1")}</span>
                <h3>{t("step1Title")}</h3>
                <p>
                  {t.rich("step1Desc", {
                    br: <br />
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
            <div className="arrow-image">
              <img src="/assets/img/working-process/arrow-down.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="arrow-image text-center">
              <img
                src="/assets/img/working-process/arrow-revers.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">{t("step2")}</span>
                <h3>{t("step2Title")}</h3>
                <p>
                  {t.rich("step2Desc", {
                    br: <br />
                  })}
                </p>
              </div>
              <div className="icon">
                <img src="/assets/img/working-process/icon-2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="working-card-items">
              <div className="icon">
                <img src="/assets/img/working-process/icon-3.png" alt="img" />
              </div>
              <div className="content">
                <span className="sub-title">{t("step3")}</span>
                <h3>{t("step3Title")}</h3>
                <p>
                  {t.rich("step3Desc", {
                    br: <br />
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
            <div className="arrow-image">
              <img src="/assets/img/working-process/arrow-down.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="arrow-image text-center">
              <img
                src="/assets/img/working-process/arrow-revers.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">{t("step4")}</span>
                <h3>{t("step4Title")}</h3>
                <p>
                  {t.rich("step4Desc", {
                    br: <br />
                  })}
                </p>
              </div>
              <div className="icon">
                <img src="/assets/img/working-process/icon-4.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = () => {
  const t = useTranslations("WorkingProcess");
  return (
    <section className="working-process-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {t("subtitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: t.raw('title').replace('{br}', '<br/>') }} />
        </div>
        <div className="work-process-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-process-content">
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="digit-box">01</div>
                  <h4>{t("marketResearch")}</h4>
                  <p>
                    {t("marketResearchDesc")}
                  </p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="digit-box">02</div>
                  <h4>{t("processAnalysis")}</h4>
                  <p>
                    {t("processAnalysisDesc")}
                  </p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="digit-box">03</div>
                  <h4>{t("successfulProject")}</h4>
                  <p>
                    {t("successfulProjectDesc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="work-process-image wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img src="/assets/img/working-process/new_working_process.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
