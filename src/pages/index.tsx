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

const readingPaths = [
  {
    title: 'Merchandising Foundations',
    detail: 'Start with Chapters 1-4 to understand category structure, pricing, and inventory economics.',
  },
  {
    title: 'Execution and Operations',
    detail: 'Use Chapters 5-7 for supplier governance, in-store execution, and analytics decision loops.',
  },
  {
    title: 'Systems and Transformation',
    detail: 'Finish with Chapters 8-10 for platform design, quality engineering, and transformation strategy.',
  },
];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Professional Grocery Merchandising Reference</p>
        <h1 className={styles.heroTitle}>Merchandising Core Concepts for Grocery Business</h1>
        <p className={styles.heroSubtitle}>
          A modern field guide to assortment, pricing, inventory, supplier collaboration,
          store execution, analytics, and merchandising technology.
        </p>
        <div className={styles.heroActions}>
          <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to={chapterCards[0].path}>
            Begin Reading
          </Link>
          <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/resources/glossary">
            Open Glossary
          </Link>
        </div>
      </div>
    </header>
  );
}

function MetricsBand() {
  return (
    <section className={styles.metricsBand}>
      <div className="container">
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}><strong>10</strong><span>Chapters</span></div>
          <div className={styles.metricCard}><strong>9</strong><span>Charts and Diagrams</span></div>
          <div className={styles.metricCard}><strong>7</strong><span>Editorial Pipeline Stages</span></div>
          <div className={styles.metricCard}><strong>1</strong><span>Integrated Operating Narrative</span></div>
        </div>
      </div>
    </section>
  );
}

function ReadingPaths() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Recommended Reading Paths</h2>
        <div className={styles.pathGrid}>
          {readingPaths.map((path) => (
            <div key={path.title} className={styles.pathCard}>
              <h3>{path.title}</h3>
              <p>{path.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChaptersSection() {
  return (
    <section className={clsx(styles.section, styles.chapterSection)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Table of Contents</h2>
        <p className={styles.sectionSubtitle}>
          Every chapter includes core concept framing, business impact, real-world scenarios,
          interpretation guidance, and action-ready takeaways.
        </p>
        <div className="row">
          {chapterCards.map((chapter) => (
            <div key={chapter.id} className="col col--6">
              <Link className={styles.chapterCard} to={chapter.path}>
                <span className={styles.chapterNumber}>Chapter {chapter.id}</span>
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
    <section className={styles.section}>
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
    <Layout title={siteConfig.title} description="A premium-quality online book on grocery merchandising.">
      <HeroSection />
      <main>
        <MetricsBand />
        <ReadingPaths />
        <ChaptersSection />
        <ResourcesSection />
      </main>
    </Layout>
  );
}
