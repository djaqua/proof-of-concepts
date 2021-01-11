import {State, SignalHandler,} from './State';
import {alpha, StateA,} from './StateA';
import {gamma, StateC,} from './StateC';

class StateB {

  name: String;

  constructor() {
    this.name = 'Beta';
  }

  foo() {
    return alpha;
  }     

  bar() {
    return gamma;
  }

  baz() {
    return this;
  }
}

const beta: State = new StateB();
export {beta, StateB};

