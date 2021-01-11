
interface State {

    // data
    name: String,

    // behavior
    foo: SignalHandler,
    bar: SignalHandler,
    baz: SignalHandler,
}

interface SignalHandler {
    (): State,
}

export {State, SignalHandler};
    
