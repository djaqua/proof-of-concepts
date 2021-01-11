// shows basic polymorphism

import {User} from './User';
import {drew, UserAccount} from './UserAccount';


function greet(someone: User = drew): void {
    console.log(`Hello, ${someone.name}!`);
}

greet();
greet(new UserAccount('Skipper', 2));
