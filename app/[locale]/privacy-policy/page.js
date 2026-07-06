import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("PrivacyPolicy");
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
                  {t("intro")}
                </p>
                <h4 className="mt-5 mb-3">{t("collectionTitle")}</h4>
                <p>
                  {t("collectionDesc")}
                </p>
                <h4 className="mt-5 mb-3">{t("usageTitle")}</h4>
                <p>
                  {t("usageDesc")}
                </p>
                <h4 className="mt-5 mb-3">{t("securityTitle")}</h4>
                <p>
                  {t("securityDesc")}
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
