# Chapter 4: Inventory Management and Replenishment

Inventory is where merchandising strategy meets operational reality. A category plan is only credible if replenishment policy can maintain availability at an acceptable capital cost.

## 1. Concept Explanation

Core replenishment constructs in grocery:

- **Forecast demand**: expected units by SKU-store-day.
- **Safety stock**: buffer against forecast error and lead-time variability.
- **Reorder point**: demand during lead time plus safety stock.
- **Order quantity policy**: case pack, minimum order, and shelf-life constraints.

Formula reference:

`Reorder Point = (Average Daily Demand x Lead Time Days) + Safety Stock`

For perishables, policy must also include shelf-life decay and shrink risk.

## 2. Why It Matters to the Business

Poor replenishment produces three costly outcomes:

1. Lost sales due to out-of-stocks.
2. Working capital inflation due to excess inventory.
3. Waste from expired or damaged stock.

A strong policy differentiates by category behavior. High-velocity ambient goods need service-level stability. Fresh categories need faster cycles and tighter controls on order quantities.

## 3. Example Scenario: Dairy and Fresh Replenishment Redesign

A 75-store grocery chain redesigned replenishment after recurring stockouts in milk and high shrink in fresh yogurt and ready-to-eat dairy.

### Policy Changes

- Store clusters reclassified by demand volatility.
- Service level targets set by category criticality.
- Forecast overrides restricted to reason-coded exceptions.
- Daily exception dashboard implemented for top 200 SKUs.

### Six-Month Outcome (Illustrative)

| KPI | Before | After |
|---|---:|---:|
| OSA (dairy top SKUs) | 92.7% | 97.1% |
| Shrink rate (fresh dairy) | 7.9% | 5.1% |
| Inventory turns | 14.0x | 16.8x |
| Emergency store transfers | 100 index | 63 index |

## 4. Data Interpretation

Initial diagnosis blamed suppliers. Detailed review showed internal parameter drift:

- Safety stocks were unchanged for 18 months despite increased demand volatility.
- Case-pack rounding inflated order quantity in low-volume stores.
- Promotion uplift factors were applied too broadly, causing over-orders in weak stores.

After parameter segmentation by store cluster and category behavior, both availability and waste improved simultaneously.

## 5. Visuals

![Inventory Turnover Trend](/assets/graphs/inventory_turnover_trend.png)

*Figure 4.1. Inventory turn improvement after replenishment parameter reset.*

![GMROI Bridge by Category](/assets/graphs/gmroi_bridge.png)

*Figure 4.2. GMROI explains whether margin gains justify inventory investment.*

## 6. Key Takeaways

- Replenishment parameters must be segmented, not copied chain-wide.
- Store overrides need governance to prevent policy drift.
- OSA and shrink should be monitored together to avoid one-sided optimization.
- GMROI is the right lens when choosing between service-level ambition and inventory intensity.
