'use client';
import ContactForm from "../form/contact-form";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ContactTwo() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-5 col-lg-5 d-none d-lg-block">
            <div className="contact-lottie-wrap" style={{ filter: 'invert(1)', marginTop: '-50px' }}>
              <DotLottieReact
                src="/TheOIv1Clk.lottie"
                loop
                autoplay
                style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
