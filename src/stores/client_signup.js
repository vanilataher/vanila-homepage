import {
  observable,
  action,
  computed,
} from 'mobx';

class ClientSignupStore {
  @observable first_name = null;
  @observable last_name = null;
  @observable username = null;
  @observable password = null;
  @observable email = null;
  @observable category = null;
  @observable type = null;
  @observable project_name = null;
  @observable project_description = null;
  @observable contract_type = null;
  @observable min_budget = null;
  @observable max_budget = null;
  @observable start_date = null;
  @observable end_date = null;

  @action setFirstName(val) {

  }

  @action setLastName(val) {

  }

  @action setUsername(val) {

  }

  @action setPassword(val) {

  }

  @action setEmail(val) {

  }

  @action setCategory(val) {

  }

  @action setType(val) {

  }

  @action setProjectName(val) {

  }

  @action setProjectDescription(val) {

  }

  @action setContractType(val) {

  }

  @action setMinBudget(val) {

  }

  @action setMaxBudget(val) {

  }

  @action setStartDate(val) {

  }

  @action setEndDate(val) {

  }

  @computed get queryBody() {
    
  }
}

const clientSignupStoreSingleton = new ClientSignupStore();
export default clientSignupStoreSingleton;