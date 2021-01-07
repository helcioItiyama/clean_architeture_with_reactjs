import { InvalidFieldError } from '@/validation/errors';
import faker from 'faker';
import { MinLengthValidation } from './min-length-validation';

const makeSut = ():MinLengthValidation => new MinLengthValidation(faker.database.column(), 5);

describe('MinLengthValidation', () => {
  it('should return if value is invalid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(4));
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return falsy if value is valid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(5));
    expect(error).toBeFalsy();
  });
});
