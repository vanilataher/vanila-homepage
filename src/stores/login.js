import cookie from 'react-cookie';

import {
  observable,
  action,
  computed,
} from 'mobx';

class LoginStore {
  @observable username = null;
  @observable password = null;

  constructor() {
    const self = this;

    self.setUsername = self.setUsername.bind(self);
    self.setPassword = self.setPassword.bind(self);

    self.username = self.nullOrString(cookie.load('vanila_username'));
    self.password = self.nullOrString(cookie.load('vanila_password'));
  }

  nullOrString(val) {
    if (typeof val === 'string') {
      return val;
    } else {
      return null;
    }
  }

  @action setUsername(val) {
    const self = this;

    if (typeof val === 'string') {
      self.username = val;
      cookie.save('vanila_username', self.username, { path: '/' });
    }
  }

  @action setPassword(val) {
    const self = this;

    if (typeof val === 'string') {
      self.password = val;
      cookie.save('vanila_password', self.password, { path: '/' });
    }
  }
}

const loginStoreSingleton = new LoginStore();
export default loginStoreSingleton;