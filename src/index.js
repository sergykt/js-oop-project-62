import * as yup from 'yup';

class Validator {
  constructor() {
    this.schema = yup;
  }

  string() {
    const newSchema = new Validator();
    newSchema.schema = this.schema.string().notRequired();
    newSchema.type = 'string';
    return newSchema;
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
    const newSchema = new Validator();
    newSchema.schema = this.schema.number().notRequired();
    newSchema.type = 'number';
    return newSchema;
  }

  positive() {
    this.schema = this.schema.positive();
    return this;
  }

  range(from, to) {
    this.schema = this.schema.min(from).max(to);
    return this;
  }

  array() {
    const newSchema = new Validator();
    newSchema.schema = this.schema.array().of(yup.mixed()).notRequired();
    newSchema.type = 'number';
    return newSchema;
  }

  sizeof(length) {
    this.schema = this.schema.length(length);
    return this;
  }

  object() {
    const newSchema = new Validator();
    newSchema.schema = this.schema.object();
    newSchema.type = 'object';
    return newSchema;
  }

  isValid(value) {
    return this.schema.isValidSync(value);
  }
}

export default Validator;
