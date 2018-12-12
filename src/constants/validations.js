export const landingValidations = {
  email: {
    email: true,
    presence: {
      allowEmpty: false,
    },
  },
  acceptTerms: {
    presence: true,
  },
};

export const successValidations = {
  phone: {
    length: {
      is: 10,
    },
  },
};

export const phoneNumberValidations = {
  areaCode: {
    presence: true,
    length: {
      is: 3,
    },
  },
  prefix: {
    presence: true,
    length: {
      is: 3,
    },
  },
  lineNumber: {
    presence: true,
    length: {
      is: 3,
    },
  },
};
