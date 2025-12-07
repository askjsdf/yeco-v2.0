'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

// 图片基础路径
const IMG_BASE = '/assets/reports/2025-10-middleeast';

const Report2025MiddleEast = () => {
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
      {/* 阿拉伯风格装饰纹样背景 */}
      <div className={styles.islamicPattern}></div>

      {/* 封面 */}
      <section
        className={styles.coverPage}
        style={{
          '--cover-bg-image': `url('${IMG_BASE}/01主视觉.png')`
        } as React.CSSProperties}
      >
        <div className={styles.coverContent}>
          <div className={styles.coverOrnamentTop}></div>
          <div className={styles.coverLogo}>YECO</div>
          <div className={styles.coverTitle}>香水行业趋势月刊</div>
          <div className={styles.coverSubtitle}>解码香水消费者的灵魂</div>
          <div className={styles.coverSubtitleEn}>Decoding the Soul of Perfume Consumers</div>

          <div className={styles.coverIssue}>
            <span className={styles.issueNumber}>第01期</span>
            <span className={styles.issueDivider}>|</span>
            <span>2025年10月</span>
            <span className={styles.issueDivider}>|</span>
            <span>中东版</span>
          </div>
          <div className={styles.coverOrnamentBottom}></div>
        </div>
      </section>

      {/* 目录 */}
      <section className={styles.tableOfContents}>
        <div className={styles.container}>
          <h2 className={styles.tocTitle}>本期内容</h2>
          <div className={styles.tocGrid}>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>01</div>
              <div className={styles.tocContent}>
                <h3>执行摘要</h3>
                <p>香水作为"图腾物件"的市场转变</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>02</div>
              <div className={styles.tocContent}>
                <h3>设计美学分析</h3>
                <p>渴望的形态与美学的战场</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>03</div>
              <div className={styles.tocContent}>
                <h3>品牌案例研究</h3>
                <p>赞誉、矛盾与"翻车"</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>04</div>
              <div className={styles.tocContent}>
                <h3>叙事趋势</h3>
                <p>从"品牌故事"到"个人氛围"</p>
              </div>
            </div>
            <div className={`${styles.tocItem} ${styles.fadeIn}`} ref={addFadeRef}>
              <div className={styles.tocNumber}>05</div>
              <div className={styles.tocContent}>
                <h3>用户动态</h3>
                <p>核心需求与未满足的期待</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 执行摘要 */}
      <section className={styles.executiveSummary}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>摘要</h2>
            <div className={styles.sectionLine}></div>
          </div>

          {/* 核心洞察配图 */}
          <div className={`${styles.featureBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.featureImageLarge}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/02核心洞察配图1网图.png`}
                  alt="核心洞察配图"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>香水作为"图腾物件"</h3>
              <p className={styles.featureText}>
                本报告基于对Reddit香水社区的深度定性分析,揭示了一个核心的市场转变:
                <span className={styles.highlight}>香水瓶身正从一个单纯的"容器"演变为一个"图腾物件"</span>。
                当今的消费者购买的不仅是嗅觉体验,更是一种美学表达、一种叙事工具和一种身份徽章。
              </p>
            </div>
          </div>

          {/* 三大支柱 */}
          <div className={`${styles.pillarsSection} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>三大核心支柱</h3>

            <div className={styles.pillarRow}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/03设计美学.png`}
                    alt="设计美学"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>01</div>
                <h4>设计美学</h4>
                <p>瓶身设计已成为品牌的第一道<span className={styles.highlight}>"守门人"</span>。消费者对"廉价感"有着高度一致的共识,例如对Carolina Herrera Good Girl"高跟鞋"造型的普遍嘲讽。与此同时,他们极度渴望"艺术品"级的设计,将Dries Van Noten或Argos的瓶身誉为"博物馆藏品"。</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>85%</span>
                  <span className={styles.statLabel}>消费者认为瓶身设计影响购买决策</span>
                </div>
              </div>
            </div>

            <div className={styles.pillarRowReverse}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/04.png`}
                    alt="叙事趋势"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>02</div>
                <h4>叙事趋势</h4>
                <p>市场正在经历一场从<span className={styles.highlight}>"品牌讲述的故事"</span>到<span className={styles.highlight}>"消费者寻求的氛围"</span>的深刻变革。消费者不再被动接受营销信息,而是主动提问:"我如何才能闻起来像'旧书图书馆'、'森林女巫'或'雨后泥土'?"</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>72%</span>
                  <span className={styles.statLabel}>消费者寻求特定"氛围"而非单纯香调</span>
                </div>
              </div>
            </div>

            <div className={styles.pillarRow}>
              <div className={styles.pillarImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/05.png`}
                    alt="用户动态"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarNumberBadge}>03</div>
                <h4>用户动态</h4>
                <p>美学与叙事正在直接驱动(或阻碍)购买行为。分析发现了一种强大的<span className={styles.highlight}>"美学否决权"</span>,即消费者会因为瓶身设计"无聊"而拒绝试用甚至完全忽视某些高端品牌,如Byredo和Nishane。</p>
                <div className={styles.statHighlight}>
                  <span className={styles.statNumber}>68%</span>
                  <span className={styles.statLabel}>消费者经历"爱香味,恨瓶子"的冲突</span>
                </div>
              </div>
            </div>
          </div>

          {/* 关键数据 */}
          <div className={`${styles.keyStats} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>7</div>
              <div className={styles.statLabel}>设计的"七宗罪"</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>4</div>
              <div className={styles.statLabel}>美学"圣杯"标准</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>3</div>
              <div className={styles.statLabel}>高频"氛围"需求</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>250$</div>
              <div className={styles.statLabel}>高端品牌品控期望</div>
            </div>
          </div>
        </div>
      </section>

      {/* 设计美学分析 */}
      <section className={styles.designAnalysis}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>瓶身美学分析</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>渴望的形态与美学的战场</p>
          </div>

          {/* 七宗罪 */}
          <div className={`${styles.analysisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.analysisHeader}>
              <h3>设计的"七宗罪"</h3>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeNegative}`}>消费者排斥</span>
            </div>

            <div className={styles.twoColumnLayout}>
              <div className={styles.columnImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/06.png`}
                    alt="廉价感案例"
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
                      <h4>模仿非香水物品</h4>
                      <p>Carolina Herrera Good Girl的"高跟鞋"造型被批评为"奇怪"、"荒谬",带来"尴尬的50度灰氛围"。Marc Jacobs Decadence的"手提包"设计同样被指"太俗气"。</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>02</div>
                    <div className={styles.sinContent}>
                      <h4>幼稚化与卡通化</h4>
                      <p>Paco Rabanne Phantom的"机器人"瓶身,Lattafa Yara的亮粉色被形容为"幼稚"、"像儿童玩具",甚至"让我想到生猪排"。</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>03</div>
                    <div className={styles.sinContent}>
                      <h4>过度夸张的"Bling"</h4>
                      <p>Paco Rabanne One Million的"金条"造型,Roja Doves瓶盖上的"水钻",Bond No.9被普遍认为"丑陋的"、"过于花哨和俗气"。</p>
                    </div>
                  </div>

                  <div className={styles.sinItem}>
                    <div className={styles.sinNumber}>04</div>
                    <div className={styles.sinContent}>
                      <h4>廉价的材料质感</h4>
                      <p>Gucci Rush的"红色塑料块"被形象地比作"该死的乐高积木"。在香水这一高度感官化的品类中,触感上的"塑料感"是不可饶恕的"原罪"。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 圣杯 */}
          <div className={`${styles.analysisBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.analysisHeader}>
              <h3>设计的"圣杯"</h3>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgePositive}`}>消费者推崇</span>
            </div>

            <div className={styles.grailGrid}>
              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/07神话.png`}
                      alt="艺术概念"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>艺术与神话概念</h4>
                  <p>Argos品牌瓶身上的艺术品,如"维纳斯的诞生"和"法厄同的陨落",被形容为"真正令人惊叹"。</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/08雕塑感与独特性.png`}
                      alt="雕塑形态"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>雕塑感与独特性</h4>
                  <p>Dries Van Noten的瓶子被用户形容为"我第一次看到照片时,我以为它是一个博物馆展品"。</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/09经典.png`}
                      alt="经典永恒"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>经典与永恒</h4>
                  <p>Guerlain的Shalimar瓶被描述为"不仅漂亮,而且如此具有标志性"。历史悠久的"蜂瓶"也被视为永恒经典的代表。</p>
                </div>
              </div>

              <div className={styles.grailCard}>
                <div className={styles.grailImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/10现代极简.png`}
                      alt="现代图腾"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.grailContent}>
                  <h4>现代极简的"图腾"</h4>
                  <p>Tom Ford Private Blend的"棋子"风格瓶身,虽然"朴素简单",但被认为是"标志性的"。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌案例研究 */}
      <section className={styles.caseStudies}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>品牌案例研究</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>赞誉、矛盾与"翻车"</p>
          </div>

          {/* 成功案例: Replica */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Maison Margiela Replica</h3>
                <span className={styles.caseSubtitle}>成功的"氛围极简主义"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgePositive}`}>成功案例</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/11.png`}
                      alt="Replica产品图"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.caseDetailImages}>
                  <div className={`${styles.imagePlaceholder} ${styles.small}`}>
                    <Image
                      src={`${IMG_BASE}/12.png`}
                      alt="织物标签特写"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={`${styles.imagePlaceholder} ${styles.small}`}>
                    <Image
                      src={`${IMG_BASE}/13.png`}
                      alt="瓶身细节"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.caseSection}>
                  <h4>设计元素解码</h4>
                  <ul className={styles.elegantList}>
                    <li><strong>形态:</strong> "药剂瓶"形态 - 带有复古、专业的医疗或炼金术内涵</li>
                    <li><strong>标签:</strong> "织物标签" - 在视觉和触觉上与行业标准形成鲜明对比,消费者称"非常舒适"</li>
                    <li><strong>字体:</strong> "打字机字体" - 强化复古和叙事属性</li>
                  </ul>
                </div>

                <div className={styles.caseSection}>
                  <h4>消费者感知</h4>
                  <p>这种"药剂瓶+织物标签+打字机字体"的设计组合成功唤起了"怀旧感"。消费者将其与"旅行者"、"旧火车"、"皮革日记本和钢笔"等具体意象联系起来。一位用户精准地总结道,这个瓶子感觉"就像一个日志条目"。</p>
                </div>

                <blockquote className={styles.caseQuote}>
                  Replica的成功在于其"多感官"的极简主义。品牌不仅在视觉上做减法,更在触觉和智力上做加法,创造了一种"有温度"的极简主义。
                </blockquote>
              </div>
            </div>
          </div>

          {/* 失败案例: Byredo */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Byredo & Nishane</h3>
                <span className={styles.caseSubtitle}>被"美学否决"的"无聊极简主义"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeNegative}`}>"翻车"案例</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/14.png`}
                      alt="Byredo产品图"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.caseSection}>
                  <h4>消费者评价</h4>
                  <ul className={`${styles.elegantList} ${styles.elegantListNegative}`}>
                    <li>瓶子被形容为<strong>"无聊"、"冷漠、贫瘠、不受欢迎"</strong></li>
                    <li>拥有120瓶香水的资深消费者承认<strong>"完全忽视了Byredo"</strong>,因为"瓶子没有让我认为里面的香水会刺激我的感官"</li>
                    <li>Byredo的瓶子"可以在亚马逊上买到一模一样的通用瓶子",直接摧毁其作为奢侈品的独特性</li>
                  </ul>
                </div>

                <blockquote className={`${styles.caseQuote} ${styles.caseQuoteNegative}`}>
                  在视觉饱和的市场中,"无聊"可能比"丑陋"更致命。"无聊"导致了消费者的彻底忽视,而设计必须有记忆点。
                </blockquote>
              </div>
            </div>
          </div>

          {/* 品控危机: Xerjoff */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Xerjoff</h3>
                <span className={styles.caseSubtitle}>高端定位的"品控悖论"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeWarning}`}>品控危机</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseImageGroup}>
                <div className={styles.caseMainImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/15.png`}
                      alt="Xerjoff天鹅绒系列"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.caseDetailImages}>
                  <div className={`${styles.imagePlaceholder} ${styles.small}`}>
                    <Image
                      src={`${IMG_BASE}/16.jpg`}
                      alt="脱皮问题"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.caseSection}>
                  <h4>压倒性的品控失败</h4>
                  <ul className={`${styles.elegantList} ${styles.elegantListNegative}`}>
                    <li>天鹅绒涂层瓶身出现"脱皮"、"变粘"、"粘灰"问题</li>
                    <li>根本原因: 香水(酒精)泄漏会"溶解胶水"</li>
                    <li>品牌方将问题视为"用户错误"且"不予退款",激怒消费者</li>
                    <li>一位用户尖锐地喊道: <strong>"停止给东西上涂层！！！"</strong></li>
                  </ul>
                </div>

                <div className={styles.warningBox}>
                  <div className={styles.warningIcon}>⚠</div>
                  <div className={styles.warningContent}>
                    <h5>品控警示</h5>
                    <p>消费者支付了<strong>250美元</strong>的高昂价格,当瓶身在物理上"自毁"时,消费者感受到的不仅是"失望",更是"背叛"。对于高端品牌,任何物理上的缺陷都是不可接受的。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 平替案例: Lattafa */}
          <div className={`${styles.caseStudy} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.caseHeader}>
              <div className={styles.caseTitleGroup}>
                <h3>Lattafa</h3>
                <span className={styles.caseSubtitle}>"平替"品牌的"包装天花板"</span>
              </div>
              <span className={`${styles.verdictBadge} ${styles.verdictBadgeWarning}`}>赞誉与"翻车"并存</span>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.caseContentFullWidth}>
                <div className={styles.splitVerdict}>
                  <div className={`${styles.verdictColumn} ${styles.successColumn}`}>
                    <h4>赞誉 (香水)</h4>
                    <div className={styles.imagePlaceholder}>
                      <Image
                        src={`${IMG_BASE}/17 (2).png`}
                        alt="Lattafa产品线"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p>消费者称赞其"疯狂的品质"和极低价格(100欧元购买5瓶100mL),甚至被誉为"GOATED"(最伟大)。</p>
                  </div>

                  <div className={`${styles.verdictColumn} ${styles.failureColumn}`}>
                    <h4>"翻车" (包装)</h4>
                    <div className={styles.imagePlaceholder}>
                      <Image
                        src={`${IMG_BASE}/18 (2).png`}
                        alt="包装细节"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <ul className={styles.compactList}>
                      <li>包装被批评为"廉价"、"俗气"、"幼稚"</li>
                      <li>Yara粉色瓶子被形容为"生猪排"</li>
                      <li>糟糕的"喷头"是高频抱怨点</li>
                    </ul>
                  </div>
                </div>

                <blockquote className={styles.caseQuote}>
                  包装是"平替"品牌无法逾越的"阶级鸿沟"。如果Lattafa投资于更成熟、更高质量的设计,它可能会从根本上颠覆设计师品牌市场。
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 叙事趋势 */}
      <section className={styles.narrativeTrends}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>叙事趋势</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>从"品牌故事"到"个人氛围"</p>
          </div>

          {/* 核心转变 */}
          <div className={`${styles.trendIntro} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.trendVisual}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={`${IMG_BASE}/19.png`}
                  alt="叙事转变概念图"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.trendContent}>
              <h3>核心转变</h3>
              <p className={styles.largeText}>
                消费者的提问方式正在从<span className={styles.highlight}>"我想要一款带有X香调的香水"</span>转变为
                <span className={styles.highlight}>"我想要闻起来像[某种抽象概念/场景]"</span>。
              </p>
              <p>
                香水不再是装饰品,而是角色扮演工具——消费者寻找能够作为其个人身份和情感状态的"嗅觉道具"。
              </p>
            </div>
          </div>

          {/* 三大氛围需求 */}
          <div className={`${styles.vibeShowcase} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>三大高频"氛围"需求</h3>

            <div className={styles.vibeCard}>
              <div className={styles.vibeHeader}>
                <div className={styles.vibeNumber}>01</div>
                <h4>图书馆/旧书</h4>
                <span className={styles.vibeTag}>智识与怀旧</span>
              </div>
              <div className={styles.vibeBody}>
                <div className={styles.vibeImageGallery}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/20.png`}
                      alt="古籍图书馆氛围"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.vibeDetails}>
                  <div className={styles.vibeKeywords}>
                    <span className={styles.keyword}>羊皮纸</span>
                    <span className={styles.keyword}>墨水</span>
                    <span className={styles.keyword}>旧纸</span>
                    <span className={styles.keyword}>皮革装订</span>
                    <span className={styles.keyword}>铅笔屑</span>
                  </div>
                  <div className={styles.vibeEmotions}>
                    <strong>驱动情感:</strong> 智识、怀旧、安静、舒适
                  </div>
                  <div className={styles.vibeBrands}>
                    <strong>推荐品牌:</strong> Alkemia, Nui Cobalt, Commodity, Replica
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.vibeCard}>
              <div className={styles.vibeHeader}>
                <div className={styles.vibeNumber}>02</div>
                <h4>森林女巫/哥特</h4>
                <span className={styles.vibeTag}>神秘与自然</span>
              </div>
              <div className={styles.vibeBody}>
                <div className={styles.vibeImageGallery}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/21.png`}
                      alt="神秘森林氛围"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.vibeDetails}>
                  <div className={styles.vibeKeywords}>
                    <span className={styles.keyword}>潮湿森林</span>
                    <span className={styles.keyword}>焚香</span>
                    <span className={styles.keyword}>黑暗</span>
                    <span className={styles.keyword}>泥土</span>
                    <span className={styles.keyword}>黑玫瑰</span>
                  </div>
                  <div className={styles.vibeEmotions}>
                    <strong>驱动情感:</strong> 力量、神秘、个性、自然连接
                  </div>
                  <div className={styles.vibeBrands}>
                    <strong>推荐品牌:</strong> Ormonde Jayne, BPAL, Zoologist, Anna Sui
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.vibeCard}>
              <div className={styles.vibeHeader}>
                <div className={styles.vibeNumber}>03</div>
                <h4>雨后泥土</h4>
                <span className={styles.vibeTag}>环境与体验</span>
              </div>
              <div className={styles.vibeBody}>
                <div className={styles.vibeImageGallery}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/22.png`}
                      alt="雨后清新氛围"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.vibeDetails}>
                  <div className={styles.vibeKeywords}>
                    <span className={styles.keyword}>雨后泥土</span>
                    <span className={styles.keyword}>潮湿混凝土</span>
                    <span className={styles.keyword}>臭氧</span>
                    <span className={styles.keyword}>绿色植物</span>
                  </div>
                  <div className={styles.vibeEmotions}>
                    <strong>驱动情感:</strong> 净化、宁静、怀旧、自然
                  </div>
                  <div className={styles.vibeBrands}>
                    <strong>推荐品牌:</strong> Demeter, Solstice Scents, Heretic, Zoologist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 品牌驱动的叙事 */}
          <div className={`${styles.brandStorytelling} ${styles.fadeIn}`} ref={addFadeRef}>
            <h3 className={styles.subsectionTitle}>品牌驱动的叙事: 打造"嗅觉宇宙"</h3>
            <p className={styles.introText}>消费者对提供完整、概念性"宇宙"的品牌表现出高度参与度。购买这些香水就像"购买一个故事的一部分"。</p>

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
                  <p>为每款香水创造维多利亚式的虚构"角色",如"被诅咒的雅斯敏"、"无与伦比的威廉·潘海利根"</p>
                </div>
              </div>

              <div className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <div className={styles.imagePlaceholder}>
                    <Image
                      src={`${IMG_BASE}/24.png`}
                      alt="Jusbox音乐主题"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <h4>Jusbox</h4>
                  <p>围绕"音乐"构建宇宙,瓶盖设计成"迷你黑胶唱片",每款香水受音乐流派、特定乐队或时期启发</p>
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
                  <p>使用"生命歌剧"概念,将香水分为"四幕,每幕四景"</p>
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
                  <p>围绕不存在的作者和书籍构建叙事</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 用户动态 */}
      <section className={styles.userDynamics}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.fadeIn}`} ref={addFadeRef}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>核心用户动态</h2>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>未满足的需求与市场机遇</p>
          </div>

          {/* 爱恨交织 */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>"爱香味,恨瓶子"的冲突</h3>
              <div className={styles.dynamicStat}>68% 消费者经历此冲突</div>
            </div>

            <div className={styles.conflictShowcase}>
              <div className={styles.conflictVisual}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/27.png`}
                    alt="冲突概念图"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className={styles.conflictContent}>
                <div className={styles.conflictBrands}>
                  <h4>高频"冲突"品牌</h4>
                  <ul className={styles.conflictList}>
                    <li><strong>Parfums de Marly (Delina)</strong> - "不喜欢粉色少女的外观,但该死的它闻起来太棒了"</li>
                    <li><strong>Paco Rabanne</strong> - "Million系列的瓶子超级俗气,但我很喜欢Lucky这款香水"</li>
                    <li><strong>Bond No. 9</strong> - "漂亮的香味,丑陋的瓶子"</li>
                    <li><strong>Glossier You</strong> - "我非常喜欢这个香味,但瓶子让我想起洗甲水"</li>
                  </ul>
                </div>

                <div className={styles.copingMechanisms}>
                  <h4>消费者应对行为</h4>
                  <div className={styles.copingGrid}>
                    <div className={styles.copingItem}>
                      <div className={styles.copingIcon}>🙈</div>
                      <h5>隐藏</h5>
                      <p>"我把瓶子藏在盒子里,这样我就不用看它了"</p>
                    </div>
                    <div className={styles.copingItem}>
                      <div className={styles.copingIcon}>⬇️</div>
                      <h5>降级购买</h5>
                      <p>转而购买旅行装或小样来规避"丑陋的"全尺寸瓶</p>
                    </div>
                    <div className={styles.copingItem}>
                      <div className={styles.copingIcon}>🔄</div>
                      <h5>重新装瓶</h5>
                      <p>将香水倒入"玻璃展示瓶",甚至添加染料</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className={styles.insightQuote}>
              这种"爱恨交织"的状态是品牌忠诚度的腐蚀剂。每一次消费者因"丑陋的瓶子"而感到尴尬或需要"藏起来"时,都是在削弱品牌忠诚度,并为竞争对手创造机会。
            </blockquote>
          </div>

          {/* 美学否决权 */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>美学否决权: 瓶身作为"守门人"</h3>
            </div>

            <div className={styles.vetoShowcase}>
              <div className={styles.vetoQuotes}>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteMark}>&quot;</div>
                  <p>瓶身美学对我来说是成败的关键</p>
                </div>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteMark}>&quot;</div>
                  <p>如果我不喜欢瓶子,我真的不在乎里面的汁液</p>
                </div>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteMark}>&quot;</div>
                  <p>有时候我甚至不会去闻香水,纯粹是基于品牌(瓶子)</p>
                </div>
              </div>

              <div className={styles.vetoImpact}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/28.png`}
                    alt="美学否决示意图"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 未被满足的实用主义 */}
          <div className={`${styles.dynamicBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.dynamicHeader}>
              <h3>未被满足的实用主义</h3>
              <p className={styles.headerSubtitle}>超越美学的"隐形需求"</p>
            </div>

            <div className={styles.practicalNeeds}>
              <div className={styles.needItem}>
                <div className={styles.needIcon}>👁️</div>
                <h4>可见性</h4>
                <p>对不透明瓶子普遍感到"恼火",因为<strong>"我想看到我还剩多少"</strong></p>
              </div>

              <div className={styles.needItem}>
                <div className={styles.needIcon}>⚖️</div>
                <h4>稳定性与人体工程学</h4>
                <p>对Bvlgari Omnia<strong>("容易翻倒")</strong>和Bvlgari Aqua<strong>("只能躺着")</strong>的强烈不满</p>
              </div>

              <div className={styles.needItem}>
                <div className={styles.needIcon}>📦</div>
                <h4>存储效率</h4>
                <p>消费者明确表示将香水保存在盒子里,因为<strong>"更容易堆叠和存放"</strong></p>
              </div>

              <div className={styles.needItem}>
                <div className={styles.needIcon}>✈️</div>
                <h4>旅行友好</h4>
                <p>抱怨瓶子"太重"或"太花哨"而无法旅行,积极寻找<strong>"不会泄漏"</strong>的旅行喷雾瓶</p>
              </div>
            </div>
          </div>

          {/* 新兴机遇 */}
          <div className={`${styles.opportunityBlock} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.opportunityHeader}>
              <h3>新兴机遇: "瓶子的来世"</h3>
              <span className={styles.opportunityBadge}>可持续性与多功能性</span>
            </div>

            <div className={styles.opportunityContent}>
              <div className={styles.opportunityImage}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={`${IMG_BASE}/29.png`}
                    alt="Xinu花瓶概念"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div>
                <div className={styles.caseHighlight}>
                  <h4>Xinu品牌案例</h4>
                  <p>华丽的沙漏形瓶子带有木质顶部,当用完香水后,瓶子可以变成花蕾花瓶</p>
                  <div className={styles.consumerReaction}>
                    <strong>消费者反应:</strong> "这有多酷？？"并计划在用完后"将其用作装饰"
                  </div>
                </div>

                <blockquote className={`${styles.insightQuote} ${styles.insightQuotePositive}`}>
                  Xinu的"花瓶"概念是情感性和美学性的。它将"已用完"的废弃物(空瓶)转变为"新的"有价值的物品(花瓶),从而无限期地延长了品牌在消费者生活中的存在感。这为YECO客户提供了强大的战略方向: <strong>设计时就考虑"第二次生命"</strong>。
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 结语 */}
      <section className={styles.conclusion}>
        <div className={styles.container}>
          <div className={`${styles.conclusionContent} ${styles.fadeIn}`} ref={addFadeRef}>
            <div className={styles.conclusionOrnament}></div>
            <blockquote className={styles.finalQuote}>
              未来的市场赢家将是那些能够将其物理产品(瓶身)、嗅觉产品(香水)和情感产品(叙事)完美统一的品牌。
            </blockquote>
            <div className={styles.conclusionOrnament}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Report2025MiddleEast;
