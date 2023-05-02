class ArraySchema {
  constructor(schema, customValidator) {
    this.schema = schema;
    this.customValidator = customValidator;
  }

  required() {
    this.schema = this.schema.required();
    return this;
  }

  sizeof(length) {
    this.schema = this.schema.length(length);
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

export default ArraySchema;
