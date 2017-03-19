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
  @observable salaryType = 'fulltime';

  @observable COUNTRIES = [];
  @observable TITLES = [];
  @observable SKILLS = [];

  constructor() {
    const self = this;

    self.toggleSkills = self.toggleSkills.bind(self);
    self.setTitle = self.setTitle.bind(self);
    self.setCountry = self.setCountry.bind(self);
  }
  
  @action init() {
    console.log('Initialized FreelancerSignup');
  }
  
  @action hydrateCountries() {
    const self = this;

    API.retrieveCountries().then((response) => {
      const { countries } = response;

      if (countries) {
        self.COUNTRIES = countries;
        self.country = self.COUNTRIES[0].id;
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
        self.title = self.TITLES[0].id;
      }

      console.log('Successfully hydrated titles.');
    }).catch(err => console.log(err));
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

  @action setEmail(val) {
    const self = this;

    if (typeof val === 'string') {
      self.email = val;
    }
  }

  @action setCountry(val) {
    const self = this;
    const foundElement = self.COUNTRIES.find(element => element.id === val);

    if (foundElement !== undefined) {
      self.country = foundElement.id;
    }
  }

  @action setCity(val) {
    const self = this;

    if (typeof val === 'string') {
      self.city = val;
    }
  }

  @action setTitle(val) {
    const self = this;
    const foundElement = self.TITLES.find(element => element.id === val);

    if (foundElement !== undefined) {
      self.title = foundElement.id;
    }
  }

  @action toggleSkills(val) {
    const self = this;

    if (typeof val === typeof []) {
      self.skills.clear();
      val.forEach((skill) => {
        const existingSkill = self.SKILLS.find(s => String(s.id) === String(skill));

        if (existingSkill !== undefined) {
          self.skills.push(existingSkill.id);
        }
      });
    }
  }

  @action setHourlyRate(val) {
    const self = this;

    let valNumber;

    if (typeof val === 'string') {
      if (val === '') {
        valNumber = 0;
        self.hourly = valNumber;
      } else {
        valNumber = parseInt(val);

        if (typeof valNumber === 'number' && valNumber >= 0) {
          self.hourly = valNumber;
        }
      }
    }
  }

  @action setSalary(val) {
    const self = this;
    let valNumber;

    if (typeof val === 'string') {
      if (val === '') {
        valNumber = 0;
        self.salary = valNumber;
      } else {
        valNumber = parseInt(val);

        if (typeof valNumber === 'number' && valNumber >= 0) {
          self.salary = valNumber;
        }
      }
    }

    console.log(self.salary);
  }

  @action setSalaryType(val) {
    // TODO: Should we implement this?
  }

  @action setGithubUsername(val) {
    const self = this;

    if (typeof val === 'string') {
      self.github = val;
    }
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