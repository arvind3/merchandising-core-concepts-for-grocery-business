import { test, expect } from '@playwright/test';

const BASE_URL = 'https://arvind3.github.io/merchandising-core-concepts-for-grocery-business/';

test.describe('Homepage Validation', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check page title
    await expect(page).toHaveTitle(/Merchandising Core Concepts/);
    
    // Check main heading - use more specific selector
    const mainHeading = page.getByRole('heading', { name: /Merchandising Core Concepts for the Grocery Business/i, level: 1 });
    await expect(mainHeading).toBeVisible();
  });

  test('should display hero section with key features', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check for key feature badges in the hero area
    await expect(page.getByText('10 Chapters')).toBeVisible();
    await expect(page.getByText('Beginner-friendly')).toBeVisible();
    await expect(page.getByText('Real-world examples')).toBeVisible();
    await expect(page.getByText(/Tools.*Technologies/)).toBeVisible();
  });

  test('should display all 10 chapters', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check all 10 chapters are present
    const chapters = [
      'Chapter 1: Introduction to Grocery Merchandising',
      'Chapter 2: Product Hierarchy and Categorization',
      'Chapter 3: Pricing Strategy and Promotion Management',
      'Chapter 4: Inventory Management and Replenishment',
      'Chapter 5: Supplier Management and Procurement',
      'Chapter 6: Store Operations and Execution',
      'Chapter 7: Data and Analytics in Merchandising',
      'Chapter 8: Technology Systems and Integration',
      'Chapter 9: Quality Engineering in Merchandising',
      'Chapter 10: Future Trends and Digital Transformation',
    ];
    
    for (const chapter of chapters) {
      await expect(page.getByText(chapter)).toBeVisible();
    }
  });

  test('should have working navigation sidebar', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check for navigation elements using role-based selectors
    await expect(page.getByRole('link', { name: /Home/i })).toBeVisible();
    await expect(page.getByText('Chapters')).toBeVisible();
    await expect(page.getByText('Resources')).toBeVisible();
  });

  test('should have working chapter links', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click on Chapter 1 link
    await page.getByRole('link', { name: /Read Chapter 1/i }).click();
    
    // Wait for navigation
    await page.waitForLoadState('networkidle');
    
    // Verify we're on chapter 1 page - look for chapter content
    await expect(page.getByRole('heading', { name: /Introduction to Grocery Merchandising/i, level: 1 })).toBeVisible();
  });

  test('should have resources section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check resources links using role-based selectors
    await expect(page.getByRole('link', { name: 'Glossary' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'References' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About the Author' })).toBeVisible();
  });

  test('should have Agentic Framework section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check Agentic Framework section
    await expect(page.getByText(/Agentic Framework/)).toBeVisible();
    await expect(page.getByText(/Multi-Agent Book Factory/)).toBeVisible();
    
    // Check agent roles in table
    await expect(page.getByRole('cell', { name: 'Program Manager' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Author' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA Eval' })).toBeVisible();
  });

  test('should have quick start section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check quick start content
    await expect(page.getByText(/New to merchandising/i)).toBeVisible();
    await expect(page.getByText(/quick reference/i)).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    
    // Check main content is accessible on mobile
    await expect(page.getByRole('heading', { name: /Merchandising Core Concepts/i, level: 1 })).toBeVisible();
    await expect(page.getByText('10 Chapters')).toBeVisible();
  });

  test('should have proper book info', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check book info content
    await expect(page.getByText(/Quality Engineers and IT professionals/)).toBeVisible();
    await expect(page.getByText(/Beginner-friendly/)).toBeVisible();
    await expect(page.getByText(/Docusaurus/)).toBeVisible();
  });
});

test.describe('Navigation Validation', () => {
  test('should navigate from homepage to chapter 1', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Find and click Chapter 1 link
    await page.getByRole('link', { name: /Read Chapter 1/i }).click();
    await page.waitForLoadState('networkidle');
    
    // Verify chapter 1 content
    await expect(page.getByRole('heading', { name: /Introduction to Grocery Merchandising/i, level: 1 })).toBeVisible();
    
    // Check for expected sections
    await expect(page.getByRole('heading', { name: 'Concept Explanation', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Business Use Case', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Users Involved', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Tools.*Technologies/, level: 2 })).toBeVisible();
  });

  test('should navigate to glossary', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click glossary link
    await page.getByRole('link', { name: 'Glossary' }).click();
    await page.waitForLoadState('networkidle');
    
    // Verify glossary page
    await expect(page.getByRole('heading', { name: 'Glossary', level: 1 })).toBeVisible();
    await expect(page.getByText(/Application Programming Interface/)).toBeVisible();
  });

  test('should have working GitHub link', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check GitHub link in navbar
    const githubLink = page.getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com/);
  });
});

test.describe('Content Validation', () => {
  test('should have proper chapter structure', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    // Check standard sections exist in chapter
    await expect(page.getByRole('heading', { name: 'Concept Explanation', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Business Use Case', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Users Involved', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Tools.*Technologies Used/, level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Chapter Summary', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Chapter Checklist', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Exercise', level: 2 })).toBeVisible();
  });

  test('should have tables with proper formatting', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    // Check for tables
    const table = page.getByRole('table');
    await expect(table.first()).toBeVisible();
    
    // Check table has headers
    await expect(page.getByRole('columnheader').first()).toBeVisible();
  });

  test('should have code blocks', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    // Check for code blocks using code element
    const codeElements = page.locator('code');
    await expect(codeElements.first()).toBeVisible();
  });
});
