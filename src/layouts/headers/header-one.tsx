"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import useStickyHeader from "@/hooks/use-sticky-header";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageConfig, languages, Language } from "@/i18n/config";

const HeaderOne = () => {
  const { isSticky, headerRef, headerFullWidth } = useStickyHeader(20);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${isSticky ? 'header-sticky' : ''}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-text" href="/home-yeco">
                    YECO
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end d-flex align-items-center justify-content-end gap-3">
                  {/* Desktop Language Switcher - 显示 3 个语言 */}
                  <div className="language-switcher d-none d-xl-flex">
                    <svg className="lang-globe-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        className={`lang-item ${language === lang ? 'active' : ''}`}
                        onClick={() => setLanguage(lang)}
                      >
                        {languageConfig[lang].nativeName}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Language Switcher - 下拉选择 */}
                  <div className="language-switcher-mobile d-xl-none">
                    <svg className="lang-globe-icon-mobile" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <select
                      className="lang-select-mobile"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as Language)}
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {languageConfig[lang].nativeName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
