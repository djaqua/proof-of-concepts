import {User} from './User';

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const drew: User = new UserAccount("Drew", 1);

export {drew, UserAccount};
