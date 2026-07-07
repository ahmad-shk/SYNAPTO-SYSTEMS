import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Cta = ({ sectionPadding = false }) => {
  const t = useTranslations("Cta");
  return (
    <section
      className={`cta-marketing-section fix ${sectionPadding ? "section-padding" : ""
        }`}
    >
      <div className="container">
        <div className="cta-marketing-wrapper">
          <div className="content">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {t.rich("title", {
                br: <br />
              })}
            </h2>
          </div>
          <div className="thumb wow fadeInUp" data-wow-delay=".6s">
            <img src="/assets/img/logo/logo-white.png" alt="img" style={{ maxWidth: "250px" }} />
            <div className="circle-shape">
              <img src="/assets/img/cta/circle-shape.png" alt="shape-img" />
            </div> 
          </div>
          <Link
            href="/about"
            className="theme-btn bg-2 wow fadeInUp"
            data-wow-delay=".7s"
          >
            {t("btn")} <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;

