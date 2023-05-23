const https = require('https')

const Start = Date.now()
// process.env.UV_THREADPOOL_SIZE=5
const MAX_CALLS = 1

for(let i=0; i<MAX_CALLS; i++){
    https.request("https://www.google.com", (res)=>{
        res.on("date", ()=>{})
        res.on("end", ()=>{
            console.log(`Request ${i + 1}`, Date.now() - Start)
        })
    }).end()
}

// here we have secure version of HTTP - we are making request to google.com and in callback we get response, on events like date and end we are calling the callback functions.


// This experiment tells use that - Both pbk2s of crypto and https request are Async - But crypto uses threadpool and request dosen't.

// Because average time in 12 also is same and dosen get affected at all...

// Hence- we come to conclusion that HTTPS is network bond operation and not CPU bond operation.

// So only CPU bond operations are affected by threadpool and

// In nodejs async methods are handle by libuv.
// It uses two ways for that - Native async machenism or threadpool
// Possible uses Native async machenism to avoide blocking main thread.
// Since Network calls is part of OS so it have different machenism - epoll - linux, kqueue - Macos and IO Completion for wndows.



// File and CPU tasks  - thread pool is used by libuv.