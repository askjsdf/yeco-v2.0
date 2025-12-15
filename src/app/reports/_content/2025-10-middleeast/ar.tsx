'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

// مسار الصور الأساسي
const IMG_BASE = '/assets/reports/2025-10-middleeast';

const Report2025MiddleEastAR = () => {
  const fadeRefs = useRef<HTMLElement[]>([]);

  // تأثير التمرير
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addFadeRef = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <div className={styles.reportWrapper} dir="rtl">
      {/* خلفية زخرفية عربية */}
      <div className={styles.islamicPattern}></div>

      {/* الغلاف */}
      <section
        className={styles.coverPage}
        style={{
          '--cover-bg-image': `url('${IMG_BASE}/01主视觉.png')`
        } as React.CSSProperties}
      >
        <div className={styles.coverContent}>
          <div className={styles.coverOrnamentTop}></div>
          <div className={styles.coverLogo}>YECO</div>
          <div className={styles.coverTitle}>النشرة الشهرية لاتجاهات صناعة العطور</div>
          <div className={styles.coverSubtitle}>فك شفرة روح مستهلكي العطور</div>
          <div className={styles.coverSubtitleEn}>Decoding the Soul of Perfume Consumers</div>

          <div className={styles.coverIssue}>
            <span className={styles.issueNumber}>العدد 01</span>
            <span className={styles.issueDivider}>|</span>
            <span>أكتوبر 2025</span>
            <span className={styles.issueDivider}>|</span>
            <span>إصدار الشرق الأوسط</span>
          </div>
          <div className={styles.coverOrnamentBottom}></div>
        </div>
      </section>

      {/* جدول المحتويات */}
      <section className={styles.tableOfContents}>
        <div className={styles.container}>
          <h2 className={styles.tocTitle}>المحتويات</h2>
          <div className={styles.tocGrid}>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>01</div>
              <div className={styles.tocContent}>
                <h3>الملخص التنفيذي</h3>
                <p>العطر كـ &quot;رمز طوطمي&quot; - تحول السوق</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>02</div>
              <div className={styles.tocContent}>
                <h3>تحليل جماليات التصميم</h3>
                <p>الأشكال المرغوبة وساحة المعركة الجمالية</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>03</div>
              <div className={styles.tocContent}>
                <h3>دراسات حالة العلامات التجارية</h3>
                <p>المديح والتناقضات و&quot;الإخفاقات&quot;</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>04</div>
              <div className={styles.tocContent}>
                <h3>اتجاهات السرد</h3>
                <p>من &quot;قصص العلامة التجارية&quot; إلى &quot;الأجواء الشخصية&quot;</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>05</div>
              <div className={styles.tocContent}>
                <h3>ديناميكيات المستخدم</h3>
                <p>الاحتياجات الأساسية والتوقعات غير الملباة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الملخص التنفيذي */}
      <section className={styles.executiveSummary}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>الملخص</h2>
            <div className={styles.sectionLine}></div>
          </div>

          {/* صورة الرؤية الأساسية */}
          <div className={`${styles.featureBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.featureImageLarge}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/02核心洞察配图1网图.png`}
                  alt="الرؤية الأساسية"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>العطر كـ &quot;رمز طوطمي&quot;</h3>
              <p className={styles.featureText}>
                بناءً على التحليل النوعي المعمق لمجتمعات العطور على Reddit، يكشف هذا التقرير عن تحول جوهري في السوق:
                <span className={styles.highlight}>زجاجة العطر تتطور من مجرد &quot;حاوية&quot; إلى &quot;رمز طوطمي&quot;</span>.
                المستهلكون اليوم لا يشترون مجرد تجربة شمية، بل تعبير جمالي وأداة سردية وشارة هوية.
              </p>
            </div>
          </div>

          {/* الركائز الثلاث */}
          <div className={`${styles.pillarsSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>الركائز الأساسية الثلاث</h3>

            <div className={styles.pillarRow}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/03设计美学.png`}
                    alt="جماليات التصميم"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>01</div>
                <h4>جماليات التصميم</h4>
                <p>أصبح تصميم الزجاجة <span className={styles.highlight}>&quot;حارس البوابة&quot;</span> الأول للعلامة التجارية. يتفق المستهلكون بشكل كبير على ما يعتبرونه &quot;رخيصاً&quot;.</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>85%</span>
                  <span className={styles.statLabel}>من المستهلكين يقولون أن تصميم الزجاجة يؤثر على قرارات الشراء</span>
                </div>
              </div>
            </div>

            <div className={styles.pillarRowReverse}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/04.png`}
                    alt="اتجاهات السرد"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>02</div>
                <h4>اتجاهات السرد</h4>
                <p>يشهد السوق تحولاً عميقاً من <span className={styles.highlight}>&quot;القصص التي ترويها العلامة التجارية&quot;</span> إلى <span className={styles.highlight}>&quot;الأجواء التي يبحث عنها المستهلك&quot;</span>.</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>72%</span>
                  <span className={styles.statLabel}>من المستهلكين يبحثون عن &quot;أجواء&quot; محددة</span>
                </div>
              </div>
            </div>

            <div className={styles.pillarRow}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/05.png`}
                    alt="ديناميكيات المستخدم"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>03</div>
                <h4>ديناميكيات المستخدم</h4>
                <p>الجماليات والسرد يقودان سلوك الشراء بشكل مباشر. يكشف التحليل عن <span className={styles.highlight}>&quot;حق النقض الجمالي&quot;</span> القوي.</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>68%</span>
                  <span className={styles.statLabel}>من المستهلكين يعانون من صراع &quot;أحب الرائحة، أكره الزجاجة&quot;</span>
                </div>
              </div>
            </div>
          </div>

          {/* الإحصائيات الرئيسية */}
          <div className={`${styles.keyStats} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>7</div>
              <div className={styles.statLabel}>&quot;الخطايا السبع&quot; في التصميم</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>4</div>
              <div className={styles.statLabel}>معايير &quot;الكأس المقدسة&quot;</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>3</div>
              <div className={styles.statLabel}>متطلبات &quot;الأجواء&quot;</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>$250</div>
              <div className={styles.statLabel}>توقعات الجودة الفاخرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* تحليل جماليات التصميم */}
      <section className={styles.designAnalysis}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>تحليل جماليات الزجاجة</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>الأشكال المرغوبة وساحة المعركة الجمالية</p>
          </div>

          {/* الخطايا السبع */}
          <div className={`${styles.analysisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.analysisHeader}>
              <h3>&quot;الخطايا السبع المميتة&quot; في التصميم</h3>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeNegative}`}>رفض المستهلك</span>
            </div>

            <div className={styles.twoColumnLayout}>
              <div className={styles.columnImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/06.png`}
                    alt="أمثلة التصميم الرخيص"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.columnContent}>
                <div className={styles.sinList}>
                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>01</div>
                    <div className={styles.sinContent}>
                      <h4>تقليد أشياء غير العطور</h4>
                      <p>شكل &quot;الكعب العالي&quot; لـ Carolina Herrera Good Girl يُنتقد بأنه &quot;غريب&quot; و&quot;سخيف&quot;.</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>02</div>
                    <div className={styles.sinContent}>
                      <h4>الطفولية والكرتونية</h4>
                      <p>زجاجة &quot;الروبوت&quot; لـ Paco Rabanne Phantom توصف بأنها &quot;طفولية&quot;.</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>03</div>
                    <div className={styles.sinContent}>
                      <h4>&quot;البريق&quot; المفرط</h4>
                      <p>شكل &quot;سبيكة الذهب&quot; لـ Paco Rabanne One Million يعتبر &quot;مبتذلاً للغاية&quot;.</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>04</div>
                    <div className={styles.sinContent}>
                      <h4>جودة المواد الرخيصة</h4>
                      <p>&quot;الملمس البلاستيكي&quot; هو &quot;الخطيئة الأصلية&quot; غير القابلة للغفران.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* الكأس المقدسة */}
          <div className={`${styles.analysisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.analysisHeader}>
              <h3>&quot;الكأس المقدسة&quot; للتصميم</h3>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgePositive}`}>إعجاب المستهلك</span>
            </div>

            <div className={styles.grailGrid}>
              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/07神话.png`}
                      alt="المفهوم الفني"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>المفاهيم الفنية والأسطورية</h4>
                  <p>الأعمال الفنية على زجاجات Argos توصف بأنها &quot;مذهلة حقاً&quot;.</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/08雕塑感与独特性.png`}
                      alt="الشكل النحتي"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>الجودة النحتية والتفرد</h4>
                  <p>زجاجة Dries Van Noten يصفها المستخدمون بأنها &quot;قطعة متحفية&quot;.</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/09经典.png`}
                      alt="الكلاسيكي الخالد"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>الكلاسيكي والخالد</h4>
                  <p>زجاجة Shalimar من Guerlain توصف بأنها &quot;أيقونية جداً&quot;.</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/10现代极简.png`}
                      alt="الطوطم الحديث"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>&quot;الطوطم&quot; الحديث البسيط</h4>
                  <p>زجاجة Tom Ford Private Blend تُعتبر &quot;أيقونية&quot;.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دراسات حالة العلامات التجارية */}
      <section className={styles.caseStudies}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>دراسات حالة العلامات التجارية</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>المديح والتناقضات و&quot;الإخفاقات&quot;</p>
          </div>

          {/* حالة النجاح: Replica */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Maison Margiela Replica</h3>
                <span className={styles.caseSubtitle}>نجاح &quot;البساطة الجوية&quot;</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgePositive}`}>حالة نجاح</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/11.png`}
                      alt="منتج Replica"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <blockquote className={styles.caseQuote}>
                  نجاح Replica يكمن في بساطتها &quot;متعددة الحواس&quot;. العلامة التجارية تخلق بساطة &quot;دافئة&quot;.
                </blockquote>
              </div>
            </div>
          </div>

          {/* حالة الفشل: Byredo */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Byredo & Nishane</h3>
                <span className={styles.caseSubtitle}>&quot;البساطة المملة&quot;</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeNegative}`}>حالة فشل</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/14.png`}
                      alt="منتج Byredo"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <blockquote className={`${styles.caseQuote} ${styles.caseQuoteNegative}`}>
                  في سوق مشبع بصرياً، &quot;الممل&quot; قد يكون أكثر فتكاً من &quot;القبيح&quot;.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* اتجاهات السرد */}
      <section className={styles.narrativeTrends}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>اتجاهات السرد</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>من &quot;قصص العلامة التجارية&quot; إلى &quot;الأجواء الشخصية&quot;</p>
          </div>

          {/* التحول الأساسي */}
          <div className={`${styles.trendIntro} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.trendVisual}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/19.png`}
                  alt="مفهوم تحول السرد"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.trendContent}>
              <h3>التحول الأساسي</h3>
              <p className={styles.largeText}>
                أسئلة المستهلك تتحول من <span className={styles.highlight}>&quot;أريد عطراً بنوتات X&quot;</span> إلى
                <span className={styles.highlight}>&quot;أريد أن أشم رائحة [مفهوم/مشهد مجرد]&quot;</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ديناميكيات المستخدم */}
      <section className={styles.userDynamics}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>ديناميكيات المستخدم الأساسية</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>الاحتياجات غير الملباة وفرص السوق</p>
          </div>

          {/* صراع الحب والكراهية */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>صراع &quot;أحب الرائحة، أكره الزجاجة&quot;</h3>
              <div className={styles.dynamicStat}>68% من المستهلكين يعانون من هذا الصراع</div>
            </div>

            <div className={styles.conflictShowcase}>
              <div className={styles.conflictVisual}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/27.png`}
                    alt="مفهوم الصراع"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            <blockquote className={styles.insightQuote}>
              حالة &quot;الحب والكراهية&quot; هذه عامل تآكل للولاء للعلامة التجارية.
            </blockquote>
          </div>
        </div>
      </section>

      {/* الخاتمة */}
      <section className={styles.conclusion}>
        <div className={styles.container}>
          <div className={`${styles.conclusionContent} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.conclusionOrnament}></div>
            <blockquote className={styles.finalQuote}>
              الفائزون في سوق المستقبل سيكونون العلامات التجارية التي يمكنها توحيد منتجها المادي (الزجاجة) ومنتجها الشمي (العطر) ومنتجها العاطفي (السرد) بشكل مثالي.
            </blockquote>
            <div className={styles.conclusionOrnament}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Report2025MiddleEastAR;
