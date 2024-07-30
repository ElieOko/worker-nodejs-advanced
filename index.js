const {
    isMainThread,
    setEnvironmentData,
    getEnvironmentData} = require('worker_threads');

setEnvironmentData("auth",{user:{username:"elieoko"}})
if (!isMainThread) {
   console.log("Inside worker")
} 
const dataShared = getEnvironmentData('auth')
console.log(dataShared);
