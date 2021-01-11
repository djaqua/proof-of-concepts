import {State,} from './State';
import {alpha,} from './StateA';


export class StateMachine {

  state: State;

  constructor() {
    this.state = alpha;
  }

  foo() {
    console.log(`initial state: '${this.state.name}'`);
    this.state = this.state.foo();
    console.log(`final state: '${this.state.name}'\n`);
  }


  bar() {
    console.log(`initial state: '${this.state.name}'`);
    this.state = this.state.bar();
    console.log(`final state: '${this.state.name}'\n`);
  }


  baz() {
    console.log(`initial state: '${this.state.name}'`);
    this.state = this.state.baz();
    console.log(`final state: '${this.state.name}'\n`);
  }

};


