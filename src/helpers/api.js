import ClientSignupStore from '../stores/client_signup';
import FreelancerSignupStore from '../stores/freelancer_signup';

class ApiClient {
  constructor() {
    const self = this;

    self.BASE_URL = 'http://159.203.97.116:7000';

    self.registerAsClient = self.registerAsClient.bind(self);
    self.registerAsFreelancer = self.registerAsFreelancer.bind(self);
    self.retrieveSkillsForFreelancer = self.retrieveSkillsForFreelancer.bind(self);
    self.retrieveTitlesForFreelancer = self.retrieveTitlesForFreelancer.bind(self);
    self.retrieveCountries = self.retrieveCountries.bind(self);
  }

  registerAsClient() {
    const self = this;

    return new Promise((resolve, reject) => {
      fetch(`${self.BASE_URL}/register/client`, {
        method: 'POST',
        body: JSON.stringify({
          ...ClientSignupStore.requestBody,
        }),
      })
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.success) {
            resolve(responseJson);
          } else {
            reject(responseJson);
          }
        })
        .catch(err => reject(err));
    });
  }


  registerAsFreelancer() {
    const self = this;

    return new Promise((resolve, reject) => {
      fetch(`${self.BASE_URL}/register/freelancer`, {
        method: 'POST',
        body: JSON.stringify({
          ...FreelancerSignupStore.requestBody,
          username: 'testy_usernamey_freelancey',
          password: 'testpassword',
        }),
      })
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.success) {
            resolve(responseJson);
          } else {
            reject(responseJson);
          }
        })
        .catch(err => reject(err));
    });
  }

  retrieveSkillsForFreelancer() {
    const self = this;

    return new Promise((resolve, reject) => {
      fetch(`${self.BASE_URL}/skills`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          resolve(responseJson);
        })
        .catch(err => reject(err));
    });
  }

  retrieveTitlesForFreelancer() {
    const self = this;

    return new Promise((resolve, reject) => {
      fetch(`${self.BASE_URL}/titles`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          resolve(responseJson);
        })
        .catch(err => reject(err));
    });
  }

  retrieveCountries() {
    const self = this;

    return new Promise((resolve, reject) => {
      fetch(`${self.BASE_URL}/countries`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          resolve(responseJson);
        })
        .catch(err => reject(err));
    });
  }
}

const apiClientSingleton = new ApiClient();

export default apiClientSingleton;