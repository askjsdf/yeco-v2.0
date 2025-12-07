import React from 'react';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area pt-120" style={{ backgroundColor: '#1a1a1a', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website Map</h4>
                  <div className="tp-footer-3-menu" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                    <ul>
                      <li><Link href="/home-yeco">主页</Link></li>
                      <li><Link href="/reportsList">趋势报告</Link></li>
                      <li><Link href="/about-yeco">关于YECO</Link></li>
                      <li><Link href="/home-yeco#contact">联系我们</Link></li>
                    </ul>
                  </div>
                </div>
                <p className="tp-footer-3-copyright" style={{ marginTop: '20px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                  © {new Date().getFullYear()} YECO. 保留所有权利
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <Link className="tp-footer-3-logo p-relative logo-text" href="/home-yeco" style={{ color: '#fff', fontSize: '64px' }}>
                    YECO
                  </Link>
                  <p style={{ marginTop: '20px', marginBottom: '30px', color: '#999', fontSize: '17px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                    世界文化交融的香水包装设计专家
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>中国浙江省宁波市</span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>Coco：<Link href="tel:+861388888888">+86-1388888888</Link></span>
                    <span>Nora：<Link href="tel:+861388888888">+86-1388888888</Link></span>
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
