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

  @observable CATEGORIES = {
    WEB_MOBILE_APP: 'webdev',
    BRANDING_DESIGN: 'design',
    MARKETING: 'marketing',
  };

  @observable TYPES = {
    WEB_MOBILE_APP: [
      {
        id: 'website',
        title: 'Website / Web App',
        description: 'Build a personal or company website, blog, online store, or social community app, game, etc.',
        icon: require('../../public/img/clientsAssets/listIcon.png'),
      },
      {
        id: 'mobile',
        title: 'Mobile App',
        description: 'Android & IOS mobile apps. You have idea for next mobile app, let us hear about it.',
        icon: require('../../public/img/clientsAssets/mobileIcon.png'),
      },
    ],
    BRANDING_DESIGN: [
      {
        id: 'ui-ux',
        title: 'UI / UX',
        description: 'UI/ UX DESCRIPTION',
      },
      {
        id: 'logo',
        title: 'Logo',
        description: 'LOGO DESCRIPTION',
      },
      {
        id: 'illustration',
        title: 'Illustration',
        description: 'ILLUSTRATION DESCRIPTION',
      },
    ],
    MARKETING: [
      {
        id: 'seo',
        title: 'SEO',
        description: 'SEO DESCRIPTION',
      },
      {
        id: 'social-growth',
        title: 'Social Growth',
        description: 'SOCIAL GROWTH DESCRIPTION',
      },
      {
        id: 'content',
        title: 'Content',
        description: 'CONTENT DESCRIPTION',
      },
    ],
  };

  constructor() {
    const self = this;

    self.setFirstName = self.setFirstName.bind(self);
    self.setLastName = self.setLastName.bind(self);
    self.setUsername = self.setUsername.bind(self);
    self.setPassword = self.setPassword.bind(self);
    self.setEmail = self.setEmail.bind(self);
    self.setCategory = self.setCategory.bind(self);
    self.setType = self.setType.bind(self);
    self.setProjectName = self.setProjectName.bind(self);
    self.setProjectDescription = self.setProjectDescription.bind(self);
    self.setContractType = self.setContractType.bind(self);
    self.setMinBudget = self.setMinBudget.bind(self);
    self.setMaxBudget = self.setMaxBudget.bind(self);
    self.setStartDate = self.setStartDate.bind(self);
    self.setEndDate = self.setEndDate.bind(self);
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
      switch (val) {
        case self.CATEGORIES.WEB_MOBILE_APP:
        case self.CATEGORIES.BRANDING_DESIGN:
        case self.CATEGORIES.MARKETING:
          self.category = val;
        default:
          break;
      }
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

  @computed get subcategories() {
    const self = this;

    switch (self.category) {
      case self.CATEGORIES.WEB_MOBILE_APP:
        return self.TYPES.WEB_MOBILE_APP;
      case self.CATEGORIES.BRANDING_DESIGN:
        return self.TYPES.BRANDING_DESIGN;
      case self.CATEGORIES.MARKETING:
        return self.TYPES.MARKETING;
      default:
        return [];
    }
  }

  @computed get requestBody() {
    const self = this;

    const budgetRange = {
      min: self.minBudget,
      max: self.maxBudget,
    };

    const dateRange = {
      start: self.startDate,
      end: self.endDate,
    };

    return {
      first_name: self.firstName,
      last_name: self.lastName,
      username: self.username,
      password: self.password,
      email: self.email,
      category: self.category,
      type: self.type,
      project_name: self.projectName,
      project_description: self.projectDescription,
      contract_type: self.contractType,
      budget_range: budgetRange,
      date_range: dateRange,
    };
  }
}

const clientSignupStoreSingleton = new ClientSignupStore();
export default clientSignupStoreSingleton;