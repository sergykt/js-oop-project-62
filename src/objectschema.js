class ObjectSchema {
  constructor(schema, customValidator) {
    this.schema = schema;
    this.customValidator = customValidator;
  }

  required() {
    this.schema = this.schema.required();
    return this;
  }

  shape(fields) {
    const entries = Object.entries(fields);
    const finalFields = entries
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value.schema }), {});

    this.schema = this.schema.shape(finalFields);
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

export default ObjectSchema;
