import {
  observable,
  action,
  computed,
} from 'mobx';

import API from '../helpers/api';

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
  @observable salaryType = null;

  @observable COUNTRIES = [];
  @observable TITLES = [];
  @observable SKILLS = [];

  constructor() {
    const self = this;

    self.hydrateCountries();
    self.hydrateSkills();
    self.hydrateTitles();
  }

  @action hydrateCountries() {
    const self = this;

    API.retrieveCountries().then((response) => {
      const { countries } = response;

      if (countries) {
        self.COUNTRIES = countries;
      }

      console.log('Successfully hydrated countries.');
    }).catch(err => console.log(err));
  }

  @action hydrateSkills() {
    const self = this;

    API.retrieveSkillsForFreelancer().then((response) => {
      const { skills } = response;

      if (skills) {
        self.SKILLS = skills;
      }

      console.log('Successfully hydrated skills.');
    }).catch(err => console.log(err));
  }

  @action hydrateTitles() {
    const self = this;

    API.retrieveTitlesForFreelancer().then((response) => {
      const { titles } = response;

      if (titles) {
        self.TITLES = titles;
      }

      console.log('Successfully hydrated titles.');
    }).catch(err => console.log(err));
  }

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

  @action setSalaryType(val) {
    
  }

  @action setGithubUsername(val) {

  }

  @computed get requestBody() {
    const self = this;

    return {
      first_name: self.firstName,
      last_name: self.lastName,
      username: self.username,
      password: self.password,
      email: self.email,
      title: self.title,
      skills: self.skills,
      country: self.country,
      city: self.city,
      rate_per_hour: self.hourly,
      salary: self.salary,
      salary_type: self.salaryType,
      github: self.github,
    };
  }
}

const freelancerSignupStoreSingleton = new FreelancerSignupStore();
export default freelancerSignupStoreSingleton;