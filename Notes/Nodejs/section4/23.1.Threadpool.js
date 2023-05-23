const fs = require('fs')
const crypto = require('crypto')
// use forhashing passwords and take some time to do so

// console.log("First")



// fs.readFile(__dirname + '/22.Libuv.txt', (error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })



// console.log("Second")



// The answer is First, Second and then File Buffer contenr, This shows nodejs - Async and Non Blocking nature.


// Main thread - "Hey Libuv I need to read file content but that is a time consuming task, I dont want to block further code from being executed during this time, can I offload this task for you."

// Libuv - "Sure Bro No Problem, Unlike You, who is single threaded. I have pool of threads that I can use to sun some of there time consuming tasks. When the task is done the file contents are retrived and the assiciate callback function can be run."



// Main thread-------------------> Libuv (thread pool)
//            <------------------

// Libuv thread pool is pool of threads (processes) that nodejs use to load time consumning tasks and execute it.




//Sync - Blocking example
// Note - Sync Suffix methods run on main thread and always blocking.
// const start = Date.now()

// crypto.pbkdf2Sync("Password", "Salt", 1000000, 512, "sha512") // First this will execute
// crypto.pbkdf2Sync("Password", "Salt", 1000000, 512, "sha512") // second this
// crypto.pbkdf2Sync("Password", "Salt", 1000000, 512, "sha512") // then this
// console.log("Hash: ", `${Date.now() - start} ms`);




// Async - Non Blocking.
process.env.UV_THREADPOOL_SIZE=5
const MAX_CALLS = 3;

const start = Date.now()
for(let i=0; i< MAX_CALLS; i++){
    crypto.pbkdf2("Password", "Salt", 1000000, 512, "sha512",()=>{
        console.log("Hash: ", `${Date.now() - start} ms`)
    })
}

// Callback function will be run when proces completes
// this definatly dont take long time - In this example - all the three execution run in parall and run inside the libuv thread pool.

// Ex - crypto.pbkf3, fs.readFile all this runs in libuv seprate pool.
// it means is there are 3 task then 3 threads are there - so how many threads are there in toal.

// If we make Maxcall to 5 then we notice that 4 executes with same time which is 300 around but 5th one takes twice time then other

// it means in threat pool of libuv we have 4 threads, once 1st complete and then 5th starts.

// can we increase the threadpool size.
// we can ise process.env.UV_THREADPOOL_SIZE=5 roc then size increase


// Now let's say My computer PC have 8 cores - 2 of them are efficiency cores.


// Now I have main thread of JS, then I have Libuv - threadpool. if I have one task then it will execute in 1st core - in lets say - 200ms, Now if I change the calls and size to 8 then each thread takes one thread to execute - this will also takes 200ms.

// Now we have 16 calls hence 16 has to juggle in 8 cores so it takes double time - 400ms