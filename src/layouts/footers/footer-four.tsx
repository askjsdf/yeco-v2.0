'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/hooks/useTranslation';

export default function FooterFour() {
  const { t, isRTL } = useTranslation();

  // RTL 模式下分隔线样式调整
  const col2Style: React.CSSProperties = isRTL ? {
    paddingRight: '80px',
    marginRight: '33px',
    borderRight: '1px solid rgba(255, 255, 255, 0.10)',
    paddingLeft: 0,
    marginLeft: 0,
    borderLeft: 'none',
  } : {};

  const col3Style: React.CSSProperties = isRTL ? {
    paddingRight: '130px',
    marginRight: '33px',
    borderRight: '1px solid rgba(255, 255, 255, 0.10)',
    paddingLeft: 0,
    marginLeft: 0,
    borderLeft: 'none',
  } : {};

  return (
    <footer>
      <div className="tp-footer-3-area pt-120" style={{ backgroundColor: '#1a1a1a', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">{t.footer.siteMap}</h4>
                  <div className="tp-footer-3-menu" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                    <ul>
                      <li><Link href="/home-yeco">{t.nav.home}</Link></li>
                      <li><Link href="/reportsList">{t.nav.reports}</Link></li>
                      <li><Link href="/about-yeco">{t.nav.about}</Link></li>
                    </ul>
                  </div>
                </div>
                <p className="tp-footer-3-copyright" style={{ marginTop: '20px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                  © {new Date().getFullYear()} YECO. {t.footer.copyright}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2" style={col2Style}>
                <div className="tp-footer-3-logo-box">
                  <Link className="tp-footer-3-logo p-relative logo-text" href="/home-yeco" style={{ color: '#fff', fontSize: '64px' }}>
                    YECO
                  </Link>
                  <p style={{ marginTop: '20px', marginBottom: '30px', color: '#999', fontSize: '17px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                    {t.footer.slogan}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3" style={col3Style}>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">{t.footer.contact}</h4>
                  <div className="tp-footer-2-contact-item" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ whiteSpace: 'nowrap' }}>{t.footer.tel}: <Link href="tel:+8613605743400">+86 13605743400</Link></span>
                    <span style={{ whiteSpace: 'nowrap' }}>{t.footer.whatsapp}: <Link href="https://wa.me/8613486013676">+86 13486013676</Link></span>
                    <span>{t.footer.email}:</span>
                    <span style={{ fontSize: '14px' }}><Link href="mailto:coco@wy-packaging.com">coco@wy-packaging.com</Link></span>
                    <span style={{ fontSize: '14px' }}><Link href="mailto:nora@bhslkj.com">nora@bhslkj.com</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
