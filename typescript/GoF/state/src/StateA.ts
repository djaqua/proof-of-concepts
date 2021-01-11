import {State, SignalHandler,} from './State';
import {beta, StateB,} from './StateB';


class StateA {

  name: String;

  constructor() {
    this.name = 'Alpha';
  }

  foo() {
    return beta;
  }     

  bar() {
    return this;
  }

  baz() {
    return this;
  }
}

const alpha: State = new StateA();
export {alpha, StateA};

