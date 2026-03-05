import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const chapterCards = [
  {
    id: '01',
    title: 'Introduction to Grocery Merchandising',
    summary: 'Operating model, performance tradeoffs, and closed-loop management.',
    path: '/chapters/chapter-01-introduction-to-grocery-merchandising',
  },
  {
    id: '02',
    title: 'Product Hierarchy and Categorization',
    summary: 'Taxonomy governance, category roles, and assortment structure.',
    path: '/chapters/chapter-02-product-hierarchy-and-categorization',
  },
  {
    id: '03',
    title: 'Pricing Strategy and Promotion Management',
    summary: 'KVI policy, elasticity, and promotion ROI discipline.',
    path: '/chapters/chapter-03-pricing-strategy-and-promotion-management',
  },
  {
    id: '04',
    title: 'Inventory Management and Replenishment',
    summary: 'Service-level policy, safety stock, turns, and GMROI.',
    path: '/chapters/chapter-04-inventory-management-and-replenishment',
  },
  {
    id: '05',
    title: 'Supplier Management and Procurement',
    summary: 'Supplier governance, OTIF, quality controls, and joint planning.',
    path: '/chapters/chapter-05-supplier-management-and-procurement',
  },
  {
    id: '06',
    title: 'Store Operations and Execution',
    summary: 'Planogram compliance, price integrity, and layout performance.',
    path: '/chapters/chapter-06-store-operations-and-execution',
  },
  {
    id: '07',
    title: 'Data and Analytics in Merchandising',
    summary: 'Basket analytics, decision systems, and performance decomposition.',
    path: '/chapters/chapter-07-data-and-analytics-in-merchandising',
  },
  {
    id: '08',
    title: 'Technology Systems and Integration',
    summary: 'System-of-record design, data contracts, and release reliability.',
    path: '/chapters/chapter-08-technology-systems-and-integration',
  },
  {
    id: '09',
    title: 'Quality Engineering in Merchandising',
    summary: 'Business-risk-driven testing and production safeguards.',
    path: '/chapters/chapter-09-quality-engineering-in-merchandising',
  },
  {
    id: '10',
    title: 'Future Trends and Digital Transformation',
    summary: 'AI-enabled planning, digital shelf execution, and transformation sequencing.',
    path: '/chapters/chapter-10-future-trends-and-digital-transformation',
  },
];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Industry Reference Book</p>
        <h1 className={styles.heroTitle}>Merchandising Core Concepts for Grocery Business</h1>
        <p className={styles.heroSubtitle}>
          A practical guide to category management, pricing, inventory, supplier collaboration,
          store execution, analytics, and merchandising systems.
        </p>
        <div className={styles.heroActions}>
          <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to={chapterCards[0].path}>
            Start with Chapter 1
          </Link>
          <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/resources/references">
            View References
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsBand() {
  return (
    <section className={styles.statsBand}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div>
            <div className={styles.statValue}>10</div>
            <div className={styles.statLabel}>Chapters</div>
          </div>
          <div>
            <div className={styles.statValue}>9</div>
            <div className={styles.statLabel}>Visuals</div>
          </div>
          <div>
            <div className={styles.statValue}>7</div>
            <div className={styles.statLabel}>Agent Pipeline Stages</div>
          </div>
          <div>
            <div className={styles.statValue}>1</div>
            <div className={styles.statLabel}>Unified Retail Operating Narrative</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChaptersSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Table of Contents</h2>
        <p className={styles.sectionSubtitle}>
          Each chapter includes concept explanation, business importance, scenario, data interpretation, and key takeaways.
        </p>
        <div className="row">
          {chapterCards.map((chapter) => (
            <div key={chapter.id} className="col col--6">
              <Link className={styles.chapterCard} to={chapter.path}>
                <div className={styles.chapterNumber}>Chapter {chapter.id}</div>
                <h3>{chapter.title}</h3>
                <p>{chapter.summary}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className={clsx(styles.section, styles.resources)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Resources</h2>
        <div className={styles.resourceLinks}>
          <Link to="/resources/glossary">Glossary</Link>
          <Link to="/resources/references">References</Link>
          <Link to="/resources/about-author">About the Author</Link>
          <Link href="https://github.com/arvind3/merchandising-core-concepts-for-grocery-business">GitHub Repository</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Professional reference book for grocery merchandising.">
      <HeroSection />
      <main>
        <StatsBand />
        <ChaptersSection />
        <ResourcesSection />
      </main>
    </Layout>
  );
}
