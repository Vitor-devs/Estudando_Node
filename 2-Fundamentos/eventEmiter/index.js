const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on("start", ()=>{
    console.log("fui emitido!")
})

for(let i = 0; i<=10; i++){
    console.log(i)
}

eventEmitter.emit('start')