'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

// Image base path
const IMG_BASE = '/assets/reports/2025-10-middleeast';

const Report2025MiddleEastEN = () => {
  const fadeRefs = useRef<HTMLElement[]>([]);

  // Scroll animation
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
    <div className={styles.reportWrapper}>
      {/* Arabic style decorative pattern background */}
      <div className={styles.islamicPattern}></div>

      {/* Cover */}
      <section
        className={styles.coverPage}
        style={{
          '--cover-bg-image': `url('${IMG_BASE}/01主视觉.png')`
        } as React.CSSProperties}
      >
        <div className={styles.coverContent}>
          <div className={styles.coverOrnamentTop}></div>
          <div className={styles.coverLogo}>YECO</div>
          <div className={styles.coverTitle}>Perfume Industry Trend Monthly</div>
          <div className={styles.coverSubtitle}>Decoding the Soul of Perfume Consumers</div>
          <div className={styles.coverSubtitleEn}>Decoding the Soul of Perfume Consumers</div>

          <div className={styles.coverIssue}>
            <span className={styles.issueNumber}>Issue 01</span>
            <span className={styles.issueDivider}>|</span>
            <span>October 2025</span>
            <span className={styles.issueDivider}>|</span>
            <span>Middle East Edition</span>
          </div>
          <div className={styles.coverOrnamentBottom}></div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className={styles.tableOfContents}>
        <div className={styles.container}>
          <h2 className={styles.tocTitle}>Contents</h2>
          <div className={styles.tocGrid}>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>01</div>
              <div className={styles.tocContent}>
                <h3>Executive Summary</h3>
                <p>Perfume as a "Totemic Object" - Market Transformation</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>02</div>
              <div className={styles.tocContent}>
                <h3>Design Aesthetics Analysis</h3>
                <p>Desired Forms & Aesthetic Battleground</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>03</div>
              <div className={styles.tocContent}>
                <h3>Brand Case Studies</h3>
                <p>Praise, Contradictions & "Failures"</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>04</div>
              <div className={styles.tocContent}>
                <h3>Narrative Trends</h3>
                <p>From "Brand Stories" to "Personal Vibes"</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>05</div>
              <div className={styles.tocContent}>
                <h3>User Dynamics</h3>
                <p>Core Needs & Unmet Expectations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className={styles.executiveSummary}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <div className={styles.sectionLine}></div>
          </div>

          {/* Core Insight Image */}
          <div className={`${styles.featureBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.featureImageLarge}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/02核心洞察配图1网图.png`}
                  alt="Core Insight"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Perfume as a "Totemic Object"</h3>
              <p className={styles.featureText}>
                Based on in-depth qualitative analysis of Reddit perfume communities, this report reveals a core market transformation:
                <span className={styles.highlight}>The perfume bottle is evolving from a mere "container" into a "totemic object"</span>.
                Today&apos;s consumers are purchasing not just an olfactory experience, but an aesthetic expression, a narrative tool, and an identity badge.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className={`${styles.pillarsSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>Three Core Pillars</h3>

            <div className={styles.pillarRow}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/03设计美学.png`}
                    alt="Design Aesthetics"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>01</div>
                <h4>Design Aesthetics</h4>
                <p>Bottle design has become the brand&apos;s first <span className={styles.highlight}>"gatekeeper"</span>. Consumers have a highly consistent consensus on "cheapness" - for example, the widespread mockery of Carolina Herrera Good Girl&apos;s "high heel" shape. Meanwhile, they desperately desire "artwork-level" design, praising Dries Van Noten or Argos bottles as "museum pieces".</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>85%</span>
                  <span className={styles.statLabel}>of consumers say bottle design influences purchase decisions</span>
                </div>
              </div>
            </div>

            <div className={styles.pillarRowReverse}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/04.png`}
                    alt="Narrative Trends"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>02</div>
                <h4>Narrative Trends</h4>
                <p>The market is undergoing a profound transformation from <span className={styles.highlight}>"brand-told stories"</span> to <span className={styles.highlight}>"consumer-sought vibes"</span>. Consumers no longer passively accept marketing messages, but actively ask: "How can I smell like an &apos;old book library&apos;, &apos;forest witch&apos; or &apos;petrichor&apos;?"</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>72%</span>
                  <span className={styles.statLabel}>of consumers seek specific "vibes" rather than just fragrance notes</span>
                </div>
              </div>
            </div>

            <div className={styles.pillarRow}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/05.png`}
                    alt="User Dynamics"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>03</div>
                <h4>User Dynamics</h4>
                <p>Aesthetics and narrative are directly driving (or hindering) purchase behavior. Analysis reveals a powerful <span className={styles.highlight}>"aesthetic veto"</span> - consumers refuse to try or completely ignore certain luxury brands like Byredo and Nishane because their bottle design is "boring".</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>68%</span>
                  <span className={styles.statLabel}>of consumers experience "love the scent, hate the bottle" conflict</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className={`${styles.keyStats} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>7</div>
              <div className={styles.statLabel}>&quot;Seven Deadly Sins&quot; of Design</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>4</div>
              <div className={styles.statLabel}>Aesthetic &quot;Holy Grail&quot; Standards</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>3</div>
              <div className={styles.statLabel}>High-Frequency &quot;Vibe&quot; Demands</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>$250</div>
              <div className={styles.statLabel}>Premium Brand QC Expectation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Aesthetics Analysis */}
      <section className={styles.designAnalysis}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>Bottle Aesthetics Analysis</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>Desired Forms & Aesthetic Battleground</p>
          </div>

          {/* Seven Sins */}
          <div className={`${styles.analysisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.analysisHeader}>
              <h3>The &quot;Seven Deadly Sins&quot; of Design</h3>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeNegative}`}>Consumer Rejection</span>
            </div>

            <div className={styles.twoColumnLayout}>
              <div className={styles.columnImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/06.png`}
                    alt="Cheap Design Examples"
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
                      <h4>Imitating Non-Perfume Objects</h4>
                      <p>Carolina Herrera Good Girl&apos;s "high heel" shape is criticized as "weird", "ridiculous", creating an "embarrassing 50 Shades vibe". Marc Jacobs Decadence&apos;s "handbag" design is similarly called "too tacky".</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>02</div>
                    <div className={styles.sinContent}>
                      <h4>Infantilization & Cartoonification</h4>
                      <p>Paco Rabanne Phantom&apos;s "robot" bottle and Lattafa Yara&apos;s bright pink are described as "childish", "like a children&apos;s toy", even "makes me think of raw pork chops".</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>03</div>
                    <div className={styles.sinContent}>
                      <h4>Excessive &quot;Bling&quot;</h4>
                      <p>Paco Rabanne One Million&apos;s "gold bar" shape, Roja Dove&apos;s "rhinestones" on caps, and Bond No.9 are widely considered "ugly", "too flashy and tacky".</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>04</div>
                    <div className={styles.sinContent}>
                      <h4>Cheap Material Quality</h4>
                      <p>Gucci Rush&apos;s "red plastic block" is vividly compared to "a damn Lego brick". In the highly sensory category of perfume, tactile "plasticky feel" is an unforgivable "original sin".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Holy Grail */}
          <div className={`${styles.analysisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.analysisHeader}>
              <h3>The &quot;Holy Grail&quot; of Design</h3>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgePositive}`}>Consumer Admiration</span>
            </div>

            <div className={styles.grailGrid}>
              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/07神话.png`}
                      alt="Art Concept"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>Art & Mythological Concepts</h4>
                  <p>Argos brand&apos;s bottle artwork featuring "The Birth of Venus" and "The Fall of Phaeton" is described as "truly stunning".</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/08雕塑感与独特性.png`}
                      alt="Sculptural Form"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>Sculptural Quality & Uniqueness</h4>
                  <p>Dries Van Noten&apos;s bottle is described by users as "when I first saw the photo, I thought it was a museum exhibit".</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/09经典.png`}
                      alt="Classic Timeless"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>Classic & Timeless</h4>
                  <p>Guerlain&apos;s Shalimar bottle is described as "not only beautiful but so iconic". The historic "Bee Bottle" is also seen as a timeless classic.</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/10现代极简.png`}
                      alt="Modern Totem"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>Modern Minimalist &quot;Totem&quot;</h4>
                  <p>Tom Ford Private Blend&apos;s "chess piece" style bottle, though "plain and simple", is considered "iconic".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Case Studies */}
      <section className={styles.caseStudies}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>Brand Case Studies</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>Praise, Contradictions & "Failures"</p>
          </div>

          {/* Success Case: Replica */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Maison Margiela Replica</h3>
                <span className={styles.caseSubtitle}>Successful "Vibe Minimalism"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgePositive}`}>Success Case</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/11.png`}
                      alt="Replica Product"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.caseDetailImages}>
                  <div className={`${styles.imagePlaceholder} ${styles.small}`}>
                    <Image
                      src={`${IMG_BASE}/12.png`}
                      alt="Fabric Label Detail"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={`${styles.imagePlaceholder} ${styles.small}`}>
                    <Image
                      src={`${IMG_BASE}/13.png`}
                      alt="Bottle Detail"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.caseSection}>
                  <h4>Design Element Decoding</h4>
                  <ul className={styles.elegantList}>
                    <li><strong>Form:</strong> "Apothecary bottle" shape - with vintage, professional medical or alchemical connotations</li>
                    <li><strong>Label:</strong> "Fabric label" - visually and tactilely distinct from industry standards, consumers call it "very comforting"</li>
                    <li><strong>Typography:</strong> "Typewriter font" - reinforces vintage and narrative attributes</li>
                  </ul>
                </div>

                <div className={styles.caseSection}>
                  <h4>Consumer Perception</h4>
                  <p>This "apothecary bottle + fabric label + typewriter font" design combination successfully evokes "nostalgia". Consumers associate it with "travelers", "old trains", "leather journals and fountain pens". One user precisely summarized: this bottle feels "just like a journal entry".</p>
                </div>

                <blockquote className={styles.caseQuote}>
                  Replica&apos;s success lies in its "multi-sensory" minimalism. The brand not only subtracts visually but adds tactilely and intellectually, creating a "warm" minimalism.
                </blockquote>
              </div>
            </div>
          </div>

          {/* Failure Case: Byredo */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Byredo & Nishane</h3>
                <span className={styles.caseSubtitle}>"Boring Minimalism" Hit by "Aesthetic Veto"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeNegative}`}>Failure Case</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/14.png`}
                      alt="Byredo Product"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.caseSection}>
                  <h4>Consumer Reviews</h4>
                  <ul className={`${styles.elegantList} ${styles.elegantListNegative}`}>
                    <li>Bottles are described as <strong>"boring", "cold, barren, unwelcoming"</strong></li>
                    <li>A seasoned consumer with 120 perfumes admitted to <strong>"completely ignoring Byredo"</strong> because "the bottle didn&apos;t make me think the perfume inside would stimulate my senses"</li>
                    <li>Byredo bottles "can be found identical generic bottles on Amazon", directly destroying its uniqueness as a luxury brand</li>
                  </ul>
                </div>

                <blockquote className={`${styles.caseQuote} ${styles.caseQuoteNegative}`}>
                  In a visually saturated market, "boring" may be more fatal than "ugly". "Boring" leads to complete consumer disregard - design must have memorability.
                </blockquote>
              </div>
            </div>
          </div>

          {/* QC Crisis: Xerjoff */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Xerjoff</h3>
                <span className={styles.caseSubtitle}>Premium Positioning&apos;s "QC Paradox"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeWarning}`}>QC Crisis</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/15.png`}
                      alt="Xerjoff Velvet Series"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.caseDetailImages}>
                  <div className={`${styles.imagePlaceholder} ${styles.small}`}>
                    <Image
                      src={`${IMG_BASE}/16.jpg`}
                      alt="Peeling Issue"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.caseSection}>
                  <h4>Overwhelming QC Failure</h4>
                  <ul className={`${styles.elegantList} ${styles.elegantListNegative}`}>
                    <li>Velvet-coated bottles experiencing "peeling", "becoming sticky", "collecting dust"</li>
                    <li>Root cause: Perfume (alcohol) leakage "dissolves the glue"</li>
                    <li>Brand treating issues as "user error" and "no refunds" infuriates consumers</li>
                    <li>One user sharply cried out: <strong>"Stop coating things!!!"</strong></li>
                  </ul>
                </div>

                <div className={styles.warningBox}>
                  <div className={styles.warningIcon}>⚠</div>
                  <div className={styles.warningContent}>
                    <h5>QC Warning</h5>
                    <p>Consumers pay <strong>$250</strong> premium prices; when bottles physically "self-destruct", consumers feel not just "disappointment" but "betrayal". For premium brands, any physical defect is unacceptable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dupe Case: Lattafa */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Lattafa</h3>
                <span className={styles.caseSubtitle}>The "Packaging Ceiling" for Dupe Brands</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeWarning}`}>Mixed Reviews</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseContentFullWidth}>
                <div className={styles.splitVerdict}>
                  <div className={`${styles.verdictColumn} ${styles.successColumn}`}>
                    <h4>Praise (Fragrance)</h4>
                    <div className={styles.imagePlaceholder}>
                      <Image
                        src={`${IMG_BASE}/17 (2).png`}
                        alt="Lattafa Product Line"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p>Consumers praise its "insane quality" and extremely low prices (5 bottles of 100mL for €100), even calling it "GOATED" (greatest of all time).</p>
                  </div>

                  <div className={`${styles.verdictColumn} ${styles.failureColumn}`}>
                    <h4>Failure (Packaging)</h4>
                    <div className={styles.imagePlaceholder}>
                      <Image
                        src={`${IMG_BASE}/18 (2).png`}
                        alt="Packaging Detail"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <ul className={styles.compactList}>
                      <li>Packaging criticized as "cheap", "tacky", "childish"</li>
                      <li>Yara&apos;s pink bottle described as "raw pork chop"</li>
                      <li>Bad "sprayers" are a frequent complaint</li>
                    </ul>
                  </div>
                </div>

                <blockquote className={styles.caseQuote}>
                  Packaging is the "class divide" that dupe brands cannot cross. If Lattafa invested in more mature, higher-quality design, it could fundamentally disrupt the designer brand market.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Trends */}
      <section className={styles.narrativeTrends}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>Narrative Trends</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>From "Brand Stories" to "Personal Vibes"</p>
          </div>

          {/* Core Transformation */}
          <div className={`${styles.trendIntro} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.trendVisual}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/19.png`}
                  alt="Narrative Shift Concept"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.trendContent}>
              <h3>Core Transformation</h3>
              <p className={styles.largeText}>
                Consumer questions are shifting from <span className={styles.highlight}>"I want a perfume with X notes"</span> to
                <span className={styles.highlight}>"I want to smell like [some abstract concept/scene]"</span>.
              </p>
              <p>
                Perfume is no longer an accessory but a role-playing tool—consumers seek "olfactory props" that serve as their personal identity and emotional state.
              </p>
            </div>
          </div>

          {/* Three Vibe Demands */}
          <div className={`${styles.vibeShowcase} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>Three High-Frequency "Vibe" Demands</h3>

            <div className={styles.vibeCard}>
              <div className={styles.vibeHeader}>
                <div className={styles.vibeNumber}>01</div>
                <h4>Library/Old Books</h4>
                <span className={styles.vibeTag}>Intellect & Nostalgia</span>
              </div>
              <div className={styles.vibeBody}>
                <div className={styles.vibeImageGallery}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/20.png`}
                      alt="Library Vibe"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.vibeDetails}>
                  <div className={styles.vibeKeywords}>
                    <span className={styles.keyword}>Parchment</span>
                    <span className={styles.keyword}>Ink</span>
                    <span className={styles.keyword}>Old Paper</span>
                    <span className={styles.keyword}>Leather Binding</span>
                    <span className={styles.keyword}>Pencil Shavings</span>
                  </div>
                  <div className={styles.vibeEmotions}>
                    <strong>Driving Emotions:</strong> Intellect, Nostalgia, Quietude, Comfort
                  </div>
                  <div className={styles.vibeBrands}>
                    <strong>Recommended Brands:</strong> Alkemia, Nui Cobalt, Commodity, Replica
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.vibeCard}>
              <div className={styles.vibeHeader}>
                <div className={styles.vibeNumber}>02</div>
                <h4>Forest Witch/Gothic</h4>
                <span className={styles.vibeTag}>Mystery & Nature</span>
              </div>
              <div className={styles.vibeBody}>
                <div className={styles.vibeImageGallery}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/21.png`}
                      alt="Forest Vibe"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.vibeDetails}>
                  <div className={styles.vibeKeywords}>
                    <span className={styles.keyword}>Damp Forest</span>
                    <span className={styles.keyword}>Incense</span>
                    <span className={styles.keyword}>Darkness</span>
                    <span className={styles.keyword}>Earth</span>
                    <span className={styles.keyword}>Black Rose</span>
                  </div>
                  <div className={styles.vibeEmotions}>
                    <strong>Driving Emotions:</strong> Power, Mystery, Individuality, Nature Connection
                  </div>
                  <div className={styles.vibeBrands}>
                    <strong>Recommended Brands:</strong> Ormonde Jayne, BPAL, Zoologist, Anna Sui
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.vibeCard}>
              <div className={styles.vibeHeader}>
                <div className={styles.vibeNumber}>03</div>
                <h4>Petrichor</h4>
                <span className={styles.vibeTag}>Environment & Experience</span>
              </div>
              <div className={styles.vibeBody}>
                <div className={styles.vibeImageGallery}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/22.png`}
                      alt="Rain Vibe"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.vibeDetails}>
                  <div className={styles.vibeKeywords}>
                    <span className={styles.keyword}>Wet Earth</span>
                    <span className={styles.keyword}>Wet Concrete</span>
                    <span className={styles.keyword}>Ozone</span>
                    <span className={styles.keyword}>Green Plants</span>
                  </div>
                  <div className={styles.vibeEmotions}>
                    <strong>Driving Emotions:</strong> Purification, Tranquility, Nostalgia, Nature
                  </div>
                  <div className={styles.vibeBrands}>
                    <strong>Recommended Brands:</strong> Demeter, Solstice Scents, Heretic, Zoologist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand-Driven Narrative */}
          <div className={`${styles.brandStorytelling} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>Brand-Driven Narrative: Building "Olfactory Universes"</h3>
            <p className={styles.introText}>Consumers show high engagement with brands that provide complete, conceptual "universes". Buying these perfumes is like "buying a piece of a story".</p>

            <div className={styles.storytellingExamples}>
              <div className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/23.png`}
                      alt="Penhaligon's Portraits"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <h4>Penhaligon&apos;s Portraits</h4>
                  <p>Creates Victorian fictional "characters" for each perfume, like "The Bewitching Yasmine" and "The Uncompromising William Penhaligon"</p>
                </div>
              </div>

              <div className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/24.png`}
                      alt="Jusbox Music Theme"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <h4>Jusbox</h4>
                  <p>Builds a universe around "music", with caps designed as "mini vinyl records", each perfume inspired by music genres, specific bands or eras</p>
                </div>
              </div>

              <div className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/25.png`}
                      alt="Masque Milano"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <h4>Masque Milano</h4>
                  <p>Uses the "Opera of Life" concept, dividing perfumes into "four acts, four scenes each"</p>
                </div>
              </div>

              <div className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/26.png`}
                      alt="Imaginary Authors"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <h4>Imaginary Authors</h4>
                  <p>Builds narrative around non-existent authors and books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Dynamics */}
      <section className={styles.userDynamics}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>Core User Dynamics</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>Unmet Needs & Market Opportunities</p>
          </div>

          {/* Love-Hate Conflict */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>The "Love the Scent, Hate the Bottle" Conflict</h3>
              <div className={styles.dynamicStat}>68% of consumers experience this conflict</div>
            </div>

            <div className={styles.conflictShowcase}>
              <div className={styles.conflictVisual}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/27.png`}
                    alt="Conflict Concept"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className={styles.conflictContent}>
                <div className={styles.conflictBrands}>
                  <h4>High-Frequency "Conflict" Brands</h4>
                  <ul className={styles.conflictList}>
                    <li><strong>Parfums de Marly (Delina)</strong> - "Don&apos;t like the pink girly look, but damn it smells amazing"</li>
                    <li><strong>Paco Rabanne</strong> - "The Million bottle is super tacky, but I love the Lucky fragrance"</li>
                    <li><strong>Bond No. 9</strong> - "Beautiful scent, ugly bottle"</li>
                    <li><strong>Glossier You</strong> - "I love the scent, but the bottle reminds me of nail polish remover"</li>
                  </ul>
                </div>

                <div className={styles.copingMechanisms}>
                  <h4>Consumer Coping Behaviors</h4>
                  <div className={styles.copingGrid}>
                    <div className={styles.copingItem}>
                      <div className={styles.copingIcon}>🙈</div>
                      <h5>Hiding</h5>
                      <p>"I keep the bottle in its box so I don&apos;t have to look at it"</p>
                    </div>
                    <div className={styles.copingItem}>
                      <div className={styles.copingIcon}>⬇️</div>
                      <h5>Downsizing</h5>
                      <p>Opting for travel sizes or samples to avoid "ugly" full-size bottles</p>
                    </div>
                    <div className={styles.copingItem}>
                      <div className={styles.copingIcon}>🔄</div>
                      <h5>Rebottling</h5>
                      <p>Decanting perfume into "display bottles", even adding dye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className={styles.insightQuote}>
              This "love-hate" state is a corrosive agent for brand loyalty. Every time a consumer feels embarrassed by an "ugly bottle" or needs to "hide it", they&apos;re eroding brand loyalty and creating opportunities for competitors.
            </blockquote>
          </div>

          {/* Aesthetic Veto */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>Aesthetic Veto: The Bottle as "Gatekeeper"</h3>
            </div>

            <div className={styles.vetoShowcase}>
              <div className={styles.vetoQuotes}>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteMark}>&quot;</div>
                  <p>Bottle aesthetics are make-or-break for me</p>
                </div>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteMark}>&quot;</div>
                  <p>If I don&apos;t like the bottle, I really don&apos;t care about the juice inside</p>
                </div>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteMark}>&quot;</div>
                  <p>Sometimes I won&apos;t even smell a perfume purely based on the brand (bottle)</p>
                </div>
              </div>

              <div className={styles.vetoImpact}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/28.png`}
                    alt="Aesthetic Veto Diagram"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Unmet Pragmatism */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>Unmet Pragmatism</h3>
              <p className={styles.headerSubtitle}>"Invisible Needs" Beyond Aesthetics</p>
            </div>

            <div className={styles.practicalNeeds}>
              <div className={styles.needItem}>
                <div className={styles.needIcon}>👁️</div>
                <h4>Visibility</h4>
                <p>General frustration with opaque bottles because <strong>"I want to see how much I have left"</strong></p>
              </div>

              <div className={styles.needItem}>
                <div className={styles.needIcon}>⚖️</div>
                <h4>Stability & Ergonomics</h4>
                <p>Strong dissatisfaction with Bvlgari Omnia <strong>("tips over easily")</strong> and Bvlgari Aqua <strong>("can only lie flat")</strong></p>
              </div>

              <div className={styles.needItem}>
                <div className={styles.needIcon}>📦</div>
                <h4>Storage Efficiency</h4>
                <p>Consumers explicitly keep perfumes in boxes because <strong>"easier to stack and store"</strong></p>
              </div>

              <div className={styles.needItem}>
                <div className={styles.needIcon}>✈️</div>
                <h4>Travel-Friendly</h4>
                <p>Complaints about bottles being "too heavy" or "too fancy" to travel with, actively seeking <strong>"leak-proof"</strong> travel atomizers</p>
              </div>
            </div>
          </div>

          {/* Emerging Opportunity */}
          <div className={`${styles.opportunityBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.opportunityHeader}>
              <h3>Emerging Opportunity: "The Bottle&apos;s Afterlife"</h3>
              <span className={styles.opportunityBadge}>Sustainability & Versatility</span>
            </div>

            <div className={styles.opportunityContent}>
              <div className={styles.opportunityImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/29.png`}
                    alt="Xinu Vase Concept"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div>
                <div className={styles.caseHighlight}>
                  <h4>Xinu Brand Case</h4>
                  <p>A gorgeous hourglass-shaped bottle with a wooden top that transforms into a bud vase when the perfume is finished</p>
                  <div className={styles.consumerReaction}>
                    <strong>Consumer Reaction:</strong> "How cool is this??" and plans to "use it as decor" after finishing
                  </div>
                </div>

                <blockquote className={`${styles.insightQuote} ${styles.insightQuotePositive}`}>
                  Xinu&apos;s "vase" concept is emotional and aesthetic. It transforms "used up" waste (empty bottle) into a "new" valuable object (vase), indefinitely extending brand presence in consumers&apos; lives. This provides YECO clients with a powerful strategic direction: <strong>Design with "second life" in mind</strong>.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={styles.conclusion}>
        <div className={styles.container}>
          <div className={`${styles.conclusionContent} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.conclusionOrnament}></div>
            <blockquote className={styles.finalQuote}>
              Future market winners will be brands that can perfectly unify their physical product (bottle), olfactory product (perfume), and emotional product (narrative).
            </blockquote>
            <div className={styles.conclusionOrnament}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Report2025MiddleEastEN;
