/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import { Validation } from '@/presentation/protocols/validation';
import { FieldValidation } from '@/validation/protocol/fields-validation';

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators);
  }

  validate(fieldName: string, fieldValue: string):string {
    const validators = this.validators.filter((val) => val.field === fieldName);
    for (const validator of validators) {
      const error = validator.validate(fieldValue);
      if (error) {
        return error.message;
      }
    }
  }
}
