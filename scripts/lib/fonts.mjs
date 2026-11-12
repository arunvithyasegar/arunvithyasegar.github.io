/** Checksum-pinned, bundled DejaVu fonts for reproducible offline artwork. See scripts/fonts/LICENSE.txt. */
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
export const DISPLAY_FONT = Object.freeze({
  name: 'Display',
  family: 'DejaVu Sans',
  weight: 500,
  style: 'normal',
  file: 'scripts/fonts/DejaVuSans.ttf',
  sha256: '57f73e11f51999432bf7ab22ce55b6f945d5eca1bf824404cfa9ec2e3718c84e',
});
export function assertFontDigest(font, data) {
  const actual = createHash('sha256').update(data).digest('hex');
  if (actual !== font.sha256)
    throw new Error(
      `${font.family} from ${font.file} has SHA-256 ${actual}; expected ${font.sha256}. Refusing to generate images from changed font bytes.`,
    );
}
export async function loadFont(source) {
  const data = await readFile(resolve(source.file));
  assertFontDigest(source, data);
  return {
    name: source.name,
    data,
    weight: source.weight,
    style: source.style,
  };
}
