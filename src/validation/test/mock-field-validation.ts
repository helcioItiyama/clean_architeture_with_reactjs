import { FieldValidation } from '@/validation/protocol/fields-validation';

export class FieldValidationSpy implements FieldValidation {
  error: Error = null;

  constructor(readonly field: string) {}

  validate(value: string): Error {
    return this.error;
  }
}
