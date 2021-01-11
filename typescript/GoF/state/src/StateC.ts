import {State, SignalHandler,} from './State';
import {beta, StateB,} from './StateB';
import {alpha, StateA,} from './StateA';

class StateC {

  name: String;

  constructor() {
    this.name = 'Gamma';
  }

  foo() {
    return this;
  }     

  bar() {
    return beta;
  }

  baz() {
    return alpha;
  }
}

const gamma: State = new StateC();
export {gamma, StateC};

