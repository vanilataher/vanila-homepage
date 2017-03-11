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
  @observable salaryType = null;

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
    /*
      "first_name": "Tony",
      "last_name": "Stark",
      "username": "oldbastard",
      "password": "oldiesbutgoldies",
      "email": "vietkong@darpa.mil",
      "title": "backend-dev",
      "skills": ["react-native", "javascript", "node"],
      "country": "japan",
      "city": "nagasaki",
      "rate_per_hour": 20,
      "salary": 2000,
      "salary_type": "full-time",
      "github": "htkibar"
    */
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