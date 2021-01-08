

const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.contains('social work school', data.category)){
      errors.category = 'Category field is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

