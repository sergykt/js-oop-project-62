class StringSchema {
  constructor(schema, customValidator) {
    this.schema = schema;
    this.customValidator = customValidator;
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

  isValid(value) {
    return this.schema.isValidSync(value);
  }

  test(name, fnValue) {
    const fn = this.customValidator[name];
    const newFn = (value) => fn(value, fnValue);

    this.schema = this.schema.test(
      name,
      'Custom Validator does not match',
      newFn,
    );
    return this;
  }
}

export default StringSchema;
