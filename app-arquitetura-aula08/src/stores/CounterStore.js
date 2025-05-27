import AppDispatcher from "../dispatcher/AppDispatcher";
import EventEmitter from "../utils/EventEmitter";

let count = 0;

const emitter = new EventEmitter();

const CounterStore = {
    getCount() {
        return count
    },

    emitChange(){
        emitter.emit('change');
    },

    addChangeLister(callback) {
        emitter.on('change', callback);
    },

    removeChangeListener(callback) {
        emitter.removeListener('change', callback);
    }
};

AppDispatcher.register((action) => {
    switch(action.actionType){
        case 'INCREMENT':
            count++;
            CounterStore.emitChange();
            break;
        case 'DECREMENT':
            count--;
            CounterStore.emitChange();
            break;
    }
})

export default CounterStore;