# The Unpaid Nutritionist

[![make.fun](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/bagusin03/roast-smart-fridge-nutritionist/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/bagusin03/roast-smart-fridge-nutritionist/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

One line, 157 characters, roasting the smart fridge as an unpaid nutritionist that moved into the kitchen: it sends a weekly report on my midnight snacking and shames me in push notifications.

`main.ts` writes the single 157-character line to `/output/entry.txt`:

> My smart fridge sends a weekly report on my midnight snacking, like a nutritionist I never hired who moved into my kitchen to shame me in push notifications.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–160 character single-line gate, rejects leading/trailing whitespace, and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
