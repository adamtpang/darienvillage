# Image Compression Guide for Darien Village

## Current Large Images (Need Compression):
- `darien-village-hero.png` - 2.8M (main hero image)
- `gallery-1.png` - 3.0M
- `gallery-2.png` - 2.9M
- `gallery-3.png` - 2.7M
- `gallery-4.png` - 2.4M
- `gallery-5.png` - 2.5M
- `gallery-6.png` - 2.8M
- `gallery-7.png` - 2.4M

## Recommended Compression:
1. **Hero Image**: Compress to ~500KB (JPEG, 85% quality)
2. **Gallery Images**: Compress to ~200-300KB each
3. **Floor Plans**: Already optimized (~400KB)

## Tools You Can Use:
- **Online**: TinyPNG.com, Squoosh.app
- **Desktop**: ImageOptim (Mac), Caesium (Windows)
- **Bulk**: XnConvert (cross-platform)

## Target Sizes:
- Hero: 2.8M → 500KB (82% reduction)
- Gallery: 2.5M avg → 250KB avg (90% reduction)
- **Total savings**: ~20MB → ~4MB (80% reduction!)

## Steps:
1. Copy images from WSL to Windows: `\\wsl$\Ubuntu\home\adampangelinan\ubuntu-projects\darienvillage\src\assets`
2. Bulk compress using tool above
3. Replace original files