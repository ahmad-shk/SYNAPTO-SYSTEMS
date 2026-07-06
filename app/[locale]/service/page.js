import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("ServicePage");
  return (
    <NextLayout>
      <Breadcrumb pageName={t("breadcrumb")} pageTitle={t("title")} />
      <GrowBusiness paddingTop={9} />
      <Services />
      <Service2 paddingTop={9} title={t("coreFeatures")} />
      <Cta />
      <Faq />
    </NextLayout>
  );
};
export default page;
