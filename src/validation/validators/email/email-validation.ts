/* eslint-disable no-control-regex */
import { InvalidFieldError } from '@/validation/errors';
import { FieldValidation } from '@/validation/protocol/fields-validation';

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    const emailRegexep = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return (!value || emailRegexep.test(value)) ? null : new InvalidFieldError();
  }
}
