# Chapter 3: Pricing Strategy and Promotion Management

## Concept Explanation

**Pricing Strategy** defines how products are priced to achieve business objectives such as profitability, market share, and customer loyalty. It balances competitive positioning, cost structure, and value perception.

**Promotion Management** involves planning, executing, and analyzing temporary price reductions or special offers designed to drive sales, clear inventory, or attract customers.

### Key Pricing Concepts

**Everyday Low Price (EDLP)**
- Consistently low prices without frequent promotions
- Builds customer trust and simplifies operations
- Examples: Walmart, Aldi

**High-Low Pricing**
- Regular higher prices with frequent promotional discounts
- Creates excitement and drives traffic during sales
- Examples: Traditional supermarkets

**Price Elasticity**
- Measures how demand changes with price
- Elastic products: Small price changes cause large demand shifts
- Inelastic products: Demand remains stable despite price changes

### Types of Promotions

| Promotion Type | Description | Example |
|----------------|-------------|---------|
| Temporary Price Reduction (TPR) | Short-term discount on regular price | "$2.99 (was $3.99)" |
| Buy One Get One (BOGO) | Customer receives free item with purchase | "Buy 1 Get 1 Free" |
| Multi-buy | Discount for purchasing multiple units | "3 for $5" |
| Percentage Off | Discount expressed as percentage | "20% Off" |
| Loyalty Program | Rewards for repeat customers | "Members save $1" |
| Digital Coupons | Electronic discounts | App-based coupons |

## Business Use Case

**Scenario: Back-to-School Promotion Campaign at SuperMart**

SuperMart, a national grocery chain, plans a 4-week back-to-school promotion focusing on lunchbox items and snacks.

### Planning Phase (6 weeks before)

**Pricing Analyst Actions:**
1. Analyzes last year's back-to-school performance
2. Reviews competitor pricing from flyers and websites
3. Identifies top 50 items for promotion based on:
   - Historical sales velocity
   - Margin contribution
   - Supplier funding availability

**Category Manager Decisions:**
- Selects mix of EDLP and high-low items
- Negotiates with suppliers for promotional funding
- Sets overall margin target: maintain 28% gross margin despite promotions

### Promotion Structure

**Week 1-2: Traffic Builders**
- Deep discounts on popular items (cereal, juice boxes)
- Goal: Drive store traffic
- Margin impact: Negative, but funded by suppliers

**Week 3-4: Margin Recovery**
- Moderate discounts on complementary items
- Goal: Capture additional basket spend
- Margin impact: Positive, as traffic converts to full-margin purchases

### Execution Details

**System Configuration:**
```
Promotion ID: BTS2024_001
Duration: Aug 1 - Aug 28
Items: 50 SKUs across 5 categories
Discounts: Mix of TPR, BOGO, and multi-buy
```

**Store Communication:**
- Planograms showing promotional displays
- Signage specifications
- Staff training on promotion details

### Monitoring and Optimization

**Daily Tracking:**
- Sales lift vs. baseline
- Margin performance
- Inventory levels
- Competitor response

**Week 2 Adjustment:**
- Data shows granola bars underperforming
- Pricing Analyst recommends increasing discount from 15% to 25%
- Category Manager approves adjustment
- System updated within 24 hours

### Results

| Metric | Target | Actual |
|--------|--------|--------|
| Sales Lift | +30% | +35% |
| Gross Margin | 28% | 27.5% |
| Customer Traffic | +15% | +18% |
| Basket Size | +8% | +12% |

## Users Involved

### Pricing Team

**Director of Pricing**
- Sets overall pricing strategy (EDLP vs. High-Low)
- Approves major pricing changes
- Manages pricing team budget and resources

**Pricing Analyst**
- Conducts competitive price analysis
- Develops pricing recommendations
- Models promotion scenarios
- Monitors price elasticity

**Pricing Coordinator**
- Enters pricing data into systems
- Validates pricing accuracy
- Coordinates with stores on price changes

### Merchandising Team

**Category Manager**
- Selects items for promotion
- Negotiates supplier funding
- Sets promotional depth and duration
- Owns category P&L impact

**Buyer**
- Secures promotional inventory
- Coordinates supplier deliveries
- Manages promotional buy quantities

### Marketing Team

**Marketing Manager**
- Designs promotional campaigns
- Creates advertising materials
- Manages promotional calendar

**Digital Marketing Specialist**
- Manages digital coupons and app promotions
- Tracks online engagement
- Optimizes digital offer redemption

### IT and Quality Roles

**Pricing System Administrator**
- Maintains pricing rules and hierarchies
- Configures promotion types
- Troubleshoots pricing issues

**Quality Engineer**
- Tests pricing calculations
- Validates promotion logic
- Ensures accurate price display at POS
- Tests edge cases (overlapping promotions, returns)

## Tools & Technologies Used

### Pricing Optimization Systems

**Revionics (Aptos)**
- AI-powered price optimization
- Competitive price monitoring
- Promotion effectiveness analytics

**Blue Yonder Pricing**
- Machine learning-based pricing
- Scenario modeling
- Real-time price adjustments

**PROS Pricing**
- Dynamic pricing engine
- Price elasticity modeling
- Competitive intelligence

### Promotion Management

**SAP Promotion Management**
- End-to-end promotion lifecycle
- Supplier collaboration
- Fund management

**Oracle Retail Promotion Engine**
- Complex promotion rules
- Multi-channel execution
- Real-time validation

**Tibco Reward (Formerly Ecrebo)**
- Personalized promotions
- Digital coupon management
- Loyalty integration

### Competitive Intelligence

**Profitero**
- Online price monitoring
- Competitor tracking
- Market share analysis

**Intelligence Node**
- Real-time price intelligence
- MAP (Minimum Advertised Price) monitoring
- Assortment comparison

**Wiser Solutions**
- In-store price audits
- Promotional compliance
- Shelf-level intelligence

### Point of Sale Integration

**NCR Silver**
- Price lookup and validation
- Promotion application
- Return handling

**Toshiba TCx**
- Real-time price updates
- Complex promotion processing
- Loyalty program integration

### Analytics and Reporting

**Tableau / Power BI**
- Pricing dashboards
- Promotion performance reports
- Margin analysis

**Python/R for Analysis**
- Price elasticity modeling
- A/B testing frameworks
- Predictive analytics

### Quality Engineering Tools

**Test Automation**
- Selenium for pricing UI testing
- API testing for price calculation endpoints
- Database validation for price tables

**Data Validation**
- SQL queries for price integrity checks
- Automated regression tests for promotion logic
- Cross-system reconciliation

## Key Metrics

### Pricing Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| Gross Margin % | (Revenue - COGS) / Revenue | Profitability |
| Price Index | Our Price / Competitor Price | Competitive position |
| Price Elasticity | % Change Quantity / % Change Price | Demand sensitivity |
| Markdown % | Markdown $ / Total Sales $ | Clearance efficiency |

### Promotion Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| Sales Lift | (Promo Sales - Baseline) / Baseline | Promotion effectiveness |
| Incremental Margin | Promo Margin - Baseline Margin | True profit impact |
| Redemption Rate | Coupons Used / Coupons Issued | Offer appeal |
| ROI | (Incremental Profit - Promo Cost) / Promo Cost | Investment return |

## Chapter Summary

Pricing and promotion management are critical levers for driving sales and profitability. Success requires balancing competitive positioning, customer value perception, and financial objectives. For IT and Quality Engineering professionals, pricing systems present unique challenges:

- Complex business rules must be accurately implemented
- Real-time calculations require robust testing
- Integration points multiply risk
- Financial impact demands high accuracy

## Chapter Checklist

- [ ] Can you explain EDLP vs. High-Low pricing strategies?
- [ ] Do you understand price elasticity and its importance?
- [ ] Can you identify different promotion types and their uses?
- [ ] Are you familiar with pricing optimization tools?
- [ ] Do you understand key pricing and promotion metrics?
- [ ] Can you describe testing considerations for pricing systems?

## Exercise

**Promotion Testing Scenario:**

Your client is implementing a new "Buy 2 Get 1 50% Off" promotion type. Design a comprehensive test plan covering:

1. Happy path scenarios (normal transactions)
2. Edge cases (returns, partial returns, mixed carts)
3. Boundary conditions (exactly 2 items, 3 items, 4 items)
4. Integration points (POS, inventory, reporting)
5. Performance under load (Black Friday scenario)

**Deliverable:** Create a test case matrix with expected results for each scenario.

---

*End of Chapter 3*
