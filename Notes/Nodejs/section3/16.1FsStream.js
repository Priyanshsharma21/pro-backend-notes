const fs = require('fs')
const zlib = require('zlib')


const gzip = zlib.createGzip()
const readableStream = fs.createReadStream("./demo.txt", {
    encoding: "utf-8",
    highWaterMark: 2 // now the size of buffer is 2 and it reads 2 byts at a time
})

const writableStream = fs.createWriteStream("./file2.txt");

//pipe

readableStream.pipe(writableStream)


//zlib - transform a stream. - Compression - using zlib

readableStream.pipe(gzip).pipe(fs.writableStream("./file2.txt.gz")) //  we are converting the readable stream to transform it and convert it to writable stream (transformed stream


readableStream.on("data", (chunk) => {
    console.log(chunk)
    writableStream.write(chunk)
})


// Buffer has 64kb size and when the size of file is 128kb then it will divide it into two chunks.