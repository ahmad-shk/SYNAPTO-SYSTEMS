"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';

const page = () => {
  const t = useTranslations("ContactPage");

  // ─── EmailJS Configuration ───────────────────────────────────────────────────
  const EMAILJS_SERVICE_ID = 'service_fmg7cvl';
  const EMAILJS_TEMPLATE_ID = 'template_a1xfkil';      // → email to company
  const EMAILJS_CUSTOMER_TEMPLATE = 'template_asre42f'; // → confirmation to customer
  const EMAILJS_PUBLIC_KEY = 'dXDE-IQ7X72q7a5Jy';
  // ─────────────────────────────────────────────────────────────────────────────

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ADMIN_ID, YOUR_TEMPLATE_CUSTOMER_ID, and YOUR_PUBLIC_KEY 
    // with actual EmailJS keys from https://dashboard.emailjs.com/
    try {
      // 1. Send Admin Notification Email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          phone: formData.phone,
          reply_to: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 2. Send Customer Confirmation Email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CUSTOMER_TEMPLATE,
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NextLayout>
      <Breadcrumb pageName={t("breadcrumb")} />
      {/* Contact Section Section Start */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {t("sub")}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {t.rich("title", {
                        br: <br />
                      })}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {t.rich("desc", {
                      br: <br />
                    })}
                  </p>
                  <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <a href={`mailto:${t("email")}`}>{t("email")}</a>
                    </li>
                    <li>{t("address")}</li>
                    <li>
                      <a href={`tel:${t("phone")}`}>{t("phone")}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3>{t("formTitle")}</h3>
                  <form
                    onSubmit={handleSubmit}
                    id="contact-form"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={t("fullName")}
                            value={formData.name}
                            onChange={handleChange}
                            style={{ borderColor: errors.name ? "red" : "" }}
                          />
                          {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder={t("phoneLabel")}
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ borderColor: errors.phone ? "red" : "" }}
                          />
                          {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder={t("emailLabel")}
                            value={formData.email}
                            onChange={handleChange}
                            style={{ borderColor: errors.email ? "red" : "" }}
                          />
                          {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder={t("comments")}
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {submitStatus === "success" && (
                        <div className="col-lg-12">
                          <p style={{ color: "green", fontWeight: "bold" }}>Your message has been sent successfully!</p>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="col-lg-12">
                          <p style={{ color: "red", fontWeight: "bold" }}>There was an error sending your message. Please try again later.</p>
                        </div>
                      )}

                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : t("sendBtn")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.26123456789!2d16.4974!3d48.2235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d01085fe0013d%3A0x15a0020e8431dc9c!2sGisela-Legath-Gasse%205%2F1%2C%201220%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1711980000000!5m2!1sen!2sat"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
