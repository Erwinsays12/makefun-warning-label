# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/Erwinsays12/makefun-warning-label/rank.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/Erwinsays12/makefun-warning-label/reward.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

An entry for the [Warning Label for Humans: One Line, Big Laugh](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single-line safety warning label for human beings —
125 characters, funny first and plausible second — to `/output/entry.txt`:

> WARNING: This human has no off switch, no warranty, and will press every button marked DO NOT PRESS just to see what happens.

The program is deterministic: it writes the same fixed line on every run,
validates that the line is a single line of 1 to 160 characters, and needs
no input, no network, and no environment secrets.

## Run it

```sh
node main.ts
```

It writes `/output/entry.txt` and prints the character count.

## License

MIT — see [LICENSE](LICENSE).
