const {MessageChannel,isMainThread,receiveMessageOnPort} = require('worker_threads');
const {port1, port2} = new MessageChannel();
port1.postMessage({
    user:{
        id:1,
        isActive:
        true,
        username:"enzo"
    }
});
const dataTransfert = receiveMessageOnPort(port2);
if(isMainThread){
    console.log(dataTransfert.message);
    port1.on('message', (message) => console.log('received', message));
    port2.postMessage({ foo: 'bar' });
    port1.on('close',()=> console.log("close port channel"));
    port2.close();
}