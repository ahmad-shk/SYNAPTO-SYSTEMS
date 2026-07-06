"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("Faq");
  const [activeTab, setActiveTab] = useState(2); // Set faq2 open by default as in previous version

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const faqItems = [
    { id: 1, q: t("q1"), a: t("a1") },
    { id: 2, q: t("q2"), a: t("a2") },
    { id: 3, q: t("q3"), a: t("a3") },
    { id: 4, q: t("q4"), a: t("a4") },
    { id: 5, q: t("q5"), a: t("a5") },
  ];

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {t("subtitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            {t("title")}
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4 className="accordion-header">
                        <button
                          className={`accordion-button ${activeTab === item.id ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => toggleTab(item.id)}
                        >
                          {item.q}
                        </button>
                      </h4>
                      <div
                        className={`accordion-collapse collapse ${activeTab === item.id ? "show" : ""}`}
                      >
                        <div className="accordion-body">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
