/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import { AuthenticationParams } from '../usecases/authentication';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
