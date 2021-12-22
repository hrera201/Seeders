EventEmitter=require('events');
class Logger extends EventEmitter{
    customerUpdateEmit(){
        this.emit('customer_updated');
    }
}
