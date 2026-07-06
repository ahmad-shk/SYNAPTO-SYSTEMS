import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Imprint");
  return (
    <NextLayout>
      <Breadcrumb pageTitle={t("title")} pageName={t("title")} />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content">
                <h2 className="mb-4">{t("title")}</h2>
                <p>
                  {t("info")}
                </p>
                <h4 className="mt-5 mb-3">{t("companyTitle")}</h4>
                <p>
                  <strong>Ernova</strong><br />
                  {t("companyDesc")}
                </p>
                <h4 className="mt-5 mb-3">{t("contactTitle")}</h4>
                <p>
                  {t("contactEmail")}<br />
                  {t("contactWeb")}
                </p>
                <h4 className="mt-5 mb-3">{t("disclaimerTitle")}</h4>
                <p>
                  {t("disclaimerDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;
