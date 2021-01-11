//import {State,} from './State';
//import {alpha, StateA} from './StateA';

//console.log(alpha.foo());

import {StateMachine,} from './StateMachine';

const sm: StateMachine = new StateMachine();

sm.bar();   // stay in state A
sm.foo();   // transition to state B
sm.baz();   // stay in state B
sm.bar();   // transition to state C
sm.foo();   // stay in state C

sm.baz();   // transition to state A
sm.foo();   // transition to state B
sm.bar();   // transition to state C
sm.bar();   //transition back to state B
sm.foo();   // transition back to state A




