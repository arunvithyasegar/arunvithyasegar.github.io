/** Bundled DejaVu fonts (see scripts/fonts/LICENSE.txt) keep artwork reproducible offline. */
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

/** The display face, shared by the icon monogram and the share cards. */
export const DISPLAY_FONT = Object.freeze({
  name: 'Display',
  family: 'Inter',
  weight: 500,
  style: 'normal',
  file: 'scripts/fonts/DejaVuSans.ttf',
  sha256: '57f73e11f51999432bf7ab22ce55b6f945d5eca1bf824404cfa9ec2e3718c84e',
});

export function assertFontDigest(font, data) {
  const actual = createHash('sha256').update(data).digest('hex');
  if (actual !== font.sha256) {
    throw new Error(
      `${font.family} ${font.weight} from ${font.url} has SHA-256 ${actual}; ` +
        `expected ${font.sha256}. Refusing to generate images from changed font bytes.`,
    );
  }
}

/**
 * Fetches one exact TTF as a satori font entry, and refuses any response whose
 * bytes have changed.
 */
export async function loadFont(source) {
  if (source.file) {
    const data = await readFile(resolve(source.file));
    assertFontDigest(source, data);
    return {
      name: source.name,
      data,
      weight: source.weight,
      style: source.style,
    };
  }
  let lastError;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    let data;
    try {
      const response = await fetch(source.url, {
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      continue;
    }

    // A digest mismatch is not a transient network failure: do not retry it
    // and obscure the exact changed-byte error.
    assertFontDigest(source, data);

    return {
      name: source.name,
      data,
      weight: source.weight,
      style: source.style,
    };
  }

  throw new Error(
    `Failed to download ${source.family} ${source.weight} after two 15-second attempts`,
    { cause: lastError },
  );
}
