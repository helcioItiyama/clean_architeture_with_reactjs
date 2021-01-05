/* eslint-disable import/prefer-default-export */
export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credentiais inválidas');
    this.name = 'InvalidCredentialsError';
  }
}
