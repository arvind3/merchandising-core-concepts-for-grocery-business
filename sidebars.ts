import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Chapters',
      items: [
        'chapters/chapter-01-introduction-to-grocery-merchandising',
        'chapters/chapter-02-product-hierarchy-and-categorization',
        'chapters/chapter-03-pricing-strategy-and-promotion-management',
        'chapters/chapter-04-inventory-management-and-replenishment',
        'chapters/chapter-05-supplier-management-and-procurement',
        'chapters/chapter-06-store-operations-and-execution',
        'chapters/chapter-07-data-and-analytics-in-merchandising',
        'chapters/chapter-08-technology-systems-and-integration',
        'chapters/chapter-09-quality-engineering-in-merchandising',
        'chapters/chapter-10-future-trends-and-digital-transformation',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/glossary', 'resources/references', 'resources/about-author'],
    },
  ],
};

export default sidebars;
