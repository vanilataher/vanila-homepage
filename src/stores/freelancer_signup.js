import {
  observable,
  action,
  computed,
} from 'mobx';

class FreelancerSignupStore {
  // TODO: Select default vals for city and title
  @observable username = null;
  @observable password = null;
  @observable firstName = null;
  @observable lastName = null;
  @observable email = null;
  @observable country = null;
  @observable city = null;
  @observable title = null;
  @observable skills = [];
  @observable hourly = null;
  @observable salary = null;
  @observable github = null;

  @action setUsername(val) {

  }

  @action setPassword(val) {

  }

  @action setFirstName(val) {

  }

  @action setLastName(val) {

  }

  @action setEmail(val) {

  }

  @action setCountry(val) {

  }

  @action setCity(val) {

  }

  @action setTitle(val) {

  }

  @action toggleSkills(val) {

  }

  @action setHourlyRate(val) {

  }

  @action setSalary(val) {

  }

  @action setGithubUsername(val) {
    
  }
}