const {
    isMainThread,
    setEnvironmentData,
    getEnvironmentData} = require('worker_threads');

setEnvironmentData("auth",{user:{username:"elieoko"}})
const numCPUs = require('node:os').availableParallelism();
if (!isMainThread) {
   console.log("Inside worker")
} 
const dataShared = getEnvironmentData('auth')
console.log(dataShared);
console.log(numCPUs);
