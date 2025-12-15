'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useLanguage } from '@/i18n/LanguageContext';
// shape images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';


const gallery_images = [
  '/assets/img/home-03/gallery/gallery1.jpg',
  '/assets/img/home-03/gallery/gallery2.jpg',
  '/assets/img/home-03/gallery/gallery3.jpg',
  '/assets/img/home-03/gallery/gallery4.jpg',
  '/assets/img/home-03/gallery/gallery5.jpg',
  '/assets/img/home-03/gallery/gallery6.jpg',
  '/assets/img/home-03/gallery/gallery7.jpg',
  '/assets/img/home-03/gallery/gallery8.jpg',
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  const { isRTL } = useLanguage();

  return (
    <div className="tp-gallery-area fix p-relative" style={{ backgroundColor: '#000000', direction: 'ltr' }}>
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction={isRTL ? 'right' : 'left'} autoFill>
                  {gallery_images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`gallery-img-${i}`}
                      style={{ height: '735px', width: 'auto', marginRight: '30px' }}
                    />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
