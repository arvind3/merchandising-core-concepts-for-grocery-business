# Merchandising Core Concepts for the Grocery Business

**Interactive Docusaurus Book** built with the Multi-Agent Book Factory framework.

📖 **Live Book:** https://arvind3.github.io/merchandising-core-concepts-for-grocery-business/

## About This Book

This book provides a comprehensive introduction to merchandising core concepts in the grocery retail industry, designed specifically for **Quality Engineers and IT professionals**.

### Target Audience

- Quality Engineers and IT professionals new to grocery retail domain
- DevOps and product teams supporting retail projects
- Professionals needing clarity on business processes and workflows
- Anyone wanting to understand roles, responsibilities, and systems in grocery merchandising

### Learning Objectives

By the end of this book, readers will:
- Understand the end-to-end grocery merchandising lifecycle
- Learn key business processes and workflows
- Identify different business roles and their responsibilities
- Gain basic exposure to major retail systems and technologies
- Connect business concepts with testing and quality engineering activities

## Book Structure

Each chapter follows a consistent format:
1. **Concept Explanation** – Clear definition in simple language
2. **Business Use Case** – Real-world example from a grocery business
3. **Users Involved** – Roles and responsibilities
4. **Tools & Technologies Used** – Major systems, software, and platforms

### Chapters

1. Introduction to Grocery Merchandising
2. Product Hierarchy and Categorization
3. Pricing Strategy and Promotion Management
4. Inventory Management and Replenishment
5. Supplier Management and Procurement
6. Store Operations and Execution
7. Data and Analytics in Merchandising
8. Technology Systems and Integration
9. Quality Engineering in Merchandising
10. Future Trends and Digital Transformation

## Development

### Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000/merchandising-core-concepts-for-grocery-business/
```

### Build

```bash
# Production build
npm run build

# Serve production build locally
npm run serve
```

### Deploy to GitHub Pages

```bash
# Deploy to gh-pages branch
npm run gh:deploy
```

## Architecture

This book is built using the **Multi-Agent Book Factory** framework from https://github.com/arvind3/factory

### Agent Roles

- **Program Manager** – Workflow orchestration and quality gates
- **Research Synthesis** – Evidence gathering and source validation
- **Technical Architect** – Chapter blueprints and structure
- **Author** – Content drafting
- **Review Triad** – Quality review and feedback
- **Visual Intelligence** – Diagrams and visual assets
- **QA Eval** – Final quality assessment
- **Publishing** – Release and deployment

### Workflow Stages

```
brief → evidence → architecture → draft → review → revise → visuals → qa → publish
```

## Project Structure

```
merchandising-core-concepts-for-grocery-business/
├── docs/
│   ├── chapters/          # Chapter markdown files
│   ├── resources/         # Glossary, references, about
│   └── index.md           # Landing page
├── src/
│   └── css/
│       └── custom.css     # Custom styles
├── static/
│   └── img/               # Static assets
├── system/
│   ├── agents/            # Agent definitions
│   ├── workflows/         # Pipeline configuration
│   └── policies/          # Execution policies
├── .github/
│   └── workflows/         # CI/CD workflows
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts            # Sidebar navigation
└── package.json           # Dependencies and scripts
```

## License

MIT License - See LICENSE file for details.

## Author

**Arvind Bhardwaj**
- Senior DevOps Manager/Engineer
- 20+ years in IT
- Certified Product Manager

## Links

- [Factory Framework](https://github.com/arvind3/factory)
- [Robot Framework Book (Reference)](https://github.com/arvind3/RobotFrameworkBookWithIDE)
- [GitHub Pages](https://arvind3.github.io/merchandising-core-concepts-for-grocery-business/)
