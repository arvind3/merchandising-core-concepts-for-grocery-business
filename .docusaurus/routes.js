import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/merchandising-core-concepts-for-grocery-business/',
    component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/', '4af'),
    exact: true
  },
  {
    path: '/merchandising-core-concepts-for-grocery-business/',
    component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/', '1af'),
    routes: [
      {
        path: '/merchandising-core-concepts-for-grocery-business/',
        component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/', '1d3'),
        routes: [
          {
            path: '/merchandising-core-concepts-for-grocery-business/',
            component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/', '730'),
            routes: [
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-01-introduction-to-grocery-merchandising',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-01-introduction-to-grocery-merchandising', '786'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-02-product-hierarchy-and-categorization',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-02-product-hierarchy-and-categorization', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-03-pricing-strategy-and-promotion-management',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-03-pricing-strategy-and-promotion-management', '31d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-04-inventory-management-and-replenishment',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-04-inventory-management-and-replenishment', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-05-supplier-management-and-procurement',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-05-supplier-management-and-procurement', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-06-store-operations-and-execution',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-06-store-operations-and-execution', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-07-data-and-analytics-in-merchandising',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-07-data-and-analytics-in-merchandising', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-08-technology-systems-and-integration',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-08-technology-systems-and-integration', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-09-quality-engineering-in-merchandising',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-09-quality-engineering-in-merchandising', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/chapters/chapter-10-future-trends-and-digital-transformation',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/chapters/chapter-10-future-trends-and-digital-transformation', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/resources/about-author',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/resources/about-author', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/resources/glossary',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/resources/glossary', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/merchandising-core-concepts-for-grocery-business/resources/references',
                component: ComponentCreator('/merchandising-core-concepts-for-grocery-business/resources/references', '6ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
