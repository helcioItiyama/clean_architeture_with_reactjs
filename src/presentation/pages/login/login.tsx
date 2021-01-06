import React, { useEffect, useState } from 'react';
import {
  LoginHeader, Footer, FormStatus, Input,
} from '@/presentation/components';
import Context from '@/presentation/context/form/form-context';
import { Validation } from '@/presentation/protocols/validation';
import Styles from './login-styles.scss';

type Props = {
  validation: Validation;
};

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    mainError: '',
    emailError: 'Campo Obrigatório',
    passwordError: 'Campo Obrigatório',
  });

  useEffect(() => {
    validation.validate({
      email: state.email,
    });
  }, [state.email]);

  useEffect(() => {
    validation.validate({
      password: state.password,
    });
  }, [state.password]);

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
