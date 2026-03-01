import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

const features = [
  {
    title: '10 Chapters',
    description: 'Comprehensive coverage of grocery merchandising',
    icon: '📖',
  },
  {
    title: 'Beginner-Friendly',
    description: 'Simple language for technical professionals',
    icon: '🎯',
  },
  {
    title: 'Real-World Examples',
    description: 'Business use cases from actual grocery scenarios',
    icon: '💼',
  },
  {
    title: 'Tools & Technologies',
    description: 'Major retail systems and platforms covered',
    icon: '🛠️',
  },
];

const chapters = [
  {
    number: '01',
    title: 'Introduction to Grocery Merchandising',
    description: 'Merchandising lifecycle, key stakeholders, and core concepts',
    icon: '📚',
  },
  {
    number: '02',
    title: 'Product Hierarchy and Categorization',
    description: 'Product taxonomy, planograms, and category management',
    icon: '📊',
  },
  {
    number: '03',
    title: 'Pricing Strategy and Promotion Management',
    description: 'Pricing models, promotions, and optimization strategies',
    icon: '💰',
  },
  {
    number: '04',
    title: 'Inventory Management and Replenishment',
    description: 'Inventory control, safety stock, and automated replenishment',
    icon: '📦',
  },
  {
    number: '05',
    title: 'Supplier Management and Procurement',
    description: 'Sourcing, procurement workflows, and supplier relationships',
    icon: '🤝',
  },
  {
    number: '06',
    title: 'Store Operations and Execution',
    description: 'Store operations, planogram compliance, and execution',
    icon: '🏪',
  },
  {
    number: '07',
    title: 'Data and Analytics in Merchandising',
    description: 'Business intelligence, analytics, and data-driven decisions',
    icon: '📈',
  },
  {
    number: '08',
    title: 'Technology Systems and Integration',
    description: 'Retail systems, integration patterns, and APIs',
    icon: '🔗',
  },
  {
    number: '09',
    title: 'Quality Engineering in Merchandising',
    description: 'Testing strategies, automation, and QE best practices',
    icon: '🧪',
  },
  {
    number: '10',
    title: 'Future Trends and Digital Transformation',
    description: 'AI, IoT, cloud, and the future of grocery retail',
    icon: '🚀',
  },
];

const targetAudience = [
  { role: 'Quality Engineers', icon: '🧪' },
  { role: 'IT Professionals', icon: '💻' },
  { role: 'DevOps Teams', icon: '⚙️' },
  { role: 'Product Teams', icon: '📋' },
];

function Feature({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function ChapterCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: string }) {
  return (
    <Link 
      to={`/chapters/chapter-${number.toLowerCase()}-introduction-to-grocery-merchandising`.replace(number.toLowerCase(), number.toLowerCase())}
      className={clsx('col col--4', styles.chapterLink)}
    >
      <div className={styles.chapterCard}>
        <div className={styles.chapterNumber}>Chapter {number}</div>
        <div className={styles.chapterIcon}>{icon}</div>
        <h3 className={styles.chapterTitle}>{title}</h3>
        <p className={styles.chapterDescription}>{description}</p>
        <div className={styles.chapterLinkText}>Read Chapter →</div>
      </div>
    </Link>
  );
}

function HomeHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          Merchandising Core Concepts for the Grocery Business
        </h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          A comprehensive guide for <strong>Quality Engineers and IT professionals</strong>
        </p>
        
        <div className={styles.heroBadges}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.heroBadge}>
              <span className={styles.heroBadgeIcon}>{feature.icon}</span>
              <span className={styles.heroBadgeText}>{feature.title}</span>
            </div>
          ))}
        </div>

        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/chapters/chapter-01-introduction-to-grocery-merchandising">
            Start Reading →
          </Link>
          <Link
            className={clsx('button button--outline button--secondary button--lg', styles.heroButton)}
            to="/resources/glossary">
            View Glossary
          </Link>
        </div>
      </div>
    </header>
  );
}

function TargetAudienceSection(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={clsx('text--center', styles.sectionTitle)}>
          Designed For
        </h2>
        <div className="row">
          {targetAudience.map((item, idx) => (
            <div key={idx} className="col col--3">
              <div className={styles.audienceCard}>
                <span className={styles.audienceIcon}>{item.icon}</span>
                <span className={styles.audienceRole}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChaptersSection(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.chaptersSection)}>
      <div className="container">
        <h2 className={clsx('text--center', styles.sectionTitle)}>
          Chapters
        </h2>
        <p className={clsx('text--center', styles.sectionSubtitle)}>
          A complete journey through grocery merchandising concepts
        </p>
        <div className="row">
          {chapters.map((chapter, idx) => (
            <ChapterCard
              key={idx}
              number={chapter.number}
              title={chapter.title}
              description={chapter.description}
              icon={chapter.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection(): JSX.Element {
  const benefits = [
    {
      title: 'End-to-End Understanding',
      description: 'Learn the complete grocery merchandising lifecycle from planning to execution',
      icon: '🔄',
    },
    {
      title: 'Business Process Knowledge',
      description: 'Understand workflows, roles, and responsibilities across the organization',
      icon: '📋',
    },
    {
      title: 'Technology Exposure',
      description: 'Gain familiarity with major retail systems and integration patterns',
      icon: '💻',
    },
    {
      title: 'QE Connection',
      description: 'Connect business concepts with testing and quality engineering activities',
      icon: '🧪',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={clsx('text--center', styles.sectionTitle)}>
          What You Will Learn
        </h2>
        <div className="row">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col col--3">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgenticFrameworkSection(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.frameworkSection)}>
      <div className="container">
        <h2 className={clsx('text--center', styles.sectionTitle)}>
          Built with Agentic Framework
        </h2>
        <p className={clsx('text--center', styles.sectionSubtitle)}>
          This book was created using the Multi-Agent Book Factory framework
        </p>
        <div className={styles.frameworkTable}>
          <table>
            <thead>
              <tr>
                <th>Agent</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Program Manager</td>
                <td>Workflow orchestration and quality gates</td>
              </tr>
              <tr>
                <td>Research Synthesis</td>
                <td>Evidence gathering and source validation</td>
              </tr>
              <tr>
                <td>Technical Architect</td>
                <td>Chapter blueprints and structure</td>
              </tr>
              <tr>
                <td>Author</td>
                <td>Content drafting</td>
              </tr>
              <tr>
                <td>Review Triad</td>
                <td>Quality review and feedback</td>
              </tr>
              <tr>
                <td>QA Eval</td>
                <td>Final quality assessment</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text--center">
          <Link
            className="button button--outline button--primary button--md"
            to="https://github.com/arvind3/factory">
            Learn More About Factory Framework →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FooterCTA(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.ctaSection)}>
      <div className="container text--center">
        <h2 className={styles.ctaTitle}>
          Ready to Start Learning?
        </h2>
        <p className={styles.ctaDescription}>
          Begin your journey through grocery merchandising concepts
        </p>
        <Link
          className={clsx('button button--primary button--lg', styles.ctaButton)}
          to="/chapters/chapter-01-introduction-to-grocery-merchandising">
          Start with Chapter 1 →
        </Link>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive guide for Quality Engineers and IT professionals">
      <HomeHeader />
      <main>
        <TargetAudienceSection />
        <WhatYouGetSection />
        <ChaptersSection />
        <AgenticFrameworkSection />
        <FooterCTA />
      </main>
    </Layout>
  );
}
