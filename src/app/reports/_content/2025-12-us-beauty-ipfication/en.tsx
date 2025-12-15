'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

// Image base path
const IMG_BASE = '/assets/reports/2025-12-us-beauty-ipfication';

const ReportUSBeautyIPficationEN = () => {
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
      {/* Cover - Visual metaphor of "Container" to "Totem" */}
      <section className={styles.coverPage}>
        <div className={styles.coverBackdrop}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={`${IMG_BASE}/banner.jpg`}
              alt="Background Totem"
              fill
              style={{ objectFit: 'cover', opacity: 0.15 }}
              priority
            />
          </div>
        </div>

        <div className={styles.coverContent}>
          <div className={styles.coverTag}>Future Intelligence from Global Supply Chain Perspective</div>
          <div className={styles.coverPeriod}>2024—2026</div>

          <h1 className={styles.coverTitle}>
            <span className={styles.titleMainLine}>US Beauty & Fragrance Market</span>
            <span className={styles.titleHighlight}>&quot;IP-fication&quot; & &quot;Toy-fication&quot;</span>
            <span className={styles.titleSubLine}>Strategic Deep Dive Report</span>
          </h1>

          <div className={styles.coverMeta}>
            <span className={styles.metaDivider}>━━━</span>
            <span>Paradigm Shift: From Container to Totem</span>
            <span className={styles.metaDivider}>━━━</span>
          </div>

          <div className={styles.coverDate}>
            <span>2025.12</span>
            <span className={styles.dateDivider}>|</span>
            <span>YECO Studio</span>
          </div>
        </div>
      </section>

      {/* Core Thesis - Data-driven impactful entry */}
      <section className={styles.coreThesis}>
        <div className={styles.container}>
          <div className={`${styles.thesisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.thesisLabel}>Core Thesis</div>
            <h2 className={styles.thesisStatement}>
              Packaging is no longer an accessory container,
              <br />
              but the <span className={styles.thesisHighlight}>core carrier</span> of product value,
              <br />
              even transcending the contents themselves,
              <br />
              becoming a collectible <span className={styles.thesisHighlight}>&quot;Totem&quot;</span>
            </h2>
          </div>

          {/* Visual Formula */}
          <div className={`${styles.visualFormula} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.formulaItem}>
              <div className={styles.formulaTerm}>Visual Playfulness</div>
              <div className={styles.formulaPlus}>+</div>
            </div>
            <div className={styles.formulaItem}>
              <div className={styles.formulaTerm}>Tactile Heft</div>
              <div className={styles.formulaEquals}>=</div>
            </div>
            <div className={styles.formulaResult}>
              <div className={styles.resultLabel}>Modern Luxury</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1: Rise of Kidult Economy */}
      <section className={styles.chapterOne}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 01</span>
            <h2 className={styles.chapterTitle}>Rise of Kidult Economy</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>From Lipstick Effect to Toy Effect</p>
          </div>

          {/* Key Data Visualization */}
          <div className={`${styles.dataShowcase} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dataGrid}>
              <div className={styles.dataCard}>
                <div className={styles.dataValue}>$1.5<span className={styles.dataUnit}>B</span></div>
                <div className={styles.dataLabel}>2024 Q1 Adult Toy Sales</div>
                <div className={styles.dataContext}>First time exceeding preschool children</div>
              </div>

              <div className={styles.dataCard}>
                <div className={styles.dataValue}>28.5<span className={styles.dataUnit}>%</span></div>
                <div className={styles.dataLabel}>Adults in Toy Purchases</div>
                <div className={styles.dataContext}>Contributing 60% of dollar growth</div>
              </div>

              <div className={styles.dataCard}>
                <div className={styles.dataValue}>$114.4<span className={styles.dataUnit}>B</span></div>
                <div className={styles.dataLabel}>2024 Global Toy Market</div>
                <div className={styles.dataContext}>Expected $203.1B by 2034</div>
              </div>
            </div>
          </div>

          {/* Effect Evolution - From Lipstick to Toy */}
          <div className={`${styles.effectEvolution} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.evolutionVisual}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/img0.jpg`}
                  alt="From Lipstick Effect to Toy Effect"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            <div className={styles.evolutionContent}>
              <h3>From Color Enhancement to Emotional Healing</h3>

              <div className={styles.evolutionComparison}>
                <div className={styles.comparisonColumn}>
                  <div className={styles.comparisonTitle}>Traditional Lipstick Effect</div>
                  <ul className={styles.comparisonList}>
                    <li>Look better</li>
                    <li>Functional consumption</li>
                    <li>Packaging as container</li>
                  </ul>
                </div>

                <div className={styles.comparisonArrow}>→</div>

                <div className={styles.comparisonColumn}>
                  <div className={styles.comparisonTitle}>New Toy Effect</div>
                  <ul className={styles.comparisonList}>
                    <li>Feel safer</li>
                    <li>Healing consumption</li>
                    <li>Packaging as toy</li>
                  </ul>
                </div>
              </div>

              <blockquote className={styles.insightQuote}>
                Consumers no longer merely seek color or fragrance, but are looking for an &quot;Emotional Support Object&quot; (ESO) that provides <strong>tactile comfort, emotional value, and social currency</strong>
              </blockquote>
            </div>
          </div>

          {/* ESO Concept */}
          <div className={`${styles.esoSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.esoHeader}>
              <h3>The Sociological Landscape of ESO</h3>
            </div>

            <div className={styles.esoExamples}>
              <div className={styles.esoCard}>
                <div className={styles.esoImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img1.jpg`}
                      alt="ESO Case: Labubu"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.esoLabel}>Portable Plush Toys</div>
              </div>

              <div className={styles.esoCard}>
                <div className={styles.esoImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img2.jpg`}
                      alt="ESO Case: Simihaze Beauty"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.esoLabel}>Keychain Lipstick</div>
              </div>

              <div className={styles.esoCard}>
                <div className={styles.esoImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img3.jpg`}
                      alt="ESO Case: Desk Fidgets"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.esoLabel}>Desk Stress Relievers</div>
              </div>
            </div>

            <div className={styles.esoInsight}>
              <p>Simihaze Beauty Success Case: Their resin-textured, building-block-shaped lipstick is not just cosmetics, but designed as a fashion accessory that can hang on keychains, becoming a personal &quot;talisman&quot; for consumers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Four Quadrants of Toy-fication */}
      <section className={styles.chapterTwo}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 02</span>
            <h2 className={styles.chapterTitle}>Evolution of Packaging Toy-fication</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>A Broad Spectrum from Figurative to Abstract</p>
          </div>

          {/* Four Quadrant Map */}
          <div className={`${styles.quadrantMap} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>01</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img4.jpg`}
                    alt="Figurative Toy-fication"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>Figurative Toy-fication</h3>
                <p className={styles.quadrantDesc}>Direct imitation of toys or cartoon characters</p>
                <div className={styles.quadrantCase}>
                  <strong>Typical Cases:</strong> Moschino Toy 2 Teddy Bear, Flower Knows Teddy Bear Series
                </div>
                <div className={styles.quadrantRisk}>
                  <div className={styles.riskIcon}>⚠</div>
                  <span>Risk: Cheapness trap</span>
                </div>
                <p className={styles.quadrantNote}>Need to add weight and cold-touch materials to avoid &quot;plastic feel&quot;</p>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>02</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img5.jpg`}
                    alt="Sculptural Artification"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>Sculptural Artification</h3>
                <p className={styles.quadrantDesc}>Designed as abstract art pieces or modern sculptures</p>
                <div className={styles.quadrantCase}>
                  <strong>Typical Cases:</strong> KKW Body Fragrance Bottle, Simihaze Resin Block Packaging
                </div>
                <div className={styles.quadrantStrength}>
                  <div className={styles.strengthIcon}>●</div>
                  <span>Strength: Museum exhibit level</span>
                </div>
                <p className={styles.quadrantNote}>Viewed by Gen Z as &quot;cool&quot;, &quot;avant-garde&quot; and &quot;premium&quot;, aligned with quiet luxury trends</p>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>03</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img6.jpg`}
                    alt="Fantasy Rococo"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>Fantasy Rococo</h3>
                <p className={styles.quadrantDesc}>Elaborate details, embossed craftsmanship and fairytale narratives</p>
                <div className={styles.quadrantCase}>
                  <strong>Typical Cases:</strong> Flower Knows Strawberry Rococo, Florasis
                </div>
                <div className={styles.quadrantRisk}>
                  <div className={styles.riskIcon}>⚠</div>
                  <span>Risk: Fragility</span>
                </div>
                <p className={styles.quadrantNote}>Complex embossing and hinges are extremely fragile in logistics, need improved material toughness</p>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>04</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img7.jpg`}
                    alt="Functional Utility"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>Functional Utility</h3>
                <p className={styles.quadrantDesc}>Outdoor gorpcore meets industrial design</p>
                <div className={styles.quadrantCase}>
                  <strong>Typical Cases:</strong> Off-White Paperwork Series
                </div>
                <div className={styles.quadrantStrength}>
                  <div className={styles.strengthIcon}>●</div>
                  <span>Strength: Wearability</span>
                </div>
                <p className={styles.quadrantNote}>Carabiner design allows products to hang on backpacks, increasing exposure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: IP Strategy */}
      <section className={styles.chapterThree}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 03</span>
            <h2 className={styles.chapterTitle}>IP-fication Strategy</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>From Licensing to Native Narratives</p>
          </div>

          {/* Licensed IP vs Native IP */}
          <div className={`${styles.ipStrategy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.strategyComparison}>
              <div className={styles.strategyColumn}>
                <div className={styles.strategyHeader}>
                  <h3>Licensed IP</h3>
                  <span className={styles.strategyBadge}>Shortcut to Nostalgia</span>
                </div>

                <div className={styles.strategyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img8.jpg`}
                      alt="Licensed IP Case"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className={styles.strategyContent}>
                  <h4>Traffic Magnet IPs</h4>
                  <ul className={styles.ipList}>
                    <li>Barbie</li>
                    <li>Transformers</li>
                    <li>Dungeons & Dragons</li>
                    <li>Care Bears</li>
                  </ul>

                  <div className={styles.strategyPros}>
                    <strong>Advantage:</strong> Quick market entry, built-in audience
                  </div>

                  <div className={styles.strategyCons}>
                    <strong>Risks:</strong>
                    <ul>
                      <li>High royalty fees</li>
                      <li>Strict design restrictions</li>
                      <li>Quality must match IP&apos;s sacred status</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.strategyDivider}></div>

              <div className={styles.strategyColumn}>
                <div className={styles.strategyHeader}>
                  <h3>Native IP</h3>
                  <span className={`${styles.strategyBadge} ${styles.strategyBadgeHighlight}`}>C-Beauty Inspiration</span>
                </div>

                <div className={styles.strategyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img9.jpg`}
                      alt="Native IP Case"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className={styles.strategyContent}>
                  <h4>Building Narrative Universes</h4>
                  <p className={styles.strategyExample}>
                    <strong>Flower Knows Case:</strong> Not selling eyeshadow, but selling fantasy stories of &quot;unicorns&quot;, &quot;little angels&quot; or &quot;swans&quot;
                  </p>

                  <div className={styles.strategyPros}>
                    <strong>Advantages:</strong>
                    <ul>
                      <li>IP assets fully retained within the brand</li>
                      <li>Each new product expands brand universe</li>
                      <li>Increases user stickiness and repeat purchases</li>
                    </ul>
                  </div>

                  <div className={styles.bestPractice}>
                    <strong>Best Practice:</strong> Develop your own &quot;totem&quot; or &quot;mascot&quot;, bring it to life through sculptural packaging, creating a collectible system similar to Bearbrick
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Materials Science Revolution */}
      <section className={styles.chapterFour}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 04</span>
            <h2 className={styles.chapterTitle}>Materials Science Revolution</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>Reconstructing the Physical Foundation of Premium Feel</p>
          </div>

          {/* Weight Rule */}
          <div className={`${styles.materialSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.sectionIntro}>
              <h3>The Weight Rule</h3>
              <p className={styles.materialPrinciple}>
                In consumer psychology, <strong>weight correlates with perceived value</strong>. For sculptural packaging, lightweight plastic is a fatal flaw.
              </p>
            </div>

            <div className={styles.materialGrid}>
              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img10.jpg`}
                      alt="Zamac Zinc Alloy"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>Zamac Zinc Alloy</h4>
                  <div className={styles.materialProps}>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Touch:</span>
                      <span>Metal cold touch</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Density:</span>
                      <span>High-density substantial heft</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Sound:</span>
                      <span>Crisp &quot;click&quot; sound (ASMR experience)</span>
                    </div>
                  </div>
                  <p className={styles.materialUse}>Best alternative to plastic caps, can be die-cast into complex sculptural shapes</p>
                </div>
              </div>

              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/img11.jpg`}
                      alt="Heavy Bio-Resin"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>Heavy Bio-Resin</h4>
                  <div className={styles.materialProps}>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Tech:</span>
                      <span>High-density mineral fillers added</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Density:</span>
                      <span>Approaching ceramic or metal</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Molding:</span>
                      <span>Maintains plastic molding freedom</span>
                    </div>
                  </div>
                  <p className={styles.materialUse}>Balances complex sculpting ability with ceramic-like heft</p>
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
                  <div className={styles.materialProps}>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Touch:</span>
                      <span>Ceramic-like warmth</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Sound:</span>
                      <span>Ceramic resonance</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>Sustainability:</span>
                      <span>Biodegradable</span>
                    </div>
                  </div>
                  <p className={styles.materialUse}>Ideal for creating &quot;pebble&quot;, &quot;totem pole&quot; and other organic forms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Paradox */}
          <div className={`${styles.sustainabilitySection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.sustainabilityHeader}>
              <h3>The Sustainability Paradox & Solutions</h3>
            </div>

            <div className={styles.sustainabilityContent}>
              <div className={styles.paradoxVisual}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/img13.jpg`}
                    alt="Forever Case Concept"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className={styles.solutionContent}>
                <div className={styles.problemStatement}>
                  <strong>Paradox:</strong> &quot;Toy-fication&quot; packaging often means more material consumption, conflicting with sustainability trends
                </div>

                <div className={styles.solution}>
                  <h4>Forever Case + Minimal Refill Cartridge</h4>
                  <p className={styles.solutionDesc}>Forever Case + Disposable Cartridge</p>

                  <ul className={styles.solutionSteps}>
                    <li>
                      <strong>Outer Shell:</strong> Defined as &quot;durable goods&quot; or even &quot;heirlooms&quot;, using durable materials like Zamac, heavy resin or Sulapac
                    </li>
                    <li>
                      <strong>Inner Core:</strong> Lightweight mono-material design for easy recycling
                    </li>
                    <li>
                      <strong>Consumer Education:</strong> Communicate &quot;buy once, collect forever&quot; philosophy, high packaging costs amortized over long-term brand loyalty
                    </li>
                  </ul>

                  <div className={styles.caseReference}>
                    <strong>Success Cases:</strong> Hermès and Dries Van Noten have validated this model&apos;s viability in premium markets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Strategic Timing */}
      <section className={styles.chapterFive}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 05</span>
            <h2 className={styles.chapterTitle}>Optimal Strategic Window</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>2024-2026 Strategic Roadmap</p>
          </div>

          {/* Timeline Visualization */}
          <div className={`${styles.timeline} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>2024 Q2-Q4</div>
              <div className={styles.timelinePhase}>Incubation & R&D</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineState}>
                  <strong>Market State:</strong> Toy market bottoming out, consumer desire for emotional value accumulating
                </div>
                <div className={styles.timelineActions}>
                  <strong>Strategic Actions:</strong>
                  <ul>
                    <li>Lock in high-density material suppliers (Sulapac, Washington Penn)</li>
                    <li>Mold development and drop tests to address C-Beauty fragility pain points</li>
                    <li>Build native IP storylines or negotiate major IP licensing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.timelineHighlight}`}>
              <div className={styles.timelinePeriod}>2025 Q1-Q3</div>
              <div className={styles.timelinePhase}>Explosion & Establishment</div>
              <div className={styles.timelineBadge}>Optimal Launch Window</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineState}>
                  <strong>Market State:</strong> Kidult economy fully mainstream, consumers experiencing &quot;minimalism fatigue&quot;, craving dopamine and maximalism return
                </div>
                <div className={styles.timelineOpportunity}>
                  <strong>Trigger Point:</strong> Post-Q1 2025 holiday period, consumers facing new year stress, desperately need &quot;dopamine beauty&quot; for mood boost
                </div>
                <div className={styles.timelineProduct}>
                  <strong>Product Strategy:</strong> Launch &quot;Totem-level&quot; hero products
                  <ul>
                    <li><strong>Form:</strong> &quot;Utility Cute&quot; combining Gorpcore and Coquette</li>
                    <li><strong>Example:</strong> Heavy metal teddy bear lip mud with carabiner, or faux-ceramic pebble compact</li>
                    <li><strong>Marketing:</strong> TikTok ASMR unboxing (magnetic sounds, icy touch, substantial heft)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>2026 Q1-Q4</div>
              <div className={styles.timelinePhase}>Iteration & Smartification</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineState}>
                  <strong>Market State:</strong> Sculptural packaging market becoming crowded, cheap imitators emerging
                </div>
                <div className={styles.timelineActions}>
                  <strong>Strategic Actions:</strong> Pivot to &quot;Smart Toys&quot;
                  <ul>
                    <li>Embed NFC chips to unlock digital collectibles or brand community</li>
                    <li>Swappable outer shell accessories, creating LEGO-like build systems</li>
                    <li>Connect physical and digital worlds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Three Maturity Pillars */}
          <div className={`${styles.maturityPillars} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.pillarsTitle}>Three Pillars Making 2025 the Optimal Moment</h3>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>01</div>
                <h4>Kidult Economy Stabilized</h4>
                <p>Now the primary growth engine for both beauty and toy industries, no longer a niche market</p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>02</div>
                <h4>C-Beauty Aesthetic Education Complete</h4>
                <p>Eastern supply chain aesthetics have completed consumer education in Western markets, high acceptance</p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>03</div>
                <h4>New Material Tech Mature</h4>
                <p>Heavy materials (bio-resin, Zamac) balancing &quot;toy playfulness&quot; with &quot;luxury feel&quot; have entered mass production maturity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: Strategic Recommendations */}
      <section className={styles.chapterSix}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 06</span>
            <h2 className={styles.chapterTitle}>Strategic Recommendations</h2>
            <div className={styles.chapterLine}></div>
          </div>

          <div className={`${styles.actionItems} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>01</div>
              <div className={styles.actionContent}>
                <h3>Redefine Physical Metrics of &quot;Premium&quot;</h3>
                <p>Immediately update procurement standards, listing <strong>Density</strong> as an acceptance metric equal to color and gloss. For sculptural shells, set minimum weight standards to ensure &quot;premium feel on first touch&quot;.</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>02</div>
              <div className={styles.actionContent}>
                <h3>Embrace &quot;Wearable&quot; Design</h3>
                <p>Mandate &quot;attachment points&quot; (Loop/Ring) in product design. Let beauty products leave the makeup bag, becoming bag charms, necklaces or waist accessories, increasing social exposure and meeting ESO carry-along psychological needs.</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>03</div>
              <div className={styles.actionContent}>
                <h3>Solve the &quot;Bulky Size&quot; Pain Point</h3>
                <p>Develop companion <strong>Display Docks</strong>. Transform storage problems into display opportunities, telling consumers: this isn&apos;t just lipstick, it&apos;s an art sculpture for your vanity.</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>04</div>
              <div className={styles.actionContent}>
                <h3>Supply Chain Localization & Nearshoring</h3>
                <p>Given shipping risks for sculptural packaging, consider finding partners with precision injection molding capabilities in Mexico or US mainland, shortening supply chain radius, reducing logistics damage, improving response speed to IP trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={styles.conclusion}>
        <div className={styles.container}>
          <div className={`${styles.conclusionContent} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.conclusionQuote}>
              <div className={styles.quoteMarkTop}>&quot;</div>
              <p className={styles.quoteText}>
                The future of beauty competition is no longer just about formula,
                <br />
                but <strong>who can occupy that emotional support object position in consumers&apos; pockets</strong>.
                <br />
                <br />
                Through IP-fication to give it soul, through toy-fication to give it playfulness,
                <br />
                through heavy materials to give it substance,
                <br />
                we have the opportunity to define luxury beauty standards for the next decade.
                <br />
                <br />
                <span className={styles.quoteHighlight}>2025 is the decisive moment of this battle.</span>
              </p>
              <div className={styles.quoteMarkBottom}>&quot;</div>
            </div>

            <div className={styles.conclusionMeta}>
              <div className={styles.metaDivider}></div>
              <div className={styles.metaText}>YECO Studio · Future Intelligence from Global Supply Chain Perspective</div>
              <div className={styles.metaDivider}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportUSBeautyIPficationEN;
