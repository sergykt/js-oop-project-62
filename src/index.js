import * as yup from 'yup';
import StringSchema from './stringschema.js';
import NumberSchema from './numberschema.js';
import ArraySchema from './arrayschema.js';
import ObjectSchema from './objectschema.js';

class Validator {
  constructor() {
    this.validator = yup;
    this.customValidator = {
      string: {},
      number: {},
      array: {},
      object: {},
    };
  }

  string() {
    return new StringSchema(this.validator.string().notRequired(), this.customValidator.string);
  }

  number() {
    return new NumberSchema(this.validator.number().notRequired(), this.customValidator.number);
  }

  array() {
    return new
    ArraySchema(this.validator.array().of(yup.mixed()).notRequired(), this.customValidator.array);
  }

  object() {
    return new ObjectSchema(this.validator.object().notRequired(), this.customValidator.object);
  }

  addValidator(type, name, fn) {
    this.customValidator[type][name] = fn;
  }
}

export default Validator;
