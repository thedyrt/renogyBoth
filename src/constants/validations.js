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
      is: 4,
    },
  },
};


export const successValidations = {
  ...phoneNumberValidations,
  phoneNumber: {
    numericality: {
      onlyInteger: true,
    },
  },
};
