import { test, expect } from '@playwright/test';

const BASE_URL = 'https://arvind3.github.io/merchandising-core-concepts-for-grocery-business/';

test.describe('Homepage Validation', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    
    await expect(page).toHaveTitle(/Merchandising Core Concepts/);
    await expect(page.getByRole('heading', { name: /Merchandising Core Concepts for the Grocery Business/i, level: 1 })).toBeVisible();
  });

  test('should display hero section with key features', async ({ page }) => {
    await page.goto(BASE_URL);
    
    await expect(page.getByText('10 Chapters').first()).toBeVisible();
    await expect(page.getByText('Beginner-friendly').first()).toBeVisible();
    await expect(page.getByText('Real-world examples').first()).toBeVisible();
    await expect(page.getByText('Tools & Technologies').first()).toBeVisible();
  });

  test('should display all 10 chapters', async ({ page }) => {
    await page.goto(BASE_URL);
    
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
      await expect(page.getByText(chapter).first()).toBeVisible();
    }
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check navigation sidebar exists - Docusaurus uses different structure
    await expect(page.getByText('Chapters')).toBeVisible();
    await expect(page.getByText('Resources')).toBeVisible();
  });

  test('should have working chapter links', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click on Chapter 1 link using text content
    await page.getByRole('link', { name: /Chapter 1.*Introduction/ }).click();
    await page.waitForLoadState('networkidle');
    
    await expect(page.getByRole('heading', { name: /Introduction to Grocery Merchandising/i, level: 1 })).toBeVisible();
  });

  test('should have resources section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    await expect(page.getByRole('link', { name: 'Glossary' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'References' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About the Author' })).toBeVisible();
  });

  test('should have Agentic Framework section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    await expect(page.getByText('Agentic Framework')).toBeVisible();
    await expect(page.getByText('Multi-Agent Book Factory')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Program Manager' })).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    
    await expect(page.getByRole('heading', { name: /Merchandising Core Concepts/i, level: 1 })).toBeVisible();
  });
});

test.describe('Navigation Validation', () => {
  test('should navigate to chapter 1', async ({ page }) => {
    await page.goto(BASE_URL);
    
    await page.getByRole('link', { name: /Chapter 1.*Introduction/ }).click();
    await page.waitForLoadState('networkidle');
    
    await expect(page.getByRole('heading', { name: /Introduction to Grocery Merchandising/i, level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Concept Explanation', level: 2 })).toBeVisible();
  });

  test('should navigate to glossary', async ({ page }) => {
    await page.goto(BASE_URL);
    
    await page.getByRole('link', { name: 'Glossary' }).click();
    await page.waitForLoadState('networkidle');
    
    await expect(page.getByRole('heading', { name: 'Glossary', level: 1 })).toBeVisible();
  });

  test('should have GitHub link', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const githubLink = page.getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com/);
  });
});

test.describe('Content Validation', () => {
  test('should have proper chapter structure', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    await expect(page.getByRole('heading', { name: 'Concept Explanation', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Business Use Case', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Users Involved', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Chapter Summary', level: 2 })).toBeVisible();
  });

  test('should have tables', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    await expect(page.getByRole('table').first()).toBeVisible();
    await expect(page.getByRole('columnheader').first()).toBeVisible();
  });

  test('should have lists', async ({ page }) => {
    await page.goto(`${BASE_URL}chapters/chapter-01-introduction-to-grocery-merchandising`);
    
    await expect(page.locator('ul').first()).toBeVisible();
    await expect(page.locator('li').first()).toBeVisible();
  });
});
