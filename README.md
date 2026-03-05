# Merchandising Core Concepts for Grocery Business

A professional, publication-quality reference book on grocery merchandising strategy, execution, analytics, and systems integration.

Live site: [GitHub Pages](https://arvind3.github.io/merchandising-core-concepts-for-grocery-business/)

## Table of Contents

1. [Introduction to Grocery Merchandising](docs/chapters/chapter-01-introduction-to-grocery-merchandising.md)
2. [Product Hierarchy and Categorization](docs/chapters/chapter-02-product-hierarchy-and-categorization.md)
3. [Pricing Strategy and Promotion Management](docs/chapters/chapter-03-pricing-strategy-and-promotion-management.md)
4. [Inventory Management and Replenishment](docs/chapters/chapter-04-inventory-management-and-replenishment.md)
5. [Supplier Management and Procurement](docs/chapters/chapter-05-supplier-management-and-procurement.md)
6. [Store Operations and Execution](docs/chapters/chapter-06-store-operations-and-execution.md)
7. [Data and Analytics in Merchandising](docs/chapters/chapter-07-data-and-analytics-in-merchandising.md)
8. [Technology Systems and Integration](docs/chapters/chapter-08-technology-systems-and-integration.md)
9. [Quality Engineering in Merchandising](docs/chapters/chapter-09-quality-engineering-in-merchandising.md)
10. [Future Trends and Digital Transformation](docs/chapters/chapter-10-future-trends-and-digital-transformation.md)

## What This Book Covers

- Category management and shelf optimization
- Pricing architecture and promotion effectiveness
- Inventory turns, service levels, and GMROI
- Supplier governance and procurement controls
- Store execution, planogram compliance, and layout performance
- Basket analytics and cross-category growth
- Merchandising systems integration and data contracts
- Quality engineering practices for high-risk retail flows

## Visual Assets

Visual explanations are stored in:

- `static/assets/graphs`
- `static/assets/diagrams`

These are embedded throughout the chapters with caption and interpretation context.

## Multi-Agent Production Pipeline

Content was rebuilt through a structured, sequential seven-agent workflow, with intermediate artifacts in `work/agent-outputs`:

1. Research Agent
2. Authoring Agent
3. Visualization Agent
4. Technical Editor Agent
5. Proofreading Agent
6. Publishing Agent
7. Quality Assurance Agent

## Local Development

Prerequisites:

- Node.js 22+
- npm

Commands:

```bash
npm install
npm run dev
npm run build
npm run serve
```

## Publishing

Deploy to GitHub Pages:

```bash
npm run gh:deploy
```

## Repository Structure

```text
/docs/chapters               Main manuscript chapters
/docs/resources              Glossary, references, author note
/static/assets/graphs        Quantitative charts
/static/assets/diagrams      Concept and process diagrams
/src/pages                   GitHub Pages landing page
/work/agent-outputs          Pipeline handoff artifacts and QA notes
```
