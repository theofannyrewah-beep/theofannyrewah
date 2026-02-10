const fs = require('fs');
const https = require('https');
const path = require('path');

const candidates = {
    card: [
        'https://raw.githubusercontent.com/pmndrs/react-three-fiber/master/examples/src/demos/Lanyard/assets/card.png',
        'https://raw.githubusercontent.com/pmndrs/drei-assets/master/lanyard/card.png'
    ],
    band: [
        'https://raw.githubusercontent.com/pmndrs/react-three-fiber/master/examples/src/demos/Lanyard/assets/band.jpg',
        'https://raw.githubusercontent.com/pmndrs/drei-assets/master/lanyard/band.jpg'
    ]
};

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(() => resolve(true));
                });
            } else {
                resolve(false);
            }
        }).on('error', () => resolve(false));
    });
};

const createFallback = (dest, type) => {
    // Simple 1x1 pixel transparent or white PNG base64
    const base64 = type === 'card'
        ? 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==' // white
        : 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='; // black

    fs.writeFileSync(dest, Buffer.from(base64, 'base64'));
    console.log(`Created fallback for ${dest}`);
};

const processImage = async (name, dest) => {
    const urls = candidates[name];
    for (const url of urls) {
        if (await download(url, dest)) {
            console.log(`Downloaded ${name} from ${url}`);
            return;
        }
    }
    console.log(`Failed to download ${name}, creating fallback.`);
    createFallback(dest, name);
};

(async () => {
    // Ensure public/images exists
    const dir = path.resolve(__dirname, 'public/images');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    await processImage('card', path.resolve(dir, 'card_new.png'));
    await processImage('band', path.resolve(dir, 'band.jpg'));
})();
