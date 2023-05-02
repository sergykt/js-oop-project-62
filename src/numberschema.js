class NumberSchema {
  constructor(schema, customValidator) {
    this.schema = schema;
    this.customValidator = customValidator;
  }

  required() {
    this.schema = this.schema.required();
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

export default NumberSchema;
