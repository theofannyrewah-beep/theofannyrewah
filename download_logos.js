const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Capcut_logo.svg/1200px-Capcut_logo.svg.png',
        dest: 'public/images/capcut.png'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VMix_Logo.svg/2048px-VMix_Logo.svg.png',
        dest: 'public/images/vmix.png'
    }
];

const download = (url, dest) => {
    const file = fs.createWriteStream(path.resolve(__dirname, dest));
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(url, options, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${dest}: Status Code ${response.statusCode}`);
            file.close();
            fs.unlink(dest, () => { });
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => console.log(`Downloaded ${dest}`));
        });
    }).on('error', (err) => {
        fs.unlink(dest);
        console.error(`Error downloading ${dest}: ${err.message}`);
    });
};

images.forEach(img => download(img.url, img.dest));
