"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const ProjectSlider = () => {
  const t = useTranslations("ProjectSlider");
  return (
    <div className="project-wrapper">
      <Swiper {...sliderProps.projectSlider} className="swiper project-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/01.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("productSales")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item1")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/02.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("digitalMarketing")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item2")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/03.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("seoAnalysis")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item3")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/04.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("webOptimization")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item4")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/01.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("productSales")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item1")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/02.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("digitalMarketing")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item2")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/03.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("seoAnalysis")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item3")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project-box-items">
              <div className="project-image">
                <img src="/assets/img/project/04.jpg" alt="img" />
              </div>
              <div className="project-content">
                <p>{t("webOptimization")}</p>
                <h3>
                  <Link href="case-study-details">
                    {t("item4")}
                  </Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-dot pt-5 text-center">
          <div className="dot" />
        </div>
      </Swiper>
    </div>
  );
};
export default ProjectSlider;
