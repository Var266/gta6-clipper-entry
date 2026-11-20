// Entry for make.fun's gta6-clipper-01 bounty (Node 22, standard library only).
//
// The video is the entry: a vertical GTA 6 Short cut from Rockstar's Trailer 2
// finale chase, uploaded to YouTube as a public video carrying make.fun's pitch
// and the bounty's line in its description. This program does the one mechanical
// thing the gate needs: it hands VIDEO.json — the file naming the video's URL —
// from the repository root to the output directory, byte for byte, after
// checking the file parses and names a YouTube address with a valid
// 11-character video id. It reads no network,
// keeps no clock, and writes the same bytes on every run.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`gta6-clipper-entry: ${message}`);
  process.exit(1);
}

const sourcePath = join(repoRoot, 'VIDEO.json');
let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  fail(`cannot read ${sourcePath}: ${(err as Error).message}`);
}

let doc: unknown;
try {
  doc = JSON.parse(raw.toString('utf8'));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

const url = (doc as { url?: unknown }).url;
const looksLikeYoutube =
  typeof url === 'string' &&
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?)|youtu\.be\/)/.test(url);
if (!looksLikeYoutube) {
  fail('VIDEO.json does not name a YouTube video URL');
}

// The gate only accepts an 11-character video id ([A-Za-z0-9_-]{11}):
// reject a well-formed YouTube address carrying a short, long or
// malformed id here instead of shipping an entry the gate refuses.
const idMatch = (url as string).match(
  /(?:shorts\/|watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/,
);
const videoId = idMatch?.[1];
if (!videoId || !/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
  fail('VIDEO.json URL does not carry an 11-character YouTube video id');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'VIDEO.json'), raw);
