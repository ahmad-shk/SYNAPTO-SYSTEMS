import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("CookiePolicy");
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
                <h4 className="mt-5 mb-3">{t("whatTitle")}</h4>
                <p>
                  {t("whatDesc")}
                </p>
                <h4 className="mt-5 mb-3">{t("whyTitle")}</h4>
                <p>
                  {t("whyDesc")}
                </p>
                <h4 className="mt-5 mb-3">{t("controlTitle")}</h4>
                <p>
                  {t("controlDesc")}
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
