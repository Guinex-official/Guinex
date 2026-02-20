
const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
    const fd = fs.openSync(filePath, 'r');
    const signature = Buffer.alloc(8);
    fs.readSync(fd, signature, 0, 8, 0);

    // Check PNG signature
    if (signature.toString('hex') !== '89504e470d0a1a0a') {
        console.log('Not a PNG file');
        fs.closeSync(fd);
        return;
    }

    const ihdr = Buffer.alloc(25);
    fs.readSync(fd, ihdr, 0, 25, 8);

    // Width and Height are at offset 8 and 12 of the IHDR chunk (which starts after length(4) + type(4))
    // Actually IHDR data starts at offset 8 relative to chunk start.
    // Chunk layout: Length (4) | Type (4) | Data...
    // The previous read read 25 bytes from offset 8.
    // 0-3: Length of IHDR (usually 13)
    // 4-7: Type 'IHDR'
    // 8-11: Width
    // 12-15: Height

    const width = ihdr.readUInt32BE(8);
    const height = ihdr.readUInt32BE(12);

    console.log(`Dimensions: ${width}x${height}`);
    fs.closeSync(fd);
}

getPngDimensions('c:\\Users\\Fullstack\\dev\\guinex\\public\\images\\services\\backgroundservice.png');
