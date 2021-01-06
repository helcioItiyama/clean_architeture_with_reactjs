import React, { useContext } from 'react';
import Context from '@/presentation/context/form/form-context';
import Styles from './input-styles.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context);
  const error = errorState[props.name];

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const getStatus = ():string => '🔴';

  const getError = (): string => error;

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getError()} className={Styles.status} role="img" aria-label="red ball">{getStatus()}</span>
    </div>
  );
};

export default Input;
