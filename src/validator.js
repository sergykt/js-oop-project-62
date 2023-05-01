import * as yup from 'yup';

class Validator {
  constructor() {
    this.schema = yup;
  }

  string() {
    this.schema = this.schema.string().notRequired();
    return this;
  }

  required() {
    this.schema = this.schema.required();
    return this;
  }

  minLength(length) {
    this.schema = this.schema.min(length);
    return this;
  }

  contains(value) {
    this.schema = this.schema.matches(value, `The string doesn't contain ${value}`);
    return this;
  }

  number() {
    this.schema = this.schema.number().notRequired();
    return this;
  }

  positive() {
    this.schema = this.schema.positive();
    return this;
  }

  range(from, to) {
    this.schema = this.schema.min(from).max(to);
    return this;
  }

  isValid(value) {
    return this.schema.isValidSync(value);
  }
}

export default Validator;
