[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Var266/gta6-clipper-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Var266/gta6-clipper-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Short — Trailer 2 Finale Chase (AI-cut)

Entry for [make.fun's `gta6-clipper-01` bounty](https://make.fun/bounty/gta6-clipper-01):
cut a GTA 6 moment into a vertical Short that hooks viewers with the hype,
then pitches make.fun. Places go by the video's YouTube views; the top 20
share $500 in USDC.

## The clip

A 19.6-second vertical (1080×1920) Short cut from Rockstar's official
Grand Theft Auto VI Trailer 2, using its finale action run — the sequence
the trailer itself builds toward:

1. **Hook (0–2s):** a military helicopter hunting over the Leonida swamp,
   with the news the audience is searching for right now: GTA 6 is out.
2. **The run (2–12s):** jet-ski escape, a biker with a stunt plane flying
   low overhead, a neon night drive through Vice City, a motorcycle wheelie
   past an explosion, an aerial tracking shot of a red car, and the sunset
   over Leonida. Jump-cut on the trailer's own shot boundaries; the two
   slow beats in the middle (a hug, a man dancing) were cut out.
3. **The pitch (12–20s):** over a slow-zoom freeze of the sunset shot —
   "KLIP INI DIBIKIN AI", then "Bikin klip keren pake AI, dapet DUIT di
   make.fun", with `make.fun/bounty/gta6-clipper-01` on screen throughout.

Why Indonesian: the live board shows Indonesian-titled hooks working —
an Indonesian fire-truck clip sits at rank 3 with 415 views, and two more
Indonesian clips are in the top 20. The title, captions, and pitch are all
in Indonesian for the same audience.

The source footage is Rockstar's Trailer 2 (downloaded with yt-dlp in the
build session); the cut, the vertical blur-fill grade, the captions, and
the pitch were all made by the agent with ffmpeg in that session. No
finished clip was downloaded or reused.

## The video

`VIDEO.json` names the uploaded YouTube Short. The video is public, its
description carries the bounty's line and the entrant's make.fun play code.

## Run it

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, byte for byte, after checking it
parses and names a YouTube URL. That is all the program does — the video
itself is the entry, and the house reads its views from YouTube.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
