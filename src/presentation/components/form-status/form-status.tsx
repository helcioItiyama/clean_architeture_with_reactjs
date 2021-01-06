import React, { useContext } from 'react';
import Spinner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/context/form/form-context';
import Styles from './form-status-styles.scss';

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context);
  const { isLoading } = state;
  const { main } = errorState;

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {main && <span className={Styles.error}>{main}</span>}
    </div>
  );
};

export default FormStatus;
