const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceImages = [
    "/home/bilal/.gemini/antigravity/brain/caca7782-dff3-48c4-83cb-e8e822111461/pos_dashboard_1_1773321931622.png",
    "/home/bilal/.gemini/antigravity/brain/caca7782-dff3-48c4-83cb-e8e822111461/pos_hardware_1_1773321969442.png",
    "/home/bilal/.gemini/antigravity/brain/caca7782-dff3-48c4-83cb-e8e822111461/restaurant_pos_1_1773323029462.png",
    "/home/bilal/.gemini/antigravity/brain/caca7782-dff3-48c4-83cb-e8e822111461/cloud_software_1_1773323306691.png"
];

const targetDir = "/home/bilal/Desktop/Projects/next-multi-purpose-react-nextjs-template-2026-11-05-03-28-41-utc/next/next/public/assets/img";

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
            // Skip favicons or obvious logos
            if (/favicon|logo/i.test(file)) {
                console.log(`Skipping logo/favicon: ${fullPath}`);
                continue;
            }

            try {
                // Get metadata of the original image
                const metadata = await sharp(fullPath).metadata();
                const width = metadata.width;
                const height = metadata.height;

                if (width <= 10 && height <= 10) {
                    console.log(`Skipping tiny image: ${fullPath}`);
                    continue;
                }

                // Pick a random source image
                const srcPath = sourceImages[Math.floor(Math.random() * sourceImages.length)];

                // Read source, resize with crop, and overwrite target
                const buffer = await sharp(srcPath)
                    .resize(width, height, {
                        fit: sharp.fit.cover,
                        position: sharp.strategy.entropy // Smart crop
                    })
                    .toFormat(metadata.format === 'jpeg' ? 'jpeg' : 'png', {
                        force: true,
                        quality: 90
                    })
                    .toBuffer();

                fs.writeFileSync(fullPath, buffer);
                console.log(`Replaced: ${fullPath} (${width}x${height}) with ${path.basename(srcPath)}`);

            } catch (err) {
                console.error(`Error processing ${fullPath}:`, err.message);
            }
        }
    }
}

processDirectory(targetDir)
    .then(() => console.log('Finished replacing images!'))
    .catch(console.error);
