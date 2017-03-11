import ClientSignupStore from '../stores/client_signup';

class ApiClient {
  constructor() {
    const self = this;

    self.BASE_URL = 'http://159.203.97.116:7000';

    self.registerAsClient = self.registerAsClient.bind(self);
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
}

const apiClientSingleton = new ApiClient();

export default apiClientSingleton;