import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const webRoot = process.cwd();
const outputDir = path.join(webRoot, "public", "branding", "optimized");

const sources = [
  {
    input: path.join(webRoot, "public", "branding", "dukan-logo.jpeg"),
    baseName: "dukan-logo",
    sizes: [640, 1024],
  },
  {
    input: path.join(webRoot, "public", "branding", "syko-hero-reference.png"),
    baseName: "syko-hero-reference",
    sizes: [960, 1440],
  },
];

async function ensureDir(target) {
  await fs.mkdir(target, { recursive: true });
}

async function optimizeAsset(source) {
  for (const width of source.sizes) {
    const webpOutput = path.join(outputDir, `${source.baseName}-${width}.webp`);
    const pngOutput = path.join(outputDir, `${source.baseName}-${width}.png`);

    await sharp(source.input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(webpOutput);

    await sharp(source.input)
      .resize({ width, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(pngOutput);
  }
}

async function writeManifest() {
  const manifestPath = path.join(outputDir, "asset-manifest.json");
  const manifest = {
    generatedAt: new Date().toISOString(),
    note: "Source PSD/PDF/AI files are preserved outside web/public in original locations.",
    outputs: await fs.readdir(outputDir),
  };
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
}

async function main() {
  await ensureDir(outputDir);
  for (const source of sources) {
    await optimizeAsset(source);
  }
  await writeManifest();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

