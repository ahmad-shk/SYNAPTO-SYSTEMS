"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

  const handleLanguageChange = (code) => {
    router.replace(pathname, { locale: code });
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lang-btn"
        aria-label="Select Language"
      >
        <span>{currentLanguage.flag}</span>
        <span className="lang-name d-none d-md-inline ms-1">{currentLanguage.name}</span>
        <i className="fas fa-angle-down ms-1" />
      </button>

      {isOpen && (
        <ul className="lang-dropdown shadow" style={{
          position: "absolute",
          top: "100%",
          right: 0,
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "4px",
          padding: "10px",
          zIndex: 1000,
          listStyle: "none",
          minWidth: "150px"
        }}>
          {languages.map((lang) => (
            <li key={lang.code} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => handleLanguageChange(lang.code)}>
              <div className="d-flex align-items-center">
                <span className="me-2">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        .lang-btn {
          background: transparent;
          border: none;
          color: inherit;
          display: flex;
          align-items: center;
          cursor: pointer;
          font-weight: 500;
        }
        .lang-dropdown li:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        :global(html.dark) .lang-dropdown {
          background-color: #242424 !important;
          border-color: #444 !important;
          color: #fff;
        }
        :global(html.dark) .lang-dropdown li:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </div>
  );
}
