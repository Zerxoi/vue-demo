type EventBusClass<T> = {
    emit: (name: T) => void
    on: (name: T, callback: Function) => void
}

type EventKey = string | number | symbol

type EventMap = {
    [key: EventKey]: Array<Function>
}

class EventBus<T extends EventKey> implements EventBusClass<T> {
    private map: EventMap

    constructor() {
        this.map = {}
    }

    emit(name: T, ...args: Array<any>) {
        let callbacks: Array<Function> = this.map[name]
        callbacks.forEach(cb => {
            cb.apply(this, args)
        })
    }

    on(name: T, callback: Function) {
        let callbacks: Array<Function> = this.map[name] || [];
        callbacks.push(callback)
        this.map[name] = callbacks
    }
}

export default new EventBus<EventKey>()