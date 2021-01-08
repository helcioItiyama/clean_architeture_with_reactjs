import React from 'react';
import { Login } from '@/presentation/pages';
import { makeRemoteAuthentication } from '@/main/factories/usecases/remote-authentication-factory';
import { makeLoginValidation } from './login-validaton-factory';

export const makeLogin: React.FC = () => (
  <Login
    validation={makeLoginValidation()}
    authentication={makeRemoteAuthentication()}
  />
);
