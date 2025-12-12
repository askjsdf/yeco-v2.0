'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

// 图片基础路径
const IMG_BASE = '/assets/reports/2025-12-us-beauty-ipfication';

const ReportUSBeautyIPfication = () => {
  const fadeRefs = useRef<HTMLElement[]>([]);

  // 滚动动画
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
      {/* 封面 - 从"容器"到"图腾"的视觉隐喻 */}
      <section className={styles.coverPage}>
        <div className={styles.coverBackdrop}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={`${IMG_BASE}/01-cover-backdrop.jpg`}
              alt="背景图腾"
              fill
              style={{ objectFit: 'cover', opacity: 0.15 }}
              priority
            />
          </div>
        </div>

        <div className={styles.coverContent}>
          <div className={styles.coverTag}>全球供应链视角的未来情报</div>
          <div className={styles.coverPeriod}>2024—2026</div>

          <h1 className={styles.coverTitle}>
            <span className={styles.titleMainLine}>美国美妆与香氛市场</span>
            <span className={styles.titleHighlight}>"IP化"与"包装玩具化"</span>
            <span className={styles.titleSubLine}>深度战略报告</span>
          </h1>

          <div className={styles.coverMeta}>
            <span className={styles.metaDivider}>━━━</span>
            <span>从容器到图腾的范式转移</span>
            <span className={styles.metaDivider}>━━━</span>
          </div>

          <div className={styles.coverDate}>
            <span>2025.12</span>
            <span className={styles.dateDivider}>|</span>
            <span>YECO Studio</span>
          </div>
        </div>
      </section>

      {/* 核心论点 - 数据驱动的震撼入场 */}
      <section className={styles.coreThesis}>
        <div className={styles.container}>
          <div className={`${styles.thesisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.thesisLabel}>核心论点</div>
            <h2 className={styles.thesisStatement}>
              包装不再是产品的附属容器,
              <br />
              而是产品价值的<span className={styles.thesisHighlight}>核心载体</span>,
              <br />
              甚至超越了内料本身,
              <br />
              成为了具有独立收藏价值的<span className={styles.thesisHighlight}>"图腾"</span>
            </h2>
          </div>

          {/* 视觉公式 */}
          <div className={`${styles.visualFormula} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.formulaItem}>
              <div className={styles.formulaTerm}>视觉趣味性</div>
              <div className={styles.formulaPlus}>+</div>
            </div>
            <div className={styles.formulaItem}>
              <div className={styles.formulaTerm}>触觉分量感</div>
              <div className={styles.formulaEquals}>=</div>
            </div>
            <div className={styles.formulaResult}>
              <div className={styles.resultLabel}>现代奢侈品</div>
            </div>
          </div>
        </div>
      </section>

      {/* 第一章: 大小孩经济崛起 */}
      <section className={styles.chapterOne}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 01</span>
            <h2 className={styles.chapterTitle}>大小孩经济的崛起</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>从口红效应到玩具效应的蜕变</p>
          </div>

          {/* 关键数据可视化 */}
          <div className={`${styles.dataShowcase} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dataGrid}>
              <div className={styles.dataCard}>
                <div className={styles.dataValue}>$15<span className={styles.dataUnit}>亿</span></div>
                <div className={styles.dataLabel}>2024 Q1成人玩具销售额</div>
                <div className={styles.dataContext}>历史首次超越学龄前儿童</div>
              </div>

              <div className={styles.dataCard}>
                <div className={styles.dataValue}>28.5<span className={styles.dataUnit}>%</span></div>
                <div className={styles.dataLabel}>成人占玩具购买人数</div>
                <div className={styles.dataContext}>却贡献60%的美元增长</div>
              </div>

              <div className={styles.dataCard}>
                <div className={styles.dataValue}>$1144<span className={styles.dataUnit}>亿</span></div>
                <div className={styles.dataLabel}>2024全球玩具市场规模</div>
                <div className={styles.dataContext}>预计2034年达$2031亿</div>
              </div>
            </div>
          </div>

          {/* 效应演变 - 从口红到玩具 */}
          <div className={`${styles.effectEvolution} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.evolutionVisual}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/02-lipstick-to-toy-effect.png`}
                  alt="从口红效应到玩具效应"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            <div className={styles.evolutionContent}>
              <h3>从色彩修饰到情绪疗愈</h3>

              <div className={styles.evolutionComparison}>
                <div className={styles.comparisonColumn}>
                  <div className={styles.comparisonTitle}>传统口红效应</div>
                  <ul className={styles.comparisonList}>
                    <li>看起来更好</li>
                    <li>功能性消费</li>
                    <li>包装是容器</li>
                  </ul>
                </div>

                <div className={styles.comparisonArrow}>→</div>

                <div className={styles.comparisonColumn}>
                  <div className={styles.comparisonTitle}>新玩具效应</div>
                  <ul className={styles.comparisonList}>
                    <li>感觉更安全</li>
                    <li>疗愈性消费</li>
                    <li>包装是玩具</li>
                  </ul>
                </div>
              </div>

              <blockquote className={styles.insightQuote}>
                消费者不再仅仅寻求色彩或香气,而是在寻找一种能够提供<strong>触觉慰藉、情绪价值和社交货币</strong>的"情感支持物"(ESO)
              </blockquote>
            </div>
          </div>

          {/* 情感支持物概念 */}
          <div className={`${styles.esoSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.esoHeader}>
              <h3>情感支持物(ESO)的社会学图景</h3>
            </div>

            <div className={styles.esoExamples}>
              <div className={styles.esoCard}>
                <div className={styles.esoImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/03-eso-example-labubu.jpg`}
                      alt="ESO案例:Labubu"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.esoLabel}>随身毛绒玩具</div>
              </div>

              <div className={styles.esoCard}>
                <div className={styles.esoImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/04-eso-example-simihaze.jpg`}
                      alt="ESO案例:Simihaze Beauty"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.esoLabel}>钥匙扣口红</div>
              </div>

              <div className={styles.esoCard}>
                <div className={styles.esoImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/05-eso-example-desk-toy.jpg`}
                      alt="ESO案例:解压摆件"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.esoLabel}>办公桌解压摆件</div>
              </div>
            </div>

            <div className={styles.esoInsight}>
              <p>Simihaze Beauty的成功案例:其树脂质感、积木造型的口红不仅是化妆品,更被设计成可以挂在钥匙扣上的时尚配饰,成为了消费者的贴身"护身符"。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 第二章: 包装玩具化的四大象限 */}
      <section className={styles.chapterTwo}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 02</span>
            <h2 className={styles.chapterTitle}>包装玩具化的形态演进</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>从具象到抽象的广阔光谱</p>
          </div>

          {/* 四象限地图 */}
          <div className={`${styles.quadrantMap} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>01</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/06-quadrant-literal-toy.jpg`}
                    alt="具象玩具化"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>具象玩具化</h3>
                <p className={styles.quadrantDesc}>直接模仿玩具或卡通角色形态</p>
                <div className={styles.quadrantCase}>
                  <strong>典型案例:</strong> Moschino Toy 2泰迪熊、Flower Knows泰迪熊系列
                </div>
                <div className={styles.quadrantRisk}>
                  <div className={styles.riskIcon}>⚠</div>
                  <span>风险: 廉价感陷阱</span>
                </div>
                <p className={styles.quadrantNote}>需通过增加配重和冷触感材料规避"塑料感"</p>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>02</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/07-quadrant-sculptural-art.jpg`}
                    alt="雕塑艺术化"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>雕塑艺术化</h3>
                <p className={styles.quadrantDesc}>设计为抽象艺术品或现代雕塑</p>
                <div className={styles.quadrantCase}>
                  <strong>典型案例:</strong> KKW身体香水瓶、Simihaze树脂积木包装
                </div>
                <div className={styles.quadrantStrength}>
                  <div className={styles.strengthIcon}>●</div>
                  <span>优势: 博物馆展品级别</span>
                </div>
                <p className={styles.quadrantNote}>被Z世代视为"酷"、"前卫"和"高级",符合静奢趋势</p>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>03</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/08-quadrant-fantasy-rococo.jpg`}
                    alt="幻想洛可可"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>幻想洛可可</h3>
                <p className={styles.quadrantDesc}>繁复细节、浮雕工艺和童话叙事</p>
                <div className={styles.quadrantCase}>
                  <strong>典型案例:</strong> Flower Knows草莓洛可可、Florasis花西子
                </div>
                <div className={styles.quadrantRisk}>
                  <div className={styles.riskIcon}>⚠</div>
                  <span>风险: 脆弱性</span>
                </div>
                <p className={styles.quadrantNote}>复杂浮雕和铰链在物流中极易破碎,需改良材料韧性</p>
              </div>
            </div>

            <div className={styles.quadrant}>
              <div className={styles.quadrantNumber}>04</div>
              <div className={styles.quadrantImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/09-quadrant-utility-gorpcore.jpg`}
                    alt="机能实用风"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.quadrantContent}>
                <h3>机能实用风</h3>
                <p className={styles.quadrantDesc}>户外机能风与工业设计结合</p>
                <div className={styles.quadrantCase}>
                  <strong>典型案例:</strong> Off-White Paperwork系列
                </div>
                <div className={styles.quadrantStrength}>
                  <div className={styles.strengthIcon}>●</div>
                  <span>优势: 可穿戴性</span>
                </div>
                <p className={styles.quadrantNote}>登山扣设计使产品能挂在背包上,增加曝光率</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第三章: IP化战略 */}
      <section className={styles.chapterThree}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 03</span>
            <h2 className={styles.chapterTitle}>IP化战略</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>从授权到原生叙事</p>
          </div>

          {/* 授权IP vs 原生IP */}
          <div className={`${styles.ipStrategy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.strategyComparison}>
              <div className={styles.strategyColumn}>
                <div className={styles.strategyHeader}>
                  <h3>授权IP</h3>
                  <span className={styles.strategyBadge}>怀旧的捷径</span>
                </div>

                <div className={styles.strategyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/10-licensed-ip-examples.jpg`}
                      alt="授权IP案例"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className={styles.strategyContent}>
                  <h4>流量密码IP</h4>
                  <ul className={styles.ipList}>
                    <li>芭比 (Barbie)</li>
                    <li>变形金刚 (Transformers)</li>
                    <li>龙与地下城 (D&D)</li>
                    <li>Care Bears</li>
                  </ul>

                  <div className={styles.strategyPros}>
                    <strong>优势:</strong> 快速切入市场,自带流量
                  </div>

                  <div className={styles.strategyCons}>
                    <strong>风险:</strong>
                    <ul>
                      <li>高昂版权费用</li>
                      <li>严格设计限制</li>
                      <li>质感必须匹配IP神圣地位</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.strategyDivider}></div>

              <div className={styles.strategyColumn}>
                <div className={styles.strategyHeader}>
                  <h3>原生IP</h3>
                  <span className={`${styles.strategyBadge} ${styles.strategyBadgeHighlight}`}>C-Beauty启示</span>
                </div>

                <div className={styles.strategyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/11-native-ip-flower-knows.jpg`}
                      alt="原生IP案例"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className={styles.strategyContent}>
                  <h4>叙事宇宙构建</h4>
                  <p className={styles.strategyExample}>
                    <strong>Flower Knows案例:</strong> 并非在卖眼影,而是在卖"独角兽"、"小天使"或"天鹅"的奇幻故事
                  </p>

                  <div className={styles.strategyPros}>
                    <strong>优势:</strong>
                    <ul>
                      <li>IP资产完全沉淀在品牌内部</li>
                      <li>每次新品都扩充品牌宇宙</li>
                      <li>增加用户粘性和复购率</li>
                    </ul>
                  </div>

                  <div className={styles.bestPractice}>
                    <strong>最佳实践:</strong> 开发属于自己的"图腾"或"吉祥物",通过异形包装立体化,形成类似Bearbrick的收藏体系
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第四章: 材料科学革命 */}
      <section className={styles.chapterFour}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 04</span>
            <h2 className={styles.chapterTitle}>材料科学革命</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>重构高端感的物理基础</p>
          </div>

          {/* 重磅法则 */}
          <div className={`${styles.materialSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.sectionIntro}>
              <h3>重磅法则</h3>
              <p className={styles.materialPrinciple}>
                在消费者心理学中,<strong>重量与价值成正比</strong>。对于异形包装,轻飘飘的塑料是致命伤。
              </p>
            </div>

            <div className={styles.materialGrid}>
              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/12-material-zamac.jpg`}
                      alt="Zamac锌合金"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>Zamac 锌合金</h4>
                  <div className={styles.materialProps}>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>触感:</span>
                      <span>金属冷触感</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>密度:</span>
                      <span>高密度沉手感</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>声音:</span>
                      <span>清脆"咔哒"声(ASMR体验)</span>
                    </div>
                  </div>
                  <p className={styles.materialUse}>最佳替代塑料盖方案,能注塑成复杂雕塑形状</p>
                </div>
              </div>

              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/13-material-bioresin.jpg`}
                      alt="重磅生物树脂"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.materialContent}>
                  <h4>重磅生物树脂</h4>
                  <div className={styles.materialProps}>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>技术:</span>
                      <span>添加高密度矿物填料</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>密度:</span>
                      <span>接近陶瓷或金属</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>成型:</span>
                      <span>保持塑料成型自由度</span>
                    </div>
                  </div>
                  <p className={styles.materialUse}>平衡复杂异形能力与类陶瓷沉手感</p>
                </div>
              </div>

              <div className={styles.materialCard}>
                <div className={styles.materialImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/14-material-sulapac.jpg`}
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
                      <span className={styles.propLabel}>触感:</span>
                      <span>陶瓷般温润</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>声音:</span>
                      <span>陶瓷声响</span>
                    </div>
                    <div className={styles.propItem}>
                      <span className={styles.propLabel}>可持续:</span>
                      <span>可生物降解</span>
                    </div>
                  </div>
                  <p className={styles.materialUse}>适合打造"鹅卵石"、"图腾柱"等有机形态</p>
                </div>
              </div>
            </div>
          </div>

          {/* 可持续性悖论 */}
          <div className={`${styles.sustainabilitySection} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.sustainabilityHeader}>
              <h3>可持续性的悖论与解决方案</h3>
            </div>

            <div className={styles.sustainabilityContent}>
              <div className={styles.paradoxVisual}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/15-forever-case-concept.jpg`}
                    alt="终身容器概念"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className={styles.solutionContent}>
                <div className={styles.problemStatement}>
                  <strong>悖论:</strong> "玩具化"包装往往意味着更多材料消耗,与可持续发展趋势相悖
                </div>

                <div className={styles.solution}>
                  <h4>终身容器 + 极简替换芯</h4>
                  <p className={styles.solutionDesc}>Forever Case + Disposable Cartridge</p>

                  <ul className={styles.solutionSteps}>
                    <li>
                      <strong>外壳:</strong> 定义为"耐用品"甚至"传家宝",采用Zamac、重磅树脂或Sulapac等耐用材料
                    </li>
                    <li>
                      <strong>内芯:</strong> 采用单一材质(Mono-material)的轻量化设计,便于回收
                    </li>
                    <li>
                      <strong>消费者教育:</strong> 传达"购买一次,终身收藏"的理念,高昂包材成本分摊到长期品牌忠诚度
                    </li>
                  </ul>

                  <div className={styles.caseReference}>
                    <strong>成功案例:</strong> Hermès和Dries Van Noten已验证此模式在高端市场的可行性
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第五章: 战略时机 */}
      <section className={styles.chapterFive}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 05</span>
            <h2 className={styles.chapterTitle}>最佳战略窗口期</h2>
            <div className={styles.chapterLine}></div>
            <p className={styles.chapterSubtitle}>2024-2026战略路线图</p>
          </div>

          {/* 时间轴可视化 */}
          <div className={`${styles.timeline} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>2024 Q2-Q4</div>
              <div className={styles.timelinePhase}>蛰伏与研发</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineState}>
                  <strong>市场状态:</strong> 玩具市场触底企稳,消费者对情绪价值的渴望在累积
                </div>
                <div className={styles.timelineActions}>
                  <strong>战略动作:</strong>
                  <ul>
                    <li>锁定高密度材料供应商(Sulapac, Washington Penn)</li>
                    <li>模具开发与跌落测试,解决C-Beauty易碎痛点</li>
                    <li>构筑原生IP故事线或洽谈重磅IP授权</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.timelineHighlight}`}>
              <div className={styles.timelinePeriod}>2025 Q1-Q3</div>
              <div className={styles.timelinePhase}>爆发与确立</div>
              <div className={styles.timelineBadge}>最佳发布窗口</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineState}>
                  <strong>市场状态:</strong> 大小孩经济完全主流化,消费者对"极简风"产生审美疲劳,渴望多巴胺和极繁主义回归
                </div>
                <div className={styles.timelineOpportunity}>
                  <strong>触发点:</strong> 2025 Q1后假日时段,消费者面临新年压力,急需"多巴胺美妆"提振精神
                </div>
                <div className={styles.timelineProduct}>
                  <strong>产品策略:</strong> 推出"图腾级"单品
                  <ul>
                    <li><strong>形态:</strong> Gorpcore与Coquette结合的"Utility Cute"(机能可爱风)</li>
                    <li><strong>示例:</strong> 重磅金属质感带登山扣的泰迪熊唇泥,或仿陶瓷鹅卵石粉饼</li>
                    <li><strong>营销:</strong> TikTok ASMR开箱(磁吸声音、冰凉触感、沉手感)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>2026 Q1-Q4</div>
              <div className={styles.timelinePhase}>迭代与智能化</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineState}>
                  <strong>市场状态:</strong> 异形包装市场开始拥挤,廉价模仿者出现
                </div>
                <div className={styles.timelineActions}>
                  <strong>战略动作:</strong> 转向"智能玩具"
                  <ul>
                    <li>植入NFC芯片,解锁数字藏品或品牌社区</li>
                    <li>可更换外壳配件,打造类乐高拼搭系统</li>
                    <li>物理世界与数字世界连接</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 三大成熟支柱 */}
          <div className={`${styles.maturityPillars} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.pillarsTitle}>2025最佳时机的三大支柱</h3>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>01</div>
                <h4>大小孩经济稳定</h4>
                <p>已成为美妆与玩具行业的主要增长引擎,不再是边缘市场</p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>02</div>
                <h4>C-Beauty审美教育完成</h4>
                <p>东方供应链美学已完成对西方市场的审美教育,消费者接受度高</p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>03</div>
                <h4>新型材料技术成熟</h4>
                <p>能平衡"玩具趣味"与"奢侈质感"的重磅材料(生物树脂、Zamac)已进入量产成熟期</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第六章: 战略建议 */}
      <section className={styles.chapterSix}>
        <div className={styles.container}>
          <div className={`${styles.chapterHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.chapterNumber}>Chapter 06</span>
            <h2 className={styles.chapterTitle}>致C-Suite的行动清单</h2>
            <div className={styles.chapterLine}></div>
          </div>

          <div className={`${styles.actionItems} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>01</div>
              <div className={styles.actionContent}>
                <h3>重新定义"高端"的物理指标</h3>
                <p>立即更新采购标准,将<strong>密度(Density)</strong>列为与颜色、光泽同等重要的验收指标。对于异形外壳,设定最小克重标准,确保"上手即知贵重"。</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>02</div>
              <div className={styles.actionContent}>
                <h3>拥抱"可穿戴"设计</h3>
                <p>在产品设计中强制加入"挂载点"(Loop/Ring)。让美妆产品走出化妆包,成为包挂、项链或腰饰,增加社交曝光度,符合ESO随身携带心理需求。</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>03</div>
              <div className={styles.actionContent}>
                <h3>解决"体积大"的痛点</h3>
                <p>开发配套<strong>展示底座(Dock)</strong>。将收纳问题转化为展示机会,告诉消费者:这不仅是口红,这是你梳妆台上的艺术雕塑。</p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>04</div>
              <div className={styles.actionContent}>
                <h3>供应链的本地化与近岸化</h3>
                <p>鉴于异形包装的运输风险,考虑在墨西哥或美国本土寻找具备高精密注塑能力的合作伙伴,缩短供应链半径,降低物流损耗,提高对IP热点的响应速度。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 结语 */}
      <section className={styles.conclusion}>
        <div className={styles.container}>
          <div className={`${styles.conclusionContent} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.conclusionQuote}>
              <div className={styles.quoteMarkTop}>"</div>
              <p className={styles.quoteText}>
                未来的美妆竞争,不再局限于配方的比拼,
                <br />
                而是<strong>谁能占据消费者口袋里那个情感支持物的位置</strong>。
                <br />
                <br />
                通过IP化赋予灵魂,通过玩具化赋予趣味,
                <br />
                通过重磅材料赋予质感,
                <br />
                我们有机会定义下一个十年的美妆奢侈品标准。
                <br />
                <br />
                <span className={styles.quoteHighlight}>2025年,就是这场战役的决胜时刻。</span>
              </p>
              <div className={styles.quoteMarkBottom}>"</div>
            </div>

            <div className={styles.conclusionMeta}>
              <div className={styles.metaDivider}></div>
              <div className={styles.metaText}>YECO Studio · 全球供应链视角的未来情报</div>
              <div className={styles.metaDivider}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportUSBeautyIPfication;
