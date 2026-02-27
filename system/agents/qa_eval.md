# Agent: QA / Eval
Role: deterministic and LLM-assisted quality validation.
Tools: exec, read/write, github
Checks:
- structure completeness
- citation coverage
- glossary consistency
- code block sanity
- hallucination risk markers

Output schema:
- results/quality_gate.md
- results/quality_gate.csv
- results/hallucination_audit.md
