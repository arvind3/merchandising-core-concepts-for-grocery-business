# Multi-Agent Book Factory Architecture

**Target Audience:** Product Architect

Diagram source (draw.io): `docs/book-factory-architecture.drawio`

Open directly in diagrams.net:
- https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=book-factory-architecture.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Farvind3%2Ffactory%2Fmaster%2Fdocs%2Fbook-factory-architecture.drawio

## Key design highlights
- Deterministic control plane owned by Program Manager
- Non-deterministic generation in Author stage (LLM drafting)
- Hybrid visual stage (Mermaid → PlantUML → draw.io)
- Deterministic QA gates before publishing
- Explicit human-in-the-loop approval and escalation

## Loop strategy
- **Loop A:** Draft ↔ Review ↔ Revise (max **3** iterations/chapter)
- **Loop B:** Visuals ↔ QA (max **2** iterations/chapter)

## Human-in-the-loop
- Stage-gate feedback at PM + QA checkpoints
- Approve / reject / request revision
- Escalation for risk, quality, or policy failures
