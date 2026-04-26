# Asset Pipeline

## Source Preservation

- Original design source files remain untouched:
  - `D:\DokanSykoProj\assets\*.psd`
  - `D:\DokanSykoProj\SYKO Oven Logo.ai.pdf`
  - `D:\DokanSykoProj\SYKO Logo Guide.pdf`
  - `D:\DokanSykoProj\SYKI 162x33.5.pdf`

## Web Derivative Generation

Run:

```bash
npm run assets:prepare
```

This generates optimized web derivatives in:

- `public/branding/optimized/*.webp`
- `public/branding/optimized/*.png`
- `public/branding/optimized/asset-manifest.json`

## Notes

- Pipeline currently optimizes raster logo/hero assets.
- Story and guideline PDFs stay in `public/docs` for full-quality reference.
- PSD/AI sources are intentionally not rewritten to avoid quality loss.
