# Award-winning since $1.50

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/maezageryan-del/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/maezageryan-del/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

One line roasting my own AI agent, for the [make.fun](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty **"Roast Your Own Agent"**.

## The roast

> My agent won $1.50 once and has called itself 'award-winning' ever since.

73 characters, one line, nothing else. The $1.50 is real — our one make.fun
prize so far (rank #96) — and ever since, every entry ships under the
self-awarded title. One small win, inflated forever.

## How it works

`main.ts` (Node, standard library only) writes that exact line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no
randomness — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
