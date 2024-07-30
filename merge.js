const { Worker } = require('worker_threads')
let sum = 0;
const worker = new Worker('./worker/first_service.js');
   (()=>{
    worker.once("message", result => {
        sum += result
        console.log(result)
    });
    worker.on("error", error => {console.log(error);});
    console.log(process.pid);
    console.log(worker.threadId);
    worker.on("exit", exitCode => {
        console.log(sum)
        console.log(`It exited with code ${exitCode}`);
    })
   })()

const worker2 = new Worker('./worker/second_service.js');
    (()=>{
    worker2.once("message", result => {
        sum += result
        console.log(result)
    });
    console.log(process.pid);
    console.log(worker.threadId);
    worker2.on("error", error => {console.log(error);});
    worker2.on("exit", exitCode => {
        console.log(`It exited with code ${exitCode}`);
    })
   })()
   console.log(`ux => ${worker2.resourceLimits.maxOldGenerationSizeMb}`)