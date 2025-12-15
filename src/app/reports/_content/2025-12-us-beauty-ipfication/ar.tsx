'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

// مسار الصور الأساسي
const IMG_BASE = '/assets/reports/2025-12-us-beauty-ipfication';

const ReportUSBeautyIPficationAR = () => {
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
      {/* الغلاف */}
      <section className={styles.coverPage}>
        <div className={styles.coverBackdrop}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={`${IMG_BASE}/banner.jpg`}
              alt="خلفية الطوطم"
              fill
              style={{ objectFit: 'cover', opacity: 0.15 }}
              priority
            />
          </div>
        </div>

        <div className={styles.coverContent}>
          <div className={styles.coverTag}>رؤية استراتيجية من منظور سلسلة التوريد العالمية</div>
          <div className={styles.coverPeriod}>2024—2026</div>

          <h1 className={styles.coverTitle}>
            <span className={styles.titleMainLine}>سوق الجمال والعطور الأمريكي</span>
            <span className={styles.titleHighlight}>&quot;التحول إلى IP&quot; و&quot;تحويل العبوات إلى ألعاب&quot;</span>
            <span className={styles.titleSubLine}>تقرير استراتيجي معمق</span>
          </h1>

          <div className={styles.coverMeta}>
            <span className={styles.metaDivider}>━━━</span>
            <span>تحول النموذج: من الحاوية إلى الطوطم</span>
            <span className={styles.metaDivider}>━━━</span>
          </div>

          <div className={styles.coverDate}>
            <span>2025.12</span>
            <span className={styles.dateDivider}>|</span>
            <span>YECO Studio</span>
          </div>
        </div>
      </section>

      {/* الأطروحة الأساسية */}
      <section className={styles.coreThesis}>
        <div className={styles.container}>
          <div className={`${styles.thesisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.thesisLabel}>الأطروحة الأساسية</div>
            <h2 className={styles.thesisStatement}>
              لم تعد العبوة مجرد حاوية ملحقة،
              <br />
              بل أصبحت <span className={styles.thesisHighlight}>الحامل الأساسي</span> لقيمة المنتج،
              <br />
              بل تجاوزت المحتويات نفسها،
              <br />
              لتصبح <span className={styles.thesisHighlight}>&quot;طوطماً&quot;</span> قابلاً للجمع
            </h2>
          </div>

          {/* المعادلة البصرية */}
          <div className={`${styles.visualFormula} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.formulaItem}>
              <div className={styles.formulaTerm}>المرح البصري</div>
              <div className={styles.formulaPlus}>+</div>
            </div>
            <div className={styles.formulaItem}>
              <div className={styles.formulaTerm}>الثقل اللمسي</div>
              <div className={styles.formulaEquals}>=</div>
            </div>
            <div className={styles.formulaResult}>
              <div className={styles.resultLabel}>الفخامة الحديثة</div>
            </div>
          </div>
        </div>
      </section>

      {/* الفصل الأول: صعود اقتصاد الكبار الصغار */}
      <section className={styles.chapterOne}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>الفصل 01</span>
            <h2 className={styles.chapterTitle}>صعود اقتصاد الكبار الصغار</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>من تأثير أحمر الشفاه إلى تأثير الألعاب</p>
          </div>

          {/* عرض البيانات الرئيسية */}
          <div className={`${styles.dataShowcase} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dataGrid}>
              <div className={styles.dataCard}>
                <div className={styles.dataValue}>$1.5<span className={styles.dataUnit}>مليار</span></div>
                <div className={styles.dataLabel}>مبيعات ألعاب الكبار Q1 2024</div>
                <div className={styles.dataContext}>أول مرة تتجاوز أطفال ما قبل المدرسة</div>
              </div>

              <div className={styles.dataCard}>
                <div className={styles.dataValue}>28.5<span className={styles.dataUnit}>%</span></div>
                <div className={styles.dataLabel}>الكبار في مشتريات الألعاب</div>
                <div className={styles.dataContext}>يساهمون بـ 60% من نمو الدولار</div>
              </div>

              <div className={styles.dataCard}>
                <div className={styles.dataValue}>$114.4<span className={styles.dataUnit}>مليار</span></div>
                <div className={styles.dataLabel}>سوق الألعاب العالمي 2024</div>
                <div className={styles.dataContext}>متوقع $203.1 مليار بحلول 2034</div>
              </div>
            </div>
          </div>

          {/* تطور التأثير */}
          <div className={`${styles.effectEvolution} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.evolutionVisual}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/img0.jpg`}
                  alt="من تأثير أحمر الشفاه إلى تأثير الألعاب"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            <div className={styles.evolutionContent}>
              <h3>من تحسين اللون إلى الشفاء العاطفي</h3>

              <div className={styles.evolutionComparison}>
                <div className={styles.comparisonColumn}>
                  <div className={styles.comparisonTitle}>تأثير أحمر الشفاه التقليدي</div>
                  <ul className={styles.comparisonList}>
                    <li>المظهر الأفضل</li>
                    <li>استهلاك وظيفي</li>
                    <li>العبوة كحاوية</li>
                  </ul>
                </div>

                <div className={styles.comparisonArrow}>←</div>

                <div className={styles.comparisonColumn}>
                  <div className={styles.comparisonTitle}>تأثير الألعاب الجديد</div>
                  <ul className={styles.comparisonList}>
                    <li>الشعور بالأمان</li>
                    <li>استهلاك علاجي</li>
                    <li>العبوة كلعبة</li>
                  </ul>
                </div>
              </div>

              <blockquote className={styles.insightQuote}>
                المستهلكون لم يعودوا يبحثون فقط عن اللون أو العطر، بل عن &quot;كائن دعم عاطفي&quot; (ESO) يوفر <strong>راحة لمسية وقيمة عاطفية وعملة اجتماعية</strong>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* الفصل الثاني: تطور تحويل العبوات إلى ألعاب */}
      <section className={styles.chapterTwo}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>الفصل 02</span>
            <h2 className={styles.chapterTitle}>تطور تحويل العبوات إلى ألعاب</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>طيف واسع من التشكيلي إلى التجريدي</p>
          </div>

          {/* خريطة الأرباع الأربعة */}
          <div className={`${styles.quadrantMap} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>01</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img4.jpg`}
                    alt="تشكيل الألعاب"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>تشكيل الألعاب</h3>
                <p className={styles.quadrantDesc}>تقليد مباشر للألعاب أو الشخصيات الكرتونية</p>
                <div className={styles.quadrantCase}>
                  <strong>حالات نموذجية:</strong> Moschino Toy 2 الدب، سلسلة Flower Knows الدب
                </div>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>02</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img5.jpg`}
                    alt="التحويل الفني النحتي"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>التحويل الفني النحتي</h3>
                <p className={styles.quadrantDesc}>تصميم كقطع فنية تجريدية أو منحوتات حديثة</p>
                <div className={styles.quadrantCase}>
                  <strong>حالات نموذجية:</strong> زجاجة عطر KKW Body، عبوة Simihaze الراتنج
                </div>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>03</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img6.jpg`}
                    alt="روكوكو الخيال"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>روكوكو الخيال</h3>
                <p className={styles.quadrantDesc}>تفاصيل متقنة وحرفية النقش وسرديات خيالية</p>
                <div className={styles.quadrantCase}>
                  <strong>حالات نموذجية:</strong> Flower Knows Strawberry Rococo، Florasis
                </div>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>04</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img7.jpg`}
                    alt="الوظيفية العملية"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>الوظيفية العملية</h3>
                <p className={styles.quadrantDesc}>تصميم الهواء الطلق يلتقي التصميم الصناعي</p>
                <div className={styles.quadrantCase}>
                  <strong>حالات نموذجية:</strong> سلسلة Off-White Paperwork
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفصل الثالث: استراتيجية IP */}
      <section className={styles.chapterThree}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>الفصل 03</span>
            <h2 className={styles.chapterTitle}>استراتيجية التحول إلى IP</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>من الترخيص إلى السرديات الأصلية</p>
          </div>

          {/* IP المرخص مقابل IP الأصلي */}
          <div className={`${styles.ipStrategy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.strategyComparison}>
              <div className={styles.strategyColumn}>
                <div className={styles.strategyHeader}>
                  <h3>IP المرخص</h3>
                  <span className={styles.strategyBadge}>طريق مختصر للحنين</span>
                </div>

                <div className={styles.strategyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img8.jpg`}
                      alt="حالة IP المرخص"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className={styles.strategyContent}>
                  <h4>IP جاذب للحركة</h4>
                  <ul className={styles.ipList}>
                    <li>Barbie</li>
                    <li>Transformers</li>
                    <li>Dungeons & Dragons</li>
                    <li>Care Bears</li>
                  </ul>
                </div>
              </div>

              <div className={styles.strategyDivider}></div>

              <div className={styles.strategyColumn}>
                <div className={styles.strategyHeader}>
                  <h3>IP الأصلي</h3>
                  <span className={`${styles.strategyBadge} ${styles.strategyBadgeHighlight}`}>إلهام C-Beauty</span>
                </div>

                <div className={styles.strategyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img9.jpg`}
                      alt="حالة IP الأصلي"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className={styles.strategyContent}>
                  <h4>بناء عوالم سردية</h4>
                  <p className={styles.strategyExample}>
                    <strong>حالة Flower Knows:</strong> لا يبيعون ظلال العيون، بل يبيعون قصص خيالية عن &quot;وحيد القرن&quot; و&quot;الملائكة الصغار&quot; و&quot;البجع&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفصل الرابع: ثورة علوم المواد */}
      <section className={styles.chapterFour}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>الفصل 04</span>
            <h2 className={styles.chapterTitle}>ثورة علوم المواد</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>إعادة بناء الأساس المادي للشعور الفاخر</p>
          </div>

          {/* قاعدة الوزن */}
          <div className={`${styles.materialSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.sectionIntro}>
              <h3>قاعدة الوزن</h3>
              <p className={styles.materialPrinciple}>
                في علم نفس المستهلك، <strong>الوزن يرتبط بالقيمة المدركة</strong>. للعبوات النحتية، البلاستيك الخفيف عيب قاتل.
              </p>
            </div>

            <div className={styles.materialGrid}>
              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img10.jpg`}
                      alt="سبيكة Zamac الزنك"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>سبيكة Zamac الزنك</h4>
                  <p className={styles.materialUse}>أفضل بديل للأغطية البلاستيكية</p>
                </div>
              </div>

              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img11.jpg`}
                      alt="راتنج حيوي ثقيل"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>راتنج حيوي ثقيل</h4>
                  <p className={styles.materialUse}>يوازن قدرة النحت المعقد مع ثقل السيراميك</p>
                </div>
              </div>

              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img12.jpg`}
                      alt="Sulapac Luxe"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>Sulapac Luxe</h4>
                  <p className={styles.materialUse}>مثالي للأشكال العضوية &quot;الحصاة&quot; و&quot;عمود الطوطم&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفصل الخامس: النافذة الاستراتيجية */}
      <section className={styles.chapterFive}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>الفصل 05</span>
            <h2 className={styles.chapterTitle}>النافذة الاستراتيجية المثلى</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>خارطة الطريق الاستراتيجية 2024-2026</p>
          </div>

          {/* الركائز الثلاث للنضج */}
          <div className={`${styles.maturityPillars} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.pillarsTitle}>ثلاث ركائز تجعل 2025 اللحظة المثلى</h3>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>01</div>
                <h4>استقرار اقتصاد الكبار الصغار</h4>
                <p>الآن محرك النمو الأساسي لصناعتي الجمال والألعاب</p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>02</div>
                <h4>اكتمال التعليم الجمالي C-Beauty</h4>
                <p>جماليات سلسلة التوريد الشرقية أكملت تعليم المستهلك في الأسواق الغربية</p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>03</div>
                <h4>نضج تكنولوجيا المواد الجديدة</h4>
                <p>المواد الثقيلة التي توازن &quot;مرح الألعاب&quot; مع &quot;الشعور الفاخر&quot; دخلت نضج الإنتاج الضخم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفصل السادس: التوصيات الاستراتيجية */}
      <section className={styles.chapterSix}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>الفصل 06</span>
            <h2 className={styles.chapterTitle}>التوصيات الاستراتيجية</h2>
            <div className={styles.chapterLine}></div>
          </div>

          <div className={`${styles.actionItems} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>01</div>
              <div className={styles.actionContent}>
                <h3>إعادة تعريف المقاييس المادية لـ &quot;الفاخر&quot;</h3>
                <p>تحديث معايير المشتريات فوراً، وإدراج <strong>الكثافة</strong> كمقياس قبول مساوٍ للون واللمعان.</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>02</div>
              <div className={styles.actionContent}>
                <h3>تبني التصميم &quot;القابل للارتداء&quot;</h3>
                <p>فرض &quot;نقاط التعليق&quot; (حلقة/خاتم) في تصميم المنتج. دع منتجات الجمال تخرج من حقيبة المكياج.</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>03</div>
              <div className={styles.actionContent}>
                <h3>حل نقطة الألم &quot;الحجم الكبير&quot;</h3>
                <p>تطوير <strong>قواعد العرض</strong> المرافقة. تحويل مشاكل التخزين إلى فرص للعرض.</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>04</div>
              <div className={styles.actionContent}>
                <h3>توطين سلسلة التوريد والتقريب</h3>
                <p>البحث عن شركاء في المكسيك أو البر الأمريكي لتقصير نصف قطر سلسلة التوريد.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الخاتمة */}
      <section className={styles.conclusion}>
        <div className={styles.container}>
          <div className={`${styles.conclusionContent} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.conclusionQuote}>
              <div className={styles.quoteMarkTop}>&quot;</div>
              <p className={styles.quoteText}>
                منافسة الجمال المستقبلية لم تعد مجرد تركيبة،
                <br />
                بل <strong>من يمكنه احتلال موقع كائن الدعم العاطفي في جيوب المستهلكين</strong>.
                <br />
                <br />
                من خلال التحول إلى IP نمنحها الروح، من خلال تحويلها إلى ألعاب نمنحها المرح،
                <br />
                من خلال المواد الثقيلة نمنحها الجوهر،
                <br />
                لدينا فرصة لتعريف معايير الجمال الفاخر للعقد القادم.
                <br />
                <br />
                <span className={styles.quoteHighlight}>2025 هي اللحظة الحاسمة لهذه المعركة.</span>
              </p>
              <div className={styles.quoteMarkBottom}>&quot;</div>
            </div>

            <div className={styles.conclusionMeta}>
              <div className={styles.metaDivider}></div>
              <div className={styles.metaText}>YECO Studio · رؤية استراتيجية من منظور سلسلة التوريد العالمية</div>
              <div className={styles.metaDivider}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportUSBeautyIPficationAR;
