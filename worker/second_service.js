const {parentPort, workerData} = require("worker_threads");

parentPort.postMessage(runWhileLoop())

function runWhileLoop() {
    let n = 1000000000;
    let fac = 1;
    for (let i = 1; i <= n; i++) {
      fac = i;
    }
    return fac;
}