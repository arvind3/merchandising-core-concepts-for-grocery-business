import { test, expect } from '@playwright/test';

const BASE_URL = 'https://arvind3.github.io/merchandising-core-concepts-for-grocery-business/';

test.describe('Homepage Validation', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check page title
    await expect(page).toHaveTitle(/Merchandising Core Concepts/);
    
    // Check main heading
    const mainHeading = page.locator('h1').first();
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('Merchandising Core Concepts for the Grocery Business');
  });

  test('should display hero section with key features', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check hero section exists
    const heroSection = page.locator('.hero-section');
    await expect(heroSection).toBeVisible();
    
    // Check for key feature badges
    await expect(page.locator('text=10 Chapters')).toBeVisible();
    await expect(page.locator('text=Beginner-friendly')).toBeVisible();
    await expect(page.locator('text=Real-world examples')).toBeVisible();
    await expect(page.locator('text=Tools & Technologies')).toBeVisible();
  });

  test('should display all 10 chapters', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check chapter grid exists
    const chapterGrid = page.locator('.chapter-grid');
    await expect(chapterGrid).toBeVisible();
    
    // Check all 10 chapters are present
    const chapters = [
      'Introduction to Grocery Merchandising',
      'Product Hierarchy and Categorization',
      'Pricing Strategy and Promotion Management',
      'Inventory Management and Replenishment',
      'Supplier Management and Procurement',
      'Store Operations and Execution',
      'Data and Analytics in Merchandising',
      'Technology Systems and Integration',
      'Quality Engineering in Merchandising',
      'Future Trends and Digital Transformation',
    ];
    
    for (const chapter of chapters) {
      await expect(page.locator(`text=${chapter}`)).toBeVisible();
    }
  });

  test('should have working navigation sidebar', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check sidebar exists
    const sidebar = page.locator('[class*="sidebar"]');
    await expect(sidebar).toBeVisible();
    
    // Check Home link
    await expect(page.locator('text=Home')).toBeVisible();
    
    // Check Chapters category
    await expect(page.locator('text=Chapters')).toBeVisible();
    
    // Check Resources category
    await expect(page.locator('text=Resources')).toBeVisible();
  });

  test('should have working chapter links', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click on Chapter 1 link
    await page.click('text=Chapter 1: Introduction');
    
    // Wait for navigation
    await page.waitForLoadState('networkidle');
    
    // Verify we're on chapter 1 page
    await expect(page.locator('h1')).toContainText('Introduction to Grocery Merchandising');
  });

  test('should have resources section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check resources links
    await expect(page.locator('text=Glossary')).toBeVisible();
    await expect(page.locator('text=References')).toBeVisible();
    await expect(page.locator('text=About the Author')).toBeVisible();
  });

  test('should have Agentic Framework section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check Agentic Framework section
    await expect(page.locator('text=Agentic Framework')).toBeVisible();
    await expect(page.locator('text=Multi-Agent Book Factory')).toBeVisible();
    
    // Check agent roles table
    await expect(page.locator('text=Program Manager')).toBeVisible();
    await expect(page.locator('text=Author')).toBeVisible();
    await expect(page.locator('text=QA Eval')).toBeVisible();
  });

  test('should have quick start section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check quick start section
    const quickStart = page.locator('.quick-start');
    await expect(quickStart).toBeVisible();
    
    // Check quick start links
    await expect(page.locator('text=New to merchandising?')).toBeVisible();
    await expect(page.locator('text=Quick reference')).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    
    // Check hero section is visible on mobile
    const heroSection = page.locator('.hero-section');
    await expect(heroSection).toBeVisible();
    
    // Check main content is accessible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper book info footer', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check book info section
    const bookInfo = page.locator('.book-info');
    await expect(bookInfo).toBeVisible();
    
    // Check key info
    await expect(page.locator('text=Quality Engineers')).toBeVisible();
    await expect(page.locator('text=Beginner-friendly')).toBeVisible();
    await expect(page.locator('text=Docusaurus')).toBeVisible();
  });
});

test.describe('Navigation Validation', () => {
  test('should navigate from homepage to chapter 1', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Find and click Chapter 1 link
    await page.click('text=Read Chapter 1');
    await page.waitForLoadState('networkidle');
    
    // Verify chapter 1 content
    await expect(page.locator('h1')).toContainText('Introduction to Grocery Merchandising');
    
    // Check for expected sections
    await expect(page.locator('text=Concept Explanation')).toBeVisible();
    await expect(page.locator('text=Business Use Case')).toBeVisible();
    await expect(page.locator('text=Users Involved')).toBeVisible();
    await expect(page.locator('text=Tools & Technologies')).toBeVisible();
  });

  test('should navigate to glossary', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click glossary link
    await page.click('text=Glossary');
    await page.waitForLoadState('networkidle');
    
    // Verify glossary page
    await expect(page.locator('h1')).toContainText('Glossary');
    await expect(page.locator('text=Application Programming Interface')).toBeVisible();
  });

  test('should have working GitHub link', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check GitHub link in navbar
    const githubLink = page.locator('a[href*="github.com/arvind3/merchandising"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com/);
  });
});

test.describe('Content Validation', () => {
  test('should have proper chapter structure', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    // Check standard sections exist in chapter
    await expect(page.locator('text=Concept Explanation')).toBeVisible();
    await expect(page.locator('text=Business Use Case')).toBeVisible();
    await expect(page.locator('text=Users Involved')).toBeVisible();
    await expect(page.locator('text=Tools & Technologies Used')).toBeVisible();
    await expect(page.locator('text=Chapter Summary')).toBeVisible();
    await expect(page.locator('text=Chapter Checklist')).toBeVisible();
    await expect(page.locator('text=Exercise')).toBeVisible();
  });

  test('should have tables with proper formatting', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    // Check for tables
    const tables = page.locator('table');
    await expect(tables.first()).toBeVisible();
    
    // Check table has headers
    await expect(page.locator('table th').first()).toBeVisible();
  });

  test('should have code blocks', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    // Check for code blocks (they should have pre/code elements)
    const codeBlocks = page.locator('pre code');
    await expect(codeBlocks.first()).toBeVisible();
  });
});
