import {
  observable,
  action,
  computed,
} from 'mobx';

class ClientSignupStore {
  @observable firstName = null;
  @observable lastName = null;
  @observable username = null;
  @observable password = null;
  @observable email = null;
  @observable category = null;
  @observable type = null;
  @observable projectName = null;
  @observable projectDescription = null;
  @observable contractType = null;
  @observable minBudget = null;
  @observable maxBudget = null;
  @observable startDate = null;
  @observable endDate = null;

  @action setFirstName(val) {
    const self = this;

    if (typeof val === 'string') {
      self.firstName = val;
    }
  }

  @action setLastName(val) {
    const self = this;

    if (typeof val === 'string') {
      self.lastName = val;
    }
  }

  @action setUsername(val) {
    const self = this;

    if (typeof val === 'string') {
      self.username = val;
    }
  }

  @action setPassword(val) {
    const self = this;

    if (typeof val === 'string') {
      self.password = val;
    }
  }

  @action setEmail(val) {
    const self = this;

    if (typeof val === 'string') {
      self.email = val;
    }
  }

  @action setCategory(val) {
    // TODO: This needs validation and selecting from a list of values.
    const self = this;

    if (typeof val === 'string') {
      self.category = val;
    }
  }

  @action setType(val) {
    // TODO: This needs validation and selecting from a list of values.
    const self = this;

    if (typeof val === 'string') {
      self.type = val;
    }
  }

  @action setProjectName(val) {
    const self = this;

    if (typeof val === 'string') {
      self.projectName = val;
    }
  }

  @action setProjectDescription(val) {
    const self = this;

    if (typeof val === 'string') {
      self.projectDescription = val;
    }
  }

  @action setContractType(val) {
    // TODO: This needs validation and selecting from a list of values.
    const self = this;

    if (typeof val === 'string') {
      self.contractType = val;
    }
  }

  @action setMinBudget(val) {
    const self = this;

    if (typeof val === 'number') {
      self.minBudget = val;
    }
  }

  @action setMaxBudget(val) {
    const self = this;

    if (typeof val === 'number') {
      self.maxBudget = val;
    }
  }

  @action setStartDate(val) {
    // TODO: How to handle date?
    const self = this;

    if (typeof val === 'string') {
      self.startDate = val;
    }
  }

  @action setEndDate(val) {
    // TODO: How to handle date?
    const self = this;

    if (typeof val === 'string') {
      self.endDate = val;
    }
  }

  @computed get queryBody() {

  }
}

const clientSignupStoreSingleton = new ClientSignupStore();
export default clientSignupStoreSingleton;