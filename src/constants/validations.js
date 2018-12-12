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
      is: 10
      // message: 'must be at least 8 characters',
    },
  },
};